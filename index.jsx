import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight, Zap, Shield, Cpu, Instagram, Linkedin, Smartphone, Wallet, MessageCircle, Globe } from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadVCard = () => {
    const vcard = "BEGIN:VCARD\nVERSION:3.0\nFN:Eliseo Consultor Digital\nTEL;TYPE=CELL:+543795041420\nTITLE:Consultor Digital\nEND:VCARD";
    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Eliseo_Digital.vcf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const ServiceCard = ({ icon: Icon, title, description, badge }) => (
    <div className="group relative bg-[#0A0A0A] border border-[#1C1C1E] p-10 rounded-[40px] transition-all duration-500 hover:border-[#333336] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <ArrowUpRight className="text-white w-5 h-5" />
      </div>
      <div className="w-14 h-14 bg-[#1C1C1E] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500">
        <Icon className="text-white group-hover:text-black w-6 h-6 transition-colors duration-500" />
      </div>
      <span className="text-[10px] font-bold tracking-[0.5em] text-[#0071E3] uppercase mb-4 block">
        {badge}
      </span>
      <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-[#86868B] text-lg font-light leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#000000] text-white font-['Inter',sans-serif] selection:bg-[#0071E3] selection:text-white">
      
      {/* Navegación - Glassmorphism incrementado */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6 md:py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`backdrop-blur-3xl bg-black/40 border border-white/20 rounded-full px-6 md:px-10 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl border-white/30 bg-black/50' : ''}`}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">e.</span>
              </div>
              <span className="font-semibold tracking-tighter text-lg md:text-xl uppercase">ELISEO STUDIO</span>
            </div>
            <div className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.3em] text-[#86868B] uppercase">
              <a href="#mision" className="hover:text-white transition-colors">Misión</a>
              <a href="#ia" className="hover:text-white transition-colors">IA Instantánea</a>
              <a href="#contacto" className="hover:text-white transition-colors">Infraestructura</a>
            </div>
            <a 
              href="https://wa.me/543795041420" 
              target="_blank"
              className="bg-white text-black px-5 md:px-6 py-2 rounded-full text-[11px] font-bold hover:bg-[#F5F5F7] transition-all"
            >
              CONTACTO
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-8 text-center pt-52 md:pt-64 pb-20">
        <div className="animate-[fadeIn_1s_ease-out] w-full max-w-5xl">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.6em] text-[#0071E3] uppercase mb-12 block opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
            Arquitecto Digital
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-[-0.04em] leading-[1.1] md:leading-[0.95] mb-12 bg-gradient-to-b from-white to-[#86868B] bg-clip-text text-transparent">
            Arquitectura de Autoridad para Marcas de Élite.
          </h1>
          <p className="text-lg md:text-2xl text-[#86868B] font-light max-w-2xl mx-auto mb-14 leading-relaxed">
            Convertimos el potencial de su negocio en una <span className="text-white font-normal">infraestructura digital</span> de alto rendimiento.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-[slideUp_1s_ease-out_0.4s_forwards] opacity-0">
            <a 
              href="#contacto"
              className="bg-[#0071E3] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#0077ED] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-[#0071E3]/20"
            >
              Iniciar Proyecto
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="https://chomp-best.github.io/proyectos/"
              target="_blank"
              className="bg-transparent border border-[#333336] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[#1C1C1E] transition-all flex items-center justify-center"
            >
              Explorar Demos
            </a>
          </div>
        </div>
      </section>

      {/* Misión Section */}
      <section id="mision" className="py-[10rem] px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] font-bold tracking-[0.5em] text-[#0071E3] uppercase mb-4 block">Misión</span>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-gradient">El Arquitecto detrás del Código.</h2>
            <div className="space-y-6 text-lg font-light text-[#86868B] leading-relaxed">
              <p>
                Como <span className="text-white font-medium">Arquitecto digital</span> de 19 años, me especializo en crear Web Apps de estética Premium para negocios que buscan profesionalizar su imagen y automatizar sus ventas.
              </p>
              <p>
                Mi enfoque combina el diseño minimalista tipo Apple con la utilidad funcional necesaria para que el dueño del negocio <span className="text-white font-medium">recupere su tiempo</span>.
              </p>
            </div>
          </div>
          <div className="bg-[#0A0A0A] border border-[#1C1C1E] p-12 rounded-[40px] flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <span className="text-black text-4xl font-light tracking-tighter">e.</span>
            </div>
            <h3 className="text-xl font-medium mb-4 tracking-tight">Eliseo Strategy</h3>
            <p className="text-[#86868B] text-sm mb-6 uppercase tracking-widest font-bold">Protocolo de Autoridad</p>
            <button 
              onClick={downloadVCard}
              className="flex items-center gap-2 text-[#0071E3] hover:text-[#2997ff] transition-colors font-medium text-sm border border-[#0071E3]/20 px-6 py-3 rounded-full hover:bg-[#0071E3]/5"
            >
              <Wallet className="w-4 h-4" />
              Guardar contacto en Wallet
            </button>
          </div>
        </div>
      </section>

      {/* IA Section */}
      <section id="ia" className="py-[10rem] px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#1C1C1E] to-[#000000] border border-[#333336] rounded-[40px] p-10 md:p-20 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles size={400} className="text-white" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="text-[10px] font-bold tracking-[0.5em] text-[#0071E3] uppercase mb-6 block">Consultoría Estratégica</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">Escale su operación con IA Instantánea.</h2>
              <p className="text-[#86868B] text-xl font-light mb-12 leading-relaxed">
                Acceda a nuestra infraestructura de inteligencia para optimizar sus procesos de venta y atención al cliente en tiempo real.
              </p>
              <a 
                href="https://chomp-best.github.io/ia/"
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:bg-[#F5F5F7] transition-all group"
              >
                Acceder al Consultor IA
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-[10rem] px-8 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#0071E3] uppercase mb-4 block">
            Ecosistemas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Infraestructura Funcional.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={Cpu}
            badge="Inteligencia"
            title="IA & Automatización"
            description="Sistemas inteligentes de venta 24/7 que gestionan su demanda operativa sin intervención humana."
          />
          <ServiceCard 
            icon={Smartphone}
            badge="Experiencia"
            title="Arquitectura UX Pro"
            description="Diseño Apple-style enfocado en conversión, optimizado para convertir visitantes en activos de alto valor."
          />
          <ServiceCard 
            icon={Shield}
            badge="Estrategia"
            title="Estrategia de Crecimiento"
            description="Modelos de escalabilidad diseñados para negocios B2B y Retail que requieren autoridad digital."
          />
        </div>
      </section>

      {/* Contact Infrastructure Section */}
      <section id="contacto" className="py-[10rem] px-8 max-w-7xl mx-auto">
         <div className="text-center mb-20">
          <span className="text-[10px] font-bold tracking-[0.5em] text-[#0071E3] uppercase mb-4 block">Conexión Directa</span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Inicie su Transformación.</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
           <a 
            href="https://wa.me/543795041420?text=Hola%20Eliseo,%20vi%20tu%20tarjeta%20digital%20y%20me%20gustaría%20iniciar%20un%20proyecto%20contigo."
            target="_blank"
            className="flex flex-col items-center justify-center p-12 bg-[#0A0A0A] border border-[#1C1C1E] rounded-[40px] hover:border-[#333336] transition-all group"
          >
            <MessageCircle className="w-12 h-12 text-[#0071E3] mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold mb-2">WhatsApp Directo</h3>
            <p className="text-[#86868B] mb-8">Consultas de infraestructura inmediata.</p>
            <span className="text-white font-medium flex items-center gap-2">Iniciar conversación <ArrowUpRight size={16}/></span>
          </a>

          <a 
            href="https://chomp-best.github.io/proyectos/"
            target="_blank"
            className="flex flex-col items-center justify-center p-12 bg-[#0A0A0A] border border-[#1C1C1E] rounded-[40px] hover:border-[#333336] transition-all group"
          >
            <Globe className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-semibold mb-2">Portfolio de Activos</h3>
            <p className="text-[#86868B] mb-8">Explore nuestras implementaciones de élite.</p>
            <span className="text-white font-medium flex items-center gap-2">Ver proyectos <ArrowUpRight size={16}/></span>
          </a>
        </div>
      </section>

      {/* Filosofía Section */}
      <section className="py-[10rem] bg-[#0A0A0A] border-y border-[#1C1C1E]">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <Zap className="w-12 h-12 text-[#0071E3] mx-auto mb-10" />
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight mb-12">
            "No diseñamos simples interfaces; construimos la <span className="text-white italic">presencia definitiva</span> de su legado en la red."
          </h2>
          <div className="w-20 h-[1px] bg-[#333336] mx-auto mb-8" />
          <p className="text-[#86868B] text-[12px] font-bold tracking-[0.4em] uppercase">Eliseo Strategy • 2025</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[5rem] px-8 border-t border-[#1C1C1E]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter mb-2 uppercase">ELISEO STUDIO</h3>
            <p className="text-[#86868B] text-sm">Arquitectura Digital de Élite.</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-[#F5F5F7] text-lg font-light italic mb-4 max-w-xs text-center">
              "En un mundo lleno de ruido, el silencio es el arma más poderosa."
            </p>
            <div className="flex gap-6 mt-4">
              <a href="https://www.instagram.com/eliseoooook/" target="_blank" className="p-3 bg-[#1C1C1E] rounded-full hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-[#1C1C1E] rounded-full hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="text-right hidden md:block">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#424245] uppercase">
              © 2025 E. STRATEGY. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .text-gradient {
          background: linear-gradient(180deg, #ffffff 0%, #a1a1a6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        body {
          overflow-x: hidden;
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
};

export default App;
