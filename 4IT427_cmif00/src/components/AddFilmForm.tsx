import type { Film } from '@/types/film.types'

interface AddFilmFormProps {
  onSubmit: (newFilm: Film) => void;
} 

export function AddFilmForm({ onSubmit }: AddFilmFormProps) {

  return (
    <>      
    <form onSubmit={(e) => {
      e.preventDefault();
      const newFilm: Film = {
        id: Date.now().toString(),
        title: (e.target as HTMLFormElement).title.value,
        year: parseInt((e.target as HTMLFormElement).year.value),
        genre: (e.target as HTMLFormElement).genre.value,
        rating: parseInt((e.target as HTMLFormElement).rating.value),
        watched: false,
      };
      onSubmit(newFilm);
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