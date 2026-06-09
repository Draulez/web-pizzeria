import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* BANNER DE RECOGIDA */}
      <div className="relative mx-auto overflow-hidden bg-brand-color border-t border-brand-primary h-9 flex items-center">
        <div className="flex animate-slide-left whitespace-nowrap justify-center text-center">
          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className="px-6 text-brand-cream font-medium text-sm tracking-wide block"
            >
              Servicio de recogida de pedidos
            </span>
          ))}
        </div>
      </div>

      {/* HERO */}
      <section className="relative isolate min-h-[520px] overflow-hidden px-6 py-24 text-center bg-[url(/images/trattoria-pizzeria-de.jpg)] bg-cover bg-center md:min-h-[620px] md:py-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,247,220,0.94)_0%,rgba(255,247,220,0.66)_42%,rgba(139,30,30,0.26)_100%)]" />
        <div className="mx-auto max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-brand-primary bg-[rgba(255,247,220,0.9)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-color shadow-sm">
            Cocina italiana en Llíria
          </p>

          <h1 className="font-[var(--font-playfair)] text-4xl leading-tight text-brand-color drop-shadow-sm sm:text-5xl md:text-6xl">
            Trattoria Pizzeria de <span className="whitespace-nowrap">l&apos;Ángel</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-stone-900 md:text-xl">
            Cocina italiana tradicional, pizzas artesanas y productos de calidad.
          </p>

          <Link
            href="/carta"
            className="inline-block mt-8 rounded-full bg-brand-primary px-8 py-3 text-stone-950 font-semibold shadow-lg shadow-stone-900/15 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-[#e3b241]"
          >
            Ver carta
          </Link>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="bg-brand-cream px-6 py-14 text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-secondary">
            Visítanos
          </p>
          <h3 className="mt-2 font-[var(--font-playfair)] text-3xl text-brand-color">
            Dónde estamos
          </h3>

          <div className="mt-5 inline-flex flex-col gap-1 rounded-lg border border-[rgba(216,161,43,0.6)] bg-white/65 px-5 py-4 text-stone-800 shadow-sm">
            <p>Camí de Mura 5, 46160 Llíria (Valencia)</p>
            <p className="font-medium text-brand-color">(+34) 960 22 11 49</p>
          </div>

          <div className="embed-map-responsive mt-8">
            <div className="embed-map-container">
              <iframe
                loading="lazy"
                height={250}
                className="w-full rounded-lg border-2 border-[rgba(216,161,43,0.7)] md:h-[32rem] mx-auto filter brightness-95 contrast-105 shadow-xl shadow-stone-900/10"
                src="https://maps.google.com/maps?width=600&height=400&hl=en&q=lliria%20angel&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
