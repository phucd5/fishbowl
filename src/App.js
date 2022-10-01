
// import Home from './pages/Home'
// import Upload from './pages/Upload.js'
// import VideoPlayer from './pages/VideoPlayer';
// import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"
import Lectures from "./pages2/Lectures"
import About from "./pages2/About"
import Home from "./pages2/Home"
import Schedules from "./pages2/Schedules"
import SignUp from "./pages2/SignUp"


function App() {
  let component 
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
      case "/Lectures":
        component = <Lectures />
        break
        case "/about":
          component = <About />
        break
        case "/schedules":
          component = <Schedules />
        break
        case "/SignUp":
          component = <SignUp />
  }
  return (
  <>
  <Navbar />
  <div className="container">{component}</div>
  </>
  )
      // <Routes>
      //   <Route path="/" element={<Home />}/>
      //   <Route path='/upload' element={<Upload/>} />
      //   <Route path ='/video' element={<VideoPlayer />} />
      // </Routes>



}

export default App
