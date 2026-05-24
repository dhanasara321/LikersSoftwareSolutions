import { Users, Zap, Search, BadgeDollarSign, Headphones, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Experienced Team", text: "Senior developers, designers, and strategists working on your project." },
  { icon: Zap, title: "Fast Delivery", text: "Agile sprints and clear timelines — we ship on schedule, every time." },
  { icon: Search, title: "SEO Optimized", text: "Built-in technical SEO so your site ranks higher from day one." },
  { icon: BadgeDollarSign, title: "Affordable Pricing", text: "Transparent packages designed to fit startups and enterprises alike." },
  { icon: Headphones, title: "24/7 Customer Support", text: "Real humans ready to help across email, phone, and live chat." },
  { icon: ShieldCheck, title: "Secure & Reliable", text: "Industry-standard security, regular backups, and 99.9% uptime." },
];

export const WhyChooseUs = () => {
  return (
    <section id="why" className="py-20 lg:py-28 gradient-soft">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Why Choose Us
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What makes us <span className="gradient-text">different</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Six reasons clients trust Liker's to build and grow their digital products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-background rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-elegant transition-base"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-primary-soft flex items-center justify-center group-hover:gradient-primary transition-base">
                  <f.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-base" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">
                  {f.title}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
