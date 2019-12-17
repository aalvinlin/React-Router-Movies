import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams} from 'react-router-dom';

import MovieCard from "./MovieCard";

const Movie = (props) => {
  
  const [movie, setMovie] = useState();
  const {movieID} = useParams();
  
  useEffect(() => {

    // console.log("counter:", counter, "movie ID:", movieID)
    console.log("movie is", movie, movieID);
    
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${movieID}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

},[]);
  
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <MovieCard movie={movie} useLinkInTitle={false} addToSavedList={props.addToSavedList}></MovieCard>
  );
}

export default Movie;
