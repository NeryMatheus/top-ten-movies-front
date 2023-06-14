import axios from "axios"
import { useState, useEffect } from "react"

import './Home.css'

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('http://localhost:3000/movies/1/popularity.desc');
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
    <div>
      <h1>Top Ten Movies da semana !!</h1>
      {movies.length === 0 
        ? (<p>Carregando ...</p>) 
        : ( 
          movies.map((movie) => (
            <div className="movie" key={movie.id}>
              <h3>{movie.title}</h3>
            </div>
          ))
        )
      }
    </div>
  );
};

export default Home