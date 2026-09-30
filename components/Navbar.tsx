"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import CTAButton from "./CTAButton";
import { nav } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 bg-ink text-white transition-shadow ${scrolled ? "shadow-lg shadow-black/20" : ""}`}>
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#top" aria-label="The Active Club — الرئيسية">
          <Image src="/images/logo.png" alt="The Active Club" width={903} height={202} className="h-9 w-auto" priority />
        </a>

        <nav aria-label="التنقل الرئيسي" className="hidden items-center gap-7 text-sm lg:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton className="!px-4 !py-2 text-sm">احجز مكانك الآن</CTAButton>
          <button
            className="rounded-md p-2 lg:hidden"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="القائمة" className="border-t border-white/10 bg-ink lg:hidden">
          <ul className="container-x flex flex-col py-2">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3.5 text-white/90">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
