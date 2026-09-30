import SectionTitle from "./SectionTitle";
import { audience } from "@/lib/content";

export default function Audience() {
  return (
    <section id="audience" className="section">
      <div className="container-x">
        <SectionTitle>لمن هذه الدورة؟</SectionTitle>
        <ul className="grid gap-6 md:grid-cols-3">
          {audience.map((a) => (
            <li key={a.title} className="border-t-4 border-ink pt-5">
              <h3 className="mb-2 text-xl font-bold">{a.title}</h3>
              <p className="leading-loose text-ink-soft">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
