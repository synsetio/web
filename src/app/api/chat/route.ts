import { openai } from "@ai-sdk/openai";
import { streamText, CoreMessage } from "ai";
import knowledgeBase from "@/messages/en.json";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Construct context from knowledge base
  const blogPosts = knowledgeBase.HomePage.blog.posts;
  const mission = knowledgeBase.HomePage.mission;
  const services = knowledgeBase.HomePage.services;

  let contextString = "KNOWLEDGE BASE:\n\n";

  // Add Mission
  contextString += `MISSION: ${mission.p1} ${mission.p2} ${mission.p3}\n\n`;

  // Add Services
  contextString += "SERVICES:\n";
  Object.values(services.offerings).forEach((offering: any) => {
    contextString += `- ${offering.title}: ${offering.description}\n`;
  });
  contextString += "\n";

  // Add Blog Posts/Articles
  contextString += "ARTICLES:\n";
  Object.values(blogPosts).forEach((post: any) => {
    contextString += `TITLE: ${post.title}\nDESCRIPTION: ${post.description}\nCONTENT:\n${post.content}\n\n`;
  });

  const systemPrompt = `You are SIO, the advanced AI assistant for Synsetio.
Your role is to assist visitors with information about Synsetio's autonomous AI workforce solutions.
You embody the "Avant-Garde" aesthetic: professional, precise, slightly futuristic, and highly intelligent.

TONE & STYLE:
- Concise and high-density information.
- Professional but cutting-edge.
- Use technical terminology where appropriate but explain if necessary.
- Do not be overly chatty or enthusiastic. Be efficient.

CONTEXT:
${contextString}

INSTRUCTIONS:
- Use the provided context to answer questions.
- If the answer is not in the context, politely state that you are focused on Synsetio's architecture and services, but can arrange a consultation.
- Encourage users to "Request a Demo" or "Schedule a Consultation" if they show high interest.
`;

  const result = streamText({
    model: openai("gpt-4o"),
    system: systemPrompt,
    messages: messages as CoreMessage[],
  });

  return result.toDataStreamResponse();
}
