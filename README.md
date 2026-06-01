# Silva Advocacia — Landing Page

Landing page profissional para escritório de advocacia, construída com **React + TypeScript + Vite + Framer Motion**.

## 🚀 Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar em desenvolvimento
npm run dev

# 3. Build para produção
npm run build

# 4. Preview do build
npm run preview
```

A página ficará disponível em `http://localhost:5173`

---

## 📁 Estrutura do projeto

```
silva-advocacia/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── variants.ts          # Todos os variants Framer Motion
│   ├── components/
│   │   ├── index.ts             # Barrel exports
│   │   ├── Navbar.tsx / .css
│   │   ├── Hero.tsx / .css
│   │   ├── Stats.tsx / .css
│   │   ├── Areas.tsx / .css
│   │   ├── About.tsx / .css
│   │   ├── WhyUs.tsx / .css
│   │   ├── Testimonials.tsx / .css
│   │   ├── HowItWorks.tsx / .css
│   │   ├── CTA.tsx / .css
│   │   ├── Footer.tsx / .css
│   │   └── WhatsAppFloat.tsx / .css
│   ├── data/
│   │   └── index.ts             # Todos os textos e dados estáticos
│   ├── hooks/
│   │   ├── useInViewAnimation.ts
│   │   └── useScrolled.ts
│   ├── styles/
│   │   └── global.css           # CSS Variables + Reset + Utilitários
│   ├── types/
│   │   └── index.ts             # Tipos TypeScript
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Personalização

### Trocar fotos reais
Nos componentes `Hero.tsx` e `About.tsx`, substitua o `div.photoPlaceholder` por uma tag `<img>`:

```tsx
// Hero.tsx — dentro de .photoFrame
<img
  src="/images/dr-fernando-hero.jpg"
  alt="Dr. Fernando Silva"
  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
/>

// About.tsx — dentro de .photoWrap
<img
  src="/images/dr-fernando-about.jpg"
  alt="Dr. Fernando Silva"
  style={{ width: '100%', height: '520px', objectFit: 'cover' }}
/>
```

Coloque as imagens em `public/images/`.

### Atualizar dados e textos
Edite apenas `src/data/index.ts` — todos os textos, estatísticas, áreas, depoimentos e passos estão centralizados lá.

### Mudar número do WhatsApp
Em `src/data/index.ts`:
```ts
export const WHATSAPP_NUMBER = '5511999999999' // DDI + DDD + número
```

### Cores e tipografia
Em `src/styles/global.css`, edite as CSS Variables no `:root`.

---

## ✨ Animações (Framer Motion)

Todas as variants ficam em `src/assets/variants.ts`:

| Variant | Uso |
|---|---|
| `fadeUp` | Fade + slide up ao entrar na viewport (padrão) |
| `fadeIn` | Apenas fade |
| `slideInLeft / Right` | Entrada lateral |
| `scaleIn` | Escala de 0.85 → 1 |
| `staggerContainer` | Wrapper para animar filhos em sequência |
| `navbarSlide` | Navbar deslizando do topo |
| `mobileMenu` | Abertura/fechamento do menu mobile |
| `whatsappBounce` | Botão flutuante com spring |
| `timelineLine` | Linha da seção "Como Funciona" se desenha |

---

## 📱 Responsividade

Breakpoints usados:
- `≤ 1024px` — tablets landscape
- `≤ 768px` — tablets portrait / mobile large
- `≤ 600px` — mobile
- `≤ 480px` — mobile small
- `≤ 420px` — mobile extra-small

---

## 🛠️ Tech stack

- **React 18** + **TypeScript**
- **Vite 5** (bundler)
- **Framer Motion 11** (animações)
- **CSS Modules** (estilos escopados por componente)
- **Google Fonts** — Playfair Display + Inter
