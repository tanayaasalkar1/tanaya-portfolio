import { useEffect, useRef } from "react";
import { education, certifications } from "../data/portfolio";
export default function Education() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(entries=>{entries.forEach((e,i)=>{if(e.isIntersecting)setTimeout(()=>e.target.classList.add("in"),i*80);});},{threshold:0.1});
    ref.current?.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);
  return (
    <section id="education">
      <div className="section-wrap" ref={ref}>
        <p className="s-label reveal">Academic Background</p>
        <h2 className="s-title reveal">Education &amp; <span className="g">Certifications</span></h2>
        <div className="edu-list">
          {education.map((e,i)=>(
            <div className="edu-card reveal" key={i}>
              <div><div className="edu-degree">{e.degree}</div><div className="edu-school">{e.school}</div></div>
              <div className="edu-meta">{e.period}<br/>{e.score}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:"3.5rem"}}>
          <p className="s-label reveal" style={{marginBottom:"1.5rem"}}>Certifications</p>
          <div className="cert-grid reveal">
            {certifications.map(c=><span className="cert-pill" key={c}>{c}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
