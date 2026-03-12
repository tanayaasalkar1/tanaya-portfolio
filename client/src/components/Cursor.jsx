import { useEffect, useRef } from "react";

export default function Cursor() {
  const outer = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (outer.current) {
        outer.current.style.left = e.clientX + "px";
        outer.current.style.top = e.clientY + "px";
      }
      if (dot.current) {
        dot.current.style.left = e.clientX + "px";
        dot.current.style.top = e.clientY + "px";
      }
    };

    const enter = () => outer.current?.classList.add("active");
    const leave = () => outer.current?.classList.remove("active");

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a,button,.btn,.skill-card,.proj-card,.edu-card,.stat-box").forEach(el => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={outer} className="cursor-outer" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
