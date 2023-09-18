const Search = ({ searchState, searchFunc }) => {
  return (
    <div className="searchbtn">
      <input
        type="search"
        placeholder="search tasks"
        value={searchState}
        onChange={(e) => searchFunc(e)}
      />
    </div>
  );
};

export default Search;
