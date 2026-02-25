"use client";

export default function EstimateForm() {
    return (
        <section id="contact" className="section-padding bg-white" aria-labelledby="estimate-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        Let&apos;s Talk
                    </p>
                    <h2 id="estimate-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        Get Your Free Estimate
                    </h2>
                    <p className="text-[var(--color-muted)] mt-3 max-w-lg mx-auto">
                        Tell us about your project and we&apos;ll get back to you within one business day.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Form Embed */}
                    <div className="lg:col-span-2">
                        <div className="card overflow-hidden form-iframe-wrapper">
                            <iframe
                                src="https://api.leadconnectorhq.com/widget/form/awJLTH10vEPuvTuwdF90"
                                style={{ width: "100%", height: "100%", border: "none", borderRadius: "2px" }}
                                id="inline-awJLTH10vEPuvTuwdF90"
                                data-layout='{"id":"INLINE"}'
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="WebSite Form Template"
                                data-height="695"
                                data-layout-iframe-id="inline-awJLTH10vEPuvTuwdF90"
                                data-form-id="awJLTH10vEPuvTuwdF90"
                                title="Ace Outdoors Solutions — Request a Free Estimate"
                            />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="flex flex-col gap-5">
                        {/* Prefer to Talk */}
                        <div className="card p-6">
                            <h3 className="text-base font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-body)]">
                                Prefer to Talk?
                            </h3>
                            <p className="text-sm text-[var(--color-muted)] mb-4">
                                Give Zach a call and let&apos;s discuss your project.
                            </p>
                            <a
                                href="tel:3462370573"
                                onClick={() => typeof window !== 'undefined' && (window as any).gtag_report_conversion?.('tel:3462370573')}
                                className="btn btn-primary w-full justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>
                                (346) 237-0573
                            </a>
                        </div>

                        {/* Email Us */}
                        <div className="card p-6">
                            <h3 className="text-base font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-body)]">
                                Email Us
                            </h3>
                            <p className="text-sm text-[var(--color-muted)] mb-4">
                                Send us a message and we&apos;ll respond promptly.
                            </p>
                            <a
                                href="mailto:zach@aceoutdoorsolutions.com"
                                className="btn btn-secondary w-full justify-center text-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                zach@aceoutdoorsolutions.com
                            </a>
                        </div>

                        {/* Service Promise */}
                        <div className="card p-6 bg-[var(--color-bg)]">
                            <h3 className="text-base font-bold text-[var(--color-ink)] mb-3 font-[family-name:var(--font-body)]">
                                Our Promise
                            </h3>
                            <ul className="space-y-2.5">
                                {[
                                    "Free, no-obligation estimate",
                                    "Response within one business day",
                                    "Detailed, itemized pricing",
                                    "No pressure, no hidden fees",
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-muted)]">
                                        <svg className="w-4 h-4 text-[var(--color-primary)] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
