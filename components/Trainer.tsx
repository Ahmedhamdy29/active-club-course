import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { trainer } from "@/lib/content";

export default function Trainer() {
  return (
    <section id="trainer" className="section bg-ink text-white">
      <div className="container-x">
        <SectionTitle dark sub={trainer.role}>{trainer.name}</SectionTitle>

        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <Image
              src="/images/trainer/portrait.jpg"
              alt={`صورة المدرب ${trainer.shortName}`}
              width={798}
              height={457}
              className="w-full rounded-xl object-cover"
            />
            <p className="mt-6 leading-loose text-white/80">{trainer.bio}</p>
            <p className="mt-4 text-sm text-brand">{trainer.education}</p>

            <h3 className="mb-3 mt-8 font-bold">مهارات القياسات الفسيولوجية المعملية والميدانية</h3>
            <ul className="flex flex-wrap gap-2">
              {trainer.skills.map((s) => (
                <li key={s} className="rounded-full border border-white/25 px-3 py-1 text-sm text-white/85">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-xl font-bold">نبذة عن مسيرته</h3>
            <ul className="space-y-4">
              {trainer.highlights.map((h) => (
                <li key={h} className="flex gap-3 leading-loose text-white/85">
                  <span aria-hidden className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {trainer.gallery.map((g) => (
            <Image key={g.src} src={g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" className="h-64 w-full rounded-xl object-cover sm:h-72" />
          ))}
        </div>

        <figure className="mx-auto mt-16 max-w-3xl border-r-4 border-brand pr-6">
          <blockquote className="text-xl font-bold leading-loose text-brand sm:text-2xl">“{trainer.quote.text}”</blockquote>
          <figcaption className="mt-3 text-white/70">{trainer.quote.author}</figcaption>
        </figure>
      </div>
    </section>
  );
}
