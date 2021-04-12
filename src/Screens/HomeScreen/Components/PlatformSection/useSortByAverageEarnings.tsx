import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const useSortByAverageEarnings = () => {
  const [sortByAverageEarnings, setSortByAverageEarnings] = useState<
    null | 'up' | 'down'
  >(null);

  const handleClickSortByAverageEarnings = () => {
    if (sortByAverageEarnings === null) {
      setSortByAverageEarnings('up');
    } else if (sortByAverageEarnings === 'up') {
      setSortByAverageEarnings('down');
    } else {
      setSortByAverageEarnings(null);
    }
  };

  const averageEarningsRightIcon = () => {
    if (sortByAverageEarnings === null) {
      return undefined;
    }
    if (sortByAverageEarnings === 'up') {
      return <FaChevronUp />;
    }
    return <FaChevronDown />;
  };

  const sortFunction = () => {
    if (sortByAverageEarnings === 'up') {
      return (a, b) => a.averageEarnings.amount - b.averageEarnings.amount;
    }
    if (sortByAverageEarnings === 'down') {
      return (a, b) => b.averageEarnings.amount - a.averageEarnings.amount;
    }
    return undefined;
  };

  return {
    sortByAverageEarnings,
    setSortByAverageEarnings,
    handleClickSortByAverageEarnings,
    averageEarningsRightIcon,
    sortFunction,
  };
};

export default useSortByAverageEarnings;
