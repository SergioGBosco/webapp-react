import axios from "axios"
import { useState, useEffect } from "react"
import { replace, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"


const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  const navigate = useNavigate();

  const fenchMovie = () => {
    axios.get(`http://localhost:3000/movies/${id}`).then(resp => {
      setMovieDetail(resp.data)
    }).catch(() => {
      navigate("not_found", { replace: true })
    });
  }

  useEffect(fenchMovie, [id])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="cardMovie-details">
            <div className="card-img-details">
              <img src={movieDetail.image} alt={movieDetail.title} />
            </div>
            <div className="card-description-details">
              <h2>{movieDetail.title}</h2>
              <span><strong>{movieDetail.genre}</strong></span>
              <span>{movieDetail.director + " " + movieDetail.release_year}</span>
              <p>{movieDetail.abstract}</p>
            </div>
          </div>
          <div className="reviews">
            {movieDetail.reviews ? (movieDetail.reviews.map((review) => {
              return (
                <div className="review_card">
                  <h2>{review.name}</h2>
                  <span>{review.vote}</span>
                  <p>{review.text}</p>
                </div>
              )
            })
            ) : (
              <h2>Nessuna Recensione da visualizzare</h2>
            )
            }
          </div>
          <div className="d-flex m-4 justify-content-around">
            <button className="btn btn-primary" onClick={() => navigate(`/${parseInt(id) - 1}`)}> torna alla pagina precedente </button>
            <button className="btn btn-success" onClick={() => navigate(`/${parseInt(id) + 1}`)}> Vai alla pagina Successiva </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailPage
