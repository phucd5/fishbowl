import React from 'react'
import{ useState, useEffect } from "react";
import {storage} from '../firebase'
import{ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { useAuth } from "../firebase";


function VideoPlayer() {

    const videoListRef = ref(storage, "video/")
    const[videoList, setVideoList] = useState([]);
    const[yprediction, setyprediction] = useState(0);
    
    useEffect(() => {
        listAll(videoListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setVideoList((prev) => [...prev, url]);
                })
            })
        })
    }, [])

    useEffect(() => {
        const webgazer=window.webgazer
        webgazer.setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }
            setyprediction(data.y)
            console.log(data.x, data.y);
        }).begin();
    
    });

    return (
        (yprediction < 450 ?  <div>Paused...</div> : <div className="video-player">
        <video className="video-watch" width="1440" height="1040" controls="controls"><source src={videoList[0]} type="video/mp4" /></video>
   </div> )
    )
}

export default VideoPlayer;