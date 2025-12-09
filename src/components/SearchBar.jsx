const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Search by job title..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
};

export default SearchBar;
