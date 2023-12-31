import './App.css'
import './css/index-responsive.css'
import { Navbar, Home, Footer } from './components'

function App() {
  return (
  <div className="home-container">

   <div className='header-container'>
    <div className="navbar">
        <Navbar />
    </div>
    <div className="home-content">
      <Home />
    </div>
   </div>

   <div className="footer-container">
    <div className="footer">
      <Footer />
    </div>
   </div>
   </div>
  )
}

export default App
