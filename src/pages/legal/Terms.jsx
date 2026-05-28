import LegalPage from '../../components/ui/LegalPage.jsx'

const sections = [
  {
    heading: '1. Acceptance of terms',
    body: [
      'By accessing or using the Cropland Agritech India website ("the Site"), purchasing our products through authorised channels, or engaging our agronomy services, you agree to be bound by these Terms of Use. If you do not agree, please discontinue use of the Site and our services.',
    ],
  },
  {
    heading: '2. Eligibility and authorised use',
    body: [
      'Our products are intended for use by qualified applicators, farmers, FPOs and authorised distributors in accordance with the label directions and applicable agricultural regulations. You confirm that you are of legal age and authorised to make purchasing decisions on behalf of your farm or business.',
    ],
  },
  {
    heading: '3. Product information and labels',
    body: [
      'All technical information on this Site — including dosage, pest spectrum, pre-harvest interval (PHI) and crop compatibility — is provided for general guidance. The product label and the leaflet inside the pack constitute the legally binding instructions for use, storage and disposal. In the event of a conflict between Site content and the label, the label prevails.',
    ],
  },
  {
    heading: '4. Safe handling and stewardship',
    body: [
      'Users agree to:',
      [
        'Read the product label and Safety Data Sheet before every use.',
        'Wear recommended Personal Protective Equipment (PPE).',
        'Observe re-entry intervals, PHI and bee-safety advisories.',
        'Dispose of used containers through the Cropland container-collection programme or local hazardous-waste protocols.',
      ],
    ],
  },
  {
    heading: '5. Intellectual property',
    body: [
      'All content on this Site — including brand marks, formulations, trade names, copy, photography and graphics — is the property of Cropland Agritech India Pvt. Ltd. or its licensors. No part of the Site may be reproduced, redistributed or used for commercial purposes without our prior written consent.',
    ],
  },
  {
    heading: '6. Distributor and dealer engagements',
    body: [
      'Appointment as a Cropland distributor is governed by a separate written agreement that supersedes any general information presented on this Site. Distributor obligations include statutory licensing, minimum offtake, fair-pricing practices and stewardship participation.',
    ],
  },
  {
    heading: '7. Disclaimers',
    body: [
      'The Site is provided on an "as is" basis. While we work hard to keep information accurate, Cropland makes no warranty as to the completeness, timeliness or fitness-for-purpose of the information. Field results vary based on crop, geography, weather, application timing and applicator practice.',
    ],
  },
  {
    heading: '8. Limitation of liability',
    body: [
      'To the maximum extent permitted by law, Cropland and its affiliates shall not be liable for any indirect, incidental, consequential or punitive damages arising out of access to, use of, or reliance on the Site. Our maximum aggregate liability for any direct claim is limited to the invoice value of the relevant product purchase.',
    ],
  },
  {
    heading: '9. Governing law',
    body: [
      'These Terms are governed by the laws of India. Any dispute arising out of or in connection with this Site or our products shall be subject to the exclusive jurisdiction of the courts at Ahmedabad, Gujarat.',
    ],
  },
  {
    heading: '10. Updates',
    body: [
      'We may revise these Terms at any time. The most current version will be posted on this page with the "Last updated" date amended accordingly. Continued use of the Site constitutes acceptance of the revised Terms.',
    ],
  },
]

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      updated="15 May 2026"
      activePath="/terms"
      intro="The rules that govern access to this website, our product information, and your engagement with Cropland Agritech India."
      sections={sections}
    />
  )
}
