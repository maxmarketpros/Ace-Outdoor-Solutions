"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Service Area", href: "#service-area" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/95 backdrop-blur-sm shadow-sm"
                : "bg-white"
                }`}
        >
            <div className="container-wide flex items-center justify-between h-[90px]">
                {/* Logo */}
                <a href="#" className="flex-shrink-0" aria-label="Ace Outdoors Solutions Home">
                    <Image
                        src="/ace-logo.png"
                        alt="Ace Outdoors Solutions"
                        width={270}
                        height={72}
                        className="h-[60px] w-auto"
                        priority
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-3 py-2 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:3462370573"
                        onClick={() => typeof window !== 'undefined' && (window as any).gtag_report_conversion?.('tel:3462370573')}
                        className="text-sm font-semibold text-[var(--color-secondary)] hover:text-[var(--color-secondary-dark)] transition-colors flex items-center gap-1.5"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        (346) 237-0573
                    </a>
                    <a href="#contact" className="btn btn-primary text-sm">
                        Get Free Estimate
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden p-2 text-[var(--color-ink)]"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Panel */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[500px] border-t border-[var(--color-border)]" : "max-h-0"
                    }`}
            >
                <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile navigation">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-3 py-2.5 text-base font-medium text-[var(--color-muted)] hover:text-[var(--color-primary)] hover:bg-[var(--color-bg-alt)] transition-colors rounded-sm"
                        >
                            {link.label}
                        </a>
                    ))}
                    <hr className="border-[var(--color-border)] my-2" />
                    <a
                        href="tel:3462370573"
                        onClick={() => typeof window !== 'undefined' && (window as any).gtag_report_conversion?.('tel:3462370573')}
                        className="px-3 py-2.5 text-base font-semibold text-[var(--color-secondary)] flex items-center gap-2"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        (346) 237-0573
                    </a>
                    <a href="#contact" onClick={() => setMobileOpen(false)} className="btn btn-primary text-center mt-2">
                        Get Free Estimate
                    </a>
                </nav>
            </div>
        </header>
    );
}
