import { useEffect, useState } from "react";

export function useDevounce(value: string, delay: number) {
  const [debouncedValue, setDevouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log('call callback');
      setDevouncedValue(value);
    }, delay);

    // cleanup function
    return () => {
      clearTimeout(timerId);
    }
  }, [value]);

  return debouncedValue;
}