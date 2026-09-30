import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section aria-label="خبرة المدرب" className="bg-brand text-ink">
      <dl className="container-x grid divide-y divide-ink/15 py-2 md:grid-cols-3 md:divide-x md:divide-x-reverse md:divide-y-0">
        {stats.map((s) => (
          <div key={s.value} className="flex items-center gap-4 px-2 py-5 md:px-6">
            <dt className="text-4xl font-bold tabular-nums">{s.value}</dt>
            <dd className="text-sm font-medium leading-relaxed">{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
