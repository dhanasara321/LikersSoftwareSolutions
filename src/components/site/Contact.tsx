import { Mail, MapPin, Phone, Globe, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contacts = [
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu, India" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: Mail, label: "Email", value: "hello@likerssoftware.com" },
  { icon: Globe, label: "Website", value: "www.likerssoftware.com" },
];

export const Contact = () => {

  // Replace YOUR_FORM_ID with Formspree Form ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  if (state.succeeded) {
    return (
      <section
        id="contact"
        className="py-20 lg:py-28 bg-background"
      >
        <div className="container text-center">
          <div className="max-w-xl mx-auto gradient-card border border-border rounded-2xl p-10 shadow-elegant">
            <h2 className="text-3xl font-bold text-green-500 mb-4">
              Message Sent Successfully!
            </h2>

            <p className="text-muted-foreground text-lg">
              Thanks for contacting us. We’ll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Contact Us
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Let's build{" "}
            <span className="gradient-text">
              something great
            </span>
          </h2>

          <p className="text-muted-foreground text-lg">
            Tell us about your project — we'll reply within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex gap-4 items-start p-5 rounded-xl gradient-card border border-border hover:shadow-elegant transition-base"
              >
                <div className="shrink-0 h-11 w-11 rounded-lg gradient-primary flex items-center justify-center shadow-sm">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {c.label}
                  </div>

                  <div className="text-foreground font-medium mt-1 break-words">
                    {c.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 gradient-card border border-border rounded-2xl p-7 lg:p-9 shadow-elegant"
          >

            {/* Name & Email */}
            <div className="grid sm:grid-cols-2 gap-5 mb-5">

              <div className="space-y-2">
                <Label htmlFor="name">
                  Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                />

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

            </div>

            {/* Subject */}
            <div className="space-y-2 mb-5">
              <Label htmlFor="subject">
                Subject
              </Label>

              <Input
                id="subject"
                name="subject"
                placeholder="How can we help?"
              />
            </div>

            {/* Message */}
            <div className="space-y-2 mb-6">
              <Label htmlFor="message">
                Message
              </Label>

              <Textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your project..."
              />

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="hero"
              size="lg"
              disabled={state.submitting}
              className="w-full sm:w-auto"
            >
              {state.submitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 ml-2" />
                </>
              )}
            </Button>

          </form>
        </div>
      </div>
    </section>
  );
};