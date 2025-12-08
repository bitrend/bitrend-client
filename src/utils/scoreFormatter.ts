import type { Score } from '../types/analytics';

/**
 * Score 객체를 문자열로 변환하는 유틸 함수
 */
export function formatScore(score: Score | string | null | undefined): string {
  if (!score) return '0Byte 0Bit';
  
  if (typeof score === 'string') return score;
  
  if (typeof score === 'object' && 'byte' in score && 'bit' in score) {
    return `${score.byte}Byte ${score.bit}Bit`;
  }
  
  return String(score);
}

/**
 * Growth absolute 값을 문자열로 변환하는 유틸 함수
 */
export function formatGrowthAbsolute(absolute: Score | string | null | undefined, prefix: string = '+'): string {
  if (!absolute) return `${prefix}0Byte 0Bit`;
  
  if (typeof absolute === 'string') return absolute;
  
  if (typeof absolute === 'object' && 'byte' in absolute && 'bit' in absolute) {
    return `${prefix}${absolute.byte}Byte ${absolute.bit}Bit`;
  }
  
  return String(absolute);
}
