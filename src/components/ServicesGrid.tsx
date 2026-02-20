import Image from "next/image";

const services = [
    {
        title: "Custom Patios",
        description: "Concrete, stone, and paver patios designed for entertaining, relaxation, and everyday living.",
        image: "/images/covered-patio-interior.jpg",
        alt: "Custom covered patio with stone fireplace, ceiling fan, and bar seating by pool",
    },
    {
        title: "Outdoor Kitchens",
        description: "Fully equipped outdoor kitchens with grills, countertops, sinks, and storage built to last.",
        image: "/images/outdoor-kitchen-stone.jpg",
        alt: "Stone outdoor kitchen with built-in grill and stainless steel appliances on concrete patio",
    },
    {
        title: "Fireplaces & Fire Pits",
        description: "Custom stone fireplaces and fire pits that create a warm gathering point in any backyard.",
        image: "/images/pavilion-fireplace.jpg",
        alt: "Gable roof pavilion with stone fireplace and pool-side seating",
    },
    {
        title: "Pergolas & Shade Systems",
        description: "Louvered pergolas, gable structures, and shade systems for year-round outdoor comfort.",
        image: "/images/louvered-pergola.jpg",
        alt: "Modern louvered pergola over dining area and outdoor kitchen",
    },
    {
        title: "Hardscaping & Walkways",
        description: "Brick and paver pathways, retaining walls, and hardscape features that define your outdoor space.",
        image: "/images/outdoor-kitchen-brick.jpg",
        alt: "Outdoor kitchen with bar seating on brick paver patio with stone accents",
    },
    {
        title: "Water Features",
        description: "Spillways, fountains, and water walls that add elegance and ambient sound to your backyard.",
        image: "/images/sunset-pool.jpg",
        alt: "Backyard pool with water feature walls and spa at sunset",
    },
    {
        title: "Outdoor Lighting",
        description: "Strategic landscape and architectural lighting for safety, ambiance, and curb appeal.",
        image: "/images/pergola-kitchen-pool.jpg",
        alt: "Covered pergola with recessed lighting over outdoor kitchen bar by pool",
    },
    {
        title: "Landscape Edging",
        description: "Clean, defined borders for flower beds, lawns, and pathways using stone, steel, or concrete.",
        image: "/images/pavilion-exterior.jpg",
        alt: "Exterior view of large gable pavilion with stone columns by pool and landscaping",
    },
    {
        title: "Drainage Solutions",
        description: "French drains, grading, and surface drainage to protect your property from water damage.",
        image: "/images/pergola-grill-brick.jpg",
        alt: "Traditional pergola with outdoor grill on brick paver patio",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding" aria-labelledby="services-heading">
            <div className="container-wide">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">
                        What We Build
                    </p>
                    <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-heading)]">
                        Our Services
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <div key={i} className="card overflow-hidden group">
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2 font-[family-name:var(--font-heading)]">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-3">
                                    {service.description}
                                </p>
                                <a
                                    href="#contact"
                                    className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors inline-flex items-center gap-1"
                                >
                                    Get a Quote
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
