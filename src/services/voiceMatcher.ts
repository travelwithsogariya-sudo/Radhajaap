function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ").trim();
}

export function countMantraMentions(transcript: string, selectedMantra: string): number {
  const cleanTranscript = normalize(transcript);
  const cleanMantra = normalize(selectedMantra);

  if (!cleanTranscript || !cleanMantra) return 0;

  const words = cleanTranscript.split(" ");
  const mantraWords = cleanMantra.split(" ");

  let count = 0;
  for (let i = 0; i <= words.length - mantraWords.length; i += 1) {
    const chunk = words.slice(i, i + mantraWords.length).join(" ");
    if (chunk === cleanMantra) count += 1;
  }
  return count;
}

export function shouldAcceptVoiceIncrement(confidence: number, maxPerMinute: number, detectedInLastMinute: number): boolean {
  const hasConfidence = confidence >= 0.75;
  const underLimit = detectedInLastMinute < maxPerMinute;
  return hasConfidence && underLimit;
}
