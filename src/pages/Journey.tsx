import React, { useState } from 'react';
import { handleCardMouseMove, handleCardMouseLeave } from '../utils/tilt';
import HeroBackground from '../components/HeroBackground';
import { WrenchIcon, HammerIcon, TrophyIcon, BoltIcon, LaptopIcon } from '../components/Icons';

interface MilestoneDetail {
  projects: string[];
  certifications: string[];
  metrics: { label: string; value: string }[];
  workforce: string;
}

interface Milestone {
  date: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  badgeText: string;
  highlights: string[];
  details: MilestoneDetail;
}

const MILESTONES: Milestone[] = [
  {
    date: '2021',
    title: 'Incorporation & Core Mechanical Focus',
    desc: 'Incorporated Suria Dirgahayu Sdn. Bhd. as a specialist mechanical subcontractor, delivering industrial dismantling, machinery rigging, and mechanical overhaul maintenance.',
    icon: WrenchIcon,
    badgeText: 'CIDB Grade G3',
    highlights: [
      'Successfully executed 10+ plant-scale machinery dismantle projects.',
      'Established core safety policies compliant with DOSH/OSHA requirements.',
      'Built first-generation team of skilled mechanical fitters and riggers.'
    ],
    details: {
      projects: [
        'Port Klang chemical processing plant decommissioning & machinery extraction.',
        'Semenyih manufacturing facility industrial boiler overhaul and maintenance.',
        'Klang Valley steel tube manufacturing plant heavy rigging and equipment setup.'
      ],
      certifications: [
        'CIDB Malaysia Grade G3 Civil & Mechanical Registration',
        'DOSH Permit for Scaffolding Rigging operations',
        'Suruhanjaya Syarikat Malaysia (SSM) Incorporation Certificate'
      ],
      metrics: [
        { label: 'Safety Record', value: '100% Zero LTI' },
        { label: 'Active Crew Size', value: '15+ Specialists' },
        { label: 'Heavy Equipment', value: '5+ Cranes & Rigging Units' }
      ],
      workforce: 'DOSH-aligned scaffolders, certified mechanical fitters, and heavy rigging supervisors.'
    }
  },
  {
    date: '2022',
    title: 'Civil Engineering & Structural Integration',
    desc: 'Expanded service spectrum into civil works to support industrial plant structures. Pioneered heavy machine slab foundations, concrete paving, and access scaffolding systems.',
    icon: HammerIcon,
    badgeText: 'CIDB Grade G5 Upgrade',
    highlights: [
      'Upgraded registration to CIDB Grade G5 to bid for larger scope tenders.',
      'Deployed certified internal scaffolding crews for high-risk access works.',
      'Poured structural machinery foundations and reinforced slabs for manufacturing facilities.'
    ],
    details: {
      projects: [
        'Concrete foundation slabs for heavy raw material storage silos.',
        'Reinforced concrete paving for logistic routes and heavy-vehicle zones.',
        'Advanced access scaffolding setup for multi-level oil refinery maintenance.'
      ],
      certifications: [
        'CIDB Malaysia Grade G5 (Upgraded Bidding Capacity)',
        'DOSH Competent Scaffold Inspector Certification',
        'CIDB Green Card Safety Accreditation for all field workforce'
      ],
      metrics: [
        { label: 'Concrete Poured', value: '1,200+ Cubic Meters' },
        { label: 'Steel Fabricated', value: '80+ Metric Tons' },
        { label: 'Access Scaffolding', value: '15,000+ cubic meters' }
      ],
      workforce: 'DOSH competent scaffold inspectors, structural design consultants, and concrete technicians.'
    }
  },
  {
    date: '2024',
    title: 'Tier-1 Partnerships & CIDB G7 Registry',
    desc: 'Secured long-term plant maintenance and mechanical services frameworks with prominent public-listed corporations and global MNCs, lifting bidding limits via CIDB G7 registration.',
    icon: TrophyIcon,
    badgeText: 'CIDB Grade G7 (Unlimited)',
    highlights: [
      'Secured CIDB Grade G7 registry, unlocking unlimited tender bidding limits.',
      'Awarded major structural repair and MRO contracts with Ann Joo Steel and Maxeon Solar.',
      'Implemented ISO 9001:2015 frameworks to standardise construction quality.'
    ],
    details: {
      projects: [
        'Structural steel repairs and MRO services for Ann Joo Steel Berhad.',
        'Civil works, plant partitioning, and mechanical maintenance for Maxeon Solar Malaysia.',
        'High-density structural insulation installations for ITW Insulation Systems.'
      ],
      certifications: [
        'CIDB Malaysia Grade G7 (Highest Category - Unlimited Tender Limit)',
        'ISO 9001:2015 Quality Management System Certification',
        'Tenaga Nasional Berhad (TNB) Registered Contractor status'
      ],
      metrics: [
        { label: 'Bidding Capacity', value: 'Unlimited Value Tenders' },
        { label: 'MNC Frameworks', value: '8 Active Corporate Accounts' },
        { label: 'ISO Audit Compliance', value: '99.2% Passing Score' }
      ],
      workforce: 'Internal ISO Auditors, Quality Assurance Managers, Senior Site Engineers, and Certified Welders.'
    }
  },
  {
    date: '2025',
    title: 'Electrical Engineering & ST Power Licensing',
    desc: 'Established dedicated electrical services division. Recruited Suruhanjaya Tenaga (Energy Commission) licensed personnel to support medium/low voltage industrial power distribution.',
    icon: BoltIcon,
    badgeText: 'ST Class Licensing',
    highlights: [
      'Obtained official Suruhanjaya Tenaga (Energy Commission) class certifications.',
      'Integrated resident ST-1 Chargemen and ST-3 Wiremen for certified cabling installations.',
      'Delivered main power distribution board retrofits and factory grid integration.'
    ],
    details: {
      projects: [
        '11kV sub-station cabling and power grid routing for solar energy farms.',
        'Main Distribution Board (MDB) retrofits and factory electrification.',
        'High-voltage safety earthing system audits and installations.'
      ],
      certifications: [
        'Suruhanjaya Tenaga Registered Electrical Contractor License',
        'Chargeman Category ST-1 (Low & Medium Voltage) Registry',
        'Wireman Category ST-3 (Three-Phase wiring) Competency'
      ],
      metrics: [
        { label: 'Safe Man-Hours', value: '500,000+ LTI-Free Hours' },
        { label: 'Electrical Crews', value: '4 Fully Competent Teams' },
        { label: 'Power Grid Capacity', value: 'Up to 11kV cabling projects' }
      ],
      workforce: 'Suruhanjaya Tenaga Chargemen (ST-1/A4), wiremen (ST-3/PW4), and registered electrical engineers.'
    }
  },
  {
    date: '2026 & Beyond',
    title: 'Digital Enablement & Integrated Operations',
    desc: 'Pioneered corporate digital transformation. Built custom telemetry client software while forming Customer Experience (CX) BPO operations and sustainable smart grid systems.',
    icon: LaptopIcon,
    badgeText: 'Integrated Services',
    highlights: [
      'Pioneered custom client operations console for real-time construction asset tracking.',
      'Formed secure omnichannel contact center division for client services and credit support.',
      'Expanding engineering focus toward smart grids, rooftop solar PV structures, and green builds.'
    ],
    details: {
      projects: [
        'Custom client-facing project telemetry dashboard development.',
        'Omnichannel CX and secure customer support outsourcing center setup.',
        'Roof-mounted Solar PV structural engineering framing studies.'
      ],
      certifications: [
        'Personal Data Protection Act (PDPA) & GDPR Security standards compliance',
        'Malaysian Green Technology Corporation (MGTC) partner framework',
        'ISO 27001:2013 Information Security Management prep work'
      ],
      metrics: [
        { label: 'ICT Personnel', value: '25+ Developers & Systems Engineers' },
        { label: 'BPO Capacity', value: '100+ Active Contact Terminals' },
        { label: 'Sustainability Target', value: 'Carbon Neutral Operations by 2028' }
      ],
      workforce: 'BPO Operations Directors, Network Architects, Full-stack software developers, and solar structural engineers.'
    }
  }
];

function TimelineCard({ item, idx }: { item: Milestone; idx: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = item.icon;

  return (
    <div 
      className={`timeline-item ${idx % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
      style={{ '--i': idx } as React.CSSProperties}
    >
      <div className="timeline-badge-container">
        <div className="timeline-badge">
          <IconComponent size={14} className="timeline-badge-icon" />
        </div>
      </div>
      <div className="timeline-date">{item.date}</div>
      <div 
        className="timeline-content-card glass-spotlight spotlight-border tilt-card border-beam-card blueprint-panel brackets-tl-br"
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
      >
        <div className="timeline-card-header">
          <span className="timeline-badge-chip">{item.badgeText}</span>
          <h3 className="timeline-card-title">{item.title}</h3>
        </div>
        <p className="timeline-card-desc">{item.desc}</p>
        
        {/* Bullet Highlights */}
        <ul className="timeline-card-highlights">
          {item.highlights.map((h, i) => (
            <li key={i}>
              <span className="bullet-gold-mini"></span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Expandable Details Container */}
        <div className={`timeline-card-expanded-content ${isExpanded ? 'active' : ''}`}>
          <div className="timeline-divider-dashed"></div>
          
          <div className="timeline-details-grid">
            <div className="details-col">
              <h4 className="details-heading">KEY PROJECTS</h4>
              <ul className="details-list">
                {item.details.projects.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
            
            <div className="details-col">
              <h4 className="details-heading">COMPLIANCE & LICENSES</h4>
              <ul className="details-list">
                {item.details.certifications.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="timeline-divider-dashed"></div>

          {/* Key Metrics Row */}
          <div className="details-metrics-row">
            {item.details.metrics.map((m, i) => (
              <div key={i} className="metric-chip">
                <span className="metric-val">{m.value}</span>
                <span className="metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="workforce-meta">
            <strong>Key Workforce:</strong> {item.details.workforce}
          </div>
        </div>

        {/* Action Toggle Button */}
        <button 
          className="timeline-card-details-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="bullet-gold-mini"></span>
          <span>{isExpanded ? 'COLLAPSE DETAILS' : 'INSPECT MILESTONE DETAILS'}</span>
          <span className="expander-arrow">{isExpanded ? '▲' : '▼'}</span>
        </button>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <div className="journey-page-container">
      {/* Page Introduction Header */}
      <section className="page-header-section">
        <HeroBackground page="journey" />
        <div className="container page-header animate-slide-up">
          <div className="page-header-card">
            <div style={{ position: 'relative', zIndex: 5 }}>
              <h1 className="page-title gradient-text" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem' }}>
                Evolution & Milestones
              </h1>
              <p className="page-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
                Inspect the historical timelines, operational scale upgrades, and credentials growth that define Suria Dirgahayu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section id="timeline" className="section reveal">
        <div className="container">
          <div className="timeline">
            {MILESTONES.map((item, idx) => (
              <TimelineCard key={idx} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
