import { useFadeIn } from '../hooks/useFadeIn';

const features = [
  { icon: '🔍', title: 'Busca Inteligente', desc: 'Pesquise por culinária, ingrediente, preço ou distância.' },
  { icon: '🎛️', title: 'Filtros Avançados', desc: 'Vegano, sem glúten, sem lactose e muito mais. Seu cardápio, seu jeito.' },
  { icon: '❤️', title: 'Favoritos', desc: 'Salve restaurantes e pratos preferidos para pedir novamente com um clique.' },
  { icon: '🔔', title: 'Notificações', desc: 'Alertas de promoções, novos restaurantes e status do pedido.' },
  { icon: '⭐', title: 'Avaliações', desc: 'Veja e deixe avaliações honestas. Comunidade que se ajuda.' },
  { icon: '🎁', title: 'Programa Fidelidade', desc: 'Ganhe pontos em cada pedido e troque por descontos e brindes.' },
];

function FeatureItem({ icon, title, desc }) {
  const ref = useFadeIn();
  return (
    <div
      ref={ref}
      className="fade-in p-7 rounded-2xl bg-white border-2 border-transparent transition-all duration-300 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-display text-base mb-2 text-charcoal">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed font-light">{desc}</p>
    </div>
  );
}

export default function Features() {
  const labelRef = useFadeIn();
  const titleRef = useFadeIn();

  return (
    <section id="features" className="py-28 px-6 md:px-10 max-w-6xl mx-auto">
      <span ref={labelRef} className="section-label fade-in">O App</span>
      <h2 ref={titleRef} className="font-display fade-in text-4xl md:text-5xl text-charcoal leading-tight max-w-lg mb-14">
        Tudo o que você precisa,{' '}
        <em className="text-burgundy italic">num só lugar.</em>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <FeatureItem key={f.title} {...f} />
        ))}
      </div>
    </section>
  );
}
