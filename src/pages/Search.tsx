import React, { useEffect, useRef, useState } from 'react'

function Search() {
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2 style={{color: "white"}}>Current Value: {inputValue}</h2>
      <h2 style={{color: "white"}}>Previous Value: {previousInputValue.current}</h2>
    </>
  );

}

export default Search