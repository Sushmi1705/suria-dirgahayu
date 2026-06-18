import {
  WrenchIcon,
  UsersIcon,
  LaptopIcon,
  HammerIcon,
  PaintbrushIcon,
  NetworkIcon,
  BriefcaseIcon,
  DollarIcon,
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
  parentId?: string;
}

export const SERVICES_DATA: Service[] = [
  // --- ROOT DIVISIONS ---
  {
    id: 'engineering',
    title: 'Engineering',
    shortDesc: 'Innovative engineering solutions for complex challenges',
    description: 'Discover our comprehensive engineering capabilities and state-of-the-art facilities. Suria Dirgahayu delivers high-quality construction, electrical setups, and mechanical MRO solutions compliant with strict DOSH, OSHA, and Suruhanjaya Tenaga licensing requirements.',
    capabilities: [
      'Civil & Structural Engineering',
      'Electrical Installation & ST Licensing',
      'Scaffolding & Rigging Solutions',
      'Mechanical Equipment MRO',
      'Controlled Demolition & Structural Upgrades'
    ],
    icon: WrenchIcon,
    image: '/img-hero.jpg'
  },
  {
    id: 'cx-outsourcing',
    title: 'Customer Experience (CX) Outsourcing',
    shortDesc: 'Elevate your brand with world-class CX services',
    description: 'Providing global customer support, technical assistance, and outsourced operations. We optimize client relations, handle professional contact center management, and provide secure, compliant credit recovery operations.',
    capabilities: [
      'Omnichannel Customer Support',
      'Technical Helpdesk & SLA Management',
      'Outsourced Business Processes',
      'Quality Assurance & Training',
      'Customer Retention & Credit Support'
    ],
    icon: UsersIcon,
    image: '/img-mro-alignment.jpg'
  },
  {
    id: 'digital-enablement',
    title: 'Digital Enablement',
    shortDesc: 'Accelerate your digital transformation journey',
    description: 'Driving tech-forward evolution through cloud infrastructure, software development, and systems integration. We configure server networks, deploy custom client applications, and provide continuous ICT resource staffing.',
    capabilities: [
      'Custom Software & App Development',
      'Network Infrastructure & Cloud Deployment',
      'Cybersecurity Audits & Risk Assessment',
      'ICT Resource Augmentation & Managed Staff',
      'Branding & Digital Marketing Materials'
    ],
    icon: LaptopIcon,
    image: '/img-blog-solar.png'
  },

  // --- SUB-SERVICES FOR ENGINEERING ---
  {
    id: 'construction',
    parentId: 'engineering',
    title: 'Construction Services',
    shortDesc: 'End-to-end structural development, site preparation, and civil engineering',
    description: 'Suria Dirgahayu delivers high-quality construction services. From structural framing and foundation works to specialized industrial building designs, we ensure safety, regulatory compliance (CIDB), and precision engineering.',
    capabilities: [
      'Civil & Structural Engineering',
      'Industrial Plant & Facility Build',
      'Foundation & Piling Works',
      'Demolition & Dismantling',
      'Site Preparation & Earthworks'
    ],
    icon: HammerIcon,
    image: '/img-demolition.jpg'
  },
  {
    id: 'interior-design',
    parentId: 'engineering',
    title: 'Interior Design Solutions',
    shortDesc: 'Premium commercial and residential interior design and fit-out',
    description: 'Transforming empty spaces into modern, functional environments. We offer end-to-end interior layout design, material selection, custom carpentry, and space fit-out services for offices, retail, and homes.',
    capabilities: [
      'Space Planning & Layout Design',
      'Commercial & Office Fit-Outs',
      'Custom Joinery & Furniture Design',
      '3D Visualisation & Rendering',
      'Material & Finish Procurement'
    ],
    icon: PaintbrushIcon,
    image: '/hero-home.png'
  },

  // --- SUB-SERVICES FOR DIGITAL ENABLEMENT ---
  {
    id: 'it-solutions',
    parentId: 'digital-enablement',
    title: 'IT Software & Hardware Solutions',
    shortDesc: 'Integrated enterprise software development and hardware supply',
    description: 'Empowering businesses with custom software applications, web and mobile platforms, paired with premium enterprise hardware setups, server maintenance, and infrastructure procurement.',
    capabilities: [
      'Custom Software & Web Development',
      'Enterprise Hardware Procurement',
      'Network Architecture & Infrastructure',
      'Server & Datacenter Setup',
      'IT Support & Maintenance Services'
    ],
    icon: LaptopIcon,
    image: '/hero-esg.png'
  },
  {
    id: 'ict-management',
    parentId: 'digital-enablement',
    title: 'ICT External Resources Management',
    shortDesc: 'Managed IT staffing, resource augmentation, and vendor management',
    description: 'Providing specialized IT personnel, system analysts, developers, and project managers to support your software projects. We manage external vendors, SLAs, and technical recruitment to keep your digital operations seamless.',
    capabilities: [
      'IT Staff Augmentation & Placement',
      'Technical Project Management Outsourcing',
      'Vendor SLA & Compliance Management',
      'Managed IT Operations & Helpdesk',
      'ICT Recruitment & Talent Sourcing'
    ],
    icon: NetworkIcon,
    image: '/hero-about.png'
  },
  {
    id: 'branding',
    parentId: 'digital-enablement',
    title: 'Corporate Identity & Branding Solutions',
    shortDesc: 'Premium branding, corporate identity, and visual marketing assets',
    description: 'Crafting impactful brand identities that connect with your audience. We offer three specialized branches of branding solutions: Logo Design, Company Profiles, and Digital Design to build a cohesive visual presence.',
    capabilities: [
      'Logo & Visual Identity Design',
      'Corporate Profile & Stationery',
      'Digital Branding & Web Design'
    ],
    icon: TrophyIcon,
    image: '/img-blog-st.png'
  },

  // --- SUB-SERVICES FOR CX OUTSOURCING ---
  {
    id: 'manpower',
    parentId: 'cx-outsourcing',
    title: 'Manpower Supply & Outsourcing',
    shortDesc: 'Skilled, semi-skilled, and general labor solutions for industrial and engineering sectors',
    description: 'Mobilizing qualified candidates at scale for construction, engineering, manufacturing, and oil & gas projects. We handle complete recruiting, screening, payroll administration, housing, and regulatory compliance.',
    capabilities: [
      'Skilled Engineers & Technicians Supply',
      'General Labor & Factory Operators',
      'Recruitment & Screening Operations',
      'Work Permit & Visa Processing',
      'On-site Workforce Management'
    ],
    icon: UsersIcon,
    image: '/img-fabrication.jpg'
  },
  {
    id: 'hr-payroll',
    parentId: 'cx-outsourcing',
    title: 'Human Resource & Payroll Services',
    shortDesc: 'End-to-end payroll processing, employee benefits, and HR compliance',
    description: 'Streamlining your HR administrative burden with secure payroll outsourcing. We manage salary computations, statutory contributions (EPF, SOCSO, EIS, PCB), employee onboarding, and labor law advisory.',
    capabilities: [
      'Automated Payroll Calculation',
      'Statutory Submissions & Compliance',
      'Employee Benefits Administration',
      'HR Compliance & Labor Law Advisory',
      'Employee Record Management'
    ],
    icon: BriefcaseIcon,
    image: '/hero-contact.png'
  },
  {
    id: 'debt-collection',
    parentId: 'cx-outsourcing',
    title: 'Debt Collection & Recovery Management',
    shortDesc: 'Professional credit recovery, collection operations, and risk management',
    description: 'Delivering compliant, ethical, and efficient credit recovery solutions. Our trained recovery officers utilize custom customer relation platforms and telephone systems to maximize recovery while preserving client-customer relationships.',
    capabilities: [
      'Amicable Debt Resolution',
      'Skip Tracing & Debtor Tracking',
      'Receivable Aging Analysis',
      'Legal Recovery Support',
      'Call Center Credit Recovery'
    ],
    icon: DollarIcon,
    image: '/img-mechanical.jpg'
  },

  // --- SUB-SUB-SERVICES FOR BRANDING ---
  {
    id: 'branding-logo',
    parentId: 'branding',
    title: 'Logo & Visual Identity Design',
    shortDesc: 'Professional brand assets, guidelines, and typography setup',
    description: 'Every business needs a unique signature. We design professional logos, define custom color palettes, choose typography, and compile comprehensive brand guidelines (brand books) to maintain identity consistency across all channels.',
    capabilities: [
      'Custom Logo Design & Concepts',
      'Brand Typography & Color Palette',
      'Brand Identity Guideline (Brand Book)',
      'Iconography & Visual Assets Creation',
      'Trademark Logo Preparation'
    ],
    icon: TrophyIcon,
    image: '/hero-wizard.png'
  },
  {
    id: 'branding-collateral',
    parentId: 'branding',
    title: 'Corporate Profile & Materials',
    shortDesc: 'Premium company profiles, brochures, and business stationery',
    description: 'Elevate your physical and digital handouts with professional designs. We write, format, and design stunning company profiles, marketing brochures, annual reports, presentation templates, and corporate business cards.',
    capabilities: [
      'Premium Company Profile Writing & Design',
      'Business Stationery & Letterheads',
      'Marketing Brochures & Product Catalogs',
      'Corporate Presentation Slides',
      'Annual Reports & Print Layouts'
    ],
    icon: BriefcaseIcon,
    image: '/hero-quality.png'
  },
  {
    id: 'branding-digital',
    parentId: 'branding',
    title: 'Digital Branding & Website Design',
    shortDesc: 'Custom web interface design, digital banners, and social media styling',
    description: 'Bring your brand online with premium digital presence. We build stunning, responsive landing pages and user interfaces, design social media templates, email newsletters, and display advertising banners.',
    capabilities: [
      'Premium UI/UX Website Design',
      'Social Media Template Design',
      'Digital Advertising & Banner Assets',
      'Email Newsletter Layout Design',
      'Interactive Web Prototypes'
    ],
    icon: LaptopIcon,
    image: '/hero-journey.png'
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
  { name: 'JW Marriott Kuala Lumpur', sector: 'Hospitality & Services', logoKey: 'jwmarriott' },
  { name: 'Sime Darby Property', sector: 'Property & Infrastructure Development', logoKey: 'simedarby' },
  { name: 'Kendek Products Sdn Bhd (534403-D)', sector: 'Industrial Products & Manufacturing', logoKey: 'kendek' }
];

