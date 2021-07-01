import React, { useContext } from "react";
import { MoviesContext } from "../../WithMovies";
import CardList from "../../components/CardList/CardList";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import "./index.css";

export function Popular() {
  const moviesContext = useContext(MoviesContext);
  const { state } = useContext(MoviesContext);
  const { currentPage } = state;

  return (
    <div className="movies ph2 pb2">
      <div className="no-movies">{moviesContext?.noMovies()}</div>
      <CardList />
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={500}
          totalSize={10000}
          sizePerPage={20}
          changeCurrentPage={moviesContext?.changeCurrentPage}
          theme="border-bottom"
        />
        <h2>Current Page: {currentPage}</h2>
      </div>
    </div>
  );
}
