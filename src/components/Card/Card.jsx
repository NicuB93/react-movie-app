import React from "react";
import "./Card.css";

function Card({ name, year, rating, img, id }) {
  return (
    <div className="bg-dark-gray pa2 tc br2 grow">
      <a href={`https://www.themoviedb.org/movie/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${img}`}
          alt=""
          className="w5 br2"
        />
        <div>
          <h2>{name}</h2>
          <h4>{year}</h4>
          <h5>{rating}</h5>
        </div>
      </a>
    </div>
  );
}

export default Card;
