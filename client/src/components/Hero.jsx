import { hero } from "../data/portfolio";
export default function Hero() {
  return (
    <>
      <div className="orb orb-1" /><div className="orb orb-2" /><div className="orb orb-3" />
      <section id="hero">
        <div style={{width:"100%",position:"relative"}}>
          <p className="hero-badge"><span className="dot" /> Available for opportunities</p>
          <h1 className="hero-name">Tanaya<br /><span className="line2">Asalkar</span></h1>
          <p className="hero-role">Full-Stack Developer &nbsp;·&nbsp; <em>MERN &amp; Next.js</em> &nbsp;·&nbsp; <em>AI Integrations</em></p>
          <p className="hero-desc">{hero.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-stats">
          {[{val:"1yr",lbl:"Professional Exp."},{val:"3+",lbl:"Projects Shipped"},{val:"9.15",lbl:"Current SGPA"},{val:"Pune",lbl:"Maharashtra, IN"}].map(s=>(
            <div className="stat-box" key={s.lbl}><div className="stat-val">{s.val}</div><div className="stat-lbl">{s.lbl}</div></div>
          ))}
        </div>
      </section>
    </>
  );
}
