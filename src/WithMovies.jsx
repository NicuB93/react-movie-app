import React, { Component } from "react";
export const MoviesContext = React.createContext({});

export default class WithMovies extends Component {
  constructor() {
    super();
    this.state = {
      pageCount: 0,
      currentPage: 1,
      filteredMovies: [],
      searchbox: "",
    };
  }
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=aa3f3e5db1ee5e98026bf37e0fe643e3&page=${this.state.currentPage}`
    )
      .then((resp) => resp.json())
      .then((movies) => {
        this.setState({
          movies: movies.results,
          filteredMovies: movies.results,
          pageCount: movies.total_pages,
          popularMovies: [],
        });
      });
  }

  fetchAllPopular = () => {
    let popular = [];
    for (let i = 1; i <= 500; i++) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=aa3f3e5db1ee5e98026bf37e0fe643e3&page=${i}`
      )
        .then((resp) => resp.json())
        .then((movies) => popular.push(movies.results));
    }
    this.setState({
      popularMovies: popular,
    });
    console.log(this.state.popularMovies);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=aa3f3e5db1ee5e98026bf37e0fe643e3&page=${this.state.currentPage}`
      )
        .then((resp) => resp.json())
        .then((movies) => {
          this.setState({
            movies: movies.results,
            filteredMovies: movies.results,
            pageCount: movies.total_pages,
          });
        });
      this.fetchAllPopular();
    }
    console.log(this.state);
  }

  changeCurrentPage = (numPage) => {
    this.setState({ currentPage: numPage });
    //fetch a data
    //or update a query to get data
  };
  onSearchChange = (e) => {
    const { movies } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({
      filteredMovies,
      searchbox: e.target.value,
    });
  };

  noMovies = () => {
    const { searchbox } = this.state;
    if (searchbox.length > 0 && this.state?.filteredMovies.length === 0) {
      return <h2>No movies for this search!</h2>;
    } else if (searchbox.length > 0 && this.state?.filteredMovies.length > 0) {
      return <h2>Movies Found</h2>;
    } else {
      return;
    }
  };

  render() {
    const { state } = this;
    return (
      <MoviesContext.Provider
        value={{
          state,
          noMovies: this.noMovies,
          onSearchChange: this.onSearchChange,
          changeCurrentPage: this.changeCurrentPage,
        }}
      >
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}
