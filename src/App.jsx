
import HomePage from "./assets/pages/HomePage"
import MovieDetailPage from "./assets/pages/MovieDetailPage"
import DefaultLayout from "./assets/layout/DefaultLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFoundPage from "./assets/pages/NotFoundPage"
import GlobalContext from "./contexts/globalContext"
import { useState } from "react"
function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies/:id" element={<MovieDetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>


    </>
  )
}

export default App
GlobalContext