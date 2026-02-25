"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "500+", label: "Projects Completed" },
    { value: "5★", label: "Rated Service" },
    { value: "100%", label: "Veteran Owned" },
];

export default function Hero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section id="hero" className="relative min-h-[100svh] flex flex-col">
            {/* ── Background with Ken Burns zoom ── */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/images/hero-backyard.jpg"
                    alt="Custom outdoor living space with pool, pavilion, and fireplace built by Ace Outdoors Solutions"
                    fill
                    className="object-cover scale-105 animate-[heroZoom_25s_ease-in-out_infinite_alternate]"
                    priority
                    quality={90}
                />
                {/* Multi-layer overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
            </div>

            {/* ── Main Content ── */}
            <div className="container-wide relative z-10 flex-1 flex items-center pt-[140px] md:pt-[120px] pb-10">
                <div
                    className={`max-w-2xl transition-all duration-1000 ease-out ${visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                        }`}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-white/20 bg-white/10 backdrop-blur-sm rounded-sm">
                        <svg className="w-3.5 h-3.5 text-[var(--color-star)]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                        </svg>
                        <span className="text-xs font-semibold tracking-wider uppercase text-white/80">
                            Veteran-Owned Builder&ensp;·&ensp;Santa Fe, TX
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4rem] font-bold !text-white leading-[1.08] mb-6 font-[family-name:var(--font-heading)] drop-shadow-lg">
                        Custom Outdoor Living<br className="hidden sm:block" />
                        {" "}in Santa Fe, Texas
                    </h1>

                    {/* Decorative accent */}
                    <div className="w-16 h-[3px] bg-[var(--color-primary-light)] mb-6" />

                    {/* Subhead */}
                    <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-xl font-[family-name:var(--font-body)] drop-shadow-sm">
                        Patios, outdoor kitchens, shade structures, and hardscapes — built to fit your space and your budget.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        <a href="#contact" className="btn btn-white group">
                            Get Free Estimate
                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </a>
                        <a href="tel:3462370573" onClick={() => typeof window !== 'undefined' && (window as any).gtag_report_conversion?.('tel:3462370573')} className="btn btn-outline-white">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Call (346) 237-0573
                        </a>
                    </div>

                    {/* Response time */}
                    <p className="text-sm text-white/50 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Response within one business day
                    </p>
                </div>
            </div>

            {/* ── Stats Bar ── */}
            <div className="relative z-10">
                <div className="container-wide">
                    <div
                        className={`grid grid-cols-2 md:grid-cols-4 border border-white/15 bg-white/5 backdrop-blur-md rounded-sm mb-0 transition-all duration-1000 delay-500 ease-out ${visible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                            }`}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={i}
                                className={`px-6 py-5 text-center ${i < stats.length - 1 ? "border-r border-white/10" : ""
                                    } ${i < 2 ? "border-b md:border-b-0 border-white/10" : ""}`}
                            >
                                <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-heading)]">
                                    {stat.value}
                                </p>
                                <p className="text-xs sm:text-sm text-white/60 mt-1 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Scroll indicator ── */}
            <div className="relative z-10 flex justify-center pb-6 pt-4">
                <a
                    href="#services"
                    aria-label="Scroll to services"
                    className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
                >
                    <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explore</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
