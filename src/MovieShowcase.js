import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  const generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    movieData.map((movie)=> (
      <MovieCard {...movie} />
      ))
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
