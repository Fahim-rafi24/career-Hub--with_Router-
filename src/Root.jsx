import Footer from './assets/Components/Footer'
import NavBar from './assets/Components/Nav'
import './Root.css'
import { Outlet } from "react-router-dom";




function Root() {

  return (
    <>
      <NavBar></NavBar>
      <Outlet />
      <footer className='mt-10'>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default Root
