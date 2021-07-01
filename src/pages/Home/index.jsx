import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { MoviesContext } from "../../WithMovies";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export function Home() {
  const { state } = useContext(MoviesContext);
  const { filteredMovies } = state;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div>
      <div className="popular">
        <h2>Popular Movies</h2>
        <h3>
          <Link to="/popular" className="link near-white dim flex items-center">
            See More{" "}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="pl2" />
          </Link>
        </h3>
        <Carousel responsive={responsive}>
          {filteredMovies.map((movie, i) => (
            <div key="{i}">
              <img
                src={`https://image.tmdb.org/t/p/w500${filteredMovies[i].poster_path}`}
                alt="movie"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="top-rated"></div>
      <div className="new"></div>
    </div>
  );
}
