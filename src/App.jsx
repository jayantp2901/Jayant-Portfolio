
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

 function App() {
  return (
    <>
   <Navbar />
   <Hero/>
   <About/>
   <Project/>
   <Contact/>
   <Footer/>
      <a
  href="#home"
  className="fixed bottom-6 right-2 z-50 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 text-sm"
>
  ⬆ Home
</a>

      </>
  )
}

export default App
