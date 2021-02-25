import { FormItem } from '@Components/FormSection/FormSection';
import { CategoryOfWork, Funding, TypeOfWork } from '@GraphQL/types';

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
      values: [
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
        { label: 'Writer', value: TypeOfWork.Writers },
      ],
    },
    {
      name: 'category',
      type: 'select',
      title: 'Work Category',
      values: [
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
  // [
  //   {
  //     name: 'averageEarnings',
  //     type: 'input',
  //     title: 'Average Monthly Earnings',
  //   },
  //   {
  //     name: 'timeToFirstDollar',
  //     type: 'input',
  //     title: 'Days to First Dollar',
  //   },
  //   {
  //     name: 'geographicalFocus',
  //     type: 'input',
  //     title: 'Geographical Focus',
  //   },
  //   {
  //     name: 'affiliateLink',
  //     type: 'input',
  //     title: 'Affiliate Link',
  //   },
  //   {
  //     name: 'founderMessage',
  //     type: 'input',
  //     title: 'Founder Message',
  //   },
  //   {
  //     name: 'founderTwitter',
  //     type: 'input',
  //     title: 'Founder Twitter',
  //   },
  //   {
  //     name: 'email',
  //     type: 'input',
  //     title: 'Email',
  //   },
  // ],
] as FormItem[][];

export { steps };
