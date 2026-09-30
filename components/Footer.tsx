import Image from "next/image";
import CTAButton from "./CTAButton";
import { nav } from "@/lib/content";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.2fr_1fr_auto]">
        <div>
          <Image src="/images/logo.png" alt="The Active Club" width={903} height={202} loading="lazy" className="h-10 w-auto" />
          <p className="mt-4 text-white/70">{SITE.tagline}</p>
          <p className="mt-1 font-bold text-brand">{SITE.hashtag}</p>
        </div>

        <nav aria-label="روابط التذييل">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-white/80">
            {nav.map((l) => (
              <li key={l.href}><a href={l.href} className="hover:text-brand">{l.label}</a></li>
            ))}
          </ul>
          {SITE.socials.length > 0 && (
            <ul className="mt-5 flex gap-4">
              {SITE.socials.map((s) => (
                <li key={s.href}><a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{s.label}</a></li>
              ))}
            </ul>
          )}
        </nav>

        <div className="space-y-4">
          <CTAButton>احصل على الكورس</CTAButton>
          <p className="text-sm text-white/70">للتواصل: <a dir="ltr" href={`tel:${SITE.phone}`} className="text-white hover:text-brand">{SITE.phone}</a></p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} {SITE.academyName}. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
