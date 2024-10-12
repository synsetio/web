# Synsetic Website

This is the official website for Synsetic, built with [Next.js](https://nextjs.org).

## About Synsetic

Synsetic is a cutting-edge startup that's disrupting the global business landscape. We're on a mission to democratize advanced technologies, making them accessible to innovators and entrepreneurs everywhere. Our game-changing platform leverages the trifecta of Artificial Intelligence, Blockchain, and Self-Sovereign Identity to empower the next generation of world-changing ideas. Join us as we redefine what's possible in the startup ecosystem!

## Getting Started

To run the development server:

1. Clone the repository:

   ```bash
   git clone https://github.com/synsetic/web.git synsetic-website
   cd synsetic-website
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the necessary environment variables:

   ```
   RECIPIENT_EMAIL=your-email@example.com
   MAILCHIMP_TRANSACTIONAL_API_KEY=your-mailchimp-api-key
   ```

4. Run the development server:

   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
