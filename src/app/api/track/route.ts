import { NextResponse } from 'next/server';
import { sendTelegramAlert, escapeTelegramHtml, formatReferrer } from '@/lib/telegram';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { category, planName, planUrl, referrer } = body;

    const resolvedReferrer = referrer || request.headers.get('referer') || '';
    const referrerLabel = formatReferrer(resolvedReferrer);
    const now = new Date().toLocaleTimeString('ko-KR', { timeZone: 'Asia/Seoul' });

    const message = [
      `🏢 <b>[파트너허브 | CPA 상담 클릭!]</b>`,
      `• 카테고리: <b>${escapeTelegramHtml(category || '비즈니스')}</b>`,
      `• 업체/상품: <b>${escapeTelegramHtml(planName || '상담 신청')}</b>`,
      `• 유입 경로: <b>${escapeTelegramHtml(referrerLabel)}</b>`,
      `• 일시: ${now}`,
    ].join('\n');

    await sendTelegramAlert(message);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[API/TRACK] Error:', err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
