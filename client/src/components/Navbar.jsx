import { useState, useEffect } from "react";
const links = ["skills", "experience", "projects", "education", "contact"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      links.forEach(id => {
        const s = document.getElementById(id);
        if (s && window.scrollY >= s.offsetTop - 140) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-logo">TA_<span className="blink" /></div>
      <ul className={`nav-links ${open ? "open" : ""}`}>
        {links.map(l => (
          <li key={l}><a href={`#${l}`} className={active === l ? "active" : ""} onClick={() => setOpen(false)}>{l}</a></li>
        ))}
      </ul>
      <button className="hamburger" onClick={() => setOpen(o => !o)} aria-label="menu">
        <span /><span /><span />
      </button>
    </nav>
  );
}
