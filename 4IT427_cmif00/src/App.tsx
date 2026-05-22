import { FilmCard } from '@/components/FilmCard'
import { useWatchlist } from '@/context/WatchlistContext'
import { AddFilmForm } from './components/AddFilmForm';

function App() {


  const { films, toggleWatched, markAllAsWatched, removeFilm } = useWatchlist();

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
          onRemoveFilm={() =>  removeFilm(film.id)}
        />
      ))}

      <AddFilmForm></AddFilmForm>
    </main>
  );
}

export default App