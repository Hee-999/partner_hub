import { Metadata } from "next";
import { notFound } from "next/navigation";
import PricingSection, {
  PARTNER_CATEGORIES,
} from "@/components/ui/pricing-section";

export function generateStaticParams() {
  return Object.keys(PARTNER_CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const data = PARTNER_CATEGORIES[category];
  if (!data) {
    return { title: "생활·비즈니스 공식 견적비교 센터" };
  }
  return {
    title: `${data.titlePrefix}${data.titleHighlight} | 공식 견적비교 센터`,
    description: data.subtitle,
  };
}

export default async function PartnerCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!PARTNER_CATEGORIES[category]) {
    notFound();
  }

  return <PricingSection categorySlug={category} showCategoryNav={true} />;
}
