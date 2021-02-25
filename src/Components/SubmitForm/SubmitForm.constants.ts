import { FormItem } from '@Components/FormSection/FormSection';

const steps = [
  [
    {
      name: 'platformType',
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
      name: 'name',
      placeholder: 'Side Hustle Stack',
      type: 'input',
      title: 'Company Name',
    },
    {
      name: 'website',
      placeholder: 'sidehustlestack.co',
      type: 'input',
      title: 'Company Website',
    },
  ],
  [
    {
      name: 'founded',
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
      name: 'funding',
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
      name: 'description',
      placeholder: 'Description',
      type: 'input',
      title: 'Short Description',
    },
  ],
  [
    {
      name: 'typeOfWork',
      type: 'select',
      title: 'Type of Work',
      values: [
        { label: 'Adult Content Creator', value: 'ADULT_CONTENT_CREATOR' },
        { label: 'Audio Content Creator', value: 'AUDIO_CONTENT_CREATOR' },
        { label: 'Chef', value: 'CHEF' },
        { label: 'Coach', value: 'COACH' },
        { label: 'Community Leader', value: 'COMMUNITY_LEADER' },
        { label: 'Content Creator', value: 'CONTENT_CREATOR' },
        { label: 'ECommerce', value: 'ECOMMERCE' },
        { label: 'Event Organizer', value: 'EVENT_ORGANIZER' },
        { label: 'Driver', value: 'DRIVER' },
        { label: 'Fitness Instructor', value: 'FITNESS_INSTRUCTOR' },
        { label: 'Gamer', value: 'GAMER' },
        { label: 'Health', value: 'HEALTH' },
        { label: 'Livestreamer', value: 'LIVESTREAMER' },
        { label: 'Personal Shopper', value: 'PERSONAL_SHOPPER' },
        { label: 'Pet Caretaker', value: 'PET_CARETAKER' },
        { label: 'Podcaster', value: 'PODCASTER' },
        { label: 'Rentals', value: 'RENTALS' },
        { label: 'Reseller', value: 'RESELLER' },
        { label: 'Restaurant Worker', value: 'RESTAURANT_WORKER' },
        { label: 'Salesperson', value: 'SALESPERSON' },
        { label: 'Tasks and Services', value: 'TASKS_AND_SERVICES' },
        { label: 'Teacher', value: 'TEACHER' },
        { label: 'Tech', value: 'TECH' },
        { label: 'Video Course Creator', value: 'VIDEO_COURSE_CREATOR' },
        { label: 'Writer', value: 'WRITER' },
      ],
    },
    {
      name: 'category',
      type: 'select',
      title: 'Work Category',
      values: [
        { label: 'Gig work (Uber, Doordash)', value: 'GIG' },
        { label: 'Creator / Monetize audience/fans', value: 'CREATOR' },
        { label: 'Project Based / Freelance', value: 'PROJECT_BASED' },
        { label: 'Start an SMB (Shopify, Etsy, Poshmark)', value: 'SMB' },
        { label: 'Rentals', value: 'RENTALS' },
        { label: 'Other', value: 'OTHER' },
      ],
    },
    {
      name: 'requiresDigitalAudience',
      type: 'select',
      title: 'Existing digital audience',
      values: [
        { label: 'Yes', value: 'YES' },
        { label: 'No', value: 'NO' },
        { label: 'Recommended', value: 'RECOMMENDED' },
      ],
    },
    {
      name: 'applicationRequired',
      type: 'select',
      title: 'Application Required',
      values: [
        { label: 'Yes', value: 'YES' },
        { label: 'Yes, selective', value: 'YES_SELECTION' },
        { label: 'No', value: 'NO' },
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
        { label: 'Computer', value: 'COMPUTER' },
        { label: 'Smartphone', value: 'SMARTPHONE' },
        { label: 'Car', value: 'CAR' },
        { label: 'Microphone', value: 'MICROPHONE' },
        { label: 'Bank Account', value: 'BANK_ACCOUNT' },
        { label: 'Bachelors Degree', value: 'BACHELORS_DEGREE' },
        { label: 'Native English', value: 'NATIVE_ENGLISH' },
        { label: 'Child Care Experience', value: 'CHILD_CARE_EXPERIENCE' },
        { label: 'Animal Care Experience', value: 'ANIMAL_CARE_EXPERIENCE' },
        { label: 'Background Check', value: 'BACKGROUND_CHECK' },
        { label: 'Other', value: 'OTHER' },
      ],
    },
  ],
  [
    {
      name: 'averageEarnings',
      type: 'input',
      title: 'Average Monthly Earnings',
    },
    {
      name: 'timeToFirstDollar',
      type: 'input',
      title: 'Days to First Dollar',
    },
    {
      name: 'geographicalFocus',
      type: 'input',
      title: 'Geographical Focus',
    },
    {
      name: 'affiliateLink',
      type: 'input',
      title: 'Affiliate Link',
    },
    {
      name: 'founderMessage',
      type: 'input',
      title: 'Founder Message',
    },
    {
      name: 'founderTwitter',
      type: 'input',
      title: 'Founder Twitter',
    },
    {
      name: 'email',
      type: 'input',
      title: 'Email',
    },
  ],
] as FormItem[][];

export { steps };
