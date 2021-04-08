import { atom } from 'recoil';

const activeFiltersAtom = atom({
  key: 'activeFilters',
  default: {},
});

export { activeFiltersAtom };
