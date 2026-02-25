"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="section-padding" aria-labelledby="about-heading">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
                    {/* Photo */}
                    <div className="card overflow-hidden">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src="/images/pavilion-exterior.jpg"
                                alt="Ace Outdoors Solutions project — large gable pavilion with stone fireplace by pool"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Copy */}
                    <div>
                        <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                            About Us
                        </p>
                        <h2 id="about-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] mb-6">
                            Meet Zach
                        </h2>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-4">
                            Navy veteran and outdoor-focused builder, Zach brings over a decade of craftsmanship and clear communication to every project. From custom patios and outdoor kitchens to full backyard transformations, he treats every home like his own.
                        </p>
                        <p className="text-[var(--color-muted)] leading-relaxed mb-6">
                            Ace Outdoors Solutions was built on the values of integrity, transparency, and hard work. When you work with us, you get a hands-on owner who is involved from the first estimate to the final walkthrough.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="#contact" className="btn btn-primary">
                                Get Your Free Estimate
                            </a>
                            <a href="tel:3462370573" onClick={() => typeof window !== 'undefined' && (window as any).gtag_report_conversion?.('tel:3462370573')} className="btn btn-secondary">
                                Call Zach
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
