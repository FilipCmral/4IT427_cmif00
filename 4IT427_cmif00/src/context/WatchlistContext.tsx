import { useState, useEffect, createContext, useContext } from 'react'
import type { Film } from '@/types/film.types'

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

interface WatchlistContextType {
  films: Film[];
  toggleWatched: (id: string) => void;
  markAllAsWatched: () => void;
  addFilm: (newFilm: Film) => void;
  removeFilm: (id: string) => void;
};

const WatchlistContext = createContext<WatchlistContextType>({
  films: initialFilms,
  toggleWatched: () => {},
  markAllAsWatched: () => {},
  addFilm: () => {},
  removeFilm: () => {},
});

export function WatchlistProvider({ children }: { children: React.ReactNode }) {
  const [films, setFilms] = useState<Film[]>(initialFilms);
    const toggleWatched = (id: string) => {
    setFilms((prevFilms) =>
      prevFilms.map((film) =>
        film.id === id
          ? { ...film, watched: !film.watched }
          : film
      )
    );
  };

  const markAllAsWatched = () => {
    setFilms((prevFilms) =>
      prevFilms.map((film) => ({
        ...film,
        watched: true,
      }))
    );
  };

  const addFilm = (newFilm: Film) => {
    setFilms((prevFilms) => [...prevFilms, newFilm]);
  };

  const removeFilm = (id: string) => {
    setFilms((prevFilms) => prevFilms.filter((film) => film.id !== id));
  };

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;
    document.title = `Watchlist (${watchedCount} / ${totalCount} watched)`;
    }, [films]);

  return (
    <WatchlistContext.Provider value={{ films, toggleWatched, markAllAsWatched, addFilm, removeFilm }}>
      {children}
    </WatchlistContext.Provider>
  );
}

export const useWatchlist = () => useContext(WatchlistContext);