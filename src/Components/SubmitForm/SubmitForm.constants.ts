import { FormItem } from '@Components/FormSection/FormSection';
import TextLink from '@Components/TextLink';
import {
  ApplicationRequired,
  CategoryOfWork,
  ExistingDigitalAudienceRequired,
  Funding,
  GeographicalFocus,
  PlatformType,
  ProfitModel,
  TypeOfWork,
} from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';

const generateOptionsFromEnums = (e: any) =>
  Object.values(e).map((value: string) => ({
    value,
    label: snakeToStartCase(value),
  }));

const numberValidation = (value: any): boolean => Boolean(parseInt(value, 10));

const geographicalFocusOptions = generateOptionsFromEnums(GeographicalFocus);

const profitModelOptions = generateOptionsFromEnums(ProfitModel);

const steps = [
  [
    {
      name: 'platformType',
      placeholder: 'Select',
      type: 'select',
      title: 'Are you submitting a platform or a tool?',
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
        'Do you work at this company or are you submitting it as a suggestion?',
      registerOptions: {
        required: true,
      },
      options: [
        {
          value: true,
          label: 'I work at this company',
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
      description:
        'What is the name of your company?',
      type: 'input',
      title: 'Company Name',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'website',
      placeholder: 'www.sidehustlestack.co',
      description:
        'If not applicable, link to any page with relevant contact information (a YouTube video, Figma prototype, waitlist, etc)',
      type: 'input',
      title: 'Company Website',
    },
  ],
  [
    {
      title: 'Company Logo',
      name: 'companyLogo',
      description:
        'Please upload a high-resolution and background-free image. Check out our guide to image uploads for more help',
      type: 'file',
      registerOptions: {
        required: true,
        validate: { file: (value: any) => value !== '' },
      },
    },
    {
      name: 'description',
      placeholder: 'Get paid to walk other people\'s dogs',
      description:
        'In one short phrase, what do people actively do on your platform to bring in income? For example: “Get paid to walk other people\’s dogs” or “Sell your SEO skills on our platform”',
      type: 'input',
      title: 'Short Description',
      registerOptions: {
        required: true,
        maxLength: 240,
      },
    },
    {
      name: 'funding',
      placeholder: 'Select',
      description:
        'Please round your answer to 1 decimal place — i.e. 26.5M, 1M',
      type: 'select',
      title: 'Total Funding',
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
        {
          value: Funding.Bootstrapped,
          label: 'Bootstrapped',
        },
        {
          value: Funding.CurrentlyRaising,
          label: 'Currently Raising',
        },
        {
          value: Funding.Undisclosed,
          label: 'Undisclosed',
        },
      ],
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'founded',
      placeholder: '2020',
      description: 'What year was your company started?',
      type: 'input',
      title: 'Date Founded',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'headquarteredIn',
      placeholder: 'Seattle, WA',
      description:
        'If you are located in the US, please list as “City, State”. If your company is outside of the US, please list as “City, Country”. For example: Seattle, WA or Paris, France',
      type: 'input',
      title: 'Headquartered In',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'geographicalFocus',
      type: 'multiSelect',
      title: 'Geographical Focus',
      description:
        'Which areas does your platform currently serve?',  
      registerOptions: {
        required: true,
      },
      options: geographicalFocusOptions,
    },
    {
      name: 'typeOfWork',
      type: 'multiSelect',
      description:
        'Choose up to 3 that apply to your platform',
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
        { 
          label: 'Gig (work on your own time)',
          value: CategoryOfWork.Gig },
        {
          label: 'Creator (monetize audience and fans)',
          value: CategoryOfWork.Creator,
        },
        {
          label: 'Freelance / project-based work',
          value: CategoryOfWork.ProjectBased,
        },
        {
          label: 'SMB (creation of a business)',
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
      title:
        'Audience Required',
      placeholder: 'Select',
      description:
        'Realistically, would a user without a pre-built social audience from TikTok, Instagram, Twitter, etc. turn an income on your platform?',
      registerOptions: {
        required: true,
      },
      options: [
        { 
          label: 'Yes', value: ExistingDigitalAudienceRequired.Yes },
        { label: 'No', value: ExistingDigitalAudienceRequired.No },
        {
          label: 'No, however one would be helpful',
          value: ExistingDigitalAudienceRequired.Recommended,
        },
      ],
    },
    {
      name: 'applicationRequired',
      type: 'select', 
      title: 'Application Required',
      description:
        'Does everyone who signs up for the platform immediately receive an account?',
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
      title: 'WFH',
      description:
        'Can work be done from home on your platform?',
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
      description:
        'What, if any, is the minimum age for someone to earn on your platform?',
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
      description:
        'What things might someone need to succeed on your platform?',
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
      title: 'Other User Requirements',
      description: 'If you selected Other, please describe anything else needed in addition to do the above',
      placeholder:
        'The ability to ship items, items to sell, language proficiency, etc.',
      registerOptions: {
        required: false,
        validate: { empty: (value: any) => value !== [] },
      },
    },
    {
      name: 'averageEarnings',
      type: 'input',
      title: 'Average Monthly Earnings',
      placeholder: '$1,000',
      description: 'Please round figures to the nearest dollar — e.g. $10, $100, $1,000',
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
      description: 'How many days does it take for an average new user to earn their first dollar?',
      placeholder: '7',
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
      title: 'Revenue Generation',
      description:
        'How many people are currently making money directly through your platform?',
      placeholder: '10,000',
      registerOptions: {
        required: true,
        validate: {
          number: numberValidation,
        },
        valueAsNumber: true,
      },
    },
    {
      name: 'profitModel',
      type: 'select',
      title: 'Is your platform free, comission based, or does the worker pay?',
      registerOptions: {
        required: true,
      },
      options: profitModelOptions,
    },
    {
      name: 'profitModelDescription',
      type: 'input',
      title:
        'If commission based, how much is the average take rate? If the wokrer pays, whats the monthly fee?',
      registerOptions: {
        required: true,
      },
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
      name: 'affiliateLink',
      type: 'input',
      placeholder:
        'www.yourplatform.com/#source="SHS"',
      description:
        'If your platform has an affiliate program set up, link that here — we’ll be in touch! If not applicable, leave blank',
      title: 'Affiliate Link',
    },
    {
      name: 'founderMessage',
      type: 'input',
      description:
        'Some of our platforms have SHS-special messages about what makes them See Patreon for example!',
      title: 'Founder Message',
    },
    {
      name: 'founderName',
      type: 'input',
      title: 'Founder Name',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'founderTwitter',
      type: 'input',
      title: 'Please leave the link to the profile, not the handle!',
      placeholder: 'https://twitter.com/sidehustlestack',
    },
    {
      name: 'email',
      type: 'input',
      title: 'Email',
      description:
        'Who should we contact about questions with form submission?',
      placeholder: 'team@sidehustlestack.co',
      registerOptions: {
        required: true,
      },
    },
  ],
] as FormItem[][];

export { steps };
