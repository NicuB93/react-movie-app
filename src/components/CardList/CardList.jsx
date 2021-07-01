import React, { useContext } from "react";
import Card from "../Card/Card";
import { MoviesContext } from "../../WithMovies";
import "./CardList.css";

function CardList() {
  const { state } = useContext(MoviesContext);
  const { filteredMovies } = state;
  console.log(filteredMovies);
  return (
    <div className="card-list">
      {filteredMovies.map((movie, i) => (
        <Card
          name={filteredMovies[i].title}
          year={filteredMovies[i].release_date}
          rating={filteredMovies[i].vote_average}
          img={filteredMovies[i].poster_path}
          id={filteredMovies[i].id}
          key={i}
        />
      ))}
    </div>
  );
}

export default CardList;
