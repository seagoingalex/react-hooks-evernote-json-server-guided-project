import React from "react";

function Search({ searchTerm, setSearch }) {
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }
  
  return (
    <div className="filter">
      <input 
        id="search-bar" 
        type="text" 
        placeholder="Search Notes"
        onChange={handleSearchChange}
        value={searchTerm} />
    </div>
  );
}

export default Search;
