import { useEffect, useRef } from "react";
import { experience } from "../data/portfolio";
export default function Experience() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in");});},{threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <section id="experience">
      <div className="section-wrap" ref={ref}>
        <p className="s-label reveal">Where I've Worked</p>
        <h2 className="s-title reveal">Work <span className="g">Experience</span></h2>
        {experience.map((e,i)=>(
          <div className="exp-card reveal" key={i}>
            <div className="exp-header">
              <div><div className="exp-role">{e.role}</div><div className="exp-company">{e.company} &nbsp;·&nbsp; {e.type}</div></div>
              <div className="exp-badge">{e.period}</div>
            </div>
            <ul className="exp-list">
              {e.bullets.map((b,j)=>(
                <li className="exp-item" key={j}><span className="exp-arrow">→</span><span>{b}</span></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
