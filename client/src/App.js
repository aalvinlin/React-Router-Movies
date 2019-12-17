import React, { useState } from 'react';

import {Route} from "react-router-dom";

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {

    console.log("Attempting to save", movie, savedList);

    // can't use savedList.includes()
    // if (!savedList.includes(movie))
    if (savedList.filter(
        alreadySavedMovie => alreadySavedMovie.title === movie.title).length === 0)
      {
        setSavedList( [...savedList, movie] );
      }
  };

  return (
    <div>
      <SavedList list={savedList} />

      <Route exact path="/">
        <MovieList addToSavedList={addToSavedList}></MovieList>
      </Route>

      <Route path="/movies/:movieID">
        <Movie addToSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
