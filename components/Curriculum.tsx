import SectionTitle from "./SectionTitle";
import CTAButton from "./CTAButton";
import { modules } from "@/lib/content";

export default function Curriculum() {
  return (
    <section id="curriculum" className="section bg-chalk">
      <div className="container-x">
        <SectionTitle sub="محاور الدورة ومواضيعها كما وردت في شرائح المحتوى.">محتوى الدورة</SectionTitle>
        <div className="mx-auto max-w-3xl space-y-3">
          {modules.map((m, i) => (
            <details key={m.title} open={i === 0} className="group rounded-xl border border-chalk-line bg-white open:border-ink">
              <summary className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <span>
                  <span className="block text-lg font-bold sm:text-xl">{m.title}</span>
                  <span className="mt-1 block text-sm text-steel">{m.topics.length} مواضيع</span>
                </span>
                <svg className="chev shrink-0 transition-transform" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <ul className="space-y-3 border-t border-chalk-line px-5 pb-6 pt-5 sm:px-6">
                {m.topics.map((t) => (
                  <li key={t} className="flex gap-3 leading-loose">
                    <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton>ابدأ التعلم</CTAButton>
        </div>
      </div>
    </section>
  );
}
