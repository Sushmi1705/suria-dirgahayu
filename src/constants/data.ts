import React from 'react';
import {
  BuildingIcon,
  UsersIcon,
  PaintbrushIcon,
  DollarIcon,
  LaptopIcon,
  NetworkIcon,
  UserCheckIcon,
  TrophyIcon
} from '../components/Icons';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  capabilities: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
  image?: string;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'construction',
    title: 'Construction Services',
    shortDesc: 'End-to-end building and structural engineering solutions.',
    description: 'Surya Dhirgahyu delivers high-quality construction services. From demolition and structural works to scaffolding, heavy machinery supply, and transportation haulage, we execute building and civil works to standard safety and quality norms.',
    capabilities: [
      'Demolition & Dismantling Works',
      'Civil & Structural Works',
      'Renovation & Refurbishment Works',
      'Fabrication & Metal Works',
      'Scaffolding & Temporary Works',
      'Heavy Machinery Supply',
      'Transportation & Haulage Services'
    ],
    icon: BuildingIcon,
    image: '/img-civil.jpg'
  },
  {
    id: 'it-solutions',
    title: 'IT Software & Hardware Solutions',
    shortDesc: 'Custom software development, hardware installation, and cyber security.',
    description: 'Providing integrated IT solutions to keep business operations secure, optimized, and connected. We supply hardware, deploy server networks, and implement cyber security and cloud backup infrastructure.',
    capabilities: [
      'Software Development',
      'Hardware Supply & Installation',
      'Network & Infrastructure Solutions',
      'Cloud & Cyber security Services',
      'IT Support & Maintenance'
    ],
    icon: LaptopIcon,
    image: '/img-electrical.jpg'
  },
  {
    id: 'interior-design',
    title: 'Interior Design Solutions',
    shortDesc: 'Creative space planning, carpentry works, and office fit-outs.',
    description: 'Transforming spaces with smart interior planning, custom cabinetry, quality carpentry, and professional refurbishment. We create high-quality corporate workspaces, offices, and commercial interiors.',
    capabilities: [
      'Interior Design & Consultation',
      'Space Planning',
      'Office Fit-Out Works',
      'Furniture & Carpentry Works',
      'Renovation & Refurbishment'
    ],
    icon: PaintbrushIcon,
    image: '/img-scaffolding.jpg'
  },
  {
    id: 'ict-management',
    title: 'ICT External Resources Management',
    shortDesc: 'Managed ICT resources, staffing, and system administration.',
    description: 'Fulfilling resource gaps with expert technical support, system administrators, and project staffing. Our external resource team optimizes IT service delivery and IT infrastructure management.',
    capabilities: [
      'ICT Resource Outsourcing',
      'IT Project Staffing',
      'Technical Support Services',
      'System Administration',
      'Managed ICT Services'
    ],
    icon: NetworkIcon,
    image: '/img-mechanical.jpg'
  },
  {
    id: 'manpower',
    title: 'Manpower Supply & Outsourcing',
    shortDesc: 'Skilled workforce, contract staffing, and technical specialist supply.',
    description: 'Connecting organizations with key professional talent, technical specialists, and contract staff. We support general workforce management and specialized personnel supply across core industries.',
    capabilities: [
      'Skilled & General Workforce Supply',
      'Technical Specialist Supply',
      'Contract Staffing',
      'Recruitment Services',
      'Workforce Management'
    ],
    icon: UsersIcon,
    image: '/img-hero.jpg'
  },
  {
    id: 'hr-payroll',
    title: 'Human Resource & Payroll Services',
    shortDesc: 'Comprehensive HR administration, payroll systems, and onboarding.',
    description: 'Streamlining employee payroll and HR administration. We handle executive search, training, developmental programs, and outsourced human resource services to ensure operational excellence.',
    capabilities: [
      'Payroll Management',
      'HR Administration',
      'Recruitment & Onboarding',
      'Training & Development',
      'HR Outsourcing Services'
    ],
    icon: UserCheckIcon,
    image: '/img-team.jpg'
  },
  {
    id: 'debt-collection',
    title: 'Debt Collection & Recovery Management',
    shortDesc: 'Professional credit management and recovery analytics.',
    description: 'Protecting company cash flows through compliant, professional corporate collections. We optimize debt recovery and provide collection reporting, credit risk audit, and analytics.',
    capabilities: [
      'Debt Recovery Services',
      'Collection Management',
      'Recovery Reporting & Analytics'
    ],
    icon: DollarIcon,
    image: '/img-demolition.jpg'
  },
  {
    id: 'branding',
    title: 'Corporate Identity & Branding Solutions',
    shortDesc: 'Branding strategy, logo design, and digital marketing materials.',
    description: 'Building distinct, memorable brands. We create corporate profiles, logos, digital branding layouts, and marketing materials that align corporate identity with strategic vision.',
    capabilities: [
      'Branding Strategy',
      'Logo & Identity Design',
      'Corporate Profile Design',
      'Marketing Materials',
      'Digital Branding Solutions'
    ],
    icon: TrophyIcon,
    image: '/img-fabrication.jpg'
  }
];

export interface CapabilitySector {
  title: string;
  description: string;
}

export const CAPABILITY_SECTORS: CapabilitySector[] = [
  {
    title: 'Construction & Infrastructure',
    description: 'Delivering end-to-end construction solutions that support the development of sustainable and future-ready infrastructure.'
  },
  {
    title: 'Engineering & Technical Services',
    description: 'Providing specialized engineering expertise, project support, technical manpower, and consultancy services across various sectors.'
  },
  {
    title: 'Workforce Solutions',
    description: 'Connecting organizations with highly skilled professionals, from entry-level talent to C-suite executives, through manpower supply, ICT resource augmentation, executive search, and workforce management services.'
  },
  {
    title: 'Business Support Services',
    description: 'Supporting organizations through human resource management, payroll administration, debt recovery, corporate identity development, and operational support services.'
  },
  {
    title: 'Interior Design & Fit-Out Solutions',
    description: 'Transforming spaces through innovative interior design, fit-out management, and workspace optimization services.'
  }
];

export interface IndustryFootprint {
  id: string;
  name: string;
  emoji: string;
}

export const INDUSTRY_FOOTPRINTS: IndustryFootprint[] = [
  { id: 'construction', name: 'Construction & Infrastructure', emoji: '🏗️' },
  { id: 'engineering', name: 'Engineering & Technical Services', emoji: '⚙️' },
  { id: 'ict', name: 'Information & Communications Technology (ICT)', emoji: '💻' },
  { id: 'energy', name: 'Energy & Utilities', emoji: '⚡' },
  { id: 'oilgas', name: 'Oil & Gas', emoji: '🛢️' },
  { id: 'telecom', name: 'Telecommunications', emoji: '📡' },
  { id: 'gov', name: 'Government & Government-Linked Companies (GLCs)', emoji: '🏢' },
  { id: 'retail', name: 'Retail & Consumer Services', emoji: '🛒' },
  { id: 'ecommerce', name: 'E-Commerce & Digital Businesses', emoji: '🌐' },
  { id: 'manufacturing', name: 'Manufacturing & Industrial Operations', emoji: '🏭' },
  { id: 'water', name: 'Water & Environmental Services', emoji: '🚰' },
  { id: 'healthcare', name: 'Healthcare & Professional Services', emoji: '🏥' }
];

export const CLIENTS = [
  { name: 'Ann Joo Steel Berhad', sector: 'Steel & Metallurgy', logoKey: 'annjoo' },
  { name: 'Indah Water Konsortium', sector: 'Water & Utility Services', logoKey: 'indahwater' },
  { name: 'Singer Malaysia', sector: 'Retail & Consumer Goods', logoKey: 'singer' },
  { name: 'Courts Malaysia', sector: 'Consumer Electronics & Retail', logoKey: 'courts' },
  { name: 'Volare Credit Management', sector: 'Debt Recovery & CX Services', logoKey: 'volare' },
  { name: 'Hume Cemboard Industries', sector: 'Building Materials', logoKey: 'humecemboard' },
  { name: 'TechnoMech Malaysia', sector: 'Engineering & MRO Solutions', logoKey: 'technomech' },
  { name: 'Maxeon Solar Malaysia', sector: 'Renewables Manufacturing', logoKey: 'maxeon' },
  { name: 'Medilaund (M) Sdn. Bhd.', sector: 'Healthcare & Laundry Services', logoKey: 'medilaund' },
  { name: 'JW Marriott Kuala Lumpur', sector: 'Hospitality & Services', logoKey: 'jwmarriott' }
];
