import Navbar from "./components/Navbar"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Upload from "./pages/Upload"
import VideoPlayer from "./pages/VideoPlayer"


function App() {
  let component 
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/home":
      component = <Home />
      break
    case "/upload":
      component = <Upload />
      break
    case "/videos":
      component = <VideoPlayer />
      break
    case "/signup":
      component = <SignUp />
      break
  }
  return (
  <div>
  <Navbar />
  <div className="container">{component}</div>
  </div>
  )
   
}

export default App
