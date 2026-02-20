const nearbyAreas = [
    "Webster",
    "League City",
    "Friendswood",
    "Santa Fe",
    "Pearland",
    "Manvel",
];

export default function ServiceArea() {
    return (
        <section id="service-area" className="section-padding bg-white" aria-labelledby="service-area-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        Where We Work
                    </p>
                    <h2 id="service-area-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
                        Proudly Serving Santa Fe and Surrounding Communities
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
                    {/* Area Chips */}
                    <div>
                        <div className="flex flex-wrap gap-2">
                            {nearbyAreas.map((area, i) => (
                                <span
                                    key={i}
                                    className="px-3.5 py-1.5 text-sm font-medium bg-[var(--color-bg)] text-[var(--color-ink)] border border-[var(--color-border)] rounded-sm"
                                >
                                    {area}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="card p-8 flex flex-col items-center justify-center text-center min-h-[220px] bg-[var(--color-bg)]">
                        <svg className="w-12 h-12 text-[var(--color-primary)] mb-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <h3 className="text-lg font-bold text-[var(--color-ink)] mb-1 font-[family-name:var(--font-heading)]">
                            Serving Santa Fe, Texas
                        </h3>
                        <p className="text-sm text-[var(--color-muted)]">
                            and surrounding areas in Galveston County
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
