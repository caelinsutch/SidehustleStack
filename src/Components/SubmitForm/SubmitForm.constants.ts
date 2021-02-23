import { FormItem } from '@Components/FormSection/FormSection';

const steps = [
  [
    {
      name: 'platformTool',
      placeholder: 'Select',
      type: 'select',
      title: 'Are you selecting a platform or a tool?',
      values: [
        {
          value: 'platform',
          label: 'Platform',
        },
        {
          value: 'tool',
          label: 'Tool',
        },
      ],
    },
  ],
  [
    {
      name: 'isFounder',
      placeholder: 'Select',
      type: 'select',
      title:
        'Are you the founder of this company or submitting it as a suggestion?',
      values: [
        {
          value: true,
          label: 'Founder',
        },
        {
          value: false,
          label: 'Suggestion',
        },
      ],
    },
  ],
  [
    {
      name: 'companyName',
      placeholder: 'Side Hustle Stack',
      type: 'input',
      title: 'Company Name',
    },
    {
      name: 'companyWebsite',
      placeholder: 'sidehustlestack.co',
      type: 'input',
      title: 'Company Website',
    },
  ],
  [
    {
      name: 'yearFounded',
      placeholder: 'Side Hustle Stack',
      type: 'input',
      title: 'Company Name',
    },
    {
      name: 'headquarteredIn',
      placeholder: 'sidehustlestack.co',
      type: 'input',
      title: 'Company Website',
    },
    {
      name: 'totalFunding',
      placeholder: 'xxxxx',
      type: 'input',
      title: 'Total Funding',
      description:
        'Please round and suffix with "K" or "M" — eg. $50K, $500K, $3M, $35.5M, $120.2M. \n' +
        '\n' +
        "If this doesn't apply, please write:\n" +
        '1) Bootstrapped\n' +
        '2) Currently Raising\n' +
        '3) Undisclosed\n' +
        '4) Public Company - list ticker',
    },
    {
      name: 'shortDescription',
      placeholder: 'Description',
      type: 'input',
      title: 'Short Description',
    },
  ],
  [
    {
      name: 'category',
      type: 'select',
      title: 'Work Category',
      values: [
        { label: 'Gig work (Uber, Doordash)', value: 'gig' },
        { label: 'Creator / Monetize audience/fans', value: 'creator' },
        { label: 'Project Based / Freelance', value: 'project' },
        { label: 'Start an SMB (Shopify, Etsy, Poshmark)', value: 'smb' },
        { label: 'Rentals', value: 'rentals' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'requiresDigitalAudience',
      type: 'select',
      title: 'Existing digital audience',
      values: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    {
      name: 'applicationRequired',
      type: 'select',
      title: 'Application Required',
      values: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    {
      name: 'remoteWork',
      type: 'select',
      title: 'Work can be done from home?',
      values: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    {
      name: 'minimumAge',
      type: 'input',
      title: 'Minimum Age',
      placeholder: '18',
    },
  ],
  [
    {
      name: 'equipmentQualSkills',
      type: 'select',
      title: 'Equipment, Qualification, and Skills',
      values: [
        { label: 'Computer', value: 'computer' },
        { label: 'Smartphone', value: 'smartphone' },
      ],
    },
    {
      name: 'otherReqs',
      type: 'input',
      title: 'Other Requirements',
    },
  ],
  [
    {
      name: 'averageMonthlyEarnings',
      type: 'input',
      title: 'Average Monthly Earnings',
    },
    {
      name: 'daysToFirstDollar',
      type: 'input',
      title: 'Days to First Dollar',
    },
    {
      name: 'monthlyActiveEarners',
      type: 'input',
      title: 'Monthly Active Earners',
    },
    {
      name: 'platformPricing',
      type: 'input',
      title: 'Platform Pricing',
    },
    {
      name: 'geographicalFocus',
      type: 'input',
      title: 'Geographical Focus',
    },
  ],
] as FormItem[][];

export { steps };
