import axios from "axios"
import { useState, useEffect } from "react"

import './Home.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/movies/now-playing/1');
      const data = response.data;      
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (    
    <div className="slider-container">
      <h1 className="title">Now Playing</h1>
      <div className="card-slider">
        {movies.length === 0 
          ? (<p>Carregando ...</p>) 
          : ( 
              movies.map((movie) => (              
                <div className="card-container" key={movie.id}>
                  <div className="image-container">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
                  </div>
                  <div className="card-title">
                    <h2>{movie.title} ({movie.vote_average}/10)</h2>
                  </div>
                  <div className="card-description">
                    <p>{movie.overview}</p>
                  </div>
                  <div >
                    <p className="avaliacoes">Avaliações: {movie.popularity}</p>
                  </div>
                </div>
              ))
            )
        }
      </div>
    </div>
  );
};

export default Home