export default function SectionTitle({ children, sub, dark = false }: { children: React.ReactNode; sub?: string; dark?: boolean }) {
  return (
    <div className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-bold leading-snug sm:text-4xl">
        <span className="brush text-ink">{children}</span>
      </h2>
      {sub && <p className={`mt-5 text-lg leading-loose ${dark ? "text-white/75" : "text-steel"}`}>{sub}</p>}
    </div>
  );
}
