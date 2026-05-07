# 🍽️ GourmetOn — Landing Page

> Check-Point 05 · Web Development with JS · Prof. Lucas Sousa · Engenharia de Software

## Sobre o Projeto

Landing page para o app de delivery **GourmetOn**, desenvolvida com React + Vite + Tailwind CSS, integrando a Spoonacular API via Fetch assíncrono.

## Tecnologias

- **React 19** — componentes e hooks
- **Vite** — bundler e dev server
- **Tailwind CSS 3** — estilização utility-first
- **Fetch API** — requisições assíncronas para Spoonacular
- **Intersection Observer** — animações de scroll (hook `useFadeIn`)

## Estrutura de Componentes

```
src/
├── components/
│   ├── Navbar.jsx        # Navegação fixa com scroll effect
│   ├── Hero.jsx          # Hero section com CTA e estatísticas
│   ├── Benefits.jsx      # 4 benefícios do app
│   ├── Menu.jsx          # Integração com Spoonacular API
│   ├── Features.jsx      # 6 funcionalidades principais
│   ├── Testimonials.jsx  # Depoimentos de clientes
│   ├── Contact.jsx       # Formulário de e-mail com validação
│   └── Footer.jsx        # Rodapé
├── hooks/
│   └── useFadeIn.js      # Hook de animação scroll
├── App.jsx
├── main.jsx
└── index.css
```


© 2025 GourmetOn · Check-Point 05 · FIAP
