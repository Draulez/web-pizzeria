import Link from "next/link";

export default function HomePage() {
  return (
    <div >
      {/* BANNER DE RECOGIDA */}
      <div className="relative mx-auto overflow-hidden bg-brand-primary border-t border-stone-300 h-8 flex items-center">
        <div className="flex animate-slide-left whitespace-nowrap justify-center text-center">

          {[...Array(10)].map((_, index) => (
            <span
              key={index}
              className="px-4 text-stone-900 font-medium text-sm block"
            >
              🍕 Disponemos de servicio de recogida de pedidos 🍕
            </span>
          ))}
        </div>
      </div>
      {/* HERO */}
      <section className="relative px-6 py-70 text-center bg-[url(/images/trattoria-pizzeria-de.jpg)] bg-cover">
        <div className="bg-stone-200 rounded-2xl p-10 md:w-2/3 lg:w-1/2 mx-auto bg-opacity-90">
          <h1 className="font-[var(--font-playfair)] text-4xl text-stone-900">
            Trattoria Pizzeria de l´Ángel
          </h1>

          <p className="mt-4 text-stone-600 text-base max-w-md mx-auto">
            Cocina italiana tradicional, pizzas artesanas y productos de calidad.
          </p>

          <Link
            href="/carta"
            className="inline-block mt-8 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:opacity-90 transition"
          >
            Ver carta
          </Link>
        </div>
      </section>


      {/* UBICACIÓN */}
      <section id="ubicacion" className="bg-stone-100 px-6 py-12 text-center">
        <h3 className="font-[var(--font-playfair)] text-xl mb-3">
          Dónde estamos
        </h3>

        <p className="text-stone-600">
          Camí de Mura 5, 46160 Llíria (Valencia)
        </p>
        <p>
          (+34) 960 22 11 49
        </p>

        <div className="embed-map-responsive mt-6">
          <div className="embed-map-container">
            <iframe
              loading="lazy"
              height={250}
              className="w-full rounded-lg border-0 md:w-3/4 md:h-128 mx-auto filter brightness-90 contrast-110 my-6 md:mb-8"
              src="https://maps.google.com/maps?width=600&height=400&hl=en&q=lliria%20angel&t=&z=14&ie=UTF8&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- COMPONENTE INTERNO --- */

function CategoryCard({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-stone-200 p-6 text-center hover:shadow-md transition bg-white"
    >
      <h3 className="font-[var(--font-playfair)] text-xl">
        {title}
      </h3>
      <p className="mt-2 text-sm text-stone-500">
        Ver opciones
      </p>
    </Link>
  );
}
