const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export function escapeTelegramHtml(text: string): string {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export function formatReferrer(referrer?: string): string {
  if (!referrer || referrer.trim() === "") {
    return "🔗 직접 입력 / 북마크 / 카카오톡 링크";
  }

  try {
    const url = new URL(referrer);
    const host = url.hostname.toLowerCase();

    if (host.includes("tistory.com")) {
      return `📝 티스토리 블로그 (${host})`;
    }
    if (host.includes("threads.net") || host.includes("threads")) {
      return "🧵 스레드 (Threads)";
    }
    if (host.includes("instagram.com") || host.includes("l.instagram.com")) {
      return "📸 인스타그램 (Instagram)";
    }
    if (host.includes("search.naver.com") || host.includes("m.search.naver.com")) {
      return "🟢 네이버 검색";
    }
    if (host.includes("naver.com")) {
      return `🟢 네이버 포털 (${host})`;
    }
    if (host.includes("google.com") || host.includes("google.co.kr")) {
      return "🔍 구글 검색";
    }
    if (host.includes("daum.net") || host.includes("kakao.com")) {
      return `🟡 다음/카카오 (${host})`;
    }
    return `🌐 외부 링크 (${host})`;
  } catch {
    return `🌐 ${referrer.slice(0, 40)}`;
  }
}

export async function sendTelegramAlert(text: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return false;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
    return response.ok;
  } catch (err) {
    console.error("[TELEGRAM] Failed to send alert:", err);
    return false;
  }
}
