import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import type { Film } from '@/types/film.types'

import { useWatchlist } from '@/context/WatchlistContext';

import styles from './AddFilmForm.module.css';


export function AddFilmForm() {
  const { addFilm } = useWatchlist();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  return (
    <>
    <section className={styles.section}>
        <h2 className={styles.heading}>Add a new film</h2>

    <form className={styles.form} onSubmit={(event) => {
      event.preventDefault();

      const newFilm: Film = {
        id: Date.now().toString(),
        title: title,
        year: parseInt(year),
        genre: genre,
        rating: parseInt(rating),
        watched: false,
      };
      addFilm(newFilm);

      /*
      setTitle("");
      setYear("");
      setGenre("");
      setRating("");*/

      // Reset form on sumbmit by redirecting
      navigate('/');
    }}>

      <div className={styles.field}> 
        <label className={styles.label} htmlFor="titleFormInput">Title:</label>
        <input className={styles.input} id="titleFormInput" type="text" placeholder="Film title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
      </div>
      
      <div className={styles.field}>
        <label className={styles.label} htmlFor="yearFormInput">Release Year:</label>
        <input className={styles.input} id="yearFormInput" type="number" placeholder="Release year" value={year} onChange={(e) => setYear(e.target.value)} required/>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="genreFormInput">Genre:</label>
        <input className={styles.input} id="genreFormInput" type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required/>
      </div>

      <div className={styles.field} style={{ maxWidth: '180px' }}>
        <label className={styles.label} htmlFor="ratingFormInput">Rating:</label>
        <input className={styles.input} id="ratingFormInput" type="number" placeholder="Rating" min="1" max="10" value={rating} onChange={(e) => setRating(e.target.value)} required/>
      </div>

      <button className={styles.submitBtn} type="submit" >
        Add Film
        </button>
    </form>
    </section>
    </>
    );
}