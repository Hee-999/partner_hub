"use client";
import { useState } from "react";
import PricingSection, {
  PARTNER_CATEGORIES,
} from "@/components/ui/pricing-section";
import { Award, Building2, Truck, Car, Droplets } from "lucide-react";

const CATEGORY_TABS = [
  { id: "moving", label: "포장이사·입주청소 (5곳)", icon: Truck },
  { id: "biz", label: "자영업 정책자금·철거 (3곳)", icon: Building2 },
  { id: "car", label: "장기렌트·리스·중고차 (4곳)", icon: Car },
  { id: "living", label: "코웨이 정수기·가전 렌탈 (2곳)", icon: Droplets },
];

export default function PartnerHubHome() {
  const [activeCategory, setActiveCategory] = useState<string>("moving");

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Top Category Switcher Header */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-4 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-extrabold text-gray-900 text-base">
            <span className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white grid place-content-center shadow-sm">
              <Award size={18} />
            </span>
            <span>생활·비즈니스 공식 견적비교 센터</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {CATEGORY_TABS.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-neutral-100 text-gray-600 hover:bg-neutral-200 hover:text-gray-900"
                  }`}
                >
                  <Icon size={15} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Render 21st.dev PricingSection for Selected Category */}
      <PricingSection
        key={activeCategory}
        categorySlug={
          PARTNER_CATEGORIES[activeCategory] ? activeCategory : "moving"
        }
        showCategoryNav={false}
      />
    </div>
  );
}
