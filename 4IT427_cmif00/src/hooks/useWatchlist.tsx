/*
import type { Film } from '@/types/film.types';
import { useEffect, useState } from 'react'



export function useWatchlist(initialFilms: Film[]) {
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

  useEffect(() => {
    const watchedCount = films.filter((film) => film.watched).length;
    const totalCount = films.length;

    document.title = `Watchlist (${watchedCount} / ${totalCount} watched)`;
  }, [films]);

  return {
    films,
    toggleWatched,
    markAllAsWatched,
  };
  
}

*/