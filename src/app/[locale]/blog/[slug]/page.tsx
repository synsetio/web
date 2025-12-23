import type { Metadata } from "next";
import { content } from "../../../data/home-page";
import ArticleClient from "./ArticleClient";
import { getTranslations } from "next-intl/server";

const BASE_URL = "https://synsetio.com";

type Props = {
  params: { slug: string; locale: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { resources } = content.features;
  const article = resources.find((r) => r.id === params.slug);
  const t = await getTranslations({
    locale: params.locale,
    namespace: "HomePage.blog.posts",
  });

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const articleUrl = `${BASE_URL}/${params.locale}/blog/${params.slug}`;
  const imageUrl = article.imagePath.startsWith("http")
    ? article.imagePath
    : `${BASE_URL}${article.imagePath}`;

  const title = t(`${article.id}.title`);
  const description = t(`${article.id}.description`);

  return {
    title: title,
    description: description,
    openGraph: {
      type: "article",
      url: articleUrl,
      title: title,
      description: description,
      siteName: "Synsetio",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: params.locale === "fr" ? "fr_FR" : "en_US",
      publishedTime: new Date().toISOString(),
      authors: ["Synsetio"],
    },
    twitter: {
      card: "summary_large_image",
      site: "@synsetio",
      creator: "@synsetio",
      title: title,
      description: description,
      images: [imageUrl],
    },
    alternates: {
      canonical: articleUrl,
    },
  };
}

export async function generateStaticParams() {
  const { resources } = content.features;
  return resources.map((resource) => ({
    slug: resource.id,
  }));
}

export default function ArticlePage({ params }: Props) {
  return <ArticleClient slug={params.slug} locale={params.locale} />;
}
