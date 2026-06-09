"use client";
import { menu } from "@/lib/menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function CartaPage() {
    const [openCategories, setOpenCategories] = useState<string[]>([]);
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleCategory = (categoryId: string) => {
        setOpenCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const toggleItem = (itemName: string) => {
        setOpenItems((prev) =>
            prev.includes(itemName)
                ? prev.filter((name) => name !== itemName)
                : [...prev, itemName]
        );
    };

    return (
        <div className="px-4 py-8 max-w-2xl mx-auto sm:px-6 sm:py-14">
            <div className="mb-8 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-secondary">
                    Nuestra carta
                </p>
                <h1 className="mt-2 font-[var(--font-playfair)] text-4xl text-brand-color">
                    Sabores de trattoria
                </h1>
            </div>

            <p className="mb-6 text-sm text-stone-700 bg-white/70 border border-[rgba(216,161,43,0.55)] rounded-md px-4 py-3 shadow-sm">
                Suplemento por ingrediente extra: <span className="font-medium text-brand-color">+1,50 €</span>
            </p>
            {menu.map((category) => (
                <section
                    key={category.id}
                    id={category.id}
                    className="mb-4 scroll-mt-24"
                >
                    <div className="sticky top-[68px] z-10 bg-[rgba(255,247,220,0.95)] backdrop-blur-sm border-b border-brand-primary shadow-sm">
                        <button
                            onClick={() => toggleCategory(category.id)}
                            className="w-full flex items-center justify-between font-[var(--font-playfair)] text-xl sm:text-2xl py-4 px-4 text-brand-color hover:text-brand-secondary transition-colors group hover:cursor-pointer"
                        >
                            <span className="flex items-center gap-2">
                                {category.title}
                                <span className="text-xs text-stone-500 font-sans group-hover:text-brand-secondary transition-colors">
                                    {openCategories.includes(category.id) ? "(cerrar)" : "(ver más)"}
                                </span>
                            </span>
                            <ChevronDown
                                className={`w-6 h-6 transition-transform duration-300 group-hover:text-brand-primary ${openCategories.includes(category.id) ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${openCategories.includes(category.id)
                                ? "max-h-[5000px] opacity-100"
                                : "max-h-0 opacity-0"
                            }`}
                    >
                        <ul className="space-y-6 pt-4 pb-6 px-4">
                            {category.items.map((item) => {
                                const imageSrc = item.image;
                                const isItemOpen = openItems.includes(item.name);

                                if (imageSrc) {
                                    return (
                                        <li key={item.name} className="border-b border-[rgba(216,161,43,0.35)] pb-4">
                                            <button
                                                onClick={() => toggleItem(item.name)}
                                                className="w-full flex justify-between items-start gap-4 text-left hover:bg-white/55 -mx-2 px-2 py-3 rounded transition-colors group"
                                            >
                                                <div className="flex-1">
                                                    <p className="font-medium text-brand-dark flex items-center gap-2 flex-wrap">
                                                        <span>{item.name}</span>
                                                        <span className="text-xs text-stone-500 font-normal group-hover:text-brand-secondary transition-colors">
                                                            {isItemOpen ? "(ocultar imagen)" : "(ver imagen)"}
                                                        </span>
                                                    </p>
                                                    {item.description && (
                                                        <p className="text-sm text-stone-600 mt-1">
                                                            {item.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <ChevronDown
                                                        className={`w-5 h-5 text-stone-400 transition-transform duration-300 flex-shrink-0 group-hover:text-brand-primary ${isItemOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                    <span className="font-medium text-stone-900 whitespace-nowrap">
                                                        {item.price.toFixed(2)} €
                                                    </span>
                                                </div>
                                            </button>

                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isItemOpen
                                                        ? "max-h-96 opacity-100 mt-4"
                                                        : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <Image
                                                    src={imageSrc}
                                                    alt={item.name}
                                                    width={800}
                                                    height={450}
                                                    className="w-full h-64 object-cover rounded-lg border border-[rgba(216,161,43,0.45)] shadow-md"
                                                />
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        key={item.name}
                                        className="flex justify-between gap-4 border-b border-[rgba(216,161,43,0.35)] pb-4"
                                    >
                                        <div>
                                            <p className="font-medium text-brand-dark">
                                                {item.name}
                                            </p>
                                            {item.description && (
                                                <p className="text-sm text-stone-600 mt-1">
                                                    {item.description}
                                                </p>
                                            )}
                                        </div>
                                        <span className="font-medium text-brand-color whitespace-nowrap">
                                            {item.price.toFixed(2)} €
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </section>
            ))}
        </div>
    );
}
