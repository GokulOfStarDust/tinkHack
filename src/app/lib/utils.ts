import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";  // This should exist

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

