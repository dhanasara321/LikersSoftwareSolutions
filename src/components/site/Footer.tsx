import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
} from "lucide-react";

import logo from "@/assets/logo.png";

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
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61590247296207",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/likers_2026",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/liker-s-software-solutions-3b4496411/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/likers_2026/",
  },
  // {
  //   icon: Github,
  //   label: "GitHub",
  //   href: "https://github.com/dhanasara321",
  // },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Main Footer */}
      <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>

          <div className="flex items-center gap-3 mb-4">

            <div className="h-12 w-12 overflow-hidden rounded-xl bg-white shadow-glow flex items-center justify-center">
              <img
                src={logo}
                alt="Liker's Software Solution"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="leading-tight">
              <div className="font-display font-bold text-lg">
                Liker's
              </div>

              <div className="text-[10px] uppercase tracking-wider text-primary-foreground/70">
                Software Solution
              </div>
            </div>

          </div>

          <p className="text-sm text-primary-foreground/70 leading-relaxed mb-5">
            Helping businesses grow online with beautiful websites,
            powerful web apps, and result-driven digital marketing.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">

            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="h-10 w-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/15 flex items-center justify-center hover:bg-primary-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}

          </div>
        </div>

        {/* Quick Links */}
        <div>

          <h3 className="font-display font-semibold text-base mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2.5">

            {quickLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base"
                >
                  {l.label}
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* Services */}
        <div>

          <h3 className="font-display font-semibold text-base mb-4">
            Services
          </h3>

          <ul className="space-y-2.5">

            {services.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-base"
                >
                  {s}
                </a>
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h3 className="font-display font-semibold text-base mb-4">
            Get in Touch
          </h3>

          <ul className="space-y-3 text-sm text-primary-foreground/70">

            <li>
              Chennai, Tamil Nadu, India
            </li>

            <li>
              +91 0000000000
            </li>

            <li>
              likerssoftwaresolutions@gmail.com
            </li>

            <li>
              www.likerssoftware.com
            </li>

          </ul>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">

        <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">

          <p className="text-xs text-primary-foreground/60 text-center sm:text-left">
            © {new Date().getFullYear()} Liker's Software Solution.
            All rights reserved.
          </p>

          <div className="flex gap-5 text-xs text-primary-foreground/60">

            <a
              href="#"
              className="hover:text-primary-foreground transition-base"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-primary-foreground transition-base"
            >
              Terms of Service
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};
