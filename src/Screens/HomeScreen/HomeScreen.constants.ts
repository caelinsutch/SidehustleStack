export type PlatformFilter = {
  name: string;
  options: string[];
};

const workType: PlatformFilter = {
  name: 'Work Type',
  options: [
    'Small Business',
    'Large Business',
    'None of Your Business',
    'Monkey Business',
    'WFH',
  ],
};

const age: PlatformFilter = {
  name: 'Age',
  options: ['Like Milk', '18+', '21+'],
};

const potentialEarnings: PlatformFilter = {
  name: 'Potential Earnings',
  options: ['$', '$$', '$$$', '$$$$'],
};

const filters: PlatformFilter[] = [workType, age, potentialEarnings];

export { filters };
