import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className, size = 32 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      {/* Shackle (Alça do cadeado) */}
      <path
        d="M30 45V30C30 18.9543 38.9543 10 50 10V10C61.0457 10 70 18.9543 70 30V45"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      
      {/* Body (Corpo do cadeado) */}
      <rect
        x="20"
        y="40"
        width="60"
        height="50"
        rx="15"
        fill="currentColor"
        className="opacity-20"
      />
      <rect
        x="20"
        y="40"
        width="60"
        height="50"
        rx="15"
        stroke="currentColor"
        strokeWidth="6"
      />
      
      {/* Heart (Coração no centro) */}
      <path
        d="M50 75L46.5 71.85C34.2 60.7 26.1 53.35 26.1 44.35C26.1 36.95 31.9 31.15 39.3 31.15C43.5 31.15 47.5 33.1 50 36.15C52.5 33.1 56.5 31.15 60.7 31.15C68.1 31.15 73.9 36.95 73.9 44.35C73.9 53.35 65.8 60.7 53.5 71.85L50 75Z"
        fill="currentColor"
        transform="scale(0.35) translate(95, 110)"
      />
    </svg>
  );
}
