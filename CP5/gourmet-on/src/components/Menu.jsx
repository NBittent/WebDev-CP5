import { useState } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const mockRecipes = [
  { id: 1, title: 'Risoto de Cogumelos Selvagens', readyInMinutes: 45, servings: 4, emoji: '🍄', tag: 'Italiana' },
  { id: 2, title: 'Salmão Grelhado com Aspargos', readyInMinutes: 25, servings: 2, emoji: '🐟', tag: 'Saudável' },
  { id: 3, title: 'Costela Bovina na Brasa', readyInMinutes: 180, servings: 6, emoji: '🥩', tag: 'Churrasco' },
  { id: 4, title: 'Tiramisu Artesanal', readyInMinutes: 30, servings: 8, emoji: '☕', tag: 'Sobremesa' },
  { id: 5, title: 'Pad Thai Tradicional', readyInMinutes: 20, servings: 2, emoji: '🍜', tag: 'Tailandesa' },
  { id: 6, title: 'Pizza Burrata e Rúcula', readyInMinutes: 35, servings: 4, emoji: '🍕', tag: 'Italiana' },
  { id: 7, title: 'Moqueca de Camarão', readyInMinutes: 40, servings: 4, emoji: '🦐', tag: 'Brasileira' },
  { id: 8, title: 'Sushi Temaki Especial', readyInMinutes: 30, servings: 3, emoji: '🍣', tag: 'Japonesa' },
];

function RecipeCard({ recipe }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/8 bg-white/4 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
      {recipe.image ? (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full object-cover"
          style={{ aspectRatio: '4/3' }}
          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
        />
      ) : null}
      <div
        className="w-full items-center justify-center text-5xl bg-gradient-to-br from-gray-800 to-yellow-950"
        style={{ aspectRatio: '4/3', display: recipe.image ? 'none' : 'flex' }}
      >
        {recipe.emoji || '🍽️'}
      </div>
      <div className="p-4">
        <span className="inline-block bg-gold/15 text-gold text-xs px-3 py-0.5 rounded-full mb-2">
          {recipe.tag || recipe.cuisines?.[0] || recipe.dishTypes?.[0] || 'Gourmet'}
        </span>
        <h4 className="font-display text-white text-base leading-snug mb-2">{recipe.title}</h4>
        <div className="flex gap-3 text-white/40 text-xs">
          <span>⏱ {recipe.readyInMinutes} min</span>
          <span>👥 {recipe.servings} pessoas</span>
        </div>
      </div>
    </div>
  );
}

export default function Menu() {
  const [apiKey, setApiKey] = useState('');
  const [recipes, setRecipes] = useState(mockRecipes);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const labelRef = useFadeIn();
  const titleRef = useFadeIn();

  const fetchRecipes = async () => {
    if (!apiKey.trim()) { setError('Insira sua chave da API.'); return; }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?number=8&apiKey=${apiKey.trim()}`
      );
      if (!res.ok) throw new Error('Chave inválida ou limite atingido.');
      const data = await res.json();
      setRecipes(data.recipes);
    } catch (err) {
      setError(err.message);
      setRecipes(mockRecipes);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="menu" className="py-28 px-6 md:px-10" style={{ background: '#1C1C1E' }}>
      <div className="max-w-6xl mx-auto">
        <span ref={labelRef} className="section-label fade-in">Inspirações do Dia</span>
        <h2 ref={titleRef} className="font-display fade-in text-4xl md:text-5xl text-white leading-tight mb-8">
          Descubra receitas<br /><em className="text-gold italic">incríveis</em> para pedir.
        </h2>

        {/* API Key Input */}
        <div className="flex gap-3 flex-wrap mb-2">
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchRecipes()}
            placeholder="Cole sua chave da Spoonacular API aqui..."
            className="flex-1 min-w-56 bg-white/7 border border-white/15 text-white placeholder-white/30 px-5 py-3 rounded-full text-sm outline-none focus:border-gold font-body transition-colors"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          />
          <button
            onClick={fetchRecipes}
            disabled={loading}
            className="bg-gold text-white px-7 py-3 rounded-full text-sm font-medium border-none cursor-pointer hover:bg-yellow-700 transition-colors disabled:opacity-60"
          >
            {loading ? 'Buscando...' : 'Buscar Receitas'}
          </button>
        </div>

        <p className="text-white/30 text-xs mb-2">
          Obtenha sua chave gratuita em{' '}
          <a href="https://spoonacular.com/food-api" target="_blank" rel="noreferrer" className="text-gold hover:underline">
            spoonacular.com/food-api
          </a>
          . Exibindo exemplos enquanto aguarda.
        </p>

        {error && (
          <p className="text-red-400 text-sm mb-4">❌ {error} — exibindo exemplos.</p>
        )}

        {/* Recipe Grid */}
        {loading ? (
          <div className="text-center text-white/40 py-12 text-sm">🔄 Buscando receitas incríveis...</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {recipes.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
