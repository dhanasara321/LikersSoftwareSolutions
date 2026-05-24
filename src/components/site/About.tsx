import { CheckCircle2, Target, Lightbulb } from "lucide-react";

const points = [
  { icon: Target, title: "Mission-driven", text: "Aligned with your business goals from day one." },
  { icon: Lightbulb, title: "Innovation-led", text: "Modern stack, future-ready architecture." },
  { icon: CheckCircle2, title: "Client success", text: "Long-term partnerships, measurable results." },
];

export const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            About Us
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
            Engineering digital products that
            <span className="gradient-text"> drive growth</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-5">
            Liker's Software Solution is a Chennai-based software company helping
            startups and enterprises ship reliable, beautiful, and scalable
            products. Our team blends design thinking with deep engineering
            expertise to turn ideas into production-ready solutions.
          </p>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            From your first website to a complex SaaS platform, we own the
            journey — strategy, design, development, and growth — so you can
            focus on what matters most: your customers.
          </p>

          <div className="space-y-4">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4 items-start">
                <div className="shrink-0 h-11 w-11 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{p.title}</div>
                  <div className="text-sm text-muted-foreground">{p.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 gradient-primary rounded-3xl opacity-20 blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-elegant-lg gradient-card border border-border p-8 lg:p-10">
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: "8+", l: "Types of Solutions" },
                { v: "4+", l: "Expert team members" },
                { v: "98%", l: "Client retention" },
                { v: "24/7", l: "Support available" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-background rounded-xl p-5 border border-border hover:shadow-elegant transition-base hover:-translate-y-1"
                >
                  <div className="text-3xl lg:text-4xl font-display font-bold gradient-text">
                    {s.v}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-primary text-primary-foreground">
              <div className="text-sm font-medium opacity-80">Our promise</div>
              <div className="text-lg font-display font-semibold mt-1">
                On-time delivery, transparent communication, and code you can build on.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
