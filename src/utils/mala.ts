export const MALA_BEADS = 108;

export function progressPercent(count: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(100, Math.round((count / target) * 100));
}

export function completedMalas(count: number, beads = MALA_BEADS): number {
  return Math.floor(count / beads);
}
