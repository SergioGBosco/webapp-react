import React from 'react'

const NewReview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Inserisci la tua Recensione</h2>
        </div>
        <div className="col-12">
          <form className='form'>
            <div className="row">
              <div className="col-12">
                <label htmlFor="" className='form-label'>Nome</label>
                <input type="text"
                  name="user"
                  id="user"
                  className='form-control'
                  placeholder='Come ti Chiami?'
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className='form-label' >Voto</label>
                <input type="number"
                  name="vote"
                  id="vote"
                  min={0}
                  max={5}
                  className='form-control'
                  placeholder='Quanto Valuti questo films ?'
                />
              </div>
              <div className="col-12">
                <label htmlFor="" className='form-label' >Commento</label>
                <input type="text"
                  name="text"
                  id="text"
                  className='form-control'
                  placeholder='Spiega il tuo voto ?'
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
