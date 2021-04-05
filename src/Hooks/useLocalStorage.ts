import { useState } from 'react';

type UseLocalStorage<T> = [T, (value: T) => void];

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): UseLocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== undefined ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    const valueToSTore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToSTore);
    localStorage.setItem(key, JSON.stringify(valueToSTore));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
