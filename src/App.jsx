import Navbar from "./assets/components/Navbar.jsx"
import Hero from "./assets/components/Hero.jsx"
import Home from "./assets/pages/Home.jsx"
import Order from "./assets/pages/Order.jsx"
import Footer from "./assets/components/Footer.jsx"

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Home />
      <Order />
      <Footer />
    </div>
  )
}