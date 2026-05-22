//import { useState } from 'react'
import type { Film } from '@/types/film.types'
import { FilmCard } from '@/components/FilmCard'
import { useWatchlist } from './hooks/useWatchlist'

function App() {
  const movie1: Film = {
    id: '1',
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9,
    watched: false,
}

const movie2: Film = {
    id: '2',
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9,
    watched: true,
}

const movie3: Film = {
    id: '3',
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9,
    watched: false,
}

  const initialFilms: Film[] = [movie1, movie2, movie3];

  const { films, toggleWatched, markAllAsWatched } = useWatchlist(initialFilms);

  return (
    <main>
      <h1>Film Watchlist</h1>

      <button onClick={markAllAsWatched}>Mark all as watched</button>

      {films.map((film) => (
        <FilmCard
          id={film.id}
          title={film.title}
          year={film.year}
          genre={film.genre}
          rating={film.rating}
          watched={film.watched}
          onToggleWatched={toggleWatched}
        />
      ))}
    </main>
  );
}

export default App