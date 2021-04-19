import { useEffect, useState } from 'react';

type UseLocalStorage<T> = [T, (value: T) => void];

const useLocalStorage = <T>(
  key: string,
  initialValue?: T
): UseLocalStorage<T> => {
  const [storedValue, setStoredValue] = useState<T>();

  useEffect(() => {
    try {
      const item = JSON.parse(window.localStorage.getItem(key));
      setStoredValue(item);
    } catch (e) {
      setStoredValue(initialValue);
    }
  }, []);

  const setValue = (value: T) => {
    const valueToSTore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToSTore);
    localStorage.setItem(key, JSON.stringify(valueToSTore));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
