
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  ChevronDown,
  Mail, 
  Phone, 
  MapPin, 
  Info, 
  ExternalLink, 
  Menu, 
  X,
  CircleAlert,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  UserCheck,
  Calendar,
  ArrowUp,
  Instagram,
  Globe,
  Activity
} from 'lucide-react';
import { DELEGATIONS, SYMPTOMS, NAV_LINKS, FAQ_DATA } from './constants';
import GeminiAssistant from './components/GeminiAssistant';
import AutoexplorationModal from './components/AutoexplorationModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const BRAND_COLOR = "#002d57";

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Escudo_de_la_Junta_de_Comunidades_de_Castilla-La_Mancha.svg/250px-Escudo_de_la_Junta_de_Comunidades_de_Castilla-La_Mancha.svg.png" 
              alt="Escudo de Castilla-La Mancha" 
              className="h-10 md:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="font-black text-[#002d57] text-lg md:text-xl tracking-tighter uppercase leading-tight">
                Sanidad
              </span>
              <span className="font-bold text-[#002d57] text-xs md:text-sm tracking-tighter uppercase leading-tight opacity-80">
                Castilla-La Mancha
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-600 hover:text-red-600 font-bold transition-colors text-xs uppercase tracking-widest"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contacto"
              className="bg-red-600 text-white px-7 py-2.5 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-200"
            >
              Contacto
            </a>
          </div>

          <button className="lg:hidden p-2 text-[#002d57]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-[72px] bg-white shadow-2xl p-6 border-t border-gray-100 transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="flex items-center gap-3 text-lg font-bold text-[#002d57] p-2 hover:bg-gray-50 rounded-xl transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contacto"
              className="bg-red-600 text-white w-full py-4 rounded-2xl font-bold mt-2 shadow-xl shadow-red-200 text-lg text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-36 pb-20 md:pt-48 md:pb-40 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-50 -z-10 rounded-l-[100px] hidden lg:block opacity-40"></div>
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-bold uppercase tracking-widest mb-6">
                Prevención y Salud Pública
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-red-600 leading-tight mb-8">
                Programa de detección precoz del <span className="text-[#002d57]">cáncer de mama</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl">
                El cáncer de mama es el tumor maligno más frecuente en mujeres. La detección precoz permite identificar la enfermedad en fases iniciales, mejorando el pronóstico y aumentando las posibilidades de curación.
              </p>
            </div>
          </div>
          
          <div className="container mx-auto px-4 mt-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <UserCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-red-600">Mujeres 45-70 años</h3>
                  <p className="text-gray-600 text-lg">Dirigido a mujeres residentes en la región sin diagnóstico previo de cáncer de mama.</p>
                </div>
                <div className="bg-white p-8 rounded-[32px] shadow-xl border border-gray-100 hover:shadow-2xl transition-all group">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <CalendarCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-red-600">Cada 2 años</h3>
                  <p className="text-gray-600 text-lg">Revisiones periódicas mediante mamografía bilateral para garantizar tu salud continua.</p>
                </div>
             </div>
          </div>
        </section>

        {/* Section: What is it? */}
        <section id="programa" className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-8 leading-tight">¿Qué es el cáncer de mama?</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Se produce cuando las células del tejido mamario crecen de forma anormal y descontrolada, formando un tumor que puede extenderse si no se detecta a tiempo.
                  </p>
                  <p className="font-bold text-[#002d57] bg-white p-6 rounded-3xl border-l-8 border-red-600 shadow-sm text-xl italic">
                    "La probabilidad de presentar cáncer de mama aumenta con la edad. En Castilla-La Mancha, el programa comienza a partir de los 45 años."
                  </p>
                  <p>
                    Aunque no siempre es posible prevenirlo, la participación en programas de detección precoz es esencial para detectar la enfermedad en su fase inicial.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="Detección Precoz" 
                  className="rounded-[50px] shadow-2xl object-cover aspect-[4/3]"
                />
                <div className="absolute -bottom-8 -left-8 bg-[#002d57] text-white p-10 rounded-[40px] shadow-2xl max-w-sm">
                  <p className="text-5xl font-black mb-3">90%+</p>
                  <p className="text-xl font-medium text-gray-300">Tasa de curación si se detecta en etapas tempranas.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Symptoms */}
        <section id="sintomas" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-6 uppercase tracking-tight">Signos de Alerta</h2>
              <p className="text-xl text-gray-600">En fases iniciales puede no presentar síntomas claramente visibles. Presta atención a estos cambios en tus mamas.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SYMPTOMS.map((s) => (
                <div key={s.id} className="group p-10 rounded-[40px] bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2">
                  <div className="text-5xl mb-8 bg-red-50 w-20 h-20 flex items-center justify-center rounded-3xl group-hover:bg-red-600 transition-all duration-300 transform group-hover:rotate-6">
                    <span className="group-hover:hidden">{s.icon}</span>
                    <CircleAlert className="hidden group-hover:block text-white w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-600 transition-colors">{s.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{s.description}</p>
                </div>
              ))}
              <div className="p-10 rounded-[40px] bg-red-600 text-white shadow-2xl flex flex-col justify-center transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-3xl font-black mb-4">¿Notas algo diferente?</h3>
                <p className="text-red-50 mb-8 text-xl opacity-90">Ante la aparición de cualquiera de estos signos, consulta sin demora con tu médico de Atención Primaria.</p>
                <a 
                  href="https://sanidad.castillalamancha.es/ciudadanos/cita-previa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-bold self-start hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Pedir cita médica <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section: How to participate */}
        <section id="participar" className="py-24 bg-[#002d57] text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-20 opacity-5">
            <Calendar className="w-96 h-96" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-16">¿Cómo participar?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="space-y-12">
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl group-hover:bg-red-600 transition-colors">1</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Recibirás una invitación</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">Si tienes entre 45 y 70 años, te enviaremos una carta personalizada con el lugar, día y hora exacta de tu cita.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl group-hover:bg-red-600 transition-colors">2</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">Zonas Rurales</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">Una unidad móvil de última tecnología se desplazará a tu localidad o dispondrás de un servicio de autobús gratuito.</p>
                  </div>
                </div>
                <div className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 font-black text-2xl group-hover:bg-red-600 transition-colors">3</div>
                  <div>
                    <h3 className="text-3xl font-bold mb-4">¿Dudas o falta de cita?</h3>
                    <p className="text-xl text-gray-300 leading-relaxed">
                      Si estás en el rango de edad y no has recibido la carta, <a href="#contacto" className="underline font-bold text-red-400 hover:text-red-300 transition-colors decoration-2 underline-offset-8">contacta con tu Delegación Provincial de Sanidad</a>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-12 rounded-[50px] border border-white/10 shadow-3xl">
                <h4 className="text-3xl font-bold mb-8 flex items-center gap-4 text-red-400">
                  <padding className="w-8 h-8" /> <Info className="w-8 h-8" /> Consejos para el día de la prueba
                </h4>
                <ul className="space-y-6 text-xl">
                  <li className="flex items-center gap-5">
                    <CheckCircle2 className="text-green-400 w-7 h-7 shrink-0" />
                    <span className="text-gray-200">No usar desodorante, perfumes o cremas en axilas y mamas.</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <CheckCircle2 className="text-green-400 w-7 h-7 shrink-0" />
                    <span className="text-gray-200">Utiliza ropa cómoda de dos piezas para facilitar la prueba.</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <CheckCircle2 className="text-green-400 w-7 h-7 shrink-0" />
                    <span className="text-gray-200">Informa sobre cirugías, prótesis, embarazo o lactancia.</span>
                  </li>
                  <li className="flex items-center gap-5">
                    <CheckCircle2 className="text-green-400 w-7 h-7 shrink-0" />
                    <span className="text-gray-200">Aporta informes médicos o pruebas previas si dispones de ellas.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Results and cases */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-black text-red-600 mb-10 uppercase tracking-tight">El Resultado</h2>
                <div className="space-y-10">
                  <div className="p-8 bg-green-50 rounded-[40px] border border-green-100 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-green-900 text-2xl mb-3">Resultado Normal</h4>
                    <p className="text-green-800 text-lg leading-relaxed">Recibirás una notificación oficial en tu domicilio. El programa volverá a citarte automáticamente en aproximadamente dos años.</p>
                  </div>
                  <div className="p-8 bg-amber-50 rounded-[40px] border border-amber-100 hover:shadow-lg transition-shadow">
                    <h4 className="font-bold text-amber-900 text-2xl mb-3">Pruebas Adicionales</h4>
                    <p className="text-amber-800 text-lg leading-relaxed">A veces es necesaria una ecografía u otras pruebas complementarias. El radiólogo te explicará el motivo; no significa necesariamente que exista una lesión maligna.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-12 py-4">
                <div className="group">
                  <h3 className="text-2xl font-bold mb-4 text-[#002d57] group-hover:text-red-600 transition-colors">Más de 70 años</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">Aunque ya no seas citada de forma automática, es vital continuar con la autoexploración mensual. Ante cualquier cambio, acude a tu centro de salud.</p>
                </div>
                <div className="group">
                  <h3 className="text-2xl font-bold mb-4 text-[#002d57] group-hover:text-red-600 transition-colors">Menos de 45 años</h3>
                  <p className="text-gray-600 text-xl leading-relaxed">La mamografía no es la técnica recomendada de cribado por la densidad del tejido. Si tienes antecedentes familiares directos o síntomas, consulta a tu facultativo.</p>
                </div>
                <div className="bg-[#002d57] text-white p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-600 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                  <h3 className="text-3xl font-black mb-5">Autoexploración</h3>
                  <p className="mb-8 text-gray-300 text-lg">Un hábito fundamental que todas las mujeres deben incorporar desde la juventud para conocer su propio cuerpo y detectar anomalías.</p>
                  <button 
                    onClick={() => setIsAutoModalOpen(true)}
                    className="text-red-400 font-black text-lg flex items-center gap-3 hover:text-red-300 transition-colors group"
                  >
                    Ver técnica paso a paso <ChevronRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section id="faq" className="py-24 bg-gray-50/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-6 uppercase tracking-tight">Preguntas Frecuentes</h2>
              <p className="text-xl text-gray-600">Resolvemos las dudas e inquietudes más comunes sobre el programa de prevención autonómico.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {FAQ_DATA.map((faq) => (
                <div 
                  key={faq.id} 
                  className={`border-2 rounded-[32px] overflow-hidden transition-all duration-300 ${openFaqId === faq.id ? 'border-red-200 bg-white shadow-2xl' : 'border-gray-100 bg-white hover:border-gray-200 shadow-sm'}`}
                >
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left px-10 py-8 flex items-center justify-between gap-6"
                  >
                    <span className={`text-2xl font-bold transition-colors ${openFaqId === faq.id ? 'text-red-600' : 'text-[#002d57]'}`}>
                      {faq.question}
                    </span>
                    <div className={`p-3 rounded-2xl transition-all ${openFaqId === faq.id ? 'bg-red-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>
                  <div className={`px-10 transition-all duration-500 ease-in-out overflow-hidden ${openFaqId === faq.id ? 'max-h-[500px] pb-10' : 'max-h-0'}`}>
                    <p className="text-gray-600 text-xl leading-relaxed border-t border-gray-50 pt-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contacto" className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-red-600 mb-6 uppercase tracking-tight">Contacto</h2>
              <p className="text-xl text-gray-600 font-medium">Atención a la ciudadana en todas las provincias de la región.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {DELEGATIONS.map((del, idx) => (
                <div key={idx} className="bg-white p-10 rounded-[40px] shadow-lg border border-gray-50 hover:shadow-2xl transition-all group hover:-translate-y-2">
                  <h3 className="text-2xl font-black mb-6 text-[#002d57] leading-tight group-hover:text-red-600 transition-colors">{del.name}</h3>
                  <div className="space-y-6 text-gray-600 text-lg">
                    <p className="flex items-start gap-4">
                      <MapPin className="text-red-600 w-6 h-6 shrink-0 mt-1" />
                      <span>{del.address}<br /><span className="font-bold">{del.postalCode} {del.city}</span></span>
                    </p>
                    <p className="flex items-center gap-4">
                      <Phone className="text-red-600 w-6 h-6 shrink-0" />
                      <a href={`tel:${del.phone.replace(/\s/g, '')}`} className="hover:text-red-600 font-black text-xl">{del.phone}</a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-20 bg-gray-50 p-12 rounded-[60px] border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-12 shadow-inner">
              <div className="max-w-xl">
                <h3 className="text-3xl font-black mb-4 text-[#002d57]">Canales Digitales Oficiales</h3>
                <p className="text-gray-600 text-xl leading-relaxed font-medium">Utiliza el correo corporativo o la sede electrónica para gestiones administrativas oficiales.</p>
              </div>
              <div className="flex flex-wrap gap-6">
                <a href="mailto:dgsp@jccm.es" className="flex items-center gap-3 bg-[#002d57] text-white px-8 py-5 rounded-3xl font-bold hover:bg-[#003d75] transition-all shadow-xl hover:scale-105">
                  <Mail className="w-6 h-6" /> dgsp@jccm.es
                </a>
                <a href="https://www.jccm.es/servicios/registro-electronico" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-red-600 text-white px-8 py-5 rounded-3xl font-bold hover:bg-red-700 transition-all shadow-xl hover:scale-105">
                  Sede Electrónica <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col gap-4">
               <span className="font-black text-[#002d57] text-lg uppercase tracking-tight">
                 Sanidad Castilla-La Mancha
               </span>
               <div className="flex gap-4 items-center">
                 <a 
                   href="https://www.instagram.com/saludclm/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-[#002d57] hover:text-red-600 transition-colors bg-gray-50 p-2.5 rounded-xl border border-gray-100 shadow-sm"
                   aria-label="Instagram de Salud Castilla-La Mancha"
                 >
                   <Instagram size={20} />
                 </a>
                 <a 
                   href="https://sanidad.castillalamancha.es" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-[#002d57] hover:text-red-600 transition-colors bg-gray-50 p-2.5 rounded-xl border border-gray-100 shadow-sm"
                   aria-label="Portal de Sanidad de Castilla-La Mancha"
                 >
                   <Globe size={20} />
                 </a>
               </div>
            </div>
            <div className="flex flex-wrap justify-center gap-10 text-xs font-black text-gray-500 uppercase tracking-widest">
              <a href="#" className="hover:text-red-600 transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-red-600 transition-colors">Privacidad</a>
              <a href="#" className="hover:text-red-600 transition-colors">Accesibilidad</a>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
               <p className="text-gray-400 text-xs font-bold uppercase tracking-widest text-center md:text-right">
                © 2026 Gobierno de Castilla-La Mancha
              </p>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Escudo_de_la_Junta_de_Comunidades_de_Castilla-La_Mancha.svg/250px-Escudo_de_la_Junta_de_Comunidades_de_Castilla-La_Mancha.svg.png" 
                alt="Escudo de Castilla-La Mancha" 
                className="h-14 opacity-80 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 bg-white text-red-600 p-3 rounded-full shadow-2xl border border-red-100 hover:bg-red-50 z-40 transform transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Floating Gemini Assistant for SEO and interactive queries */}
      <GeminiAssistant />

      {/* Modal Infográfico Autoexploración */}
      <AutoexplorationModal 
        isOpen={isAutoModalOpen} 
        onClose={() => setIsAutoModalOpen(false)} 
      />
    </div>
  );
};

export default App;
