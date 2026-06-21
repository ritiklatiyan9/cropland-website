import LegalPage from '../../components/ui/LegalPage.jsx'

// Account & data deletion page required for the DG Sales Google Play Store
// listing. Per Google Play's "Delete Account URL" policy, this page must:
//   1. name the app / developer shown on the store listing,
//   2. prominently list the steps to request account deletion, and
//   3. state what data is deleted vs. kept, with any retention period.
const sections = [
  {
    heading: '1. About this page',
    body: [
      'This page explains how to request deletion of your account and associated data for the DG Sales mobile application ("the App"), published on the Google Play Store by RiverGreen Sales Technologies ("we", "us", or "our").',
      'It applies to the account you created inside the DG Sales App. You can ask us to delete your entire account, or to delete specific data while keeping your account active.',
    ],
  },
  {
    heading: '2. How to request account deletion',
    body: [
      'You can request deletion in either of the following ways.',
      'Option A — From inside the DG Sales app:',
      [
        'Open the DG Sales app and sign in to your account.',
        'Go to Profile (or Settings) → Account.',
        'Tap “Delete Account” / “Request Account Deletion”.',
        'Read the confirmation notice and confirm your request.',
      ],
      'Option B — By email (use this if the in-app option is unavailable to you):',
      [
        'Send an email to support@rivergreen.com from the email address registered to your DG Sales account.',
        'Use the subject line: “Account Deletion Request”.',
        'In the message, include your registered name, registered email or mobile number, and your company / organisation name so we can locate your account.',
        'Tell us whether you want your entire account deleted, or only specific data removed.',
      ],
      'For your protection, we will verify that the request comes from the account owner before any data is deleted. We will reply by email to confirm that your request has been received and, once processing is complete, that it has been actioned.',
    ],
  },
  {
    heading: '3. Data that is deleted',
    body: [
      'When your account-deletion request is verified and processed, the following data is permanently removed from our active systems:',
      [
        'Profile and account details: your name, email address and phone number.',
        'Leads and contacts you created or imported in the App.',
        'Call records, call logs, call duration and timestamps.',
        'Attendance and task records.',
        'Location data and location history collected by the App.',
        'Device identifiers and app-usage statistics linked to your account.',
      ],
    ],
  },
  {
    heading: '4. Data that is kept, and for how long',
    body: [
      'Some information may be retained after your account is deleted, only where this is necessary for legal, accounting, security or fraud-prevention reasons:',
      [
        'Records we are legally required to keep — such as transaction, billing and statutory records — are retained for the period required under applicable Indian law (for financial records, typically up to 8 years).',
        'Anonymised or aggregated data that can no longer be used to identify you may be retained for analytics and to improve the App.',
        'Residual copies in our encrypted, secured backups are removed during the normal backup-rotation cycle within 90 days of deletion.',
      ],
    ],
  },
  {
    heading: '5. Processing timeline',
    body: [
      'We action verified account-deletion requests within 30 days of receiving them. Backup copies are fully purged within 90 days. Records we are legally obliged to retain are held only for the statutory period stated above and are then deleted.',
      'Once your account is deleted, it cannot be recovered. To use the App again you would need to create a new account.',
    ],
  },
  {
    heading: '6. Need help?',
    body: [
      'If you have any questions about deleting your account or data, or if you do not receive a confirmation, contact us:',
      [
        'App: DG Sales',
        'Developer: RiverGreen Sales Technologies',
        'Email: support@rivergreen.com',
        'Website: https://www.croplandagritech.com/',
      ],
    ],
  },
]

export default function DeleteAccount() {
  return (
    <LegalPage
      title="Delete Your Account"
      updated="21 June 2026"
      activePath="/delete-account"
      intro="How to request deletion of your DG Sales account and associated data, what is deleted, what is kept, and for how long."
      sections={sections}
    />
  )
}
