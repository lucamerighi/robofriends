import React from "react";

const SearchBox = ({ onSearch }) => {
  return (
    <div className="pa2">
      <input
        className=""
        type="search"
        placeholder="search robots"
        onChange={onSearch}
      />
    </div>
  );
};

export default SearchBox;
