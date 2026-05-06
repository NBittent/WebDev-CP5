import { useFadeIn } from '../hooks/useFadeIn';

const benefits = [
  {
    icon: '⚡',
    title: 'Entrega Relâmpago',
    desc: 'Parceiros estrategicamente localizados garantem que seu pedido chegue quentinho em menos de 30 minutos.',
  },
  {
    icon: '🌟',
    title: 'Restaurantes Premium',
    desc: 'Curadoria rigorosa de restaurantes com notas acima de 4,5 estrelas. Qualidade garantida em cada pedido.',
  },
  {
    icon: '💳',
    title: 'Pagamento Fácil',
    desc: 'Pix, cartão de crédito, débito ou carteira digital. Tudo salvo com segurança para compras futuras.',
  },
  {
    icon: '📍',
    title: 'Rastreio em Tempo Real',
    desc: 'Acompanhe cada etapa do pedido no mapa, do preparo até a chegada na sua porta.',
  },
];

function BenefitCard({ icon, title, desc }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className="fade-in bg-white rounded-2xl p-8 border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="font-display text-xl mb-2 text-charcoal">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

export default function Benefits() {
  const labelRef = useFadeIn();
  const titleRef = useFadeIn();

  return (
    <section id="benefits" className="py-28 px-6 md:px-10 max-w-6xl mx-auto">
      <span ref={labelRef} className="section-label fade-in">Por que GourmetOn?</span>
      <h2 ref={titleRef} className="font-display fade-in text-4xl md:text-5xl text-charcoal leading-tight max-w-md mb-14">
        O <em className="text-burgundy italic">melhor delivery</em><br />da sua região.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((b) => (
          <BenefitCard key={b.title} {...b} />
        ))}
      </div>
    </section>
  );
}
