import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../contexts/globalContext";
const HomePage = () => {

  const [movies, setMovies] = useState([]);

  const { setIsLoading } = useContext(GlobalContext);

  const movieList = () => {
    setIsLoading(true);
    axios.get("http://localhost:3000/movies")
      .then((resp) => {
        setMovies(resp.data);
        setIsLoading(false)
      })
      .catch((err) => (console.log(err)))
  };

  useEffect(movieList, []);

  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-4" key={movie.id}>

              <div className="cardMovie">
                <Link to={`/movies/${movie.id}`}>
                  <div className="card-img">
                    <img src={movie.image} alt={movie.title} />
                  </div>
                  <div className="card-description">
                    <h2>{movie.title}</h2>
                    <span>{movie.genre}</span>
                    <span>{movie.director + " " + movie.release_year}</span>
                    <p>{movie.abstract}</p>

                  </div>
                </Link>
              </div>
            </div>
          )
        }
        )}
      </div>
    </div>

  )
}

export default HomePage
