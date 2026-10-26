import { ArrowDown, ArrowUpRight, Check, Cpu, House, Network, Server, ShieldCheck, Wifi } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span />Professionelle IT-Lösungen</p>
          <h1>Willkommen bei <strong>FIRONET<span>.</span></strong></h1>
          <p className="hero-description">Ihr zuverlässiger Partner für Server, Netzwerke, Smart Home und IT-Support in der Schweiz</p>
          <div className="hero-actions">
            <a className="button-primary" href="#services">Dienstleistungen ansehen <ArrowUpRight size={19} aria-hidden="true" /></a>
            <a className="button-secondary" href="#contact">Kontakt aufnehmen</a>
          </div>
          <div className="hero-trust">
            <span className="trust-icon"><ShieldCheck size={20} aria-hidden="true" /></span>
            <span>Vertraut von <strong>50+ lokalen Kunden</strong></span>
          </div>
        </div>

        <div className="network-art" aria-hidden="true">
          <div className="art-grid" />
          <div className="art-orbit art-orbit-outer" />
          <div className="art-orbit art-orbit-inner" />
          <svg className="network-lines" viewBox="0 0 520 480" fill="none">
            <path d="M260 235V100H370M260 235H100V340M260 235H410V350M260 235V390" stroke="#b7cae6" strokeWidth="2" />
            <path d="M260 235V100H370M260 235H100V340M260 235H410V350" stroke="#3e77da" strokeWidth="2" strokeDasharray="4 11" />
          </svg>
          <div className="network-core">
            <div className="core-heading"><span>FIRONET</span><span className="core-status" /></div>
            <div className="server-stack">
              {[0, 1, 2].map(row => <div className="server-row" key={row}><div className="server-slot" /><div className="server-lights"><span /><span /></div></div>)}
            </div>
            <div className="core-label"><Server size={15} />Server & Netzwerk</div>
          </div>
          <div className="network-node node-home"><span className="node-icon"><House size={22} /></span><div><strong>Smart Home</strong><small><Wifi size={12} /> FIRONET</small></div><span className="node-check"><Check size={12} /></span></div>
          <div className="network-node node-security"><span className="node-icon"><ShieldCheck size={22} /></span><div><strong>IT-Sicherheit</strong><small>FIRONET</small></div></div>
          <div className="network-node node-hardware"><span className="node-icon"><Cpu size={22} /></span><div><strong>Hardware</strong><small><Network size={12} /> FIRONET</small></div></div>
          <span className="art-plus plus-one">+</span><span className="art-plus plus-two">+</span>
          <span className="art-dot dot-one" /><span className="art-dot dot-two" />
        </div>
      </div>
      <div className="hero-bottom"><span>Server & Netzwerk<span className="bottom-dot">·</span>Smart Home<span className="bottom-dot">·</span>IT-Support</span><a href="#services">Scrollen <ArrowDown size={15} aria-hidden="true" /></a></div>
    </section>
  );
}
