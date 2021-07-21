import { useState } from "react";

const SearchBox = ({ handleSubmit }) => {
  const [query, setQuery] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="query"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
