import { BrowserRouter } from "react-router-dom"
import {About , Contact,Feedbacks,Navbar , Hero, Experience , Works , Tech , Stars} from './components'
const App = () =>{

  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <Navbar/>
       <Hero />
      
      </div>

      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      <Feedbacks/>

      <div className="relative z-0">
      <Contact/>
      <Stars/>
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App
