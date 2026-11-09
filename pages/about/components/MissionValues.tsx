import SectionHeading from '@/components/base/SectionHeading';
import { useInView } from '@/hooks/useInView';
import { aboutPillars, aboutValues } from '@/mocks/about';

export default function MissionValues() {
  return (
    <section className="py-20 md:py-28 bg-background-100">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <SectionHeading
          eyebrow="Purpose & Principles"
          title="What Drives Us Forward"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutPillars.map((pillar, idx) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={idx * 90} />
          ))}
        </div>

        <div className="mt-16 border-t border-background-200 pt-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading eyebrow="Our Values" title="The Principles Behind Every Project" />
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutValues.map((value, idx) => (
              <ValueCard key={value.title} value={value} delay={idx * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, delay }: { pillar: (typeof aboutPillars)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`group bg-background-50 rounded-2xl border border-background-200 p-7 h-full transition-colors hover:border-primary-300 ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-600 text-background-50">
        <i className={`${pillar.icon} text-2xl`} aria-hidden="true"></i>
      </span>
      <h3 className="font-heading mt-5 text-lg font-semibold text-foreground-950">{pillar.title}</h3>
      <p className="mt-2.5 text-sm text-foreground-600 leading-relaxed">{pillar.description}</p>
    </div>
  );
}

function ValueCard({ value, delay }: { value: (typeof aboutValues)[number]; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`bg-background-50 rounded-2xl border border-background-200 p-6 h-full hover:border-primary-300 transition-colors ${inView ? 'animate-fade-up' : 'opacity-0'}`}
    >
      <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-accent-100 text-accent-700">
        <i className={`${value.icon} text-xl`}></i>
      </span>
      <h3 className="font-heading mt-4 text-base font-semibold text-foreground-950">{value.title}</h3>
      <p className="mt-2 text-xs text-foreground-500 leading-relaxed">{value.description}</p>
    </div>
  );
}