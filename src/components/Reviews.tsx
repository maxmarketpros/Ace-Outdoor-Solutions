const placeholderReviews = [
    {
        initials: "TH",
        name: "Travis H.",
        stars: 5,
        text: "Zach and his crew transformed our backyard. The new custom patio and outdoor kitchen are exactly what we wanted. Professional, clean, and top-quality work.",
    },
    {
        initials: "LM",
        name: "Linda M.",
        stars: 5,
        text: "Being a veteran-owned business was a huge plus for us. The attention to detail on our stone fireplace was incredible. They were on time and on budget.",
    },
    {
        initials: "BK",
        name: "Brian K.",
        stars: 5,
        text: "Best hardscaping contractor in Santa Fe. They built a beautiful pergola and matched our existing brickwork perfectly. Highly recommend Ace Outdoors!",
    },
];

function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            className={`w-4 h-4 ${filled ? "text-[var(--color-star)]" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 24 24"
        >
            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    );
}

export default function Reviews() {
    return (
        <section id="reviews" className="section-padding" aria-labelledby="reviews-heading">
            <div className="container-wide">
                <div className="text-center mb-4">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        Testimonials
                    </p>
                    <h2 id="reviews-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        What Our Clients Say
                    </h2>
                </div>

                {/* Placeholder Note */}
                <p className="text-center text-sm text-[var(--color-muted)] mb-10 italic">
                    Replace these with real customer feedback.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                    {placeholderReviews.map((review, i) => (
                        <div key={i} className="card p-6 flex flex-col gap-4">
                            {/* Stars */}
                            <div className="flex gap-0.5" aria-label={`${review.stars} out of 5 stars`}>
                                {Array.from({ length: 5 }).map((_, j) => (
                                    <StarIcon key={j} filled={j < review.stars} />
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-2 border-t border-[var(--color-border)]">
                                <div className="w-9 h-9 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold">
                                    {review.initials}
                                </div>
                                <span className="text-sm font-semibold text-[var(--color-ink)]">
                                    {review.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
