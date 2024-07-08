import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const relativeToAppURL = (...path: string[]) => {
  const appURL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  return new URL(path.join("/"), appURL).toString();
};
