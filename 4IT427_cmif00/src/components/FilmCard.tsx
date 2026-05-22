import clsx from 'clsx';

import styles from './FilmCard.module.css';

interface FilmCardProps {
  id: string;
  title: string;
  year: number;
  genre: string;
  rating: number;
  watched: boolean;
  onToggleWatched: (id: string) => void;
  onRemoveFilm: (id: string) => void;
}

export function FilmCard({ id, title, year, genre, rating, watched , onToggleWatched, onRemoveFilm}: FilmCardProps) {
  const isRatingValid = rating >= 1 && rating <= 10;

  return (
    <>
    {/*<h2>{title} ({year})
        <p>Genre: {genre} </p>
        <p>Rating: {isRatingValid ? `${rating}/10 ⭐` : 'Invalid rating'}</p>
        <p>{watched === true ? '✓ Watched' : ''}</p>
        {<button onClick={() => onToggleWatched(id)}> Change watched status</button>}
        {<button onClick={() => onRemoveFilm(id)}> Remove</button>}
    </h2>*/}
    <div className={clsx(styles.card, watched && styles.watched)}>
      <div className={styles.poster}>🎬</div>
 
      <div className={styles.body}>
        <div className={styles.titleRow}>
          <span className={styles.title}>{title}</span>
          <span className={styles.year}>{year}</span>
        </div>
 
        <div className={styles.meta}>
          <span className={styles.genre}>{genre}</span>
          <span className={styles.rating}>
            {isRatingValid ? `${rating}/10 ★` : 'Invalid rating'}
          </span>
          {watched && <span className={styles.watchedBadge}>✓ Watched</span>}
        </div>
 
        <div className={styles.actions}>
          <button className={styles.btnToggle} onClick={() => onToggleWatched(id)}>
            {watched ? 'Mark as not watched' : 'Mark as watched'}
          </button>
          <button className={styles.btnRemove} onClick={() => onRemoveFilm(id)}>
            Remove
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
}