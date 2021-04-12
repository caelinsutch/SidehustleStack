import { FormItem } from '@Components/FormSection/FormSection';
import {
  ApplicationRequired,
  CategoryOfWork,
  ExistingDigitalAudienceRequired,
  Funding,
  PlatformType,
  TypeOfWork,
} from '@GraphQL/types';

const numberValidation = (value: any): boolean => Boolean(parseInt(value, 10));

const steps = [
  [
    {
      name: 'platformType',
      placeholder: 'Select',
      type: 'select',
      title: 'Are you selecting a platform or a tool?',
      registerOptions: {
        required: true,
      },
      options: [
        {
          value: PlatformType.Platform,
          label: 'Platform',
        },
        {
          value: PlatformType.Tool,
          label: 'Tool',
        },
      ],
    },
    {
      name: 'isFounder',
      placeholder: 'Select',
      type: 'select',
      title:
        'Are you the founder of this company or submitting it as a suggestion?',
      registerOptions: {
        required: true,
      },
      options: [
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
      registerOptions: {
        required: true,
      },
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
      title: 'Company Logo',
      name: 'companyLogo',
      type: 'file',
      registerOptions: {
        required: true,
        validate: { file: (value: any) => value !== '' },
      },
    },
    {
      name: 'funding',
      placeholder: 'xxxxx',
      type: 'select',
      title: 'Total Funding',
      description:
        'Please round and suffix with "K" or "M" — eg. $50K, $500K, $3M, $35.5M, $120.2M. \n' +
        '\n' +
        "If this doesn't apply, please write:\n" +
        '1) Bootstrapped\n' +
        '2) Currently Raising\n' +
        '3) Undisclosed\n' +
        '4) Public Company - list ticker',
      options: [
        {
          value: Funding.Zero,
          label: '0',
        },
        {
          value: Funding.LessFiveMil,
          label: '< 5 mil',
        },
        {
          value: Funding.FiveToTenMil,
          label: '5-10 mil',
        },
        {
          value: Funding.TenPlusMil,
          label: '10+ mil',
        },
        {
          value: Funding.PublicCompany,
          label: 'Public',
        },
      ],
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'description',
      placeholder: 'Description',
      type: 'input',
      title: 'Short Description',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'founded',
      placeholder: '02/2021',
      type: 'input',
      title: 'Date Founded',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'headquarteredIn',
      placeholder: 'Berkeley, CA',
      type: 'input',
      title: 'Headquartered In',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'typeOfWork',
      type: 'select',
      title: 'Type of Work',
      placeholder: 'Select',
      options: [
        {
          label: 'Adult Content Creator',
          value: TypeOfWork.AdultContentCreator,
        },
        {
          label: 'Audio Content Creator',
          value: TypeOfWork.AudioContentCreator,
        },
        { label: 'Chef', value: TypeOfWork.Chef },
        { label: 'Coach', value: TypeOfWork.Coach },
        { label: 'Community Leader', value: TypeOfWork.CommunityLeader },
        { label: 'Content Creator', value: TypeOfWork.ContentCreator },
        { label: 'ECommerce', value: TypeOfWork.Ecommerce },
        { label: 'Event Organizer', value: TypeOfWork.EventOrganizer },
        { label: 'Driver', value: TypeOfWork.Driver },
        { label: 'Fitness Instructor', value: TypeOfWork.FitnessInstructor },
        { label: 'Gamer', value: TypeOfWork.Gamer },
        { label: 'Health', value: TypeOfWork.Health },
        { label: 'Livestreamer', value: TypeOfWork.Livestreamer },
        { label: 'Personal Shopper', value: TypeOfWork.PersonalShopper },
        { label: 'Pet Caretaker', value: TypeOfWork.PetCaretaker },
        { label: 'Podcaster', value: TypeOfWork.Podcaster },
        { label: 'Rentals', value: TypeOfWork.Rentals },
        { label: 'Reseller', value: TypeOfWork.Reseller },
        { label: 'Restaurant Worker', value: TypeOfWork.RestaurantWorker },
        { label: 'Salesperson', value: TypeOfWork.Salesperson },
        { label: 'Tasks and Services', value: TypeOfWork.TasksAndServices },
        { label: 'Teacher', value: TypeOfWork.Teacher },
        { label: 'Tech', value: TypeOfWork.Tech },
        { label: 'Video Course Creator', value: TypeOfWork.VideoCourseCreator },
        { label: 'Writer', value: TypeOfWork.Writer },
      ],
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'category',
      type: 'select',
      placeholder: 'Select',
      title: 'Work Category',
      options: [
        { label: 'Gig work (Uber, Doordash)', value: CategoryOfWork.Gig },
        {
          label: 'Creator / Monetize audience/fans',
          value: CategoryOfWork.Creator,
        },
        {
          label: 'Project Based / Freelance',
          value: CategoryOfWork.ProjectBased,
        },
        {
          label: 'Start an SMB (Shopify, Etsy, Poshmark)',
          value: CategoryOfWork.Smb,
        },
        { label: 'Rentals', value: CategoryOfWork.Rentals },
        { label: 'Other', value: CategoryOfWork.Other },
      ],
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'requiresDigitalAudience',
      type: 'select',
      title: 'Requires existing audience',
      placeholder: 'Select',
      registerOptions: {
        required: true,
      },
      options: [
        { label: 'Yes', value: ExistingDigitalAudienceRequired.Yes },
        { label: 'No', value: ExistingDigitalAudienceRequired.No },
        {
          label: 'Recommended',
          value: ExistingDigitalAudienceRequired.Recommended,
        },
      ],
    },
    {
      name: 'applicationRequired',
      type: 'select',
      title: 'Application Required',
      placeholder: 'Select',
      registerOptions: {
        required: true,
      },
      options: [
        { label: 'Yes', value: ApplicationRequired.Yes },
        { label: 'Yes, selective', value: ApplicationRequired.YesSelective },
        { label: 'No', value: ApplicationRequired.No },
      ],
    },
    {
      name: 'remoteWork',
      type: 'select',
      title: 'Work can be done from home?',
      placeholder: 'Select',
      registerOptions: {
        required: true,
      },
      options: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    },
    {
      name: 'minimumAge',
      type: 'input',
      title: 'Minimum Age',
      placeholder: '18',
      registerOptions: {
        required: true,
        validate: {
          number: numberValidation,
        },
        valueAsNumber: true,
      },
    },
    {
      name: 'equipmentQualSkills',
      type: 'multiSelect',
      title: 'Equipment, Qualification, and Skills',
      options: [
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
      placeholder: 'Select',
      registerOptions: {
        required: true,
        validate: { empty: (value: any) => value !== [] },
      },
    },
    {
      name: 'requirements',
      type: 'multiItemInput',
      title: 'User Requirements',
      placeholder:
        'A smartphone or similar device, The ability to ship items, ...',
      registerOptions: {
        required: true,
        validate: { empty: (value: any) => value !== [] },
      },
    },
    {
      name: 'averageEarnings',
      type: 'input',
      title: 'Average Monthly Earnings',
      placeholder: 'xx',
      description: 'Number of dollars',
      registerOptions: {
        required: true,
        validate: {
          number: numberValidation,
        },
        valueAsNumber: true,
      },
    },
    {
      name: 'timeToFirstDollar',
      type: 'input',
      title: 'Days to First Dollar',
      description: 'Number of days',
      placeholder: 'xx',
      registerOptions: {
        required: true,
        validate: {
          number: numberValidation,
        },
        valueAsNumber: true,
      },
    },
    {
      name: 'numPeopleMakingMoney',
      type: 'input',
      title: 'Number of People Making Money',
      placeholder: 'xxx',
      registerOptions: {
        required: true,
        validate: {
          number: numberValidation,
        },
        valueAsNumber: true,
      },
    },
    {
      name: 'isFreePlatform',
      type: 'select',
      title: 'Is your platform free for workers?',
      registerOptions: {
        required: true,
      },
      options: [
        {
          value: true,
          label: 'Yes',
        },
        {
          value: false,
          label: 'No',
        },
      ],
    },
    {
      name: 'platformPricing',
      type: 'input',
      title: 'Platform Pricing',
      description:
        'If your platform is not free, do you charge a commission fee or subscription fee?',
      placeholder: 'The platform fee is dependent on...',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'geographicalFocus',
      type: 'input',
      title: 'Geographical Focus',
      registerOptions: {
        required: true,
      },
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
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'founderName',
      type: 'input',
      title: 'Founder Name',
      placeholder: 'Caelin Sutch',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'founderTwitter',
      type: 'input',
      title: 'Founder Twitter',
      placeholder: 'caelinsutch',
    },
    {
      name: 'email',
      type: 'input',
      title: 'Email',
      placeholder: 'caelinsutch@gmail.com',
      registerOptions: {
        required: true,
      },
    },
  ],
] as FormItem[][];

export { steps };
