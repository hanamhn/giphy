import React from "react";
import PropTypes from "prop-types";
import FA from "react-fontawesome";

const Search = ({
  search,
  setSearch,
  fetchData,
  setTitle,
  setOffset,
  setLimit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(search);
    fetchData(search);
    setSearch("");
  };
  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="gif-btn-submit" type="submit">
          <FA name="search" />
        </button>
      </form>
    </div>
  );
};

export default Search;
