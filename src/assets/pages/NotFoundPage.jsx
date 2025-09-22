import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div>
      <h2>Nessuna Pagina Trovata</h2>
      <Link className="btn btn-success" to={"/"}>Torna alla Pagina principale </Link>

    </div>
  )
}

export default NotFoundPage
