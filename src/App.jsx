
import HomePage from "./assets/pages/HomePage"
import MovieDetailPage from "./assets/pages/MovieDetailPage"
import DefaultLayout from "./assets/layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./assets/pages/NotFoundPage"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/:id" element={<MovieDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
