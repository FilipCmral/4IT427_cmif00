/* Stylingová metoda: CSS Modules */


import { FilmCard } from '@/components/FilmCard'
import { useWatchlist } from '@/context/WatchlistContext'
import { AddFilmForm } from './components/AddFilmForm';
import styles from './App.module.css';

function App() {


  const { films, toggleWatched, markAllAsWatched, removeFilm } = useWatchlist();

  return (
    <>
    <main className={styles.main}>
      <header className={styles.header}>
      <h1 className={styles.title}>Film Watchlist</h1>
      <p className={styles.subtitle}>
        You have {films.filter((film) => film.watched).length} out of {films.length} films marked as watched.
      </p>
      </header>

      <div className={styles.toolbar}>
        <span /> {/* spacer */}
        <button className={styles.markAllBtn} onClick={markAllAsWatched}>
        Mark all as watched
      </button>
      </div>

      

      <div className={styles.filmList}>
        {films.length === 0 ? (
          <p className={styles.emptyState}>
            Watchlist is empty.
          </p>
        ) : (
          films.map((film) => (
            <FilmCard
              key={film.id}
              id={film.id}
              title={film.title}
              year={film.year}
              genre={film.genre}
              rating={film.rating}
              watched={film.watched}
              onToggleWatched={toggleWatched}
              onRemoveFilm={removeFilm}
            />
          ))
        )}
      </div>

      <AddFilmForm />
    </main>
    </>
  );
}

export default App