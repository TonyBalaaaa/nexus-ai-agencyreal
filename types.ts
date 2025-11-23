
export enum AppView {
  DASHBOARD = 'DASHBOARD',
  CONTENT = 'CONTENT',
  IMAGES = 'IMAGES',
  STRATEGY = 'STRATEGY',
  SEO = 'SEO',
  MASTERCLASS = 'MASTERCLASS',
  ADS = 'ADS',
  VIDEO = 'VIDEO',
  FUNNELS = 'FUNNELS',
  INFOPRODUCT = 'INFOPRODUCT',
  SAAS = 'SAAS',
  COMPETITORS = 'COMPETITORS',
  CRM = 'CRM',
  AUTOMATION = 'AUTOMATION',
  SETTINGS = 'SETTINGS',
  ADMIN = 'ADMIN'
}

export interface UserSettings {
  layoutMode: 'COMFORTABLE' | 'COMPACT';
  sidebarMode: 'FULL' | 'ICONS';
  themeColor: 'BLUE' | 'PURPLE' | 'EMERALD' | 'AMBER';
  notifications: boolean;
  autoSave: boolean;
  defaultView: AppView;
  twoFactorEnabled?: boolean; // New field for 2FA status
}

export interface SecurityLog {
  id: string;
  event: string;
  location: string;
  timestamp: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
}

export interface ContentResult {
  title: string;
  body: string;
  hashtags: string[];
}

// --- STRATEGY WAR ROOM TYPES ---

export interface GrowthHack {
  title: string;
  description: string;
  impact: 'HIGH' | 'MEDIUM' | 'EXTREME';
  difficulty: 'EASY' | 'HARD';
}

export interface Tactic {
  id: string;
  channel: string;
  action: string;
  status: 'PENDING' | 'DONE';
}

export interface Phase {
  phaseName: string; // ex: "Semana 1-2: Aquecimento"
  focus: string;
  tactics: Tactic[];
}

export interface BudgetAllocation {
  category: string; // ex: "Ads (Tráfego)"
  percentage: number;
  reasoning: string;
}

export interface StrategicPlan {
  product: string;
  goal: string;
  guruStyle: string;
  executiveSummary: string;
  phases: Phase[];
  growthHacks: GrowthHack[];
  budgetPlan: BudgetAllocation[];
  kpis: string[]; // Key Performance Indicators
}

export interface StrategyItem {
  // Deprecated but kept for compatibility if needed, though we use StrategicPlan now
  week: number;
  focus: string;
  actions: string[];
  channels: string[];
}

export interface SeoAnalysis {
  score: number;
  goodPoints: string[];
  improvements: string[];
  keywordDensity: string;
}

export interface PersonaProfile {
  name: string;
  role: string;
  age: number;
  painPoints: string[];
  desires: string[];
  objections: string[];
  quote: string;
  buyingTrigger: string;
  buyingMotivations: string[]; // Fatores psicológicos (ex: Status, Medo, Conforto)
  preferredChannels: string[];
}

export interface UVPResult {
  headline: string;
  subheadline: string;
  bulletPoints: string[];
  elevatorPitch: string;
}

export interface SWOTAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
  strategicInsight: string;
}

export interface BrandIdentity {
  archetype: string; // e.g., "The Hero", "The Outlaw"
  traits: string[];
  voiceTone: string;
  colors: string[]; // Hex codes
  visualStyle: string;
  missionStatement: string;
}

export interface GuardianInsight {
  blindSpot: string; // What the user missed
  hiddenOpportunity: string; // An opportunity they didn't see
  actionableTip: string; // Immediate action
  score: number; // Quality of the input/output
}

export interface GuruAnalysis {
  expertName: string;
  philosophy: string;
  corePrinciples: string[];
  applicationSteps: string[];
  famousQuote: string;
}

// --- ADS MANAGER TYPES ---

export interface AdMetric {
  name: string;
  value: string;
  description: string;
  isGood: boolean; // For simulation purposes
}

export interface CreativeVariation {
  title: string; // ex: "Variação A: UGC Natural"
  type: string; // ex: "Vídeo Selfie", "Imagem Estúdio", "Carrossel"
  angle: string; // ex: "Foco na Dor", "Unboxing", "Depoimento"
  description: string; // Descrição visual detalhada
  visualHook: string; // O que prende a atenção nos primeiros 3 segundos
  colorPalette: string; // Sugestão de cores
}

export interface NeuroMetrics {
  dopamine: number; // Desejo/Recompensa (0-100)
  cortisol: number; // Urgência/Medo (0-100)
  oxytocin: number; // Conexão/Empatia (0-100)
  serotonin: number; // Status/Autoridade (0-100)
  explanation: string;
}

export interface PredictiveData {
  day: number;
  spend: number;
  revenue: number;
  roas: number;
}

export interface AdCampaign {
  headline: string;
  primaryText: string;
  creativeVariations: CreativeVariation[]; 
  callToAction: string;
  objective: string;
  simulatedMetrics: AdMetric[]; 
  neuroAnalysis?: NeuroMetrics; // New: Psychological Scanner
  predictiveSimulation?: PredictiveData[]; // New: Future ROI Projection
}

export interface AdMatrixItem {
  angleName: string; // e.g., "Rational Logic", "Emotional Story"
  headline: string;
  hook: string;
  score: number;
}

export interface AdOptimization {
  analysis: string;
  score: number;
  criticalIssues: string[];
  optimizationPlan: string[];
}

export interface AdTemplate {
  id: string;
  name: string;
  product: string;
  audience: string;
  platform: Platform;
  phase: MarketingPhase;
}

// FB Integration Types
export interface FacebookCampaign {
  id: string;
  name: string;
  status: 'ACTIVE' | 'PAUSED' | 'LEARNING';
  spend: number;
  impressions: number;
  cpc: number;
  ctr: number;
  roas: number;
  purchases: number;
}

export interface OptimizationSuggestion {
  campaignId: string;
  action: 'SCALE' | 'PAUSE' | 'TWEAK';
  reason: string;
  suggestedChange: string; // ex: "Increase budget by 20%"
}

// --- VIDEO & FUNNEL TYPES ---

export interface VideoScriptScene {
  sceneNumber: number;
  visualDescription: string; // Prompt for image gen
  audioScript: string; // Narration
  duration: string;
  cameraAngle: string;
}

export interface VideoScriptResult {
  title: string;
  scenes: VideoScriptScene[];
}

export interface FunnelStage {
  stageName: string; // ex: Topo (Atração)
  objective: string;
  assetType: string; // ex: Lead Magnet, Ads
  description: string;
  kpi: string;
}

export interface FunnelPlan {
  funnelName: string;
  overview: string;
  stages: FunnelStage[];
  emailSequence: string[]; // Brief descriptions of emails
}

// --- INFO PRODUCT & SAAS TYPES ---

export enum InfoProductFormat {
  COURSE = 'Curso Online (Videoaulas)',
  EBOOK = 'E-book / Guia PDF',
  MENTORSHIP = 'Mentoria em Grupo',
  COMMUNITY = 'Comunidade (Assinatura)'
}

export interface CourseModule {
  moduleTitle: string;
  lessons: string[]; // List of lesson titles
}

export interface InfoProductUpsell {
  offerName: string;
  type: 'ORDER_BUMP' | 'UPSELL' | 'DOWNSELL';
  price: string;
  pitch: string;
}

export interface InfoProductStrategy {
  launchType: string; // e.g., "Semente", "Perpétuo"
  pricingPsychology: string; // Why this price?
  primaryAvatar: {
    name: string;
    pain: string;
    desire: string;
  };
}

export interface InfoProductAd {
  headline: string;
  adCopy: string;
  creativeConcept: string;
}

export interface InfoProductPlan {
  productName: string;
  tagline: string;
  targetAudience: string;
  modules: CourseModule[];
  bonuses: string[];
  pricingStrategy: string;
  deliveryPlatform: string; // Suggestion (e.g. Hotmart, Kiwify)
  // New Strategy Fields
  marketingStrategy: InfoProductStrategy;
  upsellPath: InfoProductUpsell[];
  launchCampaign: InfoProductAd;
  visualConcept?: string; // Prompt for cover/box
}

export interface TrendOpportunity {
  title: string;
  niche: string;
  format: InfoProductFormat;
  whyItSells: string; // Viral reason
  viralityScore: number;
}

export interface SalesPageCopy {
  headline: string;
  subheadline: string;
  vslScript: string;
  painAgitation: string;
  solutionReveal: string;
  bullets: string[];
  guarantee: string;
}

export interface SaaSFeature {
  name: string;
  description: string;
  priority: 'MVP' | 'V2' | 'FUTURE';
}

export interface SaaSTechStack {
  frontend: string;
  backend: string;
  database: string;
  hosting: string;
}

export interface SaaSPricingTier {
  name: string;
  price: string;
  features: string[];
}

export interface SaaSPlan {
  appName: string;
  elevatorPitch: string;
  coreFeatures: SaaSFeature[];
  techStack: SaaSTechStack;
  pricingTiers: SaaSPricingTier[];
  launchRoadmap: string[];
}

// --- COMPETITOR ANALYSIS TYPES ---

export interface CompetitorProfile {
  name: string;
  type: 'DIRECT' | 'INDIRECT' | 'BENCHMARK';
  mainHook: string; // The core promise they make
  strengths: string[];
  weaknesses: string[];
  trafficSource: string; // e.g., "Mostly Organic SEO"
  adStrategy: string; // e.g., "Aggressive Retargeting"
}

export interface MarketGap {
  gapName: string;
  description: string;
  howToExploit: string;
}

export interface CompetitorRadarData {
  subject: string; // e.g., "Price", "Quality"
  A: number; // You
  B: number; // Competitor Avg
}

export interface CompetitorAnalysis {
  marketOverview: string;
  competitors: CompetitorProfile[];
  gaps: MarketGap[];
  radarData: CompetitorRadarData[];
  disruptionStrategy: string; // How to beat them all
}

// --- CRM & SALES TYPES ---

export type LeadStatus = 'NEW' | 'QUALIFIED' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';

export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  status: LeadStatus;
  value: number; // Deal value
  source: string; // e.g., Ads, Organic
  lastContact: string;
  notes: string;
}

export interface LeadScore {
  score: number; // 0-100
  winProbability: 'LOW' | 'MEDIUM' | 'HIGH';
  personalityType: string; // e.g., "Analytical", "Impulsive"
  keyObjection: string;
  recommendedStrategy: string;
}

export interface SalesScript {
  channel: 'WHATSAPP' | 'EMAIL' | 'CALL';
  subject?: string;
  script: string;
  followUp: string;
}

// --- AUTOMATION & WORKFLOW TYPES ---

export enum WorkflowNodeType {
  TRIGGER = 'TRIGGER',
  ACTION = 'ACTION',
  AI_AGENT = 'AI_AGENT', // New autonomous node
  DELAY = 'DELAY',
  CONDITION = 'CONDITION'
}

export interface WorkflowNode {
  id: string;
  type: WorkflowNodeType;
  label: string;
  description: string;
  icon: string; // Lucide icon name
  position: { x: number; y: number }; // For visual graph
  config?: any;
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
}

export interface WorkflowLog {
  nodeId: string;
  timestamp: string;
  status: 'SUCCESS' | 'ERROR' | 'PROCESSING';
  message: string;
}

export interface Workflow {
  name: string;
  description: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  status: 'ACTIVE' | 'DRAFT';
}

export interface NextStepGuidance {
  reasoning: string;
  nextView: AppView;
  buttonLabel: string;
}

// --- LICENSE & ADMIN TYPES ---

export type UserRole = 'TRIAL' | 'PAID' | 'ADMIN';

export interface LicenseKey {
  code: string; // The "NEXUS-XXXX" string
  status: 'UNUSED' | 'ACTIVE' | 'EXPIRED';
  planValue: number; // e.g., 147.00
  createdDate: string;
  activatedDate?: string;
  activatedBy?: string; // Device ID or User Name (simulated)
}

export interface SaaSMetrics {
  activeUsers: number;
  mrr: number; // Monthly Recurring Revenue
  totalKeys: number;
  conversionRate: number;
}

export enum FunnelType {
  LAUNCH = 'Lançamento Semente (Webinar)',
  PERPETUAL = 'Funil Perpétuo (Automático)',
  HIGH_TICKET = 'Funil High Ticket (Aplicação)',
  LEAD_MAGNET = 'Isca Digital Simples',
  ECOMMERCE = 'E-commerce (Oferta Direta + Upsell)',
  SAAS = 'SaaS (Free Trial + Onboarding)'
}

export enum MarketingPhase {
  FOUNDATION = 'Fundação & Branding',
  TRAFFIC = 'Tráfego & Atração',
  CONVERSION = 'Conversão & Vendas',
  RETENTION = 'Retenção & LTV'
}

export enum Platform {
  INSTAGRAM = 'Instagram',
  LINKEDIN = 'LinkedIn',
  BLOG = 'Blog',
  TWITTER = 'X (Twitter)',
  EMAIL = 'Email Marketing',
  TIKTOK = 'TikTok',
  YOUTUBE = 'YouTube Roteiro'
}

export enum Tone {
  PROFESSIONAL = 'Profissional',
  CASUAL = 'Descontraído',
  URGENT = 'Urgente (Escassez)',
  INSPIRATIONAL = 'Inspirador',
  HUMOROUS = 'Humorístico',
  AUTHORITATIVE = 'Autoritário',
  EMPATHETIC = 'Empático'
}

export enum GuruStyle {
  LAUNCH = 'Fórmula de Lançamento (Estilo Jeff Walker)',
  VIRAL = 'Conteúdo Viral & Escala (Estilo Gary Vee)',
  DIRECT = 'Resposta Direta & Copy (Estilo Dan Kennedy)',
  STORY = 'Storytelling & Branding (Estilo Seth Godin)',
  FUNNEL = 'Funis de Venda (Estilo Russell Brunson)',
  GROWTH = 'Growth Hacking (Estilo Sean Ellis)',
  SEO = 'SEO & Conteúdo Longo (Estilo Neil Patel)',
  ADS = 'Tráfego Pago Agressivo (Estilo Pedro Sobral)',
  COMMUNITY = 'Construção de Tribo (Estilo Seth Godin/Community)',
  HIGH_TICKET = 'Vendas High Ticket (Estilo Alex Hormozi)'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
