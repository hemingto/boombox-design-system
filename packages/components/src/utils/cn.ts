import { clsx, type ClassValue } from 'clsx';

// Enhanced className utility for combining and deduplicating classes
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
