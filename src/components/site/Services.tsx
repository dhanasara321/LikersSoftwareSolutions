import { Layout, Code2, AppWindow, Megaphone, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Static Website Design",
    desc: "Lightning-fast, SEO-friendly static websites with stunning UI — perfect for portfolios, landing pages, and small businesses.",
  },
  {
    icon: Code2,
    title: "Dynamic Website Development",
    desc: "Database-driven websites with content management, user accounts, and dashboards that scale with your business.",
  },
  {
    icon: AppWindow,
    title: "Web Application Development",
    desc: "Custom SaaS platforms and enterprise web apps built with React, Node.js, and modern cloud infrastructure.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing — SEO & Social",
    desc: "Data-driven SEO, performance ads, and social media strategies that bring qualified traffic and real conversions.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Our Services
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Solutions tailored to <span className="gradient-text">grow your business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From idea to launch and beyond — full-stack services under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative gradient-card rounded-2xl p-7 border border-border hover:shadow-elegant-lg hover:-translate-y-2 transition-smooth overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* corner glow */}
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-smooth" />

              <div className="h-14 w-14 rounded-xl gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:scale-110 transition-base">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="font-display font-semibold text-xl text-foreground mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.desc}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-accent transition-base"
              >
                Learn more
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-base" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
