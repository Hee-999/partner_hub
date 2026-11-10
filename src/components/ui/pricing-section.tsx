"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { PARTNER_CATEGORIES } from "@/lib/partner-data";
import {
  Briefcase,
  CheckCheck,
  ShieldCheck,
  Sparkles,
  Clock,
  Award,
  ArrowUpRight,
  Building2,
  Truck,
  Car,
  Droplets,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

function renderFeatureIcon(type: "briefcase" | "shield" | "clock") {
  switch (type) {
    case "briefcase":
      return <Briefcase size={18} className="text-blue-600" />;
    case "shield":
      return <ShieldCheck size={18} className="text-blue-600" />;
    case "clock":
      return <Clock size={18} className="text-blue-600" />;
  }
}

const NAV_ITEMS = [
  { slug: "moving", label: "포장이사·입주청소 (5곳)", icon: Truck },
  { slug: "biz", label: "자영업 정책자금·철거 (3곳)", icon: Building2 },
  { slug: "car", label: "장기렌트·리스·중고차 (4곳)", icon: Car },
  { slug: "living", label: "코웨이 정수기·가전 렌탈 (2곳)", icon: Droplets },
];

export function PricingSwitch({
  tabs,
  selected,
  onSwitch,
}: {
  tabs: { id: string; label: string; badge?: string }[];
  selected: string;
  onSwitch: (value: string) => void;
}) {
  return (
    <div className="flex justify-center px-2">
      <div className="relative z-20 mx-auto flex flex-wrap justify-center gap-1 rounded-full bg-neutral-50 border border-gray-200 p-1.5 shadow-sm">
        {tabs.map((tab) => {
          const isActive = selected === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSwitch(tab.id)}
              className={`relative z-10 w-fit sm:h-11 h-10 rounded-full sm:px-6 px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "text-white shadow-md shadow-blue-500/30 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <span className="relative flex items-center gap-1.5">
                {tab.label}
                {tab.badge && (
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${
                      isActive
                        ? "bg-white text-blue-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PricingSection({
  categorySlug = "moving",
}: {
  categorySlug?: string;
}) {
  const config =
    PARTNER_CATEGORIES[categorySlug] || PARTNER_CATEGORIES["moving"];
  const [selectedTab, setSelectedTab] = useState("all");
  const pricingRef = useRef<HTMLDivElement>(null);

  const handleCpaClick = (categoryTitle: string, planName: string, planUrl: string) => {
    try {
      const payload = JSON.stringify({
        category: categoryTitle,
        planName,
        planUrl,
        referrer: typeof document !== "undefined" ? document.referrer : "",
      });
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/track", payload);
      } else {
        fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: payload,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // ignore
    }
  };

  const filteredPlans =
    selectedTab === "all"
      ? config.plans
      : config.plans.filter((p) => p.subCategory === selectedTab);

  const gridColsClass =
    filteredPlans.length === 2
      ? "md:grid-cols-2 max-w-5xl"
      : "md:grid-cols-3 max-w-7xl";

  return (
    <div className="min-h-screen bg-neutral-100">
      {/* Sticky Top Navigation Header with Real Sub-URL Links (/moving, /biz, /car, /living) */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200 px-4 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 font-extrabold text-gray-900 text-base"
          >
            <span className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white grid place-content-center shadow-sm">
              <Award size={18} />
            </span>
            <span>생활·비즈니스 공식 견적비교 센터</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isSelected = config.slug === item.slug;
              return (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-neutral-100 text-gray-600 hover:bg-neutral-200 hover:text-gray-900"
                  }`}
                >
                  <Icon size={15} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      <div
        className="px-4 pt-6 pb-20 mx-auto relative overflow-hidden"
        ref={pricingRef}
      >
        {/* 21st.dev Radial Blue Glow Background */}
        <div
          className="pointer-events-none absolute top-0 left-[10%] right-[10%] w-[80%] h-[520px] z-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, #206ce8 0%, transparent 70%)`,
            opacity: 0.18,
          }}
        />

        {/* Subtle Top FTC Disclosure Bar */}
        <div className="relative z-10 mb-6 text-center">
          <p className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 bg-white/80 border border-neutral-200/80 px-3.5 py-1 rounded-full">
            <span>ℹ️</span>
            <span>
              본 페이지는 제휴 마케팅 활동의 일환으로 파트너사로부터 소정의
              수수료를 제공받을 수 있으나,{" "}
              <strong className="text-gray-700">
                이용자에게는 어떠한 추가 비용도 발생하지 않습니다.
              </strong>
            </span>
          </p>
        </div>

        {/* 21st.dev Pricing Header */}
        <div className="relative z-10 text-center mb-7 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold mb-4">
            <Sparkles size={14} />
            <span>{config.badge}</span>
          </div>

          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={pricingRef}
            className="md:text-5xl sm:text-4xl text-2xl font-extrabold text-gray-900 mb-4 leading-tight tracking-tight"
          >
            {config.titlePrefix}{" "}
            <TimelineContent
              as="span"
              animationNum={1}
              timelineRef={pricingRef}
              className="border border-dashed border-blue-500 px-2.5 py-1 rounded-xl bg-blue-100/90 text-blue-700 inline-block mt-1 sm:mt-0"
            >
              {config.titleHighlight}
            </TimelineContent>
          </TimelineContent>

          <TimelineContent
            as="p"
            animationNum={2}
            timelineRef={pricingRef}
            className="sm:text-base text-sm text-gray-600 sm:w-[82%] w-[92%] mx-auto leading-relaxed break-keep"
          >
            {config.subtitle}
          </TimelineContent>
        </div>

        {/* 21st.dev Pill Switcher */}
        <TimelineContent
          as="div"
          animationNum={3}
          timelineRef={pricingRef}
          className="relative z-10 mb-8"
        >
          <PricingSwitch
            tabs={config.tabs}
            selected={selectedTab}
            onSwitch={(val) => setSelectedTab(val)}
          />
        </TimelineContent>

        {/* 21st.dev Pricing Cards Grid */}
        <div
          className={`relative z-10 grid ${gridColsClass} gap-5 py-2 mx-auto items-stretch`}
        >
          {filteredPlans.map((plan, index) => (
            <TimelineContent
              key={plan.name}
              as="div"
              animationNum={4 + index}
              timelineRef={pricingRef}
              className="h-full"
            >
              <Card
                className={`relative h-full flex flex-col justify-between border-neutral-200 ${
                  plan.popular
                    ? "ring-2 ring-blue-500 bg-gradient-to-b from-blue-50/80 via-white to-white shadow-md"
                    : "bg-white"
                }`}
              >
                <div>
                  <CardHeader className="text-left pb-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <span className="inline-block text-xs font-bold text-blue-600 mb-1">
                          {plan.badgeText}
                        </span>
                        <h2 className="text-2xl sm:text-[26px] font-extrabold text-gray-900 tracking-tight">
                          {plan.name}
                        </h2>
                      </div>
                      {plan.popular && (
                        <span className="shrink-0 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                          BEST 추천
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed min-h-[40px] break-keep">
                      {plan.description}
                    </p>

                    <div className="flex items-baseline pt-3 border-t border-neutral-100 mt-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                        {plan.priceHeadline}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-gray-500 ml-1.5">
                        {plan.priceUnit}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <a
                      href={plan.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => handleCpaClick(config.navLabel, plan.name, plan.url)}
                      className={`w-full mb-5 py-3.5 px-4 text-base sm:text-lg font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 ${
                        plan.popular
                          ? "bg-gradient-to-t from-blue-600 to-blue-500 shadow-lg shadow-blue-500/30 border border-blue-400 text-white hover:brightness-105"
                          : "bg-gradient-to-t from-neutral-900 to-neutral-700 shadow-md shadow-neutral-900/20 border border-neutral-700 text-white hover:from-blue-600 hover:to-blue-500 hover:border-blue-400"
                      }`}
                    >
                      <span>{plan.buttonText}</span>
                      <ArrowUpRight size={18} />
                    </a>

                    <ul className="space-y-2.5 font-medium py-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <span className="text-neutral-800 grid place-content-center mt-0.5 mr-2.5 shrink-0">
                            {renderFeatureIcon(feature.iconType)}
                          </span>
                          <span className="text-sm text-gray-700 leading-snug break-keep">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-2.5 pt-4 mt-2 border-t border-neutral-200/80">
                      <h3 className="font-bold text-xs uppercase tracking-wider text-gray-500 mb-2">
                        {plan.includes[0]}
                      </h3>
                      <ul className="space-y-2 font-medium">
                        {plan.includes.slice(1).map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <span className="h-5 w-5 bg-green-50 border border-blue-500 rounded-full grid place-content-center mt-0.5 mr-2.5 shrink-0">
                              <CheckCheck className="h-3.5 w-3.5 text-blue-600" />
                            </span>
                            <span className="text-sm text-gray-600 leading-snug break-keep">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </TimelineContent>
          ))}
        </div>

        {/* Helpful Comparison Tip Card */}
        <div className="relative z-10 max-w-5xl mx-auto mt-10">
          <div className="rounded-2xl bg-white border border-blue-200/80 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-blue-700 font-extrabold text-base mb-2">
              <Sparkles size={18} />
              <span>{config.tipTitle}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed break-keep">
              {config.tipBody}
            </p>
          </div>
        </div>

        {/* Other Categories Quick Switcher (Real Sub-URLs) */}
        <div className="relative z-10 max-w-5xl mx-auto mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Link
              href="/biz"
              className={`flex items-center gap-2.5 p-3.5 rounded-xl bg-white border transition-all shadow-xs ${
                config.slug === "biz"
                  ? "border-blue-500 ring-1 ring-blue-500"
                  : "border-neutral-200 hover:border-blue-400"
              }`}
            >
              <Building2 size={18} className="text-blue-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900">
                  자영업·철거 비교
                </div>
                <div className="text-[11px] text-gray-500">정책자금·원상복구</div>
              </div>
            </Link>
            <Link
              href="/moving"
              className={`flex items-center gap-2.5 p-3.5 rounded-xl bg-white border transition-all shadow-xs ${
                config.slug === "moving"
                  ? "border-blue-500 ring-1 ring-blue-500"
                  : "border-neutral-200 hover:border-blue-400"
              }`}
            >
              <Truck size={18} className="text-blue-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900">
                  포장이사·입주청소
                </div>
                <div className="text-[11px] text-gray-500">전국 5대 업체 비교</div>
              </div>
            </Link>
            <Link
              href="/car"
              className={`flex items-center gap-2.5 p-3.5 rounded-xl bg-white border transition-all shadow-xs ${
                config.slug === "car"
                  ? "border-blue-500 ring-1 ring-blue-500"
                  : "border-neutral-200 hover:border-blue-400"
              }`}
            >
              <Car size={18} className="text-blue-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900">
                  장기렌트·리스·중고차
                </div>
                <div className="text-[11px] text-gray-500">초기비용 0원 특판</div>
              </div>
            </Link>
            <Link
              href="/living"
              className={`flex items-center gap-2.5 p-3.5 rounded-xl bg-white border transition-all shadow-xs ${
                config.slug === "living"
                  ? "border-blue-500 ring-1 ring-blue-500"
                  : "border-neutral-200 hover:border-blue-400"
              }`}
            >
              <Droplets size={18} className="text-blue-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900">
                  코웨이 렌탈 비교
                </div>
                <div className="text-[11px] text-gray-500">공식몰 vs 특판혜택</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Mandatory FTC Footer */}
        <footer className="relative z-10 max-w-5xl mx-auto mt-10 pt-6 border-t border-neutral-200 text-center text-xs text-gray-500 leading-relaxed">
          <p className="font-semibold text-gray-600 mb-1">
            [경제적 이해관계 안내 (공정거래위원회 추천·보증 등에 관한 표시·광고
            심사지침 준수)]
          </p>
          <p>
            본 사이트는 제휴 마케팅(CPA) 활동의 일환으로 파트너사로부터 소정의
            수수료를 제공받을 수 있습니다. 단, 이를 통해 신청하시는 모든 고객님께는
            어떠한 추가 비용이나 불이익도 발생하지 않으며 각 파트너사의 공식
            프로모션 혜택이 동일하게 적용됩니다.
          </p>
        </footer>
      </div>
    </div>
  );
}
