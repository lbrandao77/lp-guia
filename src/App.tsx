import React, { useState, useEffect } from 'react';
import { 
  Check, X, ChevronDown, 
  ShieldCheck, AlertTriangle, CheckCircle2, 
  Brain, FileText, Target, Users, LayoutTemplate, Image as ImageIcon
} from 'lucide-react';

const CTAButton = ({ className = '', large = false, text = "Quero adquirir o roteiro" }) => {
  return (
    <a 
      href="https://pay.kirvano.com/a76f23e0-81ec-451f-ab52-e3c84b3aaf30" 
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center font-extrabold text-[#0a0a0a] bg-[#B9915B] 
        hover:bg-white hover:-translate-y-1 transition-all duration-300 
        uppercase tracking-widest shadow-[0_0_20px_rgba(185,145,91,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] text-center
        ${large ? 'px-6 py-4 md:px-10 md:py-5 text-sm md:text-[15px] w-full sm:w-auto' : 'px-6 py-3 md:px-8 md:py-4 text-xs'}
        ${className}
      `}
    >
      {text}
    </a>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
      scrolled ? 'bg-[#050505]/95 backdrop-blur-md border-[#2A2A2A] py-4' : 'bg-transparent border-transparent py-4 md:py-6'
    }`}>
      <div className="container mx-auto px-4 w-full max-w-7xl flex flex-wrap items-center justify-center md:justify-start gap-4">
        <div className="font-extrabold text-white text-lg md:text-xl tracking-tighter uppercase italic">
          Roteiro Baseado em Evidências<span className="text-[#B9915B]">.</span>
        </div>
      </div>
    </header>
  );
};

const Dobra01 = () => {
  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32 px-4 bg-[#0a0a0a] min-h-[90vh] flex flex-col justify-center relative border-b border-[#2A2A2A] overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[400px] bg-[#1E3A8A]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.2] md:leading-[1.05] font-extrabold text-white mb-6 md:mb-10 tracking-tighter uppercase">
          Roteiro de Entrevista <br className="hidden lg:block"/>
          <span className="text-gray-500">Baseado em </span>
          <em className="font-serif italic font-normal text-[#B9915B] lowercase tracking-normal">Evidências</em> 
          <span className="text-gray-500"> para Recrutadores.</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 leading-relaxed max-w-4xl mx-auto font-light">
          Tenha o roteiro de entrevista utilizado pelas maiores consultorias do mundo, como a <strong className="text-[#B9915B]">Korn Ferry, Robert Half e Spencer Stuart</strong>, utilizado pelos seus próprios headhunters.
        </p>

        <div className="bg-[#18191B] border border-[#2A2A2A] rounded p-6 md:p-8 mb-10 max-w-3xl mx-auto text-left shadow-lg">
          <p className="text-gray-400 font-medium leading-relaxed flex flex-col sm:flex-row items-center sm:items-start gap-4 text-sm md:text-base text-center sm:text-left">
            <ShieldCheck className="w-8 h-8 text-[#B9915B] shrink-0" />
            <span>
              Roteiro completo para você conduzir as suas entrevistas e realizar contratações assertivas, baseado nas melhores práticas de psicologia comportamental e em anos de experiência recrutando executivos de alta performance.
            </span>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mt-8">
           <CTAButton large text="Quero adquirir o roteiro" />
        </div>
      </div>
    </section>
  );
};

const Dobra02 = () => {
  const aprendizados = [
    { title: "Metodologia Big Five", desc: "Como utilizar o BIG Five (teoria de personalidade mais aceita e validada cientificamente na atualidade) durante as suas entrevistas para identificar padrões de comportamento de profissionais de alta performance.", icon: Brain },
    { title: "Script Completo", desc: "Script completo de entrevista, com roteiro pronto da abertura ao fechamento, transição entre etapas pessoais e profissionais, aprofundamento de respostas e identificar padrões suspeitos de profissionais problemáticos.", icon: FileText },
    { title: "Padrões de Alta Performance", desc: "Quadro de Padrões de Alta Performance, com um resumo dos perfis comportamentais que aparecem com mais frequência em profissionais de alto desempenho, segundo a literatura de psicologia organizacional.", icon: Target },
    { title: "Identificação de Comportamentos Críticos", desc: "Baseado em experiências passadas com colegas de equipe e ex-gestores. Para identificar um profissional problemático, é necessário fazer as perguntas CERTAS e interpretar as respostas de forma correta.", icon: AlertTriangle },
    { title: "Aprofundamento em Questões Culturais", desc: "Para entender se aquela profissional definitivamente tem fit cultural com a empresa que ele irá trabalhar, reduzindo drasticamente as chances de um turnover acelerado.", icon: Users },
    { title: "Perguntas Críticas", desc: "Maneira correta de perguntar pretensão salarial e contato para referência, sendo essas as perguntas mais críticas e que a maioria dos profissionais de recrutamento erram na hora de entrevistar.", icon: CheckCircle2 }
  ];

  return (
    <section className="py-20 md:py-32 px-4 bg-[#050505] border-b border-[#2A2A2A]">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 md:mb-12 text-center tracking-tighter uppercase leading-snug">
          Você está entrevistando os profissionais <br className="hidden md:block"/> de forma <em className="font-serif italic font-normal text-red-500 lowercase tracking-normal">ERRADA</em>
        </h2>
        
        <div className="space-y-6 md:space-y-8 text-base md:text-lg leading-relaxed text-gray-400 font-light max-w-4xl mx-auto mb-16 text-center md:text-left">
          <p>
            Utilizando perguntas simples como: <strong className="text-white">"Me diga por que deveríamos te contratar?"</strong> e tentando identificar padrões comportamentais utilizando DISC (ferramenta de análise sem evidência científica alguma).
          </p>
          <div className="p-6 md:p-8 bg-[#18191B] border-l-4 border-[#B9915B] rounded shadow-xl text-left">
             <p className="leading-relaxed text-gray-200">
               Com o Roteiro de Entrevista baseado em evidência, te mostro o passo a passo de como conduzir uma entrevista de emprego de forma assertiva para identificar padrões de alta performance, detectar inconsistências e reduzir drasticamente o risco de contratar a pessoa errada.
             </p>
          </div>
          <p>
            Não é teoria de livro. É o mesmo modelo usado em pesquisas científicas de psicologia organizacional, e é o segredo guardado a 7 chaves que os grandes Headhunters das maiores consultorias do mundo, como a <strong className="text-white">Korn Ferry, Robert Half e Spencer Stuart</strong>, utilizam para conduzir as suas entrevistas.
          </p>
        </div>

        <div className="mt-20 md:mt-24">
          <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-12 text-center tracking-tighter uppercase">
            Veja o que você vai aprender para <span className="text-[#B9915B]">MELHORAR</span> a sua entrevista enquanto recrutadora:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {aprendizados.map((item, index) => (
              <div key={index} className="bg-[#18191B] border border-[#2A2A2A] p-6 md:p-8 rounded hover:border-[#B9915B]/50 transition-colors flex flex-col items-start gap-4">
                <span className="w-12 h-12 bg-[#0a0a0a] rounded-full border border-[#2A2A2A] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 text-[#B9915B]" />
                </span>
                <h4 className="text-white font-bold uppercase tracking-wide text-sm md:text-base mt-2">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Bloco3 = () => {
    const bonus = [
        { title: 'Checklist "Anti-Turnover": Protocolo de segurança', desc: "Confiança total ao contratar o profissional, com este checklist objetivo, você elimina os riscos de realizar uma contratação de um profissional problemático que poderá prejudicar a sua carreira na empresa enquanto recrutador." },
        { title: "Quadro de Padrões de Alta Performance", desc: "Resumo dos perfis comportamentais que aparecem com mais frequência em profissionais de alto desempenho, segundo a literatura de psicologia organizacional." },
        { title: "Banco de Perguntas por Traço de personalidade", desc: "Após você aprender identificar o perfil do candidato (Abertura à experiência, Conscienciosidade, Extroversão e Amabilidade) você terá um banco de perguntas específicas para cada tipo de personalidade." },
        { title: "Triagem de estabilidade emocional", desc: "As perguntas-chaves para identificar uma pessoa estável emocionalmente e que terá uma adaptação a um novo ambiente de forma rápida e tranquila." },
        { title: "Documentos e Templates Editáveis", desc: "Roteiro em Word e PDF, modelo de apresentação de entrevista em Slides e Canvas de personalidade 100% editável." }
    ];

    return (
      <section className="py-20 md:py-32 px-4 bg-[#0a0a0a] border-b border-[#2A2A2A]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 text-center tracking-tighter uppercase leading-snug">
            Garantindo o roteiro de entrevistas <br className="hidden md:block"/> você ainda ganha <em className="font-serif italic font-normal text-[#B9915B] lowercase tracking-normal">5 bônus exclusivos:</em>
          </h2>
          
          <div className="mt-12 md:mt-16 space-y-6">
            {bonus.map((item, idx) => (
               <div key={idx} className="bg-[#18191B] border border-[#2A2A2A] rounded p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                   <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full bg-[#B9915B]/10 border border-[#B9915B]/30 flex items-center justify-center font-serif text-2xl font-bold text-[#B9915B]">
                       {idx + 1}
                   </div>
                   <div>
                       <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                       <p className="text-gray-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                   </div>
               </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const Bloco4 = () => {
    return (
        <section className="py-20 md:py-32 px-4 bg-[#050505] border-b border-[#2A2A2A]">
            <div className="container mx-auto max-w-5xl text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 tracking-tighter uppercase leading-snug">
                    Veja depoimentos de profissionais <br className="hidden md:block"/> que já <em className="font-serif italic font-normal text-[#B9915B] lowercase tracking-normal">adquiriram:</em>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <img src="/Print 1.jpg" alt="Depoimento 1" className="w-full h-auto rounded-lg border border-[#2A2A2A] shadow-lg object-cover" />
                    <img src="/print2.jpg" alt="Depoimento 2" className="w-full h-auto rounded-lg border border-[#2A2A2A] shadow-lg object-cover" />
                    <img src="/print3.jpg" alt="Depoimento 3" className="w-full h-auto rounded-lg border border-[#2A2A2A] shadow-lg object-cover" />
                </div>
            </div>
        </section>
    );
};

const Bloco6 = () => {
    return (
      <section id="oferta" className="py-24 md:py-32 px-4 bg-[#0a0a0a] border-b border-[#2A2A2A] scroll-mt-0">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-center">
            
            <div className="w-full max-w-lg bg-[#18191B] border border-[#2A2A2A] flex flex-col mt-0 rounded-lg overflow-hidden shadow-2xl relative">
              <div className="h-2 w-full bg-[#B9915B] absolute top-0 left-0" />
              
              <div className="p-8 md:p-10 border-b border-[#2A2A2A] text-center">
                 <div className="text-red-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mb-4 flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span> OFERTA POR TEMPO LIMITADO
                 </div>
                 <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">(Até as grandes consultorias proibirem de vender esse material)</p>
                 <h3 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tighter mb-2">
                    Roteiro de Entrevista
                 </h3>
                 <p className="text-[15px] text-[#B9915B] font-medium tracking-widest uppercase">Baseado em Evidências</p>
              </div>
  
              <div className="p-8 md:p-10 space-y-4 flex-grow bg-[#050505]">
                 <div className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-[#B9915B] text-black rounded flex items-center justify-center text-xl pb-1">+</span>
                    <span>5 Bônus Exclusivos:</span>
                 </div>
                 {[
                   "Checklist 'Anti-Turnover'",
                   "Quadro de Padrões de Alta Performance",
                   "Banco de Perguntas por Traço",
                   "Triagem de estabilidade emocional",
                   "Formatos: Word, PDF, Slides e Canvas Editável"
                 ].map((item, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <Check className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm font-medium leading-relaxed">{item}</span>
                   </div>
                 ))}
              </div>
  
              <div className="p-8 md:p-10 border-t border-[#2A2A2A] bg-[#18191B] text-center">
                 <div className="text-white text-6xl md:text-7xl font-extrabold tracking-tighter mb-8 flex justify-center items-start">
                   <span className="text-2xl mt-2 mr-2 text-[#B9915B]">R$</span>29<span className="text-3xl mt-2 text-gray-500">,90</span>
                 </div>
                 <CTAButton className="w-full text-sm py-5" text="Quero adquirir o roteiro por R$29,90" />
                 <div className="flex items-center justify-center gap-2 mt-6">
                    <ShieldCheck className="w-4 h-4 text-green-500" />
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Compra Segura &amp; 7 Dias de Garantia</p>
                 </div>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
};

const FAQ = () => {
    const faqs = [
      { q: "Qual o formato do produto?", a: "O produto + bônus incluem roteiro em Word, PDF, modelo de apresentação de entrevista em Slides, Canvas de personalidade 100% editável." },
      { q: "Como eu recebo?", a: "Comprando agora você recebe o acesso pelo seu email de compra." },
      { q: "Funciona para contratações de que cargo?", a: "O roteiro é adaptável para qualquer tipo de cargo, com exemplos pré-preenchidos disponíveis." },
      { q: "O que é o BIG Five?", a: "É o modelo de perfis de personalidade mais validado pela ciência nos últimos 40 anos." },
      { q: "E se eu não gostar ou me arrepender?", a: "Você possui até 7 dias pra solicitar um reembolso sem complicações." }
    ];
  
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    return (
      <section className="py-20 md:py-32 px-4 bg-[#050505] border-b border-[#2A2A2A]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-12 md:mb-16 text-center tracking-tighter uppercase">
            Perguntas <em className="font-serif italic font-normal text-[#B9915B] lowercase tracking-normal">Frequentes</em>
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#18191B] border border-[#2A2A2A] transition duration-300 rounded">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between font-bold text-white focus:outline-none text-left"
                >
                  <span className="text-sm md:text-base uppercase tracking-wide pr-4 leading-snug">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#B9915B] shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openIndex === idx ? '500px' : '0px' }}
                >
                  <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-400 text-sm md:text-base leading-relaxed border-t border-[#2A2A2A] pt-4 mt-2">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

const Footer = () => {
    return (
      <footer className="py-10 md:py-12 bg-black text-gray-600 text-[10px] md:text-xs tracking-widest border-t border-[#2A2A2A]">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4 md:mb-6 uppercase">Roteiro de Entrevista Baseado em Evidências &copy; {new Date().getFullYear()}</p>
          <div className="flex items-center justify-center gap-6 md:gap-8 uppercase">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </footer>
    );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] font-sans antialiased text-white selection:bg-[#B9915B]/30 selection:text-[#B9915B] hide-scrollbar">
      <Header />
      <main>
        <article className="sr-only">
          <h1>Guia Definitivo para Entrevistas Baseadas em Evidências</h1>
          <p>O Guia de Entrevista Baseada em Evidências é um roteiro completo criado para recrutadores, profissionais de RH, líderes de equipe e tech recruiters. Nosso objetivo é ajudar empresas a evitar bad hires através de um processo seletivo pautado no comportamento passado do candidato (metodologia Big Five) em vez do tradicional "feeling".</p>
          <h2>Para quem é este guia?</h2>
          <ul>
            <li>Profissionais de Recursos Humanos buscando processos seletivos mais científicos.</li>
            <li>Founders e líderes estruturando ou expandindo seus times.</li>
          </ul>
          <h2>O que você ganha?</h2>
          <p>Um checklist prático de aplicação imediata, roteiro estruturado para entrevistas e perguntas específicas para identificar traços de personalidade. Além de bônus indispensáveis como o Checklist Anti-Turnover.</p>
        </article>
        <Dobra01 />
        <Dobra02 />
        <Bloco3 />
        <Bloco4 />
        <Bloco6 />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
