export interface Position {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  benefits: string[];
}

export const positions: Position[] = [
  {
    id: "senior-ai-ml-engineer",
    title: "Senior AI/ML Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Paris / Remote",
    description:
      "Design and deploy autonomous agent systems for enterprise clients.",
    about:
      "We're building the next generation of autonomous enterprise infrastructure. As a Senior AI/ML Engineer, you'll architect and deploy intelligent agent systems that operate continuously for Fortune 500 clients. You'll work at the intersection of cutting-edge AI research and production-grade systems.",
    responsibilities: [
      "Design and implement autonomous agent architectures for complex enterprise workflows",
      "Develop and optimize LLM-based systems for production environments",
      "Build evaluation frameworks to ensure agent reliability and performance",
      "Collaborate with clients to understand requirements and translate them into technical solutions",
      "Mentor junior engineers and contribute to engineering best practices",
    ],
    requirements: [
      "5+ years of experience in ML/AI engineering or related field",
      "Deep understanding of LLMs, transformers, and modern NLP techniques",
      "Production experience with Python, PyTorch or TensorFlow",
      "Experience deploying ML systems at scale",
      "Strong software engineering fundamentals",
    ],
    niceToHave: [
      "Experience with agent frameworks (LangChain, AutoGPT, CrewAI)",
      "Background in reinforcement learning or multi-agent systems",
      "Contributions to open-source AI projects",
      "Experience with blockchain/Web3 technologies",
    ],
    benefits: [
      "Competitive equity package",
      "Flexible remote-first culture",
      "Learning & development budget",
      "Health insurance coverage",
      "Annual team retreats",
    ],
  },
  {
    id: "blockchain-protocol-engineer",
    title: "Blockchain Protocol Engineer",
    department: "Engineering",
    type: "Full-time",
    location: "Paris / Remote",
    description: "Build on-chain identity and verification systems on Solana.",
    about:
      "We're creating the identity layer for autonomous agents on Solana. As a Blockchain Protocol Engineer, you'll design and implement the cryptographic primitives and smart contracts that enable verifiable agent identity, ownership, and transactions in the agentic economy.",
    responsibilities: [
      "Design and implement Solana programs using Anchor framework",
      "Build on-chain identity and verification systems for AI agents",
      "Develop secure token economics and protocol mechanics",
      "Conduct security audits and implement best practices",
      "Contribute to protocol documentation and developer tooling",
    ],
    requirements: [
      "3+ years of blockchain development experience",
      "Proficiency in Rust and Solana/Anchor development",
      "Strong understanding of cryptographic primitives and security",
      "Experience with DeFi protocols or NFT standards",
      "Ability to write clear technical documentation",
    ],
    niceToHave: [
      "Experience with Metaplex Token Metadata standard",
      "Background in formal verification or smart contract auditing",
      "Contributions to Solana ecosystem projects",
      "Understanding of AI/ML systems",
    ],
    benefits: [
      "Competitive equity package",
      "Flexible remote-first culture",
      "Learning & development budget",
      "Health insurance coverage",
      "Annual team retreats",
    ],
  },
  {
    id: "full-stack-developer",
    title: "Full-Stack Developer",
    department: "Engineering",
    type: "Full-time",
    location: "Paris / Remote",
    description:
      "Create seamless interfaces bridging enterprise systems with AI agents.",
    about:
      "We're building the control plane for autonomous enterprise operations. As a Full-Stack Developer, you'll create the interfaces and APIs that allow enterprises to deploy, monitor, and manage their AI agent workforce. You'll work across the stack to deliver exceptional user experiences.",
    responsibilities: [
      "Build responsive web applications using React/Next.js and TypeScript",
      "Design and implement RESTful and GraphQL APIs",
      "Develop real-time dashboards for agent monitoring and analytics",
      "Integrate with enterprise systems and third-party services",
      "Optimize application performance and user experience",
    ],
    requirements: [
      "4+ years of full-stack development experience",
      "Expert-level TypeScript and React/Next.js skills",
      "Experience with Node.js and database systems (PostgreSQL, Redis)",
      "Understanding of modern authentication and authorization patterns",
      "Strong eye for UI/UX design",
    ],
    niceToHave: [
      "Experience with real-time systems (WebSockets, SSE)",
      "Background in enterprise software or B2B products",
      "Familiarity with AI/ML concepts and APIs",
      "Experience with Solana web3.js or similar blockchain SDKs",
    ],
    benefits: [
      "Competitive equity package",
      "Flexible remote-first culture",
      "Learning & development budget",
      "Health insurance coverage",
      "Annual team retreats",
    ],
  },
];

export function getPositionById(id: string): Position | undefined {
  return positions.find((p) => p.id === id);
}
