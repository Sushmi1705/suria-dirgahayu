import React, { useState } from 'react';
import { handleCardMouseMove, handleCardMouseLeave } from '../../utils/tilt';
import { WrenchIcon, HammerIcon, TrophyIcon, BoltIcon, LaptopIcon } from '../../components/Icons';

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
        { label: 'Heavy Equipment', value: '5+ Active Cranes' }
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

function TimelineCard({ item }: { item: Milestone }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = item.icon;

  return (
    <div style={{ display: 'flex', gap: '2rem', position: 'relative', textAlign: 'left' }}>
      {/* Centered timeline line icon indicator */}
      <div style={{ 
        width: '42px', 
        height: '42px', 
        borderRadius: '50%', 
        backgroundColor: 'var(--bg-secondary)', 
        border: '3px solid var(--primary)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        zIndex: 5, 
        flexShrink: 0, 
        position: 'relative',
        color: 'var(--primary)'
      }}>
        <span className="tm-radar-ring"></span>
        <IconComponent size={16} />
      </div>
      
      <div 
        className="tm-card tm-glass-spotlight tm-spotlight-border" 
        style={{ flex: 1, padding: '2rem 2.25rem', position: 'relative' }}
        onMouseMove={handleCardMouseMove}
        onMouseLeave={handleCardMouseLeave}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase' }}>
            {item.date} // {item.badgeText}
          </span>
        </div>
        
        <h3 className="tm-mega-title" style={{ fontSize: '1.35rem', margin: '0.35rem 0 0.85rem' }}>
          {item.title}
        </h3>
        
        <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', margin: '0 0 1.25rem', lineHeight: 1.65 }}>
          {item.desc}
        </p>

        {/* Highlights Bullet List */}
        <ul className="timeline-card-highlights" style={{ margin: '0 0 1rem', padding: 0, listStyle: 'none' }}>
          {item.highlights.map((h, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.45rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <span className="bullet-gold-mini" style={{ marginTop: '0.4rem' }}></span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Accordion expanded content */}
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

          {/* Metrics row */}
          <div className="details-metrics-row">
            {item.details.metrics.map((m, i) => (
              <div key={i} className="metric-chip">
                <span className="metric-val">{m.value}</span>
                <span className="metric-lbl">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="workforce-meta" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
            <strong>Key Workforce:</strong> {item.details.workforce}
          </div>
        </div>

        {/* Toggle Button */}
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
    <div className="tm-journey-view">
      <section className="tm-page-header">
        <div className="tm-hero-bg-container">
          <div className="tm-hero-bg-image"></div>
        </div>
        <div className="tm-page-header-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 className="tm-reveal">Evolution &amp; Milestones</h1>
            <p className="tm-reveal tm-delay-100">
              Review the milestones, operational scale upgrades, and credentials growth that define Suria Dirgahayu.
            </p>
          </div>
          <div className="tm-card tm-reveal tm-delay-200" style={{ borderTop: '4px solid var(--gold)', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.1em' }}>
              MILESTONE INDEX // SUMMARY
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>2021</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>ESTABLISHMENT</div>
              </div>
              <div style={{ width: '2px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
              <div>
                <div style={{ fontSize: '1.75rem', fontWeight: 800 }}>5 YRS</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CREDENTIAL GROWTH</div>
              </div>
            </div>
            <div style={{ height: '1px', backgroundColor: 'var(--border-color)' }}></div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Track our progress from mechanical subcontracts to full-scale G7 civil and ST-1 cabling works.
            </div>
          </div>
        </div>
      </section>

      <section className="tm-section animate-slide-up">
        <div className="tm-container" style={{ maxWidth: '800px' }}>
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Center Line */}
            <div style={{ position: 'absolute', left: '20px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'var(--border-color)' }}></div>
            
            {MILESTONES.map((item, idx) => (
              <TimelineCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
