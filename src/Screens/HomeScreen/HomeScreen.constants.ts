import { CategoryOfWork, PlatformMvc, TypeOfWork } from '@GraphQL/types';
import { snakeToStartCase } from '@Utils';

const workTypes: string[] = Object.values(TypeOfWork).map((a: string) =>
  snakeToStartCase(a)
);

const categoryTypes: string[] = Object.values(CategoryOfWork).map((a) =>
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

const filters: PlatformFilter[] = [categoryFilter, workTypeFilter];

export { filters };
