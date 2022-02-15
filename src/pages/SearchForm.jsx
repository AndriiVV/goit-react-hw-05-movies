
import { useState } from "react";

const SearchForm = () => { 


  const [input, setInput] = useState("");

  const handleSubmit = () => { 
    return null;
  }

  const handleChange = () => { 
    return null;
  }

  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <button type="submit" className="SearchForm-button">
        <span className="SearchForm-button-label">Search</span>
      </button>

      <input
        className="SearchForm-input"
        type="text"
        // autocomplete="off"
        // autofocus
        placeholder="Search images and photos"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
}


export default SearchForm;