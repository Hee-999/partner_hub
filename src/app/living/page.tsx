import { Metadata } from "next";
import PricingSection from "@/components/ui/pricing-section";

export const metadata: Metadata = {
  title: "우리 집 필수 가전 코웨이 렌탈 혜택 비교 | 공식 견적비교 센터",
  description:
    "아이콘 정수기2·얼음정수기·노블 공기청정기·비데까지! 본사 직영 반값 할인과 특판 최대 사은품 조건을 한눈에 비교하세요.",
};

export default function LivingPartnerPage() {
  return <PricingSection categorySlug="living" />;
}
