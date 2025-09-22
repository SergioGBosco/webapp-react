import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:3000/movies/${id}`).then(resp => {
      setMovieDetail(resp.data)
    })
  }, [id])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">

          <div className="cardMovie">
            <div className="card-img">
              <img src={movieDetail.image} alt={movieDetail.title} />
            </div>
            <div className="card-description">
              <h2>{movieDetail.title}</h2>
              <span>{movieDetail.genre}</span>
              <span>{movieDetail.director + " " + movieDetail.release_year}</span>
              <p>{movieDetail.abstract}</p>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage
