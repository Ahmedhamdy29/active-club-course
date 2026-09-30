import SectionTitle from "./SectionTitle";
import { outcomes } from "@/lib/content";

export default function Value() {
  return (
    <section id="value" className="section">
      <div className="container-x">
        <SectionTitle sub="أهم ما ستتناوله الدورة، كما ورد في محتواها.">ماذا ستتعلم؟</SectionTitle>
        <div className="grid gap-px overflow-hidden rounded-xl border border-chalk-line bg-chalk-line sm:grid-cols-2">
          {outcomes.map((o) => (
            <article key={o.title} className="bg-white p-7 transition-colors hover:bg-chalk">
              <h3 className="mb-2 text-xl font-bold">{o.title}</h3>
              <p className="leading-loose text-ink-soft">{o.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
