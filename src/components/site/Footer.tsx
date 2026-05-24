import { Code2, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];
const services = [
  "Static Websites",
  "Dynamic Websites",
  "Web Applications",
  "Digital Marketing",
];
const socials = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "Twitter" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Github, label: "GitHub" },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center border border-primary-foreground/20">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base">Liker's</div>
              <div className="text-[10px] uppercase tracking-wider text-primary-foreground/70">Software Solution</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
            Helping businesses grow online with beautiful websites, powerful
            web apps, and result-driven digital marketing.
          </p>
          <div className="flex gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="h-9 w-9 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground hover:text-primary transition-base"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4">Services</h3>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-base mb-4">Get in Touch</h3>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li>Chennai, Tamil Nadu, India</li>
            <li>+91 98765 43210</li>
            <li>hello@likerssoftware.com</li>
            <li>www.likerssoftware.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Liker's Software Solution. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-primary-foreground/60">
            <a href="#" className="hover:text-primary-foreground transition-base">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-base">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
