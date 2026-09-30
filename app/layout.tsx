import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { course } from "@/lib/content";

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const title = `${course.title} | The Active Club`;

export const metadata: Metadata = {
  title,
  description: course.summary,
  openGraph: {
    title,
    description: course.summary,
    locale: "ar_SA",
    type: "website",
    images: [{ url: "/images/brand-cover.jpg", width: 900, height: 1600, alt: "The Active Club" }],
  },
};

export const viewport: Viewport = { themeColor: "#2B2B2B", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={arabic.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
