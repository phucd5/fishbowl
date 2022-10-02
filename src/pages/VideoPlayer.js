import React from 'react'
import{ useState, useEffect } from "react";
import {storage} from '../firebase'
import{ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { useAuth } from "../firebase";


function VideoPlayer() {

    const videoListRef = ref(storage, "video/")
    const[videoList, setVideoList] = useState([]);
    
    useEffect(() => {
        listAll(videoListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setVideoList((prev) => [...prev, url]);
                })
            })
        })
    }, [])

    return (
        <div className="video-player">
             <video className="video-watch" width="1440" height="1040" controls="controls"><source src={videoList[0]} type="video/mp4" /></video>
        </div>
    )
}

export default VideoPlayer;