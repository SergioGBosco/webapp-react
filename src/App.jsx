
import HomePage from "./assets/pages/HomePage"
import MovieDetailPage from "./assets/pages/MovieDetailPage"
import DefaultLayout from "./assets/layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./assets/pages/NotFoundPage"
import NewReview from "./assets/components/NewReview"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/movies/newreviews" element={<NewReview />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
