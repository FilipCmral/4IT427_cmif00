type Rating = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

interface FilmCardProps {
  title: string;
  year: number;
  genre: string;
  rating: Rating;
  watched: boolean;
  onToggleWatched: (title: string) => void;
}

function FilmCard({ title, year, genre, rating, watched, onToggleWatched }: FilmCardProps) {
  return (
    <h2>{title} ({year})
        <p>Genre: {genre} </p>
        <p>Rating: {rating}/10 ⭐</p>
        <p>{watched === true ? '✓ Watched' : ''}</p>
        <button onClick={() => onToggleWatched(title)}> Change watched status</button>
    </h2>
  );
}

export { FilmCard }
export type { FilmCardProps }