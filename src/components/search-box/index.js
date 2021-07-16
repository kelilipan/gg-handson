const SearchBox = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
