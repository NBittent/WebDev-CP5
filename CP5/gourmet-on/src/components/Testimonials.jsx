import { useFadeIn } from '../hooks/useFadeIn';

const testimonials = [
  {
    text: '"O GourmetOn mudou completamente minha relação com o delivery. A qualidade dos restaurantes é incomparável — é como ter um restaurante cinco estrelas dentro de casa."',
    name: 'Ana Beatriz S.',
    role: 'São Paulo, SP',
    emoji: '👩',
    bg: '#3d1a2e',
  },
  {
    text: '"Entrega em 22 minutos, comida quentíssima e ainda ganhei um brinde de fidelidade. Já fiz mais de 40 pedidos esse mês. Não consigo mais viver sem."',
    name: 'Carlos M.',
    role: 'Campinas, SP',
    emoji: '👨',
    bg: '#1a2e1a',
  },
  {
    text: '"Os filtros são incríveis! Sou celíaca e finalmente tenho um app que respeita minhas restrições. Cada restaurante é verificado. Confiança total."',
    name: 'Fernanda L.',
    role: 'Rio de Janeiro, RJ',
    emoji: '👩',
    bg: '#1a2433',
  },
];

function TestimonialCard({ text, name, role, emoji, bg }) {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-in bg-white/5 border border-white/10 rounded-2xl p-7">
      <div className="text-gold text-base mb-4">★★★★★</div>
      <p className="text-white/75 text-sm leading-relaxed font-light italic mb-6">{text}</p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: bg }}
        >
          {emoji}
        </div>
        <div>
          <div className="text-white text-sm font-medium">{name}</div>
          <div className="text-white/40 text-xs">{role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const labelRef = useFadeIn();
  const titleRef = useFadeIn();

  return (
    <section
      id="testimonials"
      className="py-28 px-6 md:px-10"
      style={{ background: 'linear-gradient(135deg, #2d1a0e, #1C1C1E)' }}
    >
      <div className="max-w-6xl mx-auto">
        <span ref={labelRef} className="section-label fade-in">Depoimentos</span>
        <h2 ref={titleRef} className="font-display fade-in text-4xl md:text-5xl text-white leading-tight mb-14">
          O que nossos clientes<br />
          <em className="text-gold italic">estão dizendo.</em>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
