import {
  CategoryOfWork,
  PlatformMvc,
  TypeOfWork,
  IsFreePlatform,
} from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';
import { StringParam } from 'use-query-params';

const workTypes: string[] = Object.values(TypeOfWork).map((a: string) =>
  snakeToStartCase(a)
);

const categoryTypes: string[] = Object.values(CategoryOfWork).map((a) =>
  snakeToStartCase(a)
);

const isFreePlatformTypes: string[] = Object.values(IsFreePlatform).map((a) =>
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
  name: 'Free Platform',
  key: 'isFreePlatform',
  options: ['All', ...isFreePlatformTypes],
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
