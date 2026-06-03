import React from 'react';
import {
  WrenchIcon,
  HammerIcon,
  BuildingIcon,
  LightningIcon,
  UsersIcon,
  FlameIcon,
  GridIcon,
  PaintbrushIcon,
  DollarIcon
} from '../components/Icons';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  capabilities: string[];
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'demolition',
    title: 'Demolition & Dismantling Works',
    shortDesc: 'Safe, controlled demolition & dismantling of structures.',
    description: 'Suria Dirgahayu delivers high-precision demolition and dismantling services. We execute complex decommissioning tasks using state-of-the-art machinery and certified rigging systems, with strict adherence to environmental controls, waste classification, and zero-accident policies.',
    capabilities: [
      'Industrial Plant Decommissioning',
      'Structural Steel Dismantling',
      'Controlled Mechanical Demolition',
      'Debris Classification & Waste Logistics',
      'Site Clearance & Land Remediation'
    ],
    icon: HammerIcon
  },
  {
    id: 'mechanical',
    title: 'Mechanical Maintenance & Overhaul',
    shortDesc: 'Rotating equipment alignment and machinery shutdowns.',
    description: 'We specialize in Mechanical Maintenance, Repair & Overhaul (MRO) services for machinery across heavy industries. Our engineers optimize mechanical efficiency, execute valve overhaul, repair pipelines, and manage rotating machinery shutdowns.',
    capabilities: [
      'Rotating Equipment Outage Management',
      'Turbine & Compressor Alignments',
      'Valve Repair & Hydrostatic Testing',
      'Pipe Welding & Structure Overhaul',
      'Condition-Based Monitoring (CBM)'
    ],
    icon: WrenchIcon
  },
  {
    id: 'civil',
    title: 'Civil & Structure Construction',
    shortDesc: 'Machine foundations, frameworks, and concrete works.',
    description: 'Our civil engineering division provides robust construction and structural services. We construct specialized machine foundations, erect structural steel frames, and implement high-strength industrial flooring to withstand dynamic heavy machinery loads.',
    capabilities: [
      'Specialized Machine Foundations',
      'Structural Steel Erection',
      'Industrial Concrete Flooring & Pavements',
      'Drainage & Infrastructure Civil Works',
      'Retaining Walls & Earthworks'
    ],
    icon: BuildingIcon
  },
  {
    id: 'electrical',
    title: 'Electrical Engineering & Solutions',
    shortDesc: 'Approved LV systems, cabling, and ST wiremen resources.',
    description: 'We are approved electrical specialists providing range of electrical design, cabling, power distribution, and smart protection networks. We offer in-house competent wiremen and chargemen approved by the Energy Commission (Suruhanjaya Tenaga).',
    capabilities: [
      'Low Voltage (LV) Cabling & Distribution Panels',
      'Lightning Protection & Earthing Systems',
      'Extra Low Voltage (ELV) Systems (CCTV, PA, Access)',
      'Backup Generator Set Installations',
      'TNB Cabling, Manhole, and Grid Connections'
    ],
    icon: LightningIcon
  },
  {
    id: 'manpower',
    title: 'Technical Specialist & Manpower Supply',
    shortDesc: 'Qualified engineers, PMT, and ST Wiremen on demand.',
    description: 'We supply highly qualified and experienced technical professionals to oil & gas, petrochemical, and manufacturing sectors. We mobilize competent personnel tailored to clients\' operational scope and strict safety requirements.',
    capabilities: [
      'Technical Advisors (TA) & Rotating Specialists',
      'Energy Commission Approved Wiremen & Chargemen',
      'Project Management Team (PMT) Specialists',
      'Nondestructive Testing (NDT) Technicians',
      'Skilled Mechanical & Structural Welders'
    ],
    icon: UsersIcon
  },
  {
    id: 'fabrication',
    title: 'Fabrication & Metal Works',
    shortDesc: 'Skid platform fabrications and custom heavy welding.',
    description: 'Operating as a structural fabricator, we deliver high-quality steel structures, equipment platforms, transportable skids, and custom steel fixtures built to withstand challenging marine and industrial environments.',
    capabilities: [
      'Skid Base Equipment Platforms',
      'Medium-Size Transportable Structures',
      'Access Walkways, Ladders & Handrails',
      'Heavy Duty Piping Support Racks',
      'Custom Structural Repairs & Welding'
    ],
    icon: FlameIcon
  },
  {
    id: 'scaffolding',
    title: 'Scaffolding & Access Systems',
    shortDesc: 'BS/EN modular scaffold rentals and tag audits.',
    description: 'We supply, install, and certify high-quality scaffolding access systems. Our scaffolding coordinators ensure stable and secure temporary work platforms for high-elevation structures and industrial plant maintenance.',
    capabilities: [
      'BS/EN Standard Modular Scaffolding',
      'Tube & Coupler Access Scaffolding',
      'High-Elevation Suspended Access Systems',
      'Periodic Safety Audits & Green Tagging',
      'Temporary Works Calculations'
    ],
    icon: GridIcon
  },
  {
    id: 'renovation',
    title: 'Renovation & Refurbishment',
    shortDesc: 'Commercial office interiors and hotel upgrades.',
    description: 'Suria Dirgahayu handles premium office renovations and building refurbishments. From structural partitioning and painting to commercial interior upgrades, we deliver projects on time with high finish quality.',
    capabilities: [
      'Commercial Office Interior Fit-Outs',
      'Hotel & Hospitality Refurbishments',
      'Masonry, Painting & Decorative Finishes',
      'Plumbing, HVAC & Mechanical Ducts',
      'Drywall Partitioning & Acoustic Ceilings'
    ],
    icon: PaintbrushIcon
  },
  {
    id: 'debt',
    title: 'Debt Recovery & Collection Services',
    shortDesc: 'Professional credit management and collections.',
    description: 'We offer professional corporate debt recovery services. Operating with strict confidentiality, professionalism, and legal compliance, we help companies manage outstanding receivables and improve cash flow.',
    capabilities: [
      'Corporate Credit Consultation & Dispute Resolution',
      'Professional Debt Recovery Notifications',
      'Field Visitations & Mediation Operations',
      'Flexible Settlement Plan Agreements',
      'Receivables Tracking & Credit Risk Audits'
    ],
    icon: DollarIcon
  }
];

export const CLIENTS = [
  { name: 'Ann Joo Steel Berhad', sector: 'Steel & Metallurgy' },
  { name: 'Maxeon Solar Malaysia', sector: 'Renewables Manufacturing' },
  { name: 'Hume Cemboard Industries', sector: 'Building Materials' },
  { name: 'DRB-HICOM Berhad', sector: 'Automotive & Logistics' },
  { name: 'Suria Dirgahayu (M) Sdn. Bhd.', sector: 'CX & Automation' },
  { name: 'JW Marriott Kuala Lumpur', sector: 'Hospitality & Services' },
  { name: 'ITW Insulation Systems', sector: 'Heavy Insulation' },
  { name: 'Medilaund (M) Sdn. Bhd.', sector: 'Healthcare Services' }
];
