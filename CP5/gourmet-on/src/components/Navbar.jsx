import { useState, useEffect } from 'react';

const links = [
  { href: '#benefits', label: 'Benefícios' },
  { href: '#menu', label: 'Cardápio' },
  { href: '#features', label: 'Funcionalidades' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-charcoal/95 shadow-2xl' : ''}`}>
      <div className="font-display font-black text-2xl text-white tracking-tight">
        Gourmet<span className="text-gold">On</span>
      </div>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none">
        {links.map(l => (
          <li key={l.href}>
            <button
              onClick={() => scrollTo(l.href)}
              className="text-white/70 hover:text-gold text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border-none cursor-pointer"
            >
              {l.label}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => scrollTo('#contato')}
        className="hidden md:block bg-gold text-white px-5 py-2 rounded-full text-sm font-medium border-none cursor-pointer transition-all duration-200 hover:bg-yellow-700 hover:-translate-y-0.5"
      >
        Baixar App
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-white bg-transparent border-none cursor-pointer text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? '✕' : '☰'}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-charcoal/98 flex flex-col gap-0 md:hidden">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-white/80 text-sm font-medium px-6 py-4 text-left border-b border-white/10 bg-transparent border-x-0 border-t-0 cursor-pointer hover:text-gold transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
