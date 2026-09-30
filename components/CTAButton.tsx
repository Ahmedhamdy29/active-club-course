import { SALLA_URL } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

// Every purchase button on the site goes through this component → one Salla URL.
export default function CTAButton({ children = "احجز مكانك الآن", variant = "primary", className = "" }: Props) {
  return (
    <a
      href={SALLA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${variant === "primary" ? "btn-primary" : "btn-ghost"} ${className}`}
    >
      {children}
    </a>
  );
}
