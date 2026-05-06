import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

export default function Contact() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', cidade: '', freq: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const labelRef = useFadeIn();
  const titleRef = useFadeIn();
  const formRef = useFadeIn();

  const set = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const validate = () => {
    const errs = {};
    if (!form.fname.trim()) errs.fname = 'Obrigatório';
    if (!form.email.trim() || !form.email.includes('@')) errs.email = 'E-mail inválido';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border-2 text-sm font-body outline-none transition-colors bg-white ${
      errors[field] ? 'border-red-400' : 'border-stone-200 focus:border-gold'
    }`;

  return (
    <section id="contato" className="py-28 px-6 md:px-10">
      <div className="max-w-xl mx-auto">
        <span ref={labelRef} className="section-label fade-in text-center">Fique por dentro</span>
        <h2 ref={titleRef} className="font-display fade-in text-4xl md:text-5xl text-charcoal leading-tight text-center mb-12">
          Seja o <em className="text-burgundy italic">primeiro</em><br />a saber de tudo.
        </h2>

        <div ref={formRef} className="fade-in">
          {submitted ? (
            <div className="text-center py-10 px-8 bg-green-50 rounded-2xl border border-green-200">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="font-display text-2xl text-green-800 mb-2">Você está na lista!</h3>
              <p className="text-green-700 text-sm">
                Obrigado por se cadastrar. Você será um dos primeiros a receber novidades e ofertas exclusivas do GourmetOn.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-1.5">Nome *</label>
                  <input
                    type="text"
                    value={form.fname}
                    onChange={set('fname')}
                    placeholder="Seu nome"
                    className={inputClass('fname')}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                  {errors.fname && <p className="text-red-500 text-xs mt-1">{errors.fname}</p>}
                </div>
                <div>
                  <label className="block text-sm text-gray-600 font-medium mb-1.5">Sobrenome</label>
                  <input
                    type="text"
                    value={form.lname}
                    onChange={set('lname')}
                    placeholder="Seu sobrenome"
                    className={inputClass('lname')}
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 font-medium mb-1.5">E-mail *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="seu@email.com"
                  className={inputClass('email')}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label className="block text-sm text-gray-600 font-medium mb-1.5">Cidade</label>
                <input
                  type="text"
                  value={form.cidade}
                  onChange={set('cidade')}
                  placeholder="São Paulo, SP"
                  className={inputClass('cidade')}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-600 font-medium mb-1.5">
                  Com que frequência você faz delivery?
                </label>
                <select
                  value={form.freq}
                  onChange={set('freq')}
                  className={`${inputClass('freq')} cursor-pointer`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <option value="">Selecione...</option>
                  <option>Todo dia</option>
                  <option>2–4x por semana</option>
                  <option>1x por semana</option>
                  <option>Raramente</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-charcoal text-white py-4 rounded-full text-base font-medium border-none cursor-pointer transition-all duration-200 hover:bg-burgundy hover:-translate-y-0.5"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Quero ser notificado 🚀
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
