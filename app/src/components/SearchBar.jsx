import { useState } from "react";
import Grid from "../pages/Grid";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter something..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <div>You entered: {inputValue}</div>
      </div>
      <button onClick={<Grid inputValue={inputValue}/>}> Search </button>
    </div>
  );
};

export default SearchBar;