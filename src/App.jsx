
import HomePage from "./assets/pages/HomePage"
import MovieDetailPage from "./assets/pages/MovieDetailPage"
import DefaultLayout from "./assets/layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<MovieDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
