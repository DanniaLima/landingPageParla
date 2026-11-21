import { useState } from "react";
import {
  Check,
  Star,
  MessageCircle,
  ShieldCheck,
  Zap,
  BookOpen,
  Mic,
  Volume2,
  Gamepad2,
  MessageSquare,
  ChevronDown,
  Gift,
  Play,
} from "lucide-react";
import { config } from "./config";

const modules = [
  {
    emoji: "👋",
    title: "Cumprimentos e Apresentações",
    desc: "Do 'Ciao' ao 'Piacere'.",
  },
  {
    emoji: "🍝",
    title: "No Restaurante",
    desc: "Peça, entenda e pague sem travar.",
  },
  {
    emoji: "🧭",
    title: "Pedindo Direções",
    desc: "Nunca mais se perca na Itália.",
  },
  { emoji: "🛍️", title: "Fazendo Compras", desc: "Tamanhos, preços e trocas." },
  { emoji: "👨‍👩‍👧‍👦", title: "Família e Amigos", desc: "Conversa do dia a dia." },
];

const features = [
  {
    icon: BookOpen,
    title: "Flashcards interativos",
    desc: "Toque para virar e memorizar.",
  },
  {
    icon: Volume2,
    title: "Áudio nativo",
    desc: "Pronúncia italiana de verdade.",
  },
  {
    icon: Check,
    title: "Quiz de múltipla escolha",
    desc: "Fixe o conteúdo com feedback.",
  },
  {
    icon: Mic,
    title: "Reconhecimento de voz",
    desc: "Fale e receba feedback imediato.",
  },
  {
    icon: MessageSquare,
    title: "Simulador de conversa",
    desc: "Diálogos reais em cenários italianos.",
  },
  { icon: Gamepad2, title: "Conquistas e XP", desc: "Aprenda como num jogo." },
];

const scenarios = [
  { emoji: "☕", title: "Café em Roma", desc: "Peça um café como um local." },
  {
    emoji: "🗺️",
    title: "Direções em Florença",
    desc: "Pergunte e entenda o caminho.",
  },
  {
    emoji: "👗",
    title: "Compras em Milão",
    desc: "Tamanhos, preços e provadores.",
  },
  {
    emoji: "🚆",
    title: "Bilhete na estação",
    desc: "Compre, confirme e embarque.",
  },
];

const faq = [
  {
    q: "Preciso saber italiano para começar?",
    a: "Não. O Parla! começa do zero, com pronúncia escrita para brasileiros.",
  },
  {
    q: "Serve para quem vai tirar cidadania por matrimônio?",
    a: "Sim. O foco em conversação prática ajuda muito na preparação para a prova de proficiência (B1).",
  },
  {
    q: "Funciona no celular?",
    a: "Sim, foi feito mobile-first. Funciona em qualquer navegador moderno.",
  },
  {
    q: "Quanto tempo por dia preciso dedicar?",
    a: "10 a 15 minutos por dia já fazem diferença, graças à trilha gamificada.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso enquanto o produto existir — sem prazo de validade.",
  },
  {
    q: "Preciso de internet?",
    a: "Para usar o app web, sim. O progresso fica salvo no seu navegador.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Por e-mail, imediatamente após a confirmação do pagamento pela Kiwify.",
  },
  {
    q: "Posso pedir reembolso?",
    a: "Sim, garantia incondicional de 7 dias, sem burocracia.",
  },
];

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* TOPO */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
          <a
            href={config.APP_URL}
            className="font-display text-xl font-bold text-verde"
          >
            Parla! 🇮🇹
          </a>
          <a
            href={config.KIWIFY_CHECKOUT_URL}
            className="bg-verde hover:bg-green-800 text-white font-bold px-4 py-2 rounded-full text-sm transition"
          >
            Quero começar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-verde-light to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-5xl font-extrabold leading-tight">
            Prepare-se para a cidadania italiana{" "}
            <span className="text-verde">sem aulas maçantes</span> — com um app
            que fala a língua do dia a dia.
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl mx-auto">
            Do <em>Ciao</em> ao <em>Buongiorno</em> em situações reais:
            flashcards, áudio nativo e simulador de conversa no seu celular.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a
              href={config.KIWIFY_CHECKOUT_URL}
              className="bg-verde hover:bg-green-800 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition transform hover:scale-105"
            >
              Quero falar italiano de verdade →
            </a>
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
              <span className="text-gray-600 text-sm ml-2">
                Já usado por {config.STUDENT_COUNT} brasileiros
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* VÍDEO */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">
            Veja o Parla! em ação
          </h2>
          <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 flex items-center justify-center">
            {config.HERO_VIDEO_URL ? (
              config.HERO_VIDEO_URL.includes("youtube") ||
              config.HERO_VIDEO_URL.includes("vimeo") ? (
                <iframe
                  src={config.HERO_VIDEO_URL}
                  title="Parla! em ação"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  src={config.HERO_VIDEO_URL}
                  controls
                  className="w-full h-full"
                />
              )
            ) : (
              <div className="text-white text-center">
                <Play className="mx-auto mb-2" size={48} />
                <p className="text-sm text-gray-400">Vídeo em breve</p>
              </div>
            )}
          </div>
          <a
            href={config.KIWIFY_CHECKOUT_URL}
            className="inline-block mt-6 bg-verde hover:bg-green-800 text-white font-bold px-6 py-3 rounded-full transition hover:scale-105"
          >
            Quero garantir meu acesso →
          </a>
        </div>
      </section>

      {/* DORES */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Você já tentou aprender italiano e travou na hora de falar?
          </h2>
          <ul className="grid md:grid-cols-2 gap-5">
            {[
              "Cursos longos e maçantes que você nunca termina",
              "Conteúdo que não se aplica à prova de proficiência",
              "Falta de prática de conversação real",
              "Esquecer o que aprendeu por não ter rotina",
            ].map((txt, i) => (
              <li
                key={i}
                className="flex items-start gap-3 bg-red-50 p-4 rounded-2xl"
              >
                <span className="text-vermelho font-bold mt-0.5">✕</span>
                <span className="text-gray-800">{txt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="px-4 py-16 bg-verde-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Conheça o Parla! 🇮🇹
          </h2>
          <p className="text-center text-gray-700 mb-10">
            O app que fala a língua do dia a dia.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <Icon className="text-verde mb-3" size={28} />
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            5 módulos práticos, do zero à conversação
          </h2>
          <div className="space-y-3">
            {modules.map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
              >
                <span className="text-3xl">{m.emoji}</span>
                <div>
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="text-sm text-gray-600">{m.desc}</p>
                </div>
                <span className="ml-auto text-xs bg-verde-light text-verde px-3 py-1 rounded-full font-bold">
                  Módulo {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULADOR */}
      <section className="px-4 py-16 bg-verde text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-3">
            Pratique conversas reais antes de pisar na Itália
          </h2>
          <p className="text-center text-green-100 mb-10">
            Fale com o app e receba feedback imediato — como se estivesse lá.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {scenarios.map((s) => (
              <div
                key={s.title}
                className="bg-white/10 p-5 rounded-2xl backdrop-blur text-center"
              >
                <div className="text-4xl mb-2">{s.emoji}</div>
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-sm text-green-100 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BÔNUS */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Bônus exclusivos para quem começar hoje
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                t: "Guia de expressões para a prova B1",
                d: "As frases que mais caem.",
              },
              {
                t: "Acesso a atualizações futuras",
                d: "Novos módulos e cenários inclusos.",
              },
              {
                t: "Comunidade no WhatsApp",
                d: "Tire dúvidas e pratique com outros alunos.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="bg-yellow-50 border border-yellow-200 p-6 rounded-2xl"
              >
                <Gift className="text-yellow-600 mb-3" size={28} />
                <h3 className="font-bold mb-1">{b.t}</h3>
                <p className="text-sm text-gray-600">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="px-4 py-16 bg-gray-50">
        <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-verde">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-2">
            Comece hoje a falar italiano de verdade
          </h2>
          <p className="text-gray-600 mb-6">
            Acesso completo ao Parla! + bônus.
          </p>
          <div className="text-4xl font-extrabold text-verde mb-1">
            {config.PRICE_PARCELADO}
          </div>
          <p className="text-sm text-gray-500 mb-6">ou {config.PRICE_AVISTA}</p>
          <ul className="text-left space-y-2 mb-6">
            {[
              "Acesso completo ao app",
              "5 módulos + simulador de conversa",
              "3 bônus exclusivos",
              "Garantia de 7 dias",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2 text-gray-800">
                <Check className="text-verde" size={18} /> {t}
              </li>
            ))}
          </ul>
          <a
            href={config.KIWIFY_CHECKOUT_URL}
            className="block bg-verde hover:bg-green-800 text-white font-bold px-6 py-4 rounded-full text-lg shadow-lg transition"
          >
            Garantir meu acesso →
          </a>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} /> Pagamento seguro
            </span>
            <span className="flex items-center gap-1">
              <Zap size={14} /> Acesso imediato
            </span>
            <span className="flex items-center gap-1">
              <Check size={14} /> 7 dias de garantia
            </span>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="px-4 py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto">
          <ShieldCheck className="mx-auto text-verde mb-3" size={48} />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Garantia incondicional de 7 dias
          </h2>
          <p className="text-gray-700">
            Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas, sem
            burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-center mb-10">
            Perguntas frequentes
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left font-bold hover:bg-gray-50"
                >
                  {item.q}
                  <ChevronDown
                    className={`transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-gray-700">{item.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-4 py-16 bg-verde text-white text-center">
        <h2 className="font-display text-2xl md:text-4xl font-bold mb-6">
          Pronto para falar italiano de verdade?
        </h2>
        <a
          href={config.KIWIFY_CHECKOUT_URL}
          className="inline-block bg-white text-verde font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
        >
          Quero falar italiano de verdade →
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-4 py-10 bg-gray-900 text-gray-300 text-sm text-center">
        <p className="font-display text-white text-lg mb-2">Parla! 🇮🇹</p>
        <p className="mb-1">
          Feito com 💚🤍❤️ para brasileiros que sonham em falar italiano.
        </p>
        <p className="text-xs text-gray-500 mb-2">
          Este produto não garante a obtenção de cidadania. É um curso de
          idiomas.
        </p>
        <div className="flex justify-center gap-4 text-xs text-gray-500 mb-2">
          <a href="#" className="hover:text-white">
            Termos
          </a>
          <a href="#" className="hover:text-white">
            Privacidade
          </a>
        </div>
        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Parla!. Todos os direitos reservados.
        </p>
      </footer>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={config.WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition hover:scale-110 animate-pulse"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
