import type { Film } from '@/types/film.types'

interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

export function FilmCard({ id, title, year, genre, rating, watched , onToggleWatched}: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <h2>{title} ({year})
        <p>Genre: {genre} </p>
        <p>Rating: {isRatingValid ? `${rating}/10 ⭐` : 'Invalid rating'}</p>
        <p>{watched === true ? '✓ Watched' : ''}</p>
        {<button onClick={() => onToggleWatched(id)}> Change watched status</button>}
    </h2>
  );
}