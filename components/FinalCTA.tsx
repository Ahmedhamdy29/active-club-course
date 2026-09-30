import CTAButton from "./CTAButton";

export default function FinalCTA() {
  return (
    <section className="bg-brand text-ink">
      <div className="container-x py-16 text-center lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">جاهز تبدأ؟</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-loose">
          سجّل الآن في الدورة وتعلّم اللياقة البدنية والنشاط البدني المرتبط بالصحة مع المدرب منصور العسكر.
        </p>
        <div className="mt-8">
          <CTAButton variant="primary" className="!bg-ink !text-brand hover:!bg-ink-deep">احجز مكانك الآن</CTAButton>
        </div>
      </div>
    </section>
  );
}
