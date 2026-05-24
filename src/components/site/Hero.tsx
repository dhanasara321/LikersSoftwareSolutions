import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden gradient-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 gradient-hero opacity-80" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 text-primary-glow" />
            Trusted IT Solutions Partner
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-7xl text-primary-foreground leading-[1.05] mb-6">
            Liker's Software <br />
            <span className="bg-gradient-to-r from-primary-glow to-primary-foreground bg-clip-text text-transparent">
              Solution
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-primary-foreground/85 font-medium mb-4">
            Build Your Digital Presence With Us
          </p>

          <p className="text-base sm:text-lg text-primary-foreground/70 mb-10 max-w-2xl leading-relaxed">
            We craft scalable websites, powerful web applications, and
            data-driven digital marketing strategies that help your business
            grow faster in the digital era.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="hero" size="xl">
              <a href="#services">
                Get Started <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 sm:gap-12 mt-16 max-w-xl">
            {[
              // { v: "150+", l: "Projects Delivered" },
              // { v: "80+", l: "Happy Clients" },
              // { v: "5★", l: "Avg. Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl sm:text-4xl font-display font-bold text-primary-foreground">
                  {s.v}
                </div>
                <div className="text-xs sm:text-sm text-primary-foreground/70 mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
