import Link from "next/link";

export default function PartnerHubIndexPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 text-center space-y-6">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
        2026 생활·정책 혜택 공식 비교 안내 센터
      </h1>
      <p className="text-slate-600 text-sm sm:text-base">
        확인하실 분야를 선택해 주세요.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-4">
        <Link href="/biz" className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-amber-500 shadow-sm block">
          <p className="font-extrabold text-slate-900">🏪 소상공인 철거·정책자금 비교</p>
          <p className="text-xs text-slate-500 mt-1">무촌철거 · 철거스튜디오 · 사업자정책지원센터</p>
        </Link>
        <Link href="/moving" className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-teal-500 shadow-sm block">
          <p className="font-extrabold text-slate-900">🚚 포장이사 & 입주청소 비교</p>
          <p className="text-xs text-slate-500 mt-1">다이사 · 포장이사24번가 · 모두이사 · 모두클린</p>
        </Link>
        <Link href="/car" className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 shadow-sm block">
          <p className="font-extrabold text-slate-900">🚗 장기렌트·리스 & 중고차 비교</p>
          <p className="text-xs text-slate-500 mt-1">린오토 · 리스렌트성지 · 카슐랭 · 중카TV</p>
        </Link>
        <Link href="/living" className="p-5 bg-white rounded-2xl border border-slate-200 hover:border-sky-500 shadow-sm block">
          <p className="font-extrabold text-slate-900">💧 코웨이 정수기·가전 렌탈 비교</p>
          <p className="text-xs text-slate-500 mt-1">코웨이 공식 렌탈 vs 특판몰 기획전</p>
        </Link>
      </div>
    </main>
  );
}
