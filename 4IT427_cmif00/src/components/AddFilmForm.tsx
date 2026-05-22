import type { Film } from '@/types/film.types'
import { useWatchlist } from '@/context/WatchlistContext';
import { useState } from 'react';

export function AddFilmForm() {
  const { addFilm } = useWatchlist();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState('');

  return (
    <>      
    <form onSubmit={(e) => {
      e.preventDefault();
      const newFilm: Film = {
        id: Date.now().toString(),
        title: title,
        year: parseInt(year),
        genre: genre,
        rating: parseInt(rating),
        watched: false,
      };
      addFilm(newFilm);
    }}>
      <h2>Add a new film</h2>;
      <div> 
        <label htmlFor="titleFormInput">Title:</label>
        <input id="titleFormInput" type="text" placeholder="Film title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      
      <div>
        <label htmlFor="yearFormInput">Release Year:</label>
        <input id="yearFormInput" type="number" placeholder="Release year" value={year} onChange={(e) => setYear(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="genreFormInput">Genre:</label>
        <input id="genreFormInput" type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required/>
      </div>
      <div>
        <label htmlFor="ratingFormInput">Rating:</label>
        <input id="ratingFormInput" type="number" placeholder="Rating" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} required/>
      </div>
      <button type="submit">
        Add Film
        </button>
    </form>
    </>
    );
}