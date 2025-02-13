import { useEffect, useRef, useState } from 'react'

function useThrottle<T>(value: T, interval = 1000): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastRuned = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastRuned.current + interval) {
      lastRuned.current = Date.now();
      setThrottledValue(value);
    } else {
      const timerId = setTimeout(() => {
        lastRuned.current = Date.now();
        setThrottledValue(value);
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);


  return throttledValue;
}

export default useThrottle
