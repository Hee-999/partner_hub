import { Metadata } from "next";
import PricingSection from "@/components/ui/pricing-section";

export const metadata: Metadata = {
  title: "초기비용 0원 장기렌트·리스 & 중고차 | 공식 견적비교 센터",
  description:
    "캐피탈사별 숨겨진 프로모션 특가와 즉시출고 재고, 허위매물 없는 인증 중고차 시세를 투명하게 비교하세요.",
};

export default function CarPartnerPage() {
  return <PricingSection categorySlug="car" />;
}
