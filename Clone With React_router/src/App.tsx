
import Header from './Compontes/Header/Header'
import Footer from './Compontes/Footer/Footer'
import { Outlet } from 'react-router'


function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
