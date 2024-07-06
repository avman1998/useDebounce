import { useState, useEffect } from "react";
export default function useDebounce(value, delay) {
  const [dv, setDV] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDV(value);
    }, delay);
    console.log("useDebounce useEffect");
    return () => {
      console.log("useDebounce clean up function");
      clearTimeout(timer);
    };
  }, [value, delay]);
  return dv;
}
