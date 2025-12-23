import type { Metadata } from "next";
import { positions, getPositionById } from "../../../data/positions";
import PositionClient from "./PositionClient";

const BASE_URL = "https://synsetio.com";

type Props = {
  params: { slug: string; locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const position = getPositionById(params.slug);

  if (!position) {
    return { title: "Position Not Found" };
  }

  const url = `${BASE_URL}/${params.locale}/careers/${params.slug}`;

  return {
    title: `${position.title} | Careers at Synsetio`,
    description: position.about,
    openGraph: {
      type: "website",
      url,
      title: `${position.title} | Careers at Synsetio`,
      description: position.about,
      siteName: "Synsetio",
    },
    twitter: {
      card: "summary",
      site: "@synsetio",
      title: `${position.title} | Careers at Synsetio`,
      description: position.about,
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  return positions.map((position) => ({
    slug: position.id,
  }));
}

export default function PositionPage({ params }: Props) {
  return <PositionClient slug={params.slug} locale={params.locale} />;
}
