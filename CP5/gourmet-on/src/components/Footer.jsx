const links = ['Sobre', 'Seja um Parceiro', 'Trabalhe Conosco', 'Termos de Uso', 'Privacidade'];

export default function Footer() {
  return (
    <footer className="bg-black text-white/50 pt-10 pb-6 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 flex-wrap">
        <div className="font-display font-black text-xl text-white">
          Gourmet<span className="text-gold">On</span>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {links.map((l) => (
            <a key={l} href="#" className="text-white/40 hover:text-gold text-sm transition-colors no-underline">
              {l}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {['📸', '🐦', '💼'].map((s, i) => (
            <div
              key={i}
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center cursor-pointer hover:border-gold transition-colors text-base"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/8 text-center text-xs text-white/25">
        © 2025 GourmetOn. Todos os direitos reservados. · Check-Point 05 · Prof. Lucas Sousa · Engenharia de Software
      </div>
    </footer>
  );
}
