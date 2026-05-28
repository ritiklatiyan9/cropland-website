import LegalPage from '../../components/ui/LegalPage.jsx'

const sections = [
  {
    heading: '1. Who we are',
    body: [
      'Cropland Agritech India Pvt. Ltd. ("Cropland", "we", "our", "us") manufactures and distributes crop-protection, plant-nutrition and bio-solution products across India and select export markets. This Privacy Policy explains how we collect, use, share and protect personal information when you interact with our website, sales team, distributors or field-agronomy programmes.',
    ],
  },
  {
    heading: '2. Information we collect',
    body: [
      'We collect information that you provide voluntarily, information collected automatically, and information from authorised third parties.',
      [
        'Identity and contact details: name, farm or business name, email, phone, address.',
        'Enquiry information: crop, location, season, products of interest, technical questions submitted via our forms or sales channels.',
        'Distributor and dealer information: business credentials, GST and FSSAI numbers, payment details (where applicable).',
        'Website usage data: pages visited, device type, approximate location and referrer, collected via standard server logs.',
      ],
    ],
  },
  {
    heading: '3. How we use your information',
    body: [
      'We use the information we collect to:',
      [
        'Respond to enquiries, sample requests and quotation submissions.',
        'Provide agronomy guidance, spray calendars and crop advisories.',
        'Service distributor and dealer accounts including logistics and dispatch.',
        'Comply with statutory obligations under the Insecticides Act 1968, Fertiliser Control Order 1985 and other applicable laws.',
        'Improve the safety, efficacy and labelling of our products through aggregated, de-identified usage feedback.',
      ],
    ],
  },
  {
    heading: '4. Lawful bases for processing',
    body: [
      'We process personal information only where we have a lawful basis to do so — typically your consent, the performance of a contract with you, our legitimate business interests, or a statutory obligation. You may withdraw consent at any time by contacting our compliance desk.',
    ],
  },
  {
    heading: '5. How we share information',
    body: [
      'We do not sell personal information. We share information only with:',
      [
        'Authorised distributors and field representatives, strictly to service your enquiry or order.',
        'Statutory and regulatory authorities (CIB&RC, state agriculture departments) where legally required.',
        'Service providers (logistics, payment processing, email delivery) bound by confidentiality and data-protection obligations.',
      ],
    ],
  },
  {
    heading: '6. Data retention',
    body: [
      'We retain personal information for as long as needed to fulfil the purpose for which it was collected, to meet statutory record-keeping obligations, and to resolve disputes. Sales and distributor records are typically retained for seven (7) years following the end of the business relationship.',
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      'Subject to applicable law, you may request access to, correction of, or deletion of your personal information. You may also object to processing or request a copy of your data in a portable format. Write to our compliance desk at compliance@croplandagritech.in.',
    ],
  },
  {
    heading: '8. Security',
    body: [
      'We use industry-standard administrative, technical and physical safeguards — including TLS encryption in transit, restricted-access databases, and regular vulnerability assessments — to protect personal information against loss, misuse or unauthorised access.',
    ],
  },
  {
    heading: '9. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. Material changes will be posted on this page and, where appropriate, communicated by email. Continued use of our services after an update constitutes acceptance of the revised policy.',
    ],
  },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="15 May 2026"
      activePath="/privacy"
      intro="How Cropland Agritech India collects, uses and protects information you share with us through our website, sales channels and field programmes."
      sections={sections}
    />
  )
}
