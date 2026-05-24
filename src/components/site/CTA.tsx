import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-10 lg:p-16 shadow-elegant-lg">
          {/* Decorative */}
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wider mb-5">
                <Calendar className="h-3.5 w-3.5" />
                Free Consultation Available
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight mb-4">
                Ready to launch your next big idea?
              </h2>
              <p className="text-primary-foreground/80 text-base lg:text-lg max-w-xl">
                Book a free 30-minute strategy call. We'll review your goals
                and share a clear roadmap — no commitment required.
              </p>
            </div>
            <div className="flex lg:justify-end">
              <Button asChild variant="hero" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elegant-lg">
                <a href="#contact">
                  Book Now <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
