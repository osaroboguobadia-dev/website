import { Link } from 'react-router-dom';
import { useInView } from '@/hooks/useInView';

export default function ClosingCta() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div
          ref={ref}
          className={`relative rounded-3xl overflow-hidden ${inView ? 'animate-fade-up' : 'opacity-0'}`}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/9f468a485fe5a094.jpg`}
            alt="John Holt PLC facility"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-foreground-950/80"></div>
          <div className="relative px-6 py-16 md:py-20 md:px-16 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-background-50 max-w-2xl mx-auto leading-tight">
              Ready to Power, Protect and Build With Us?
            </h2>
            <p className="mt-4 text-sm md:text-base text-background-200 max-w-xl mx-auto">
              Speak with our team today and discover how John Holt PLC can deliver the right solution for your
              business, institution or project — wherever in the world you operate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
              >
                Request a Quote
              </Link>
              <a
                href="tel:070056464658"
                className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
              >
                <i className="ri-phone-line"></i>
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}