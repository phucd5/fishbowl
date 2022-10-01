import './App.css';
import Home from './pages/Home'
import Upload from './pages/Upload.js'
import VideoPlayer from './pages/VideoPlayer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/upload' element={<Upload/>} />
        <Route path ='/video' element={<VideoPlayer />} />
      </Routes>

  );
}

export default App;
