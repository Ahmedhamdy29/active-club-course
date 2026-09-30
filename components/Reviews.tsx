"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { reviews } from "@/lib/content";

export default function Reviews() {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (active !== null && !d.open) d.showModal();
    if (active === null && d.open) d.close();
  }, [active]);

  const r = active !== null ? reviews[active] : null;

  return (
    <section id="reviews" className="section bg-chalk">
      <div className="container-x">
        <SectionTitle sub="تقييمات حقيقية من متدربين — اضغط على أي تقييم لعرضه كاملًا.">آراء المتدربين</SectionTitle>

        <ul className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:mx-0 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-0">
          {reviews.map((rv, i) => (
            <li key={rv.src} className="w-64 shrink-0 snap-center lg:w-auto">
              <button onClick={() => setActive(i)} className="block w-full overflow-hidden rounded-xl border border-chalk-line bg-white transition-transform hover:-translate-y-1" aria-label={`عرض التقييم ${i + 1} بحجم كامل`}>
                <Image src={rv.src} alt={rv.alt} width={rv.w} height={rv.h} loading="lazy" sizes="(min-width:1024px) 20vw, 256px" className="h-auto w-full" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && setActive(null)}
        className="m-auto max-h-[92vh] w-[min(92vw,30rem)] overflow-auto rounded-xl bg-transparent p-0 backdrop:bg-black/80"
        aria-label="عرض التقييم"
      >
        {r && (
          <div className="relative">
            <button onClick={() => setActive(null)} aria-label="إغلاق" className="absolute left-2 top-2 z-10 rounded-full bg-brand p-2 text-ink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <Image src={r.src} alt={r.alt} width={r.w} height={r.h} className="h-auto w-full rounded-xl" />
          </div>
        )}
      </dialog>
    </section>
  );
}
