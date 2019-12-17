import React from 'react';
import { Link } from "react-router-dom"

const MovieCard = ({movie, useLinkInTitle}) => {

  function addLink(isTrue)
    {
      if (isTrue)
        {
          return (
            <Link>
              { movie.title }
            </Link>
          );
      }
      else
        { return movie.title; }
    }

  return (

    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{addLink(useLinkInTitle)}</h2>
        <div className="movie-director">
          Director: <em>{movie.director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{movie.metascore}</strong>
        </div>
        <h3>Actors</h3>

        {movie.stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
};

export default MovieCard;
