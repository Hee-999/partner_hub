import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2026 생활·정책 혜택 공식 비교 안내 센터",
  description: "소상공인 철거지원금 증빙 견적, 전국 우수 포장이사·입주청소, 신차 장기렌트 특판, 생활가전 렌탈 혜택을 한눈에 비교하세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="antialiased">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
