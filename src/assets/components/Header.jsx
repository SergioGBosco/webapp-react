import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div>
              <img src="../../imgs/logo.png" alt="Logo" className="logo" />
            </div>
            <div>
              <h2>Pirated Movie</h2>
            </div>
            <div>
              <Link to={"/"} className="btn btn-primary">Home</Link>
            </div>

          </div>
        </div>
      </div>
    </header >
  )
}

export default Header
