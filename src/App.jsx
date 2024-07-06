import { useState, useEffect } from "react";
import "./App.css";
import useDebounce from "./useDebounce";
function App() {
  const [searchItem, setSearchItem] = useState("");
  const dbSearchItem = useDebounce(searchItem, 1000);
  useEffect(() => {
    console.log("dbSearchItem", dbSearchItem);
  }, [dbSearchItem]);
  return (
    <div>
      <label htmlFor="text">Enter message</label>
      <input
        type="text"
        id="text"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
    </div>
  );
}

export default App;
