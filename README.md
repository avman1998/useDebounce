### `useDebounce` Hook

#### `useDebounce` Hook kya karta hai?

`useDebounce` hook ek value ko debounce karta hai, matlab agar value rapid succession mein change ho rahi hai to yeh ensure karta hai ki last change ke baad ek specified delay ke baad hi update ho. Yeh useful hai jab humein unnecessary rapid updates ko avoid karna ho, jaise ki search inputs mein.

#### Code Implementation:

```jsx
import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
```

#### Example Usage:

A simple component that uses the `useDebounce` hook to debounce a search input value:

```jsx
import React, { useState, useEffect } from 'react';
import useDebounce from './useDebounce'; // Assume `useDebounce` hook is in a separate file

function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 500ms debounce delay

  useEffect(() => {
    if (debouncedSearchTerm) {
      // Perform search or API call with debounced value
      console.log('Searching for:', debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

export default SearchComponent;
```

### Explanation in Hinglish:

#### Step-by-Step Explanation:

1. **State Variable Setup:**
   - `debouncedValue`: Track karta hai debounced value ko.

2. **Effect Handling:**
   - `useEffect` ka use karke delay ke baad debounced value ko set karte hain.
   - Agar `value` ya `delay` change hoti hai, to previous timeout ko clear karte hain aur new timeout set karte hain.

3. **Return Value:**
   - `useDebounce` hook debounced value ko return karta hai jo specified delay ke baad update hoti hai.

### Key Points:

- **State Management:** `useDebounce` hook debounced value ko manage karta hai jo rapid changes ko avoid karta hai.
- **Effect Handling:** `useEffect` ka use delay ke baad debounced value ko update karne ke liye hota hai aur ensures proper cleanup of previous timeouts.
- **Custom Hook:** `useDebounce` ek custom hook hai jo rapid updates ko debounce karne mein madad karta hai aur aapko easily debounced values ko manage karne deta hai.

### Potential Interview Questions:

1. **Question: `useDebounce` hook kya karta hai aur kyun use hota hai?**
   - **Answer:** `useDebounce` hook ek value ko debounce karta hai, matlab agar value rapid succession mein change ho rahi hai to yeh ensure karta hai ki last change ke baad ek specified delay ke baad hi update ho. Yeh useful hai jab humein unnecessary rapid updates ko avoid karna ho.

2. **Question: `useEffect` ka role `useDebounce` hook mein kya hai?**
   - **Answer:** `useEffect` debounced value ko specified delay ke baad update karta hai aur ensures karta hai ki previous timeouts properly clear ho jayein jab `value` ya `delay` change hoti hai.

3. **Question: `useDebounce` hook ko real-world application mein kaise use kar sakte hain?**
   - **Answer:** `useDebounce` hook ko aap applications mein use kar sakte hain jahan aapko rapid updates ko avoid karna ho, jaise ki search inputs mein ya form validations mein to reduce the frequency of expensive operations.
