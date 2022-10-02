import './App.css';
import Home from './pages/Home'
import Upload from './pages/Upload.js'
import VideoPlayer from './pages/VideoPlayer';
import SignUp from './components/SignUp';
import { Routes, Route } from "react-router-dom";
<link href="css/bootstrap.min.css" rel="stylesheet" media="screen"></link>

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/upload' element={<Upload/>} />
        <Route path ='/video' element={<VideoPlayer />} />
        <Route path ='/signup' element={<SignUp />} />
      </Routes>

  );
}

export default App;
