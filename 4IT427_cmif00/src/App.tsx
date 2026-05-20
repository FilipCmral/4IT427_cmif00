//import { useState } from 'react'
import type { FilmCardProps } from '@/components/FilmCard'
import { FilmCard } from '@/components/FilmCard'

function App() {
  const movie1: FilmCardProps = {
    title: "The Shawshank Redemption",
    year: 1994,
    genre: "Drama",
    rating: 9,
    watched: false,
    onToggleWatched: (title: string) => {
      console.log(`Toggled watched status for ${title}`);
    }
  }

  const movie2: FilmCardProps = {
    title: "The Godfather",
    year: 1972,
    genre: "Crime",
    rating: 9,
    watched: true,
    onToggleWatched: (title: string) => {
      console.log(`Toggled watched status for ${title}`);
    }
  }

  const movie3: FilmCardProps = {
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9,
    watched: false,
    onToggleWatched: (title: string) => {
      console.log(`Toggled watched status for ${title}`);
    }
  }

  return (
    <>
      <FilmCard {...movie1} />
      <hr />
      <FilmCard {...movie2} />
      <hr />
      <FilmCard {...movie3} />
    </>
  )
}

export default App