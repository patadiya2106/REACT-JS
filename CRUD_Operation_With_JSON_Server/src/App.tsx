import { Outlet } from "react-router"
import NavBar from "./Componets/NavBar"
import Foooter from "./Componets/Foooter"
import AddProduct from "./Pages/AddProducts/AddProducts"
import ContactPage from "./Pages/Contact/Contact"
import { Contact } from "lucide-react"

function App() {

  return (
   <>
    <NavBar />
    <Foooter />
   </>
  )
}

export default App
