const stats = [
  { num: '500+', label: 'Restaurantes parceiros' },
  { num: '98%', label: 'Satisfação dos clientes' },
  { num: '25min', label: 'Tempo médio de entrega' },
];

const foods = ['🥩', '🍱', '🍝', '🍣'];

export default function Hero() {
  const scrollTo = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg, #1C1C1E 0%, #2d1a0e 60%, #3d1f0f 100%)' }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(201,147,58,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(123,29,29,0.2) 0%, transparent 40%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full py-32 md:py-0">
        <div className="flex items-center gap-16">
          {/* Left content */}
          <div className="flex-1">
            <span className="inline-block bg-gold/15 border border-gold/40 text-gold text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              🍽️ Alta Gastronomia em Casa
            </span>

            <h1 className="font-display font-black text-white leading-none mb-6" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
              Sabor{' '}
              <em className="text-gold italic">gourmet</em>
              <br />entregue<br />na sua porta.
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-md mb-10 font-light">
              Conectamos você aos melhores restaurantes da cidade. Peça, acompanhe e saboreie — sem sair de casa.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button onClick={() => scrollTo('#menu')} className="btn-primary">
                Ver Cardápio ↓
              </button>
              <button onClick={() => scrollTo('#contato')} className="btn-outline">
                Receber Novidades
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 pt-10 border-t border-white/10 flex-wrap">
              {stats.map((s) => (
                <div key={s.num}>
                  <div className="font-display font-bold text-white text-3xl">{s.num}</div>
                  <div className="text-white/45 text-xs mt-1 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right food grid */}
          <div className="hidden lg:grid grid-cols-2 gap-3 flex-shrink-0" style={{ width: 340 }}>
            {foods.map((f, i) => (
              <div
                key={i}
                className="rounded-2xl flex items-center justify-center text-6xl bg-white/5 border border-white/8 transition-transform duration-300 hover:scale-105 cursor-default"
                style={{ aspectRatio: '1/1', transform: i % 2 === 1 ? 'translateY(20px)' : undefined }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
