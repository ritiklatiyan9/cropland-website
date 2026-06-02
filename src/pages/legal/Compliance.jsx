import LegalPage from '../../components/ui/LegalPage.jsx'

const sections = [
  {
    heading: '1. Our commitment',
    body: [
      'Cropland Agritech India operates under a comprehensive compliance framework spanning agrochemical registration, environmental management, occupational safety, quality systems and ethical business conduct. Compliance is owned at the board level and audited annually by independent third parties.',
    ],
  },
  {
    heading: '2. Statutory registrations',
    body: [
      'Our formulations and operations are registered with the relevant regulators:',
      [
        'CIB&RC — Central Insecticides Board & Registration Committee, India.',
        'FCO — Fertiliser (Control) Order 1985, for plant-nutrition products.',
        'State Agriculture Departments — manufacturing and sales licences for all 18 states of operation.',
        'GPCB — Gujarat Pollution Control Board, for our manufacturing facilities.',
        'Drugs and Cosmetics Act — applicable for veterinary and animal-health adjuncts where relevant.',
      ],
    ],
  },
  {
    heading: '3. Quality and management systems',
    body: [
      'We operate certified management systems across the organisation:',
      [
        'ISO 9001:2015 — Quality Management System.',
        'ISO 14001:2015 — Environmental Management System.',
        'ISO 45001:2018 — Occupational Health and Safety.',
        'GMP — Good Manufacturing Practice for agrochemical formulations.',
        'REACH — for products supplied to European markets.',
      ],
    ],
  },
  {
    heading: '4. Environmental stewardship',
    body: [
      'Our manufacturing facilities operate under Zero Liquid Discharge (ZLD) protocols. We minimise hazardous-waste generation, maintain real-time emissions monitoring, and contribute to the industry-wide container-collection programme to ensure used packaging is responsibly recycled or destroyed.',
    ],
  },
  {
    heading: '5. Anti-bribery and ethical conduct',
    body: [
      'Cropland enforces a strict anti-bribery, anti-corruption and anti-money-laundering policy across employees, distributors and third-party partners. We comply with the Prevention of Corruption Act, 1988, the Indian Penal Code and (where applicable) the UK Bribery Act and US FCPA. Violations may be reported confidentially through our whistleblower channel.',
    ],
  },
  {
    heading: '6. Responsible marketing',
    body: [
      'All marketing communication adheres to the FAO/WHO International Code of Conduct on Pesticide Management and the Crop Care Federation of India guidelines. Product claims are evidence-based and reviewed by our regulatory affairs team before publication.',
    ],
  },
  {
    heading: '7. Pharmacovigilance and adverse-event reporting',
    body: [
      'We maintain a 24×7 helpline for reporting adverse events related to product use. All reports are logged, investigated and — where required — escalated to CIB&RC and state authorities within the statutory timelines.',
    ],
  },
  {
    heading: '8. Whistleblower channel',
    body: [
      'Employees, distributors, customers and other stakeholders may confidentially report concerns about unethical conduct, regulatory violations or safety lapses by writing to admin@croplandagritech.com. Reports are reviewed by an independent committee and complainants are protected from retaliation.',
    ],
  },
]

export default function Compliance() {
  return (
    <LegalPage
      title="Compliance"
      updated="15 May 2026"
      activePath="/compliance"
      intro="Cropland Agritech India's regulatory, environmental and ethical-conduct framework — auditable, independent and reviewed annually."
      sections={sections}
    />
  )
}
