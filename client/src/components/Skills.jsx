import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";
export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e,i) => { if(e.isIntersecting) setTimeout(()=>e.target.classList.add("in"),i*80); });
    },{threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <section id="skills">
      <div className="section-wrap" ref={ref}>
        <p className="s-label reveal">Technical Arsenal</p>
        <h2 className="s-title reveal">Skills &amp; <span className="g">Tools</span></h2>
        <div className="skills-grid">
          {skills.map((s,i)=>(
            <div className="skill-card reveal" key={i} style={{transitionDelay:`${i*60}ms`}}>
              <div className="skill-cat"><span />{s.category}</div>
              <div className="skill-tags">{s.items.map(t=><span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
