import { Metadata } from "next";
import PricingSection from "@/components/ui/pricing-section";

export const metadata: Metadata = {
  title: "우리 집 평수에 딱 맞는 포장이사 & 입주청소 | 공식 견적비교 센터",
  description:
    "전국 검증된 포장이사 3곳 & 입주청소 2곳 무료 비교견적으로 최소 20~30만 원 아끼세요.",
};

export default function MovingPartnerPage() {
  return <PricingSection categorySlug="moving" />;
}
