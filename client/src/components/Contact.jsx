import { useEffect, useRef } from "react";
import { hero } from "../data/portfolio";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) setTimeout(() => e.target.classList.add("in"), i * 80);
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const contacts = [
    { icon: "✉", label: "Email", val: hero.email, href: `mailto:${hero.email}`, cta: "Open inbox →" },
    { icon: "⌥", label: "GitHub", val: "github.com/tanayaasalkar1", href: hero.github, cta: "View repos →" },
    { icon: "in", label: "LinkedIn", val: "linkedin.com/in/tanayaasalkar", href: hero.linkedin, cta: "Connect →" },
  ];

  return (
    <section id="contact">
      <div className="section-wrap" ref={ref}>
        <div className="contact-inner">
          <p className="s-label reveal">Let's Connect</p>
          <h2 className="s-title reveal">Get In <span className="g">Touch</span></h2>

          <p className="contact-hero-text reveal">
            I'm currently open to <strong>full-stack developer</strong>, front-end, or SDE roles.<br />
            Whether you have a project in mind, a collaboration idea,<br />
            or just want to say hi — I'd love to hear from you.
          </p>

          <div className="contact-cards reveal">
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="cc">
                <div className="cc-icon">{c.icon}</div>
                <div>
                  <div className="cc-label">{c.label}</div>
                  <div className="cc-val">{c.val}</div>
                </div>
                <div className="cc-arrow">{c.cta}</div>
              </a>
            ))}
          </div>

          <div className="contact-cta-row reveal">
            <div className="cta-text">
              <div className="cta-heading">Open to <span>new opportunities</span></div>
              <div className="cta-sub">// Available · Pune, Maharashtra · Full-time / Remote</div>
            </div>
            <a href={`mailto:${hero.email}`} className="btn btn-primary">Say Hello →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
