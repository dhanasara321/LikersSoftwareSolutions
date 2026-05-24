import { Quote, Star } from "lucide-react";

const testimonials = [
 {
  name: "Dhana Lakshmi",
  role: "Founder",
  text: (
    <>
      <b>True visionary leader</b>
      <br />
      "Rare gift for taking complex, abstract ideas and translating them into tangible, successful realities."
    </>
  ),
},
  {
    name: "Dhana Lakshmi",
    role: "Developer,Markiting Head",
    text: <><b>High performance</b><br /> "Collaborate efficiently, meet goals, and produce high-quality outcomes"</>
  },
  {
    name: "Dhana Lakshmi",
    role: "Docent",
    text: "From scoping to launch in 10 weeks. Clean code, beautiful design, and a dashboard our doctors actually love using.",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 lg:py-28 gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
           Our teams
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            <span className="gradient-text"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative bg-background rounded-2xl p-7 border border-border shadow-sm hover:shadow-elegant transition-base"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-11 w-11 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
