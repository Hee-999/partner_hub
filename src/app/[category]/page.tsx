import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PartnerItem = {
  rank: string;
  badge: string;
  name: string;
  subtitle: string;
  highlights: string[];
  ctaText: string;
  url: string;
  accentColor: string;
};

type CategoryConfig = {
  title: string;
  headerBadge: string;
  heroTitle: string;
  heroDesc: string;
  tipTitle: string;
  tipItems: string[];
  themeBg: string;
  themeBorder: string;
  themeBadgeBg: string;
  items: PartnerItem[];
};

const PARTNER_HUB_DATA: Record<string, CategoryConfig> = {
  biz: {
    title: "2026 소상공인 점포철거 지원금 증빙 & 정책자금 공식 비교 센터",
    headerBadge: "🏪 소상공인·자영업자 지원 안내실",
    heroTitle: "점포철거비 정부지원금 증빙 견적 & 사업자 정책자금 한눈에 비교",
    heroDesc:
      "희망리턴패키지 점포철거비 지원금(최대 250만 원) 정산에 필수인 전자세금계산서·견적서 발급 가능 정식 업체와 소상공인 정책자금 지원 대상을 무료로 비교해 보세요.",
    tipTitle: "💡 정부 점포철거비 지원금(희망리턴패키지) 신청 전 필수 체크리스트",
    tipItems: [
      "자가 철거 또는 무등록 업체 이용 시 정부지원금 정산이 반려되므로 반드시 사업자등록이 완료된 정식 철거업체의 견적서·내역서·전자세금계산서를 발급받아야 합니다.",
      "최소 2곳 이상의 정식 철거 플랫폼에서 평당 원상복구 견적을 비교해 보시면 불필요한 추가 비용을 수십만 원 이상 아낄 수 있습니다.",
      "철거 전·중·후 현장 사진을 반드시 날짜가 나오게 촬영해 두어야 사후 지원금 지급 심사가 빠르게 통과됩니다."
    ],
    themeBg: "from-slate-900 to-slate-800",
    themeBorder: "border-amber-500",
    themeBadgeBg: "bg-amber-500 text-slate-950",
    items: [
      {
        rank: "추천 1위 · 승인율 100%",
        badge: "정부지원금 증빙 서류 완벽 지원",
        name: "무촌철거 (1등 철거 비교 플랫폼)",
        subtitle: "전국 상가·식당·사무실 원상복구 및 폐업 철거 최저가 무료 견적",
        highlights: [
          "중간 마진 없는 직영·파트너 매칭으로 평균 철거 비용 20~30% 절감",
          "소상공인 희망리턴패키지 철거지원금 신청용 견적서·세금계산서 즉시 발행",
          "임대인 원상복구 분쟁 예방을 위한 현장 맞춤 무료 방문 견적 제공"
        ],
        ctaText: "👉 무촌철거 무료 비교견적 & 서류 상담 신청하기",
        url: "https://replyalba.com/pt/VYkOFILDT4",
        accentColor: "bg-amber-600 hover:bg-amber-700"
      },
      {
        rank: "추천 2위 · 빠른 견적 비교",
        badge: "상가·프랜차이즈 원상복구 특화",
        name: "철거스튜디오 (전문 철거 견적 센터)",
        subtitle: "업종별·평수별 투명한 철거 단가 산출 및 폐기물 처리 원스톱 지원",
        highlights: [
          "무촌철거와 함께 복수 견적 비교 시 가장 유리한 최저가 업체 선택 가능",
          "야간 작업·소음 관리·폐기물 적법 처리까지 추가금 없는 정찰제 견적 지향",
          "정부 폐업지원금 정산 요건에 맞춘 공식 증빙 서류 패키지 지원"
        ],
        ctaText: "👉 철거스튜디오 무료 견적 비교 신청하기",
        url: "https://replyalba.com/pt/FD4DSxeF2w",
        accentColor: "bg-slate-800 hover:bg-slate-900"
      },
      {
        rank: "함께 챙길 혜택 · 사업자 전용",
        badge: "소상공인 운영·대환 정책자금",
        name: "사업자정책지원센터 (정책자금 무료 진단)",
        subtitle: "업종·매출·신용도별 신청 가능한 정부 정책자금 및 저금리 자금 조회",
        highlights: [
          "복잡한 소상공인 정책자금·보증재단 자금 중 내 사업장에 맞는 한도 1분 진단",
          "고금리 사업자 대출을 저금리 정책자금으로 전환하는 맞춤 서류 가이드",
          "전화 한 통으로 무료 자격 조회 및 필요 서류 안내"
        ],
        ctaText: "👉 내 사업장 정책자금 가능 한도 무료 조회하기",
        url: "https://replyalba.com/pt/116f62L9CyO",
        accentColor: "bg-teal-700 hover:bg-teal-800"
      }
    ]
  },
  moving: {
    title: "2026 전국 우수 포장이사 & 입주청소 무료 비교견적 센터",
    headerBadge: "🚚 전입신고·이사 필수 비교 안내실",
    heroTitle: "내 동네 우수 포장이사 & 입주청소 등급별 무료 비교견적 리스트",
    heroDesc:
      "전세대출·확정일자·전입신고 일정을 잡으셨다면, 이사 당일 추가금 분쟁 없는 소비자 평가 우수 포장이사·입주청소 업체 견적을 미리 비교해 보세요.",
    tipTitle: "💡 이사 비용 30만 원 아끼는 실전 비교 노하우",
    tipItems: [
      "손없는날·주말·월말은 부르는 게 값이므로, 최소 2~3개 비교 플랫폼에서 동시 견적을 받아 가격 차이를 확인하는 것이 가장 정확합니다.",
      "사다리차 비용, 에어컨 탈부착비, 식대 요구 여부가 견적서에 포함되어 있는지 계약 전 반드시 체크하세요.",
      "전세대출 잔금일에는 오전 일찍 포장이사 짐을 빼고, 오후에 입주청소 후 전입신고·확정일자를 완료해야 대항력이 안전하게 유지됩니다."
    ],
    themeBg: "from-teal-900 to-emerald-800",
    themeBorder: "border-teal-500",
    themeBadgeBg: "bg-teal-400 text-slate-950",
    items: [
      {
        rank: "포장이사 1위 · 고객 신청률 최다",
        badge: "전국 3,800개 파트너사 평점 비교",
        name: "다이사 (실제 이용자 후기·평점 기반 이사 매칭)",
        subtitle: "내 지역 S등급 포장이사 업체 최대 3곳의 견적과 실제 후기를 한눈에 비교",
        highlights: [
          "광고성 후기가 아닌 실제 이사 고객의 평점·파손율 데이터를 기반으로 우수 업체만 매칭",
          "간편하게 출발지·도착지만 입력하면 내 동네 검증된 업체 무료 견적 산출",
          "무리한 영업 전화 없이 깔끔하게 조건과 견적만 비교 가능"
        ],
        ctaText: "👉 다이사 내 동네 우수 포장이사 3곳 무료 비교하기",
        url: "https://replyalba.com/pt/y6amRJ4yb1",
        accentColor: "bg-teal-600 hover:bg-teal-700"
      },
      {
        rank: "포장이사 2위 · 가성비 비교 필수",
        badge: "가정이사·원룸·보관이사 맞춤 매칭",
        name: "포장이사 24번가 (전국 직거래 비교견적)",
        subtitle: "다이사 견적과 교차 비교하면 이사 비용을 평균 15~25만 원 더 낮출 수 있는 대표 플랫폼",
        highlights: [
          "전국 2,500여 개 정식 허가(주선면허) 이사업체 네트워크 보유",
          "가정이사, 반포장이사, 보관이사, 사무실이사 유형별 맞춤 최저가 견적",
          "1분 무료 신청으로 손없는날·주말 잔여 차량 및 최저가 즉시 확인"
        ],
        ctaText: "👉 포장이사 24번가 무료 최저가 견적 받아보기",
        url: "https://replyalba.com/pt/ztv5keo4kJ",
        accentColor: "bg-emerald-700 hover:bg-emerald-800"
      },
      {
        rank: "포장이사 3위 · 꼼꼼한 방문견적",
        badge: "추가금 없는 정직한 견적 비교",
        name: "모두이사 (맞춤형 포장이사 비교 서비스)",
        subtitle: "이사 화물량과 작업 환경에 맞춘 정확한 산출로 당일 추가 요금 분쟁 예방",
        highlights: [
          "좁은 골목·고층 사다리차·대형 가전 이동 등 까다로운 이사 조건 맞춤 상담",
          "배상책임보험 가입 완료 정식 업체만 엄선하여 파손·분실 걱정 최소화",
          "위 두 곳과 함께 비교하여 가장 조건이 좋은 업체를 최종 선택하세요"
        ],
        ctaText: "👉 모두이사 무료 비교견적 신청하기",
        url: "https://replyalba.com/pt/CTe2PeUJCF",
        accentColor: "bg-slate-800 hover:bg-slate-900"
      },
      {
        rank: "입주·이사청소 1위 · 승인율 90%+",
        badge: "친환경 살균·피톤치드 케어",
        name: "모두클린 (입주청소·이사청소 비교 1위)",
        subtitle: "신축 아파트 입주 먼지 제거부터 구축 이사 전 찌든 때·곰팡이 완벽 클리닝",
        highlights: [
          "주방 후드·욕실 배수구·창틀·베란다까지 눈에 안 보이는 구석 오염 정밀 세척",
          "평수만 입력하면 우리 지역 검증된 청소 전문팀의 평균 견적 즉시 안내",
          "청소 후 검수 후불제 지향으로 만족도 최상위"
        ],
        ctaText: "👉 모두클린 평수별 입주청소 무료 견적 확인하기",
        url: "https://replyalba.com/pt/KgopyMOC2v",
        accentColor: "bg-sky-600 hover:bg-sky-700"
      },
      {
        rank: "입주·이사청소 2위 · 교차 비교용",
        badge: "이사 + 청소 동시 준비 시 할인 비교",
        name: "24번가 입주청소·이사청소 전문 센터",
        subtitle: "모두클린과 함께 평당 청소 단가 및 서비스 범위를 비교해 가장 합리적인 팀 선택",
        highlights: [
          "새집증후군 케어, 줄눈 시공, 마루 코팅 등 입주 전 필수 옵션 한 번에 비교",
          "전문 장비를 갖춘 직영·파트너 클리닝팀 배정",
          "원하는 날짜 예약 마감 전 무료 견적 조회 가능"
        ],
        ctaText: "👉 24번가 입주청소 무료 비교견적 신청하기",
        url: "https://replyalba.com/pt/CV4rsuzVfX",
        accentColor: "bg-indigo-600 hover:bg-indigo-700"
      }
    ]
  },
  car: {
    title: "2026 신차 장기렌트·리스 최저가 특판 & 인증 중고차 비교 센터",
    headerBadge: "🚗 자동차 세금·보험·할부 절약 안내실",
    heroTitle: "취등록세·자동차세·보험료 부담 줄이는 장기렌트 특판 & 중고차 비교",
    heroDesc:
      "초기 취등록세(7%)와 자동차세, 건강보험료 재산 점수 상승 없이 이용할 수 있는 국내 주요 캐피탈사 장기렌트·리스 특판 견적과 무사고 인증 중고차를 한눈에 비교해 보세요.",
    tipTitle: "💡 할부 구매 vs 장기렌트·리스, 왜 최소 2~3곳 비교가 필수일까요?",
    tipItems: [
      "장기렌트는 캐피탈사별로 매달 밀어주는 '특판 할인 차종(선구매 재고)'이 달라서, 같은 차라도 업체에 따라 월 대여료가 8만~15만 원까지 차이 납니다.",
      "개인·법인사업자는 월 렌트료와 정비·유류비를 연간 최대 1,500만 원까지 경비 처리하여 종합소득세·법인세를 크게 줄일 수 있습니다.",
      "대출로 잡히지 않아 신용점수 하락이나 DSR(총부채원리금상환비율) 한도 축소 없이 주택담보대출·전세대출 한도를 그대로 지킬 수 있습니다."
    ],
    themeBg: "from-blue-950 to-slate-900",
    themeBorder: "border-blue-500",
    themeBadgeBg: "bg-blue-400 text-slate-950",
    items: [
      {
        rank: "장기렌트 1위 · 신청률·만족도 최고",
        badge: "전국 딜러사·캐피탈 즉시출고 특판",
        name: "린오토 (신차 장기렌트·리스 최저가 비교 1위)",
        subtitle: "국내 20여 개 금융사 실시간 금리·잔존가치 비교로 월 납입금 최저가 산출",
        highlights: [
          "대기 기간 없는 즉시출고 특판 재고 확보 및 초기 비용 0원(무보증) 조건 비교",
          "사업자 세금 절세 설계 및 개인 운전경력·보험료 할증 없는 최적 플랜 제시",
          "전월 신청률 1위 플랫폼으로 가장 빠른 실시간 견적서 발송"
        ],
        ctaText: "👉 린오토 전 차종 특판 최저가 견적 무료 확인하기",
        url: "https://replyalba.com/pt/YeYajzBVxA",
        accentColor: "bg-blue-600 hover:bg-blue-700"
      },
      {
        rank: "장기렌트 2위 · 특판 할인 비교 필수",
        badge: "국산·수입 전 차종 프로모션 비교",
        name: "리스렌트 성지 (장기렌트·오토리스 특판 비교)",
        subtitle: "린오토 견적서와 1:1 대조하여 월 대여료를 한 번 더 낮출 수 있는 핵심 비교처",
        highlights: [
          "그랜저·쏘렌토·카니발·스포티지·수입차 등 인기 차종 이달의 특판 할인율 즉시 반영",
          "만기 인수형 vs 반납형 손익분기점 정밀 비교 설계",
          "심사 거절 걱정 줄이는 저신용·신규사업자 맞춤 승인 상담 지원"
        ],
        ctaText: "👉 리스렌트 성지 이달의 특판 할인 견적 받아보기",
        url: "https://replyalba.com/pt/EVEoMJVgtx",
        accentColor: "bg-indigo-600 hover:bg-indigo-700"
      },
      {
        rank: "장기렌트 3위 · 프리미엄 맞춤 견적",
        badge: "투명한 수수료 0% 비교 지향",
        name: "카슐랭 (신차 장기렌트·리스 정밀 비교 센터)",
        subtitle: "숨겨진 영업 수수료 거품을 뺀 투명한 비교 견적과 출고 사은품 풀패키지",
        highlights: [
          "국내 메이저 렌트사·캐피탈사의 숨은 프로모션 물량 실시간 조회",
          "고급 썬팅·블랙박스·코일매트 등 신차 출고 패키지 기본 지원",
          "위 업체들과 함께 비교해 가장 저렴한 월 납입금을 선택하세요"
        ],
        ctaText: "👉 카슐랭 실시간 비교견적 무료 신청하기",
        url: "https://replyalba.com/pt/GMhkE5esi6",
        accentColor: "bg-slate-800 hover:bg-slate-900"
      },
      {
        rank: "인증 중고차 1위 · 승인율 100%",
        badge: "방송 출연 검증 · 허위매물 0%",
        name: "중카TV (전문 정비사 동행·검증 중고차 플랫폼)",
        subtitle: "신차 가격 부담을 확 낮춘 무사고 검증 중고차 매입·판매 무료 상담",
        highlights: [
          "침수·사고·주행거리 조작 없는 100% 실매물 정밀 진단 시스템",
          "내 예산과 용도에 딱 맞는 가성비 중고차 추천 및 보유 차량 최고가 매입 견적",
          "초보자도 눈탱이 맞지 않는 투명한 시세표 및 취등록세 안내"
        ],
        ctaText: "👉 중카TV 무사고 검증 중고차 시세·상담 신청하기",
        url: "https://replyalba.com/pt/GwiWWYgfIb",
        accentColor: "bg-emerald-700 hover:bg-emerald-800"
      }
    ]
  },
  living: {
    title: "2026 코웨이 정수기·가전 렌탈 프로모션 & 사은품 비교 센터",
    headerBadge: "💧 생활가전 렌탈·사은품 혜택 안내실",
    heroTitle: "코웨이 공식 렌탈료 면제 프로모션 vs 특판몰 최대 혜택 비교",
    heroDesc:
      "정수기·공기청정기·비데·안마의자·매트리스 렌탈 신청 전, 본사 프로모션과 공식 특판몰의 렌탈료 무료 개월 수 및 사은품 혜택을 비교해 가장 유리한 조건으로 신청하세요.",
    tipTitle: "💡 호갱 안 당하는 정수기·가전 렌탈 신청 전 체크포인트",
    tipItems: [
      "같은 코웨이 아이콘 정수기라도 신청 채널(일반 렌탈 vs 특판 기획전)에 따라 렌탈료 면제 개월 수(최대 3~6개월)와 사은품 혜택이 달라집니다.",
      "제휴 카드 전월 실적(30만 원) 할인을 결합하면 월 체감 렌탈료를 1만 5천 원~2만 5천 원까지 추가로 아낄 수 있습니다.",
      "기존 타사 제품을 사용 중이라면 '타사 보상 프로모션' 대상인지 상담 시 꼭 먼저 물어보세요."
    ],
    themeBg: "from-sky-900 to-cyan-800",
    themeBorder: "border-sky-500",
    themeBadgeBg: "bg-sky-400 text-slate-950",
    items: [
      {
        rank: "공식 혜택 1위 · 승인율 100%",
        badge: "이달의 베스트셀러 특별 혜택",
        name: "코웨이 렌탈 공식 프로모션 센터",
        subtitle: "아이콘 얼음정수기·노블 공기청정기·비렉스 매트리스 이달의 특별 할인",
        highlights: [
          "신규 설치비·등록비 전액 면제 및 약정 기간별 최대 요금 할인 적용",
          "전문 코디 방문 관리형 vs 자가 관리형(요금 추가 할인) 맞춤 비교 설계",
          "빠른 설치 일정 확보 및 제휴카드 최대 할인 안내"
        ],
        ctaText: "👉 코웨이 렌탈 이달의 특별 혜택 & 무료 상담 신청하기",
        url: "https://replyalba.com/pt/VDvRS2tGf8",
        accentColor: "bg-sky-600 hover:bg-sky-700"
      },
      {
        rank: "특판 혜택 2위 · 렌탈료 면제 기획전",
        badge: "렌탈료 최대 3개월 무료 + 특판 사은혜택",
        name: "코웨이 특판몰 (한정 할인 기획전)",
        subtitle: "일반 신청 전 반드시 비교해 봐야 할 특판 전용 요금 면제 & 패키지 혜택",
        highlights: [
          "특판 대상 모델 신청 시 렌탈료 최대 3개월 무료 혜택 제공",
          "2가지 이상 결합 렌탈(정수기+비데/청정기) 시 추가 결합 할인 및 사은 혜택 극대화",
          "위 공식 프로모션 센터와 혜택을 비교해 더 유리한 조건으로 최종 결정하세요"
        ],
        ctaText: "👉 코웨이 특판몰 렌탈료 면제 기획전 혜택 확인하기",
        url: "https://replyalba.com/pt/ZvKcUHeZe0",
        accentColor: "bg-cyan-700 hover:bg-cyan-800"
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(PARTNER_HUB_DATA).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const config = PARTNER_HUB_DATA[category];
  if (!config) {
    return { title: "생활·정책 혜택 비교 센터" };
  }
  return {
    title: config.title,
    description: config.heroDesc,
    robots: { index: true, follow: true },
  };
}

export default async function PartnerCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = PARTNER_HUB_DATA[category];

  if (!config) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Dedicated Top Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-800 text-base sm:text-lg tracking-tight">
              {config.headerBadge}
            </span>
          </div>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            2026 공식 비교 가이드
          </span>
        </div>
      </header>

      {/* Hero Banner */}
      <section className={`bg-gradient-to-br ${config.themeBg} text-white py-10 px-4`}>
        <div className="max-w-4xl mx-auto">
          <span className={`inline-block text-xs font-extrabold px-3 py-1 rounded-full mb-3 ${config.themeBadgeBg}`}>
            무료 비교견적 · 추가 비용 0원
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3">
            {config.heroTitle}
          </h1>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-3xl">
            {config.heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto w-full px-4 py-8 flex-1 space-y-8">
        {/* Tip Checklist Box */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <h2 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
            {config.tipTitle}
          </h2>
          <ul className="space-y-2.5 text-sm text-slate-700 leading-relaxed">
            {config.tipItems.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold mt-0.5">✔</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison Cards List */}
        <div className="space-y-5">
          {config.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-sm border-2 border-slate-200 hover:border-slate-400 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-slate-900 text-white">
                  {item.rank}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-slate-600 font-medium mb-4">
                {item.subtitle}
              </p>

              <div className="bg-slate-50 rounded-xl p-4 mb-5 space-y-2 border border-slate-100">
                {item.highlights.map((hl, hIdx) => (
                  <p key={hIdx} className="text-sm text-slate-700 flex items-start gap-2 leading-snug">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{hl}</span>
                  </p>
                ))}
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full text-center text-white font-extrabold py-4 px-5 rounded-xl shadow-sm transition-colors text-base ${item.accentColor}`}
              >
                {item.ctaText}
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* FTC Compliance Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 px-4 text-center text-xs text-slate-500 mt-10">
        <div className="max-w-4xl mx-auto space-y-1.5">
          <p className="font-semibold text-slate-600">
            생활·정책 비교 지원 안내 센터 (Official Comparison Guide)
          </p>
          <p>
            ※ 공정거래위원회 표시·광고 지침 안내: 본 페이지의 비교 견적 및 상담 신청 링크는 제휴 마케팅 활동의 일환으로 파트너사로부터 소정의 수수료를 제공받을 수 있으나, 이용자(신청자)에게는 어떠한 추가 비용이나 불이익도 발생하지 않습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
