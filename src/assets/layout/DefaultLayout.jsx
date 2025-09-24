
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import GlobalContext from '../../contexts/globalContext'
import { use, useContext } from 'react'
import Loader from '../components/Loader'
const DefaultLayout = () => {
  const { isLoading } = useContext(GlobalContext)
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {isLoading && <Loader />}

    </>
  )
}

export default DefaultLayout
