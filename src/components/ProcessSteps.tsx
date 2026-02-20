const steps = [
    {
        number: "01",
        title: "Free Estimate & Scope",
        description: "We visit your property, discuss your vision, and deliver a detailed, itemized estimate.",
    },
    {
        number: "02",
        title: "Design & Materials Selection",
        description: "Collaborate on layout, materials, colors, and finishes to match your style and budget.",
    },
    {
        number: "03",
        title: "Build Phase",
        description: "Our crew handles the build with clean daily sites, clear timelines, and regular updates.",
    },
    {
        number: "04",
        title: "Final Walkthrough",
        description: "We walk the finished project with you to make sure every detail meets your expectations.",
    },
];

const expectations = [
    "Clear, consistent communication",
    "Transparent scheduling and timelines",
    "Clean job sites at end of each day",
    "Respectful, professional crews",
];

export default function ProcessSteps() {
    return (
        <section id="process" className="section-padding bg-white" aria-labelledby="process-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        How We Work
                    </p>
                    <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        Our Process
                    </h2>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            <div className="card p-6 h-full">
                                <span className="text-3xl font-bold text-[var(--color-primary)]/15 font-[family-name:var(--font-heading)] block mb-3">
                                    {step.number}
                                </span>
                                <h3 className="text-base font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-body)]">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                            {/* Connector line (desktop only) */}
                            {i < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-[var(--color-border)]" />
                            )}
                        </div>
                    ))}
                </div>

                {/* What You Can Expect */}
                <div className="card p-8 max-w-2xl mx-auto bg-[var(--color-bg)]">
                    <h3 className="text-lg font-bold text-[var(--color-ink)] mb-4 text-center font-[family-name:var(--font-heading)]">
                        What You Can Expect
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {expectations.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--color-muted)]">
                                <svg className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
