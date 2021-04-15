import { FormItem } from '@Components/FormSection/FormSection';
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
      description:
        'Company logo should be centered and fill approximately 1/3 of the space with whitespace on the top and bottom. Please submit a JPG file around 1000 x 800 pixels',
      type: 'file',
      registerOptions: {
        required: true,
        validate: { file: (value: any) => value !== '' },
      },
    },
    {
      name: 'description',
      placeholder: 'Description',
      description:
        'Describe what workers do on your platform to earn income. The simpler the better. (~2 sentences). Write it so that it ACTIVELY describes what people will do to earn.\n' +
        '\n' +
        'Examples:\n' +
        '\n' +
        '"Sell your knowledge about any subject matter to others in an all-in-one platform."\n' +
        '\n' +
        '"Get paid to walk other people\'s dogs."',
      type: 'input',
      title: 'Short Description',
      registerOptions: {
        required: true,
        maxLength: 240,
      },
    },
    {
      name: 'funding',
      placeholder: 'xxxxx',
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
      placeholder: '02/2021',
      description: 'Example, 02/2021',
      type: 'input',
      title: 'Date Founded',
      registerOptions: {
        required: true,
      },
    },
    {
      name: 'headquarteredIn',
      placeholder: 'Berkeley, CA',
      description:
        'If US, please list City, State. If international, please list City, Country.\n' +
        '\n' +
        'Example: Seattle, WA or Paris, France',
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
      registerOptions: {
        required: true,
      },
      options: geographicalFocusOptions,
    },
    {
      name: 'typeOfWork',
      type: 'multiSelect',
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
      title:
        'Does the platform require an existing digital audience to monetize? *\n',
      placeholder: 'Select',
      registerOptions: {
        required: true,
      },
      options: [
        { label: 'Yes', value: ExistingDigitalAudienceRequired.Yes },
        { label: 'No', value: ExistingDigitalAudienceRequired.No },
        {
          label: 'No, but recommended',
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
      title: 'Other User Requirements',
      description: 'If you selected Other, please list here',
      placeholder:
        'A smartphone or similar device, The ability to ship items, ...',
      registerOptions: {
        required: false,
        validate: { empty: (value: any) => value !== [] },
      },
    },
    {
      name: 'averageEarnings',
      type: 'input',
      title: 'Average Monthly Earnings',
      placeholder: 'xx',
      description: 'Please round to the nearest dollar — e.g. $10.',
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
      description: 'How many days till the average earner first makes money?',
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
      title: 'Number of people making money on your platform?',
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
      description:
        'Example: website.com/signup or affiliate link. If you have an affiliate link program, PLEASE enter that here!',
      title: 'Affiliate Link',
    },
    {
      name: 'founderMessage',
      type: 'input',
      description:
        'Some of our platforms have messages from their founders on what makes their platform special. See sidehustlestack.co/patreon for an example.',
      title: 'Founder Message',
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
      title: 'Please enter a link to the founders twitter',
      placeholder: 'https://twitter.com/caelin_sutch',
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
