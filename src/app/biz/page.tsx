import { Metadata } from "next";
import PricingSection from "@/components/ui/pricing-section";

export const metadata: Metadata = {
  title: "사장님을 위한 맞춤 정책자금 & 철거 견적 | 공식 견적비교 센터",
  description:
    "정부 정책자금 한도 조회부터 폐업·인테리어 원상복구 철거 최저가 비교까지 한눈에 확인하세요.",
};

export default function BizPartnerPage() {
  return <PricingSection categorySlug="biz" />;
}
