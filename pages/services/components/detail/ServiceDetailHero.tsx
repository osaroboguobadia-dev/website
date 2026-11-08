import { Link } from 'react-router-dom';
import BrandPatch from '@/components/base/BrandPatch';
import { brandLogoUrl } from '@/mocks/navigation';
import type { ServiceDetailData } from '@/mocks/serviceDetails';

export default function ServiceDetailHero({ detail }: { detail: ServiceDetailData }) {
  return (
    <section className="relative h-[460px] md:h-[560px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={detail.heroImage}
          alt={`${detail.name} — John Holt PLC`}
          title={`${detail.name} — John Holt PLC`}
          className="w-full h-full object-cover object-top"
        />

        {/* John Holt heritage red wash — kept light so faces stay clearly visible */}
        <div className="absolute inset-0 bg-primary-900/38 mix-blend-multiply"></div>

        {/* warm gold light from the lower right */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-accent-500/20 mix-blend-screen"></div>

        {/* depth for text legibility, rising from the base only */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/95 via-primary-950/45 via-40% to-transparent"></div>

        {/* crisp John Holt marks printed on the helmets and vests.
            The layer mirrors the photo's own 16:9 box, so the marks stay on the
            workwear at any desktop width. */}
        <div className="pointer-events-none absolute inset-x-0 top-0 w-full aspect-[16/9] hidden lg:block" aria-hidden="true">
          <BrandPatch surface="helmet" left="46.4%" top="18.5%" width="2.9rem" rotate={-7} opacity={0.9} />
          <BrandPatch surface="helmet" left="63.1%" top="24.4%" width="2.6rem" rotate={5} opacity={0.88} />
          <BrandPatch surface="helmet" left="75.7%" top="15.8%" width="3rem" rotate={-4} opacity={0.9} />

          <BrandPatch surface="vest" left="44.4%" top="45.4%" width="4.3rem" rotate={-4} />
          <BrandPatch surface="vest" left="61%" top="46.7%" width="3.9rem" rotate={3} />
          <BrandPatch surface="vest" left="78%" top="44.2%" width="4.3rem" rotate={-3} />
        </div>

        {/* brand lockup watermark */}
        <div className="pointer-events-none absolute right-4 top-24 md:right-10 md:top-32 flex flex-col items-end gap-2 md:gap-3">
          <img
            src={brandLogoUrl}
            alt=""
            aria-hidden="true"
            style={{ filter: 'brightness(0) invert(1)' }}
            className="h-11 md:h-24 lg:h-28 w-auto max-w-[220px] md:max-w-[240px] object-contain opacity-20 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]"
          />
          <span className="hidden md:block h-px w-24 bg-accent-400/60"></span>
          <span className="hidden md:block text-[10px] font-semibold tracking-[0.32em] uppercase text-background-100/75">
            John Holt PLC &middot; Services
          </span>
        </div>

        {/* gold brand rule along the base */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-accent-500 via-accent-400/70 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full mx-auto max-w-[1440px] px-4 md:px-8 pb-12 md:pb-16">
        <nav
          className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-background-300 mb-5 animate-fade-up"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="cursor-pointer hover:text-accent-300 transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <Link to="/services" className="cursor-pointer hover:text-accent-300 transition-colors">
            Services
          </Link>
          <i className="ri-arrow-right-s-line text-base"></i>
          <span className="text-background-100">{detail.shortName}</span>
        </nav>

        <span className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-accent-300">
          <span className="w-11 h-11 flex items-center justify-center rounded-xl bg-background-50/10 border border-background-50/25">
            <i className={`${detail.icon} text-lg`}></i>
          </span>
          {detail.eyebrow}
        </span>
        <h1 className="font-heading mt-4 text-4xl md:text-6xl font-semibold text-background-50 leading-[1.08] max-w-3xl animate-fade-up">
          {detail.heroTitle}
        </h1>
        <p className="mt-5 text-sm md:text-lg text-background-200 leading-relaxed max-w-2xl">
          {detail.heroDescription}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-accent-500 text-foreground-950 text-sm font-semibold hover:bg-accent-600 transition-colors"
          >
            Request a Quote
          </Link>
          <Link
            to="/services"
            className="cursor-pointer whitespace-nowrap px-7 py-3.5 rounded-full bg-background-50/10 border border-background-50/30 text-background-50 text-sm font-semibold hover:bg-background-50/20 transition-colors flex items-center gap-2"
          >
            <i className="ri-arrow-left-line"></i>
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}