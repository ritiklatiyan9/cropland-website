import LegalPage from '../../components/ui/LegalPage.jsx'

const sections = [
  {
    heading: '1. Our CSR philosophy',
    body: [
      'Cropland Agritech India believes that the long-term resilience of Indian agriculture depends on healthy soils, educated farmers and dignified rural livelihoods. Our Corporate Social Responsibility programme — governed under Section 135 of the Companies Act, 2013 — invests in initiatives that strengthen the communities we sell to and source from.',
    ],
  },
  {
    heading: '2. Focus areas',
    body: [
      'We concentrate spend across four programme pillars:',
      [
        'Farmer education — IPM training, residue-management workshops and digital literacy programmes for smallholders and FPOs.',
        'Soil and water — village-level soil-health camps, water-harvesting structures and drip-irrigation subsidies.',
        'Women in agriculture — skill-development and entrepreneurship support for women-led producer collectives.',
        'Education and nutrition — mid-day-meal supplementation and scholarships in farming districts of Gujarat, Maharashtra and Telangana.',
      ],
    ],
  },
  {
    heading: '3. Recent highlights',
    body: [
      'In the last financial year, our CSR programmes reached over 120,000 direct beneficiaries across 240 villages. Key milestones included:',
      [
        '38,000 farmers trained in safe pesticide handling and IPM under our "Safe Hands" programme.',
        '46 check-dams and water-harvesting structures commissioned across Saurashtra and Marathwada.',
        '1,800 women trained as community resource persons under the "Krishi Sakhi" initiative.',
        '14 mid-day-meal kitchens supported across 9 districts.',
      ],
    ],
  },
  {
    heading: '4. Governance',
    body: [
      'A board-constituted CSR Committee approves the annual action plan and reviews quarterly progress. Programme implementation is partnered with registered NGOs and Section 8 companies with proven on-ground capacity. All spend is audited and published in our annual report.',
    ],
  },
  {
    heading: '5. Partnerships',
    body: [
      'We collaborate with ICAR research institutes, Krishi Vigyan Kendras (KVKs), state agriculture universities and grass-roots NGOs. Our partner list and project portfolio is available on request.',
    ],
  },
  {
    heading: '6. Get involved',
    body: [
      'If you are an NGO, FPO or research institution working at the intersection of agriculture, soil health, women\'s livelihoods or rural education — we\'d love to hear from you. Write to csr@croplandagritech.in with a brief on your work and the geography you serve.',
    ],
  },
]

export default function Csr() {
  return (
    <LegalPage
      title="Corporate Social Responsibility"
      updated="15 May 2026"
      activePath="/csr"
      intro="How Cropland invests in the soils, farmers and rural communities that power Indian agriculture — governed under Section 135 of the Companies Act."
      sections={sections}
    />
  )
}
