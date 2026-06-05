import LegalPage from '../../components/ui/LegalPage.jsx'

const sections = [
  {
    heading: '1. Introduction',
    body: [
      'DG Sales ("App", "we", "us", or "our") operates the DG Sales mobile application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.',
      'We use your data to provide and improve the App. By using the App, you agree to the collection and use of information in accordance with this policy.',
    ],
  },
  {
    heading: '2. Information Collection and Use',
    body: [
      'We collect the following types of information:',
      [
        'Personal Information: Name, email address, phone number, call records and call logs, location data (when geolocation is enabled), lead and contact information you create or import, and attendance and task records.',
        'Device Information: Device model, operating system version, unique device identifiers, and app usage statistics.',
        'Call Data: Inbound/outbound call records, call duration and timestamps, and call logs and history.',
      ],
    ],
  },
  {
    heading: '2.2 Permissions Used',
    body: [
      'The App requests the following Android permissions:',
      [
        'CALL_PHONE: To enable outbound calling functionality.',
        'READ_PHONE_STATE: To detect call states and handle incoming calls.',
        'READ_CALL_LOG: To sync and display call history.',
        'POST_NOTIFICATIONS: To send reminders, notifications, and call alerts.',
        'ACCESS_FINE_LOCATION: To track agent location for field sales management.',
        'ACCESS_COARSE_LOCATION: To provide approximate location data.',
      ],
    ],
  },
  {
    heading: '3. Purpose of Data Collection',
    body: [
      'We collect and use data for the following purposes:',
      [
        'Service Delivery: To provide, maintain, and improve the App functionality.',
        'Sales Tracking: To monitor leads, calls, and sales activities.',
        'Analytics: To understand how the App is used and optimize performance.',
        'Communication: To send notifications, reminders, and important updates.',
        'Location Tracking: For field agent location tracking (optional, with consent).',
        'Legal Compliance: To comply with applicable laws and regulations.',
      ],
    ],
  },
  {
    heading: '4. Data Security',
    body: [
      'We implement appropriate technical and organizational measures to protect your personal data against unauthorized processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet is 100% secure.',
    ],
  },
  {
    heading: '5. Data Retention',
    body: [
      'We retain your personal data only for as long as necessary to provide the App and fulfill the purposes outlined in this policy. Call logs and activity records are retained according to your account settings and company policies.',
    ],
  },
  {
    heading: '6. Third-Party Services',
    body: [
      'The App connects to RiverGreen backend servers for data synchronization. We do not share your personal data with third parties unless:',
      [
        'Required by law.',
        'Necessary to prevent fraud or protect our rights.',
        'You explicitly consent.',
      ],
    ],
  },
  {
    heading: '7. User Rights',
    body: [
      'You have the right to:',
      [
        'Access your personal data.',
        'Correct inaccurate data.',
        'Request deletion of your data.',
        'Withdraw consent for location tracking.',
        'Opt-out of non-essential notifications.',
      ],
      'To exercise these rights, contact us at support@rivergreen.com',
    ],
  },
  {
    heading: '8. Children\'s Privacy',
    body: [
      'The App is not intended for children under 13. We do not knowingly collect personal data from children under 13. If we become aware of such collection, we will take steps to delete the data promptly.',
    ],
  },
  {
    heading: '9. Changes to This Policy',
    body: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date and posting the new policy within the App.',
    ],
  },
  {
    heading: '10. Contact Us',
    body: [
      'If you have questions or concerns about this Privacy Policy, please contact us at:',
      [
        'Email: support@rivergreen.com',
        'Website: https://www.croplandagritech.com/',
        'Company: RiverGreen Sales Technologies',
      ],
    ],
  },
]

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="5 June 2026"
      activePath="/privacy"
      intro="How DG Sales collects, uses, and protects your personal information when you use our mobile application."
      sections={sections}
    />
  )
}
