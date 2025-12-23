import { NextResponse } from "next/server";
import mailchimp, {
  MessagesSendRequest,
} from "@mailchimp/mailchimp_transactional";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, message } = body;

  console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

  // Configure Mailchimp Transactional
  const client = mailchimp(process.env.MAILCHIMP_TRANSACTIONAL_API_KEY!);

  try {
    // Prepare the message
    const msg = {
      message: {
        from_email: "no-reply@synsetio.com",
        subject: "New Contact Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        to: [
          {
            email: process.env.RECIPIENT_EMAIL,
            type: "to",
          },
        ],
      },
    };

    // Send the email
    const result = await client.messages.send(msg as MessagesSendRequest);
    console.log(`Result: ${JSON.stringify(result)}`);

    if (Array.isArray(result) && result.length > 0) {
      console.log("Message sent: %s", result[0]._id);
    } else {
      console.log("Message sent, but no ID available");
    }
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 },
    );
  }
}
