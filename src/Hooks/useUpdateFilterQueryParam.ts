import { useQueryParams } from 'use-query-params';
import { useQueryParamsSettings } from '@Screens/HomeScreen/HomeScreen.constants';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';
import _ from 'lodash';
import { activeFiltersAtom } from '../Recoil';

type UseUpdateFilterQueryParam = (filterKey: string, value: string) => void;

const useUpdateFilterQueryParam = (): UseUpdateFilterQueryParam => {
  const router = useRouter();
  const setActiveFilters = useSetRecoilState(activeFiltersAtom);

  const [query] = useQueryParams(useQueryParamsSettings);

  const updateFilterQueryParam = (key: string, value: string) => {
    router
      .push(
        '/',
        {
          query: {
            ...query,
            [key]: _.camelCase(value.toLowerCase()),
          },
        },
        {
          shallow: true,
        }
      )
      .then(() => {
        setActiveFilters((prev) => ({
          ...prev,
          [key]: _.startCase(value.toLowerCase()),
        }));
      });
  };

  return updateFilterQueryParam;
};

export default useUpdateFilterQueryParam;
