import { useInView } from '@/hooks/useInView';
import SectionHeading from '@/components/base/SectionHeading';
import { industries } from '@/mocks/services';

export default function Industries() {
  return (
    <section className="py-20 md:py-28 bg-background-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Industries We Power & Protect"
          description="From manufacturing floors to hospital wards and government facilities, our solutions are built for the demands of every sector."
        />

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          {industries.map((industry, idx) => (
            <IndustryCard key={industry.name} industry={industry} delay={idx * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, delay }: { industry: (typeof industries)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group relative overflow-hidden rounded-2xl bg-foreground-950 ${
        inView ? 'animate-fade-up' : 'opacity-0'
      }`}
    >
      <div className="relative w-full h-40 md:h-52 overflow-hidden">
        <img
          src={industry.image}
          alt={industry.name}
          title={`${industry.name} industry solutions`}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/95 via-foreground-950/35 to-foreground-950/5" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-center gap-3">
        <span className="w-9 h-9 shrink-0 flex items-center justify-center rounded-lg bg-background-50/15 backdrop-blur text-background-50 border border-background-50/20">
          <i className={`${industry.icon} text-base`}></i>
        </span>
        <h3 className="font-heading text-sm md:text-base font-semibold text-background-50 leading-snug">
          {industry.name}
        </h3>
      </div>

      <span className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full bg-background-50/15 backdrop-blur text-background-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <i className="ri-arrow-right-up-line text-xs"></i>
      </span>
    </div>
  );
}