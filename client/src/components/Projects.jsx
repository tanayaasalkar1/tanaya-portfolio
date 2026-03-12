import { useEffect, useRef } from "react";
import { projects } from "../data/portfolio";
export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add("in"),i*100);});},{threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <section id="projects">
      <div className="section-wrap" ref={ref}>
        <p className="s-label reveal">What I've Built</p>
        <h2 className="s-title reveal">Featured <span className="g">Projects</span></h2>
        <div className="projects-grid">
          {projects.map((p,i)=>(
            <div className="proj-card reveal" key={i} style={{transitionDelay:`${i*80}ms`}}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-name">{p.name}</div>
              <div className="proj-desc-short">// {p.desc}</div>
              <p className="proj-about">{p.about}</p>
              <div className="proj-stack">{p.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div>
              <div className="proj-links">
                <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">⌥ GitHub</a>
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="proj-link">↗ Live Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
