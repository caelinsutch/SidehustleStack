import {
  CategoryOfWork,
  PlatformMvc,
  ProfitModel,
  TypeOfWork,
} from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';
import { StringParam } from 'use-query-params';

const workTypes: string[] = Object.values(TypeOfWork).map((a: string) =>
  snakeToStartCase(a)
);

const categoryTypes: string[] = Object.values(CategoryOfWork).map((a) =>
  snakeToStartCase(a)
);

const profitModelTypes: string[] = Object.values(ProfitModel).map((a) =>
  snakeToStartCase(a)
);

export type PlatformFilter = {
  name: string;
  key: keyof PlatformMvc;
  options: string[];
};

const categoryFilter: PlatformFilter = {
  name: 'Category',
  key: 'category',
  options: ['All', ...categoryTypes],
};

const workTypeFilter: PlatformFilter = {
  name: 'Work Type',
  key: 'typeOfWork',
  options: ['All', ...workTypes],
};

const freePlatformsFilter: PlatformFilter = {
  name: 'Profit Model',
  key: 'profitModel',
  options: ['All', ...profitModelTypes],
};

const filters: PlatformFilter[] = [
  categoryFilter,
  workTypeFilter,
  freePlatformsFilter,
];

const useQueryParamsSettings = {};

filters.forEach((filter) => {
  useQueryParamsSettings[filter.key] = StringParam;
});

export { filters, useQueryParamsSettings };
