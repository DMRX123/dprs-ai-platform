// App Constants
export const APP_NAME = 'DPRS AI Platform'
export const APP_URL = 'https://dprs.in'
export const APP_DESCRIPTION = 'Digital Platform for Remote & Reliable Services - AI-Powered Quantum Solutions'
export const APP_KEYWORDS = ['AI', 'Quantum Computing', 'Web Development', 'Next.js', 'React', '3D Animations']

// API Endpoints
export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  AI_ESTIMATE: '/api/ai-estimate',
  PORTFOLIO: '/api/portfolio',
  SERVICES: '/api/services',
} as const

// Service Categories
export const SERVICE_CATEGORIES = {
  AI: 'ai',
  WEB: 'web',
  APP: 'app',
  QUANTUM: 'quantum',
  BLOCKCHAIN: 'blockchain',
  METAVERSE: 'metaverse',
} as const

// Complexity Levels
export const COMPLEXITY_LEVELS = {
  LOW: { value: 'low', multiplier: 1, label: 'Basic', weeks: 4 },
  MEDIUM: { value: 'medium', multiplier: 1.5, label: 'Advanced', weeks: 8 },
  HIGH: { value: 'high', multiplier: 2.5, label: 'Enterprise', weeks: 16 },
  CUSTOM: { value: 'custom', multiplier: 4, label: 'Custom', weeks: 24 },
} as const

// AI Features Catalog
export const AI_FEATURES_CATALOG = [
  { id: 'chatbot', name: 'AI Chatbot Integration', price: 15000, icon: 'Bot', popular: true },
  { id: 'ml-model', name: 'Machine Learning Model', price: 25000, icon: 'Brain', popular: true },
  { id: 'computer-vision', name: 'Computer Vision', price: 30000, icon: 'Eye', popular: false },
  { id: 'nlp', name: 'NLP Processing', price: 20000, icon: 'MessageSquare', popular: true },
  { id: 'predictive', name: 'Predictive Analytics', price: 22000, icon: 'TrendingUp', popular: false },
  { id: 'recommendation', name: 'Recommendation Engine', price: 18000, icon: 'ThumbsUp', popular: true },
  { id: 'voice', name: 'Voice Recognition', price: 28000, icon: 'Mic', popular: false },
  { id: 'facial', name: 'Facial Recognition', price: 35000, icon: 'Face', popular: false },
] as const

// Timeline Options
export const TIMELINE_OPTIONS = {
  URGENT: { value: 'urgent', multiplier: 1.5, label: 'Urgent (2-4 weeks)' },
  NORMAL: { value: 'normal', multiplier: 1, label: 'Normal (1-3 months)' },
  RELAXED: { value: 'relaxed', multiplier: 0.8, label: 'Relaxed (3-6 months)' },
} as const

// Color Palette
export const COLORS = {
  primary: '#ff6b6b',
  secondary: '#4ecdc4',
  accent: '#9b59b6',
  quantum: '#00f3ff',
  dark: '#05050a',
  light: '#ffffff',
  gradient: {
    primary: 'linear-gradient(135deg, #ff6b6b, #4ecdc4)',
    secondary: 'linear-gradient(135deg, #4ecdc4, #00f3ff)',
    quantum: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #9b59b6, #00f3ff)',
  },
} as const

// Breakpoints
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/dprs',
  twitter: 'https://twitter.com/dprs_platform',
  linkedin: 'https://linkedin.com/company/dprs',
  instagram: 'https://instagram.com/dprs_platform',
  youtube: 'https://youtube.com/@dprs',
} as const

// Contact Info
export const CONTACT_INFO = {
  email: 'contact@dprs.in',
  phone: '+91 XXXXXXXXXX',
  whatsapp: '+91 XXXXXXXXXX',
  address: 'India (Remote)',
  responseTime: '24 hours',
} as const

// SEO Defaults
export const SEO_DEFAULTS = {
  title: 'DPRS | AI-Powered Digital Platform',
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS.join(', '),
  ogImage: '/og-image.jpg',
  twitterImage: '/twitter-image.jpg',
} as const

// Animation Defaults
export const ANIMATION_DEFAULTS = {
  duration: 800,
  delay: 0,
  threshold: 0.1,
  once: true,
} as const

// Payment Options (Future)
export const PAYMENT_METHODS = {
  UPI: 'UPI',
  CARD: 'Card',
  NETBANKING: 'Net Banking',
  CRYPTO: 'Cryptocurrency',
} as const

// Cookie Names
export const COOKIE_NAMES = {
  THEME: 'dprs-theme',
  SESSION: 'dprs-session',
  CONSENT: 'dprs-consent',
} as const