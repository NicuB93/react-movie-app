import React, { useContext } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MoviesContext } from "../../WithMovies";
import "./SearchBox.css";

function SearchBox() {
  const { onSearchChange } = useContext(MoviesContext);

  return (
    <div className="input-search">
      <FontAwesomeIcon icon={faSearch} />
      <input
        type="search"
        name=""
        id=""
        className="w5 input"
        placeholder="search movies.."
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
