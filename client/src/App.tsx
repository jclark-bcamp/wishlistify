import { Outlet } from "react-router-dom"
import Navbar from "./components/nav/index.tsx"
import Header from "./components/header/index.tsx"
import Footer from "./components/footer/index.tsx"

function App() {
  return (
    <>
    <Header />
      <Navbar />
        <main>
          <Outlet />
        </main>
     <Footer />   
    </>
  )
}

export default App
