import { ExternalLink } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  { img: p1, tag: "E-commerce", title: "ShopSphere Online Store", desc: "A full-featured e-commerce platform with payment integration." },
  { img: p2, tag: "SaaS Dashboard", title: "Analytics Pro", desc: "Real-time analytics dashboard for data-driven businesses." },
  { img: p3, tag: "Mobile App", title: "MediTrack Health", desc: "Cross-platform mobile app for health and wellness tracking." },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Portfolio
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Selected <span className="gradient-text">recent work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A glimpse of products we've designed, built, and shipped.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-elegant-lg transition-smooth"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-700"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end p-6">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary-foreground font-semibold translate-y-4 group-hover:translate-y-0 transition-smooth"
                >
                  View case study <ExternalLink className="h-4 w-4" />
                </a>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {p.tag}
                </span>
                <h3 className="font-display font-semibold text-lg text-foreground mt-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
