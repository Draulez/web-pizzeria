"use client";

import Link from "next/link";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-gradient-to-t from-[var(--brand-cream)] to-transparent px-4 pt-4 pb-6">
        <Link
          href="/carta"
          className="block w-full rounded-full bg-brand-color text-brand-cream text-center py-3 font-semibold shadow-lg"
        >
          Ver carta
        </Link>
      </div>
    </div>
  );
}
