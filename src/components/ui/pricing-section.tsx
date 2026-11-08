"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
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

export interface PartnerPlan {
  name: string;
  badgeText: string;
  subCategory: string;
  description: string;
  priceHeadline: string;
  priceUnit: string;
  buttonText: string;
  buttonVariant: "default" | "outline";
  popular?: boolean;
  url: string;
  features: { text: string; iconType: "briefcase" | "shield" | "clock" }[];
  includes: string[];
}

export interface CategoryConfig {
  slug: string;
  navLabel: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  tabs: { id: string; label: string; badge?: string }[];
  tipTitle: string;
  tipBody: string;
  plans: PartnerPlan[];
}

export const PARTNER_CATEGORIES: Record<string, CategoryConfig> = {
  biz: {
    slug: "biz",
    navLabel: "자영업·철거",
    badge: "소상공인·자영업 공식 비교 센터",
    titlePrefix: "사장님을 위한 맞춤 ",
    titleHighlight: "정책자금 & 철거 견적",
    subtitle:
      "정부 정책자금 한도 조회부터 폐업·인테리어 원상복구 철거 최저가 비교까지, 추가 수수료 없이 한눈에 확인하세요.",
    tabs: [
      { id: "all", label: "전체 비교 (3곳)", badge: "추천" },
      { id: "철거·원상복구", label: "원상복구 철거 비교" },
      { id: "정책자금", label: "사업자 정책자금" },
    ],
    tipTitle: "철거 및 정책자금 비교 전 필수 체크리스트",
    tipBody:
      "원상복구 철거는 단일 업체만 부르면 평당 단가와 폐기물 처리비 편차가 큽니다. 최소 2곳(무촌철거·철거스튜디오)에서 무료 방문 견적서를 받아 비교하시고, 사업자 정책지원센터를 통해 저금리 정책자금 및 정부지원 대상 여부를 함께 점검하세요.",
    plans: [
      {
        name: "사업자정책지원센터",
        badgeText: "정책자금·운영자금",
        subCategory: "정책자금",
        description:
          "개인·법인 사업자 맞춤형 정부 정책자금 및 저금리 한도 무료 진단",
        priceHeadline: "무료 진단",
        priceUnit: "/ 1:1 맞춤 컨설팅",
        buttonText: "정책자금 지원대상 무료 조회하기",
        buttonVariant: "default",
        popular: true,
        url: "https://replyalba.com/pt/116f62L9CyO",
        features: [
          {
            text: "업종·매출·신용도별 정책자금 조달 가능성 진단",
            iconType: "briefcase",
          },
          {
            text: "복잡한 서류 심사 전 1:1 전담 심사역 사전 매칭",
            iconType: "shield",
          },
          {
            text: "창업·운전·대환자금 조건별 우대 한도 빠른 확인",
            iconType: "clock",
          },
        ],
        includes: [
          "무료 상담 포함 혜택:",
          "정부·지자체 정책자금 적합도 분석",
          "금리 우대 및 보증기관 한도 가이드",
          "자문 수수료 부담 없는 사전 진단",
        ],
      },
      {
        name: "무촌철거",
        badgeText: "상가·사무실 직영철거",
        subCategory: "철거·원상복구",
        description:
          "중간 마진 없는 100% 직영 철거팀 운영으로 투명한 평당 견적 산출",
        priceHeadline: "0원 방문견적",
        priceUnit: "/ 직영 최저가 비교",
        buttonText: "무촌철거 무료 방문견적 신청",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/VYkOFILDT4",
        features: [
          {
            text: "하청 없는 본사 직영팀 시공으로 거품 비용 제거",
            iconType: "briefcase",
          },
          {
            text: "임대인·관리실 기준 완벽 원상복구 및 폐기물 처리",
            iconType: "shield",
          },
          {
            text: "야간·주말 신속 작업 및 공사 기한 엄수 보장",
            iconType: "clock",
          },
        ],
        includes: [
          "직영 견적 포함 내역:",
          "현장 실측 및 평당 세부 내역서 제공",
          "폐기물 수집·운반 및 마대 작업 일체",
          "원상복구 완료 후 건물주 확인 케어",
        ],
      },
      {
        name: "철거스튜디오",
        badgeText: "인테리어·원상복구",
        subCategory: "철거·원상복구",
        description:
          "프랜차이즈·음식점·오피스 맞춤형 부분철거 및 전체 원상복구 전문",
        priceHeadline: "비교 견적",
        priceUnit: "/ 추가비용 방지 보장",
        buttonText: "철거스튜디오 비교견적 받아보기",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/FD4DSxeF2w",
        features: [
          {
            text: "무촌철거와 동시 비교 시 평균 15~25% 비용 절감",
            iconType: "briefcase",
          },
          {
            text: "사전 계약서 명시 외 현장 부당 추가요금 차단",
            iconType: "shield",
          },
          {
            text: "설비·전기·바닥·천장 꼼꼼한 마감 및 현장 정리",
            iconType: "clock",
          },
        ],
        includes: [
          "비교 견적 포함 내역:",
          "무료 현장 방문 및 비교 견적서 발행",
          "소음·분진 최소화 안전 시공 프로세스",
          "철거 후 정밀 청소 및 마감 검수",
        ],
      },
    ],
  },
  moving: {
    slug: "moving",
    navLabel: "이사·입주청소",
    badge: "전국 포장이사 & 입주청소 통합 비교",
    titlePrefix: "우리 집 평수에 딱 맞는 ",
    titleHighlight: "포장이사 & 입주청소",
    subtitle:
      "이삿짐 업체마다 부르는 게 값인 이사 비용! 검증된 전국 업체 무료 비교견적으로 최소 20~30만 원 아끼세요.",
    tabs: [
      { id: "all", label: "전체 보기 (5곳)", badge: "인기" },
      { id: "포장이사", label: "포장이사 비교 (3곳)" },
      { id: "입주청소", label: "입주·이사청소 (2곳)" },
    ],
    tipTitle: "손 없는 날·주말 이사 비용 아끼는 핵심 팁",
    tipBody:
      "포장이사는 이사 날짜와 사다리차 사용 여부에 따라 업체별 견적 차이가 최대 40만 원까지 벌어집니다. 다이사·24번가·모두이사 중 최소 2곳을 비교하시고, 입주청소(모두클린·24번가)도 함께 견적을 받아 추가요금 없는 업체를 선택하세요.",
    plans: [
      {
        name: "다이사 (DAISA)",
        badgeText: "평점·후기 검증 1위",
        subCategory: "포장이사",
        description:
          "실제 이용자 평점·후기 등급이 검증된 우수 포장이사 업체 최대 3곳 매칭",
        priceHeadline: "최대 3곳",
        priceUnit: "/ 30초 무료 비교견적",
        buttonText: "다이사 우수업체 무료 견적 받기",
        buttonVariant: "default",
        popular: true,
        url: "https://replyalba.com/pt/y6amRJ4yb1",
        features: [
          {
            text: "실제 고객 솔직 후기 및 S·A등급 검증 업체만 선별",
            iconType: "shield",
          },
          {
            text: "전화로 한 번에 최대 3개 업체 비교견적 동시 확인",
            iconType: "briefcase",
          },
          {
            text: "방문 견적 및 비교 수수료 100% 무료 진행",
            iconType: "clock",
          },
        ],
        includes: [
          "다이사 기본 제공 혜택:",
          "업체별 실제 평점·리뷰 사전 열람",
          "가정이사·원룸·보관이사 맞춤 배정",
          "파손 배상책임보험 가입 업체 매칭",
        ],
      },
      {
        name: "포장이사 24번가",
        badgeText: "전국 베테랑 네트워크",
        subCategory: "포장이사",
        description:
          "전국 2,500여 개 베테랑 이사 인프라로 평수·일정별 최저가 매칭",
        priceHeadline: "맞춤 최저가",
        priceUnit: "/ 전국 어디서나",
        buttonText: "24번가 포장이사 비용 조회하기",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/ztv5keo4kJ",
        features: [
          {
            text: "아파트·빌라·오피스텔·사무실 맞춤형 전담팀 배정",
            iconType: "briefcase",
          },
          {
            text: "주방·옷장 정돈 및 가전·가구 전용 보호커버 포장",
            iconType: "shield",
          },
          {
            text: "손 없는 날·주말 성수기 빠른 잔여 일정 매칭",
            iconType: "clock",
          },
        ],
        includes: [
          "24번가 비교 포인트:",
          "전국 2,500개 제휴점 실시간 비교",
          "사다리차·에어컨 탈부착 옵션 투명 안내",
          "다이사와 교차 비교 시 최저가 확보",
        ],
      },
      {
        name: "모두이사",
        badgeText: "합리적 견적 비교",
        subCategory: "포장이사",
        description:
          "거품 없는 실속형 포장이사·반포장이사·보관이사 맞춤 견적 산출",
        priceHeadline: "실속 비교",
        priceUnit: "/ 거품 없는 표준단가",
        buttonText: "모두이사 무료 비교견적 신청",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/CTe2PeUJCF",
        features: [
          {
            text: "이사 화물량·층수에 맞춘 합리적인 인력 및 차량 배차",
            iconType: "briefcase",
          },
          {
            text: "당일 부당한 식대·수고비 요구 없는 깔끔한 진행",
            iconType: "shield",
          },
          {
            text: "근거리·장거리·보관이사 특화 요금표 적용",
            iconType: "clock",
          },
        ],
        includes: [
          "모두이사 포함 내역:",
          "무료 방문 실측 및 확정 견적서 안내",
          "바닥 보양재 설치로 마루 긁힘 방지",
          "큰 가구·가전 원하는 위치 완벽 배치",
        ],
      },
      {
        name: "모두클린 입주청소",
        badgeText: "입주·이사청소 전문",
        subCategory: "입주청소",
        description:
          "신축 아파트 분진·공사먼지 및 구축 묵은 때·곰팡이 고온 스팀 살균",
        priceHeadline: "평당 정찰가",
        priceUnit: "/ 검수 후 후불제",
        buttonText: "모두클린 입주청소 견적 확인",
        buttonVariant: "default",
        popular: true,
        url: "https://replyalba.com/pt/KgopyMOC2v",
        features: [
          {
            text: "친환경 세제 및 전문 장비로 미세 분진·유해물질 제거",
            iconType: "shield",
          },
          {
            text: "싱크대 하부·환풍구·창틀·배수구 분리 탈거 클리닝",
            iconType: "briefcase",
          },
          {
            text: "고객 현장 검수 완료 후 미흡 구간 즉석 A/S 보장",
            iconType: "clock",
          },
        ],
        includes: [
          "모두클린 기본 청소 범위:",
          "방·거실·주방·욕실·베란다 전 구역 케어",
          "고온 스팀 살균 및 피톤치드 연무 서비스",
          "투명한 평당 단가로 현장 추가금 예방",
        ],
      },
      {
        name: "24번가 입주청소",
        badgeText: "전국 우수 클리닝 비교",
        subCategory: "입주청소",
        description:
          "전국 검증된 입주·거주청소 전문팀의 평당 단가와 포함 내역 한 번에 비교",
        priceHeadline: "무료 비교",
        priceUnit: "/ 평수별 즉시 산출",
        buttonText: "24번가 입주청소 비교견적 받기",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/CV4rsuzVfX",
        features: [
          {
            text: "평수·구조만 입력하면 우리 지역 우수 청소팀 즉시 매칭",
            iconType: "briefcase",
          },
          {
            text: "줄눈시공·탄성코트·새집증후군 패키지 특가 비교 가능",
            iconType: "shield",
          },
          {
            text: "이사 당일 오전/오후 일정에 맞춘 정확한 시간 엄수",
            iconType: "clock",
          },
        ],
        includes: [
          "24번가 클리닝 혜택:",
          "모두클린과 1:1 가격·범위 교차 비교",
          "베테랑 팀장급 현장 상주 및 검수 진행",
          "상담 및 비교 견적 수수료 0원",
        ],
      },
    ],
  },
  car: {
    slug: "car",
    navLabel: "신차·중고차",
    badge: "신차 장기렌트·리스 & 중고차 통합 비교",
    titlePrefix: "초기비용 0원 ",
    titleHighlight: "장기렌트·리스 & 중고차",
    subtitle:
      "캐피탈사별 숨겨진 프로모션 특가와 즉시출고 재고, 허위매물 없는 인증 중고차 시세를 투명하게 비교하세요.",
    tabs: [
      { id: "all", label: "전체 비교 (4곳)", badge: "특가" },
      { id: "신차 렌트·리스", label: "신차 장기렌트·리스 (3곳)" },
      { id: "중고차", label: "안심 중고차 (1곳)" },
    ],
    tipTitle: "장기렌트·리스 월 납입료 5~10만 원 낮추는 비결",
    tipBody:
      "같은 차종이라도 캐피탈사마다 매달 밀어주는 '특판 할인 차종'과 잔존가치 요율이 다릅니다. 린오토·리스렌트성지·카슐랭 중 2곳 이상에서 견적서를 받아 월 납입료와 만기 인수 조건을 비교하시는 것이 가장 유리합니다.",
    plans: [
      {
        name: "리스렌트 성지",
        badgeText: "최저가 특판 프로모션",
        subCategory: "신차 렌트·리스",
        description:
          "국내 전 캐피탈사·렌트사 비공개 특판 프로모션 최저가 비교 견적",
        priceHeadline: "초기비용 0원",
        priceUnit: "/ 전 금융사 최저가 비교",
        buttonText: "리스렌트 성지 특판 최저가 조회",
        buttonVariant: "default",
        popular: true,
        url: "https://replyalba.com/pt/EVEoMJVgtx",
        features: [
          {
            text: "국내 메이저 렌트·캐피탈사 이달의 특판 할인율 실시간 대조",
            iconType: "briefcase",
          },
          {
            text: "개인·법인사업자 연간 최대 1,500만 원 비용처리 절세 설계",
            iconType: "shield",
          },
          {
            text: "무보증·선납금·보증금 조건별 최저 월 납입료 맞춤 산출",
            iconType: "clock",
          },
        ],
        includes: [
          "성지 특판 기본 혜택:",
          "인기 국산·수입 전 차종 즉시출고 물량 확보",
          "프리미엄 썬팅·블랙박스·코팅 패키지 지원",
          "타사 견적서 보유 시 추가 인하 비교",
        ],
      },
      {
        name: "린오토 (LEAN AUTO)",
        badgeText: "즉시출고·맞춤설계",
        subCategory: "신차 렌트·리스",
        description:
          "대기 기간 없는 전국 즉시출고 재고 선점 및 1:1 맞춤형 신차 금융 설계",
        priceHeadline: "즉시출고",
        priceUnit: "/ 7일 이내 빠른 인도",
        buttonText: "린오토 즉시출고 재고 & 견적 확인",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/YeYajzBVxA",
        features: [
          {
            text: "전국 딜러사·렌트사 실시간 즉시출고 가능 차량 즉시 매칭",
            iconType: "clock",
          },
          {
            text: "보험료·취등록세·자동차세 통합 관리로 초기 목돈 부담 ZERO",
            iconType: "shield",
          },
          {
            text: "만기 인수형 vs 반납형 고객 주행거리에 맞춘 최적 설계",
            iconType: "briefcase",
          },
        ],
        includes: [
          "린오토 출고 케어:",
          "신차 검수 및 전국 원하는 장소 탁송 인도",
          "심사 기준 완화로 저신용·신규사업자 맞춤 승인",
          "계약부터 만기까지 1:1 전담 매니저 케어",
        ],
      },
      {
        name: "카슐랭 (CARHELIN)",
        badgeText: "스마트 비교견적",
        subCategory: "신차 렌트·리스",
        description:
          "국산 인기 SUV·세단부터 수입차까지 거품 없는 표준 렌트·리스 비교",
        priceHeadline: "1분 견적",
        priceUnit: "/ 차종별 실시간 산출",
        buttonText: "카슐랭 차종별 비교견적 받기",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/GMhkE5esi6",
        features: [
          {
            text: "불필요한 부가 수수료 없이 투명하게 공개되는 월 렌트료",
            iconType: "briefcase",
          },
          {
            text: "사고 시 보험 할증 걱정 없는 렌트사 명의 안심 운행",
            iconType: "shield",
          },
          {
            text: "차종·트림·색상별 이달의 프로모션 할인액 즉시 반영",
            iconType: "clock",
          },
        ],
        includes: [
          "카슐랭 비교 포인트:",
          "리스렌트 성지·린오토와 교차 비교 추천",
          "출고 용품 풀패키지 무상 시공 지원",
          "방문 없이 모바일 간편 전자계약 가능",
        ],
      },
      {
        name: "중카티비 (안심 중고차)",
        badgeText: "허위매물 0% 인증",
        subCategory: "중고차",
        description:
          "성능점검기록부·사고이력 100% 투명 공개! 예산에 딱 맞는 실매물 추천",
        priceHeadline: "실매물 100%",
        priceUnit: "/ 안심 진단 & 최저금리 할부",
        buttonText: "중카티비 안심 중고차 상담 신청",
        buttonVariant: "default",
        url: "https://replyalba.com/pt/GwiWWYgfIb",
        features: [
          {
            text: "침수·전손·조작 차량 원천 차단 및 헛걸음 보상 시스템",
            iconType: "shield",
          },
          {
            text: "전문 평가사가 하부 누유·엔진·미션 상태 직접 사전 검수",
            iconType: "briefcase",
          },
          {
            text: "중고차 구매 및 내 차 최고가 매각·대차 원스톱 진행",
            iconType: "clock",
          },
        ],
        includes: [
          "중카티비 안심 보장:",
          "보험이력 및 성능기록부 원본 투명 제공",
          "제1금융권·캐피탈 저금리 중고차 할부 연계",
          "출고 전 기본 경정비 및 소모품 상태 점검",
        ],
      },
    ],
  },
  living: {
    slug: "living",
    navLabel: "코웨이 렌탈",
    badge: "코웨이 정수기·공기청정기·비데 공식 & 특판 비교",
    titlePrefix: "우리 집 필수 가전 ",
    titleHighlight: "코웨이 렌탈 혜택 비교",
    subtitle:
      "아이콘 정수기2·얼음정수기·노블 공기청정기·비데까지! 본사 직영 반값 할인과 특판 최대 사은품 조건을 한눈에 비교하세요.",
    tabs: [
      { id: "all", label: "전체 프로모션 비교 (2곳)", badge: "사은품+할인" },
      { id: "특판 프로모션", label: "최대 혜택 특판" },
      { id: "공식 직영몰", label: "본사 직영 상담" },
    ],
    tipTitle: "코웨이 렌탈 신청 전 반드시 비교해야 할 2가지",
    tipBody:
      "같은 코웨이 정품 기기와 본사 코디 케어를 받더라도 접수 채널에 따라 '렌탈료 면제 개월 수'와 '설치 당일 사은품/지원금 혜택'이 다릅니다. 아래 두 채널의 이달 프로모션을 모두 확인하신 뒤 가장 혜택이 큰 곳으로 결정하세요!",
    plans: [
      {
        name: "코웨이 특판 프로모션 센터",
        badgeText: "최대 사은품 + 렌탈료 감면",
        subCategory: "특판 프로모션",
        description:
          "이달의 특판 단독 사은품 혜택 + 렌탈료 반값/면제 프로모션 동시 적용",
        priceHeadline: "최대 혜택",
        priceUnit: "/ 렌탈료 할인 + 특판 사은품",
        buttonText: "코웨이 특판 최대 혜택 확인하기",
        buttonVariant: "default",
        popular: true,
        url: "https://replyalba.com/pt/ZvKcUHeZe0",
        features: [
          {
            text: "정수기+비데 / 정수기+공기청정기 결합 시 추가 요금 대폭 할인",
            iconType: "briefcase",
          },
          {
            text: "타사 보상판매 및 신규 설치 고객 대상 단독 특판 혜택 제공",
            iconType: "shield",
          },
          {
            text: "제휴카드 전월 실적 충족 시 월 최대 15,000~30,000원 청구할인",
            iconType: "clock",
          },
        ],
        includes: [
          "특판 채널 단독 포함 혜택:",
          "100% 코웨이 본사 정품 설치 및 공식 A/S 동일 적용",
          "초기 설치비·등록비 전액 면제 지원",
          "전문 상담원을 통한 모델별 최저 체감가 설계",
        ],
      },
      {
        name: "코웨이 공식 렌탈 상담센터",
        badgeText: "본사 정품 케어·신상 라인업",
        subCategory: "공식 직영몰",
        description:
          "아이콘 정수기2·아이콘 얼음정수기·비렉스(BEREX) 매트리스·안마의자 맞춤 상담",
        priceHeadline: "반값 프로모션",
        priceUnit: "/ 약정별 맞춤 요금 설계",
        buttonText: "코웨이 공식 렌탈 프로모션 상담 신청",
        buttonVariant: "outline",
        url: "https://replyalba.com/pt/VDvRS2tGf8",
        features: [
          {
            text: "방문 관리형(코디 케어) vs 자가 관리형(필터 정기배송) 자유 선택",
            iconType: "briefcase",
          },
          {
            text: "가정용·사무실용·식당/업소용 대용량 모델 맞춤 추천",
            iconType: "shield",
          },
          {
            text: "희망 설치일 지정 및 전국 코웨이 지사 빠른 설치 배정",
            iconType: "clock",
          },
        ],
        includes: [
          "공식 렌탈 기본 혜택:",
          "약정 기간 내 무상 A/S 및 정기 필터 교체",
          "이달의 신제품 렌탈료 최대 6~12개월 반값 혜택",
          "특판 센터와 혜택 비교 후 선택 가능",
        ],
      },
    ],
  },
};

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
  showCategoryNav = true,
}: {
  categorySlug?: string;
  showCategoryNav?: boolean;
}) {
  const config =
    PARTNER_CATEGORIES[categorySlug] || PARTNER_CATEGORIES["moving"];
  const [selectedTab, setSelectedTab] = useState("all");
  const pricingRef = useRef<HTMLDivElement>(null);

  const filteredPlans =
    selectedTab === "all"
      ? config.plans
      : config.plans.filter((p) => p.subCategory === selectedTab);

  const gridColsClass =
    filteredPlans.length === 2
      ? "md:grid-cols-2 max-w-5xl"
      : "md:grid-cols-3 max-w-7xl";

  return (
    <div
      className="px-4 pt-6 pb-20 min-h-screen mx-auto relative bg-neutral-100 overflow-hidden"
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

      {/* Top Navigation Bar + FTC Notice Pill */}
      {showCategoryNav && (
        <header className="relative z-20 max-w-7xl mx-auto mb-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/90 backdrop-blur-md border border-neutral-200/80 rounded-2xl px-4 py-3 shadow-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-extrabold text-gray-900 text-base tracking-tight"
            >
              <span className="h-8 w-8 rounded-xl bg-gradient-to-tr from-blue-600 to-blue-400 text-white grid place-content-center shadow-sm">
                <Award size={18} />
              </span>
              <span>생활·비즈니스 공식 견적비교 센터</span>
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-1.5">
              {Object.values(PARTNER_CATEGORIES).map((cat) => {
                const active = cat.slug === config.slug;
                return (
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                      active
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-gray-600 hover:bg-neutral-100 hover:text-gray-900"
                    }`}
                  >
                    {cat.navLabel}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Subtle Top FTC Disclosure Bar */}
          <div className="mt-2.5 text-center">
            <p className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-500 bg-white/70 border border-neutral-200/70 px-3.5 py-1 rounded-full">
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
        </header>
      )}

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

      {/* Other Categories Quick Switcher */}
      <div className="relative z-10 max-w-5xl mx-auto mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Link
            href="/biz"
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 transition-all shadow-xs"
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
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 transition-all shadow-xs"
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
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 transition-all shadow-xs"
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
            className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200 hover:border-blue-400 transition-all shadow-xs"
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
  );
}
