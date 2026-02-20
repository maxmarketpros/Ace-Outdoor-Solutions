import Image from "next/image";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-[92vh] flex items-center pt-[90px]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-backyard.jpg"
                    alt="Custom outdoor living space with pool, pavilion, and fireplace built by Ace Outdoors Solutions"
                    fill
                    className="object-cover"
                    priority
                    quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            </div>

            {/* Content */}
            <div className="container-wide relative z-10 py-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold !text-white leading-[1.1] mb-6 font-[family-name:var(--font-heading)]">
                        Custom Outdoor Living in Santa Fe, Texas
                    </h1>
                    <p className="text-lg sm:text-xl text-white/85 mb-8 leading-relaxed max-w-xl font-[family-name:var(--font-body)]">
                        Patios, outdoor kitchens, shade, and hardscapes built to fit your space and your budget.
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <a href="#contact" className="btn btn-white">
                            Get Free Estimate
                        </a>
                        <a href="tel:3462370573" className="btn btn-outline-white">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Call (346) 237-0573
                        </a>
                    </div>
                    <p className="text-sm text-white/60 flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Response within one business day
                    </p>
                </div>
            </div>
        </section>
    );
}
