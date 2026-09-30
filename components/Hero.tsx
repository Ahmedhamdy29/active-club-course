import Image from "next/image";
import CTAButton from "./CTAButton";
import { course, trainer } from "@/lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="container-x grid items-center gap-10 py-14 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div>
          <p className="hero-rise mb-5 inline-block border-r-4 border-brand pr-3 text-sm text-white/75">{course.label}</p>
          <h1 className="hero-rise-2 text-[2rem] font-bold leading-[1.35] sm:text-5xl lg:text-[3.4rem]">
            <span className="brush text-ink">{course.title}</span>
          </h1>
          <p className="hero-rise-3 mt-7 max-w-xl text-lg leading-loose text-white/80">{course.summary}</p>
          <div className="hero-rise-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <CTAButton>احجز مكانك الآن</CTAButton>
            <a href="#curriculum" className="btn btn-ghost text-white">اكتشف محتوى الكورس</a>
          </div>
          <p className="mt-8 text-sm text-white/60">
            يقدّمها {trainer.shortName} — {trainer.education.split(" — ")[0]}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute -bottom-4 -left-4 h-full w-full rounded-2xl border-2 border-brand" />
          <Image
            src="/images/trainer/mansour-hero.png"
            alt="المدرب منصور العسكر جالسًا على كرة تمارين"
            width={317}
            height={273}
            priority
            className="relative w-full rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
