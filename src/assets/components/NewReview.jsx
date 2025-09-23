import axios from "axios"
import { useState, useEffect } from "react"

const NewReview = ({ movieId, reloadReviews }) => {
  const [formReview, setFormReview] = useState({
    name: "",
    vote: "",
    text: "",
  });

  const setValue = (e) => {
    const { name, value } = e.target;
    const obj = {
      ...formReview,
      [name]: value
    }
    setFormReview(obj)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3000/movies/${movieId}/reviews`, formReview, { headers: { "Content-type": "application/json" } }).then((resp) => {
      setFormReview({
        name: "",
        vote: "",
        text: "",
      });

      // utilizzo della funzione che permette di ricaricare la apgina 
      reloadReviews();
    })
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Inserisci la tua Recensione</h2>
        </div>
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <label htmlFor="" className='form-label'>Nome</label>
                <input type="text"
                  name="name"
                  id="name"
                  value={formReview.name}
                  className='form-control'
                  placeholder='Come ti Chiami?'
                  onChange={setValue}

                />
              </div>
              <div className="col-12">
                <label htmlFor="" className='form-label' >Voto</label>
                <input type="number"
                  name="vote"
                  id="vote"
                  min="0"
                  max="5"
                  value={formReview.vote}
                  className='form-control'
                  placeholder='Quanto Valuti questo films ?'
                  onChange={setValue}
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className='form-label' >Commento</label>
                <input type="text"
                  name="text"
                  id="text"
                  value={formReview.text}
                  className='form-control'
                  placeholder='Spiega il tuo voto ?'
                  onChange={setValue}
                />
              </div>
              <button className='btn-success my-5' type='submit'>Aggiungi Recensione</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewReview
