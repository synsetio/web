import { NextResponse } from "next/server";
import mailchimp, {
  MessagesSendRequest,
} from "@mailchimp/mailchimp_transactional";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const position = formData.get("position") as string;
  const message = formData.get("message") as string;
  const resume = formData.get("resume") as File | null;

  const client = mailchimp(process.env.MAILCHIMP_TRANSACTIONAL_API_KEY!);

  try {
    const attachments: { type: string; name: string; content: string }[] = [];

    if (resume) {
      const bytes = await resume.arrayBuffer();
      const base64 = Buffer.from(bytes).toString("base64");
      attachments.push({
        type: resume.type,
        name: resume.name,
        content: base64,
      });
    }

    const msg = {
      message: {
        from_email: "no-reply@synsetio.com",
        subject: `Job Application: ${position}`,
        text: `Position: ${position}\n\nName: ${name}\nEmail: ${email}\n\nCover Letter:\n${message}`,
        to: [
          {
            email: process.env.RECIPIENT_EMAIL,
            type: "to",
          },
        ],
        attachments: attachments.length > 0 ? attachments : undefined,
      },
    };

    const result = await client.messages.send(msg as MessagesSendRequest);

    if (Array.isArray(result) && result.length > 0) {
      console.log("Application sent: %s", result[0]._id);
    }

    return NextResponse.json(
      { message: "Application sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending application:", error);
    return NextResponse.json(
      { message: "Failed to send application" },
      { status: 500 },
    );
  }
}
