import SectionTitle from "./SectionTitle";
import { whyPoints } from "@/lib/content";

export default function Why() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle sub="ما يذكره المتدربون في تقييماتهم.">لماذا هذه الدورة؟</SectionTitle>
        <ul className="grid gap-6 md:grid-cols-3">
          {whyPoints.map((w) => (
            <li key={w.title} className="rounded-xl bg-chalk p-6">
              <p className="text-lg font-bold leading-relaxed">{w.title}</p>
              <p className="mt-3 text-sm text-steel">{w.source}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
