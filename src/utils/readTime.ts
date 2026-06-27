// CJK-aware read time estimation.
// For Chinese/Japanese/Korean text (no spaces between words), counts characters
// instead of whitespace-split words.
const CJK_RE = /[\u4e00-\u9fff\u3400-\u4dbf\uf900-\ufaff]|[\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]/g;
const CJK_THRESHOLD = 0.3; // 30%+ CJK chars = use char-based calc
const WORDS_PER_MIN = 200;
const CJK_CHARS_PER_MIN = 400;

export function getReadTime(body: string): number {
  const charCount = body.length;
  const cjkChars = (body.match(CJK_RE) || []).length;
  const cjkRatio = charCount > 0 ? cjkChars / charCount : 0;

  if (cjkRatio >= CJK_THRESHOLD) {
    return Math.max(1, Math.round(charCount / CJK_CHARS_PER_MIN));
  }
  return Math.max(1, Math.round(body.split(/\s+/).length / WORDS_PER_MIN));
}
