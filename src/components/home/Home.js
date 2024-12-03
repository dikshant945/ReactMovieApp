import React from 'react'
import ReactDOM from 'react-dom'
import Hero from '../hero/Hero';

const Home = ({movies}) => {
  return (
    <Hero movies = {movies} />
  )
}

export default Home
