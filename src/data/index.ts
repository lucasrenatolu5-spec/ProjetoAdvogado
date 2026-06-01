import type { Stat, Area, WhyItem, Testimonial, Step, NavLink } from '../types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Início',    href: '#inicio' },
  { label: 'Áreas',    href: '#areas' },
  { label: 'Sobre',    href: '#sobre' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato',  href: '#contato' },
]

export const STATS: Stat[] = [
  { icon: '🏆', value: '15+',  label: 'Anos de Experiência'   },
  { icon: '👥', value: '500+', label: 'Casos Atendidos'        },
  { icon: '🎯', value: '98%',  label: 'Satisfação dos Clientes'},
  { icon: '🌐', value: '27',   label: 'Estados Atendidos'      },
]

export const AREAS: Area[] = [
  {
    icon: '💼',
    title: 'Direito Trabalhista',
    description: 'Defesa completa dos seus direitos trabalhistas, desde rescisões até processos complexos.',
  },
  {
    icon: '🧑‍🦽',
    title: 'Direito Previdenciário',
    description: 'Conquiste sua aposentadoria e benefícios do INSS com acompanhamento especializado.',
  },
  {
    icon: '👨‍👩‍👧',
    title: 'Direito de Família',
    description: 'Soluções humanizadas para divórcios, pensão alimentícia e guarda compartilhada.',
  },
  {
    icon: '⚖️',
    title: 'Direito Civil',
    description: 'Contratos, indenizações e resolução de conflitos patrimoniais e pessoais.',
  },
  {
    icon: '🏢',
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica estratégica para proteger e expandir seu negócio.',
  },
]

export const CREDENTIALS: string[] = [
  'Especialização em Direito do Trabalho pela PUC-SP',
  'MBA em Direito Previdenciário pela FGV',
  'Mais de 500 casos resolvidos com índice de 98% de sucesso',
  'Membro ativo da Comissão de Direitos Humanos da OAB/SP',
]

export const WHY_ITEMS: WhyItem[] = [
  {
    icon: '👥',
    title: 'Atendimento Personalizado',
    description: 'Cada caso é único. Você terá atenção dedicada e estratégias sob medida para sua situação.',
  },
  {
    icon: '🛡️',
    title: 'Transparência Total',
    description: 'Você acompanha cada etapa do processo com relatórios claros e comunicação constante.',
  },
  {
    icon: '⚡',
    title: 'Respostas Rápidas',
    description: 'Retornamos seu contato em até 24 horas. Seu tempo é valioso e respeitamos isso.',
  },
  {
    icon: '🏆',
    title: 'Experiência Comprovada',
    description: 'Mais de 15 anos defendendo clientes em casos de alta complexidade com resultados consistentes.',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos Mendes',
    role: 'Empresário',
    stars: 5,
    avatar: '👨‍💼',
    text: 'Estava perdendo as esperanças com minha causa trabalhista. O Dr. Fernando não só reverteu a situação como garantiu todos os meus direitos. Um profissional excepcional que realmente se importa.',
  },
  {
    name: 'Ana Paula Rodrigues',
    role: 'Professora',
    stars: 5,
    avatar: '👩‍🏫',
    text: 'Passei por um divórcio muito difícil e o atendimento foi impecável. Além da competência técnica, recebi apoio emocional e orientação em cada decisão. Serei eternamente grata.',
  },
  {
    name: 'Roberto Lima',
    role: 'Aposentado',
    stars: 5,
    avatar: '👨‍🦳',
    text: 'Depois de 3 anos tentando sozinho, consegui minha aposentadoria em apenas 8 meses com a ajuda do escritório. Profissionalismo, dedicação e resultados reais. Recomendo de olhos fechados!',
  },
]

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Primeiro Contato',
    description: 'Conte sua situação por WhatsApp ou telefone. Faremos uma análise preliminar gratuita.',
  },
  {
    number: '02',
    title: 'Análise Detalhada',
    description: 'Avaliamos seu caso com profundidade e apresentamos as melhores estratégias jurídicas.',
  },
  {
    number: '03',
    title: 'Estratégia Personalizada',
    description: 'Desenvolvemos um plano de ação exclusivo pensado especificamente para sua situação.',
  },
  {
    number: '04',
    title: 'Acompanhamento Completo',
    description: 'Você receberá atualizações constantes e terá acesso direto ao advogado responsável.',
  },
]

export const WHATSAPP_NUMBER = '5511999999999'
export const WHATSAPP_MESSAGE = encodeURIComponent('Olá! Gostaria de agendar uma consulta.')
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
