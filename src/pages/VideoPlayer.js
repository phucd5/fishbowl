import React from 'react'
import{ useState, useEffect } from "react";
import {storage} from '../firebase'
import{ref, listAll, getDownloadURL} from "firebase/storage"
import {yprediction} from '../App'


function VideoPlayer() {

    const videoListRef = ref(storage, "video/")
    const[videoList, setVideoList] = useState([]);
    const[yprediction, setyprediction] = useState(0);
    
    useEffect(() => {
        listAll(videoListRef).then((res) => {
            res.items.forEach((video) => {
                getDownloadURL(video).then((url) => {
                    setVideoList((prev) => [...prev, url]);
                })
            })
        })
    }, [])

   useEffect(() => {
    const webgazer=window.webgazer
    const fetchData = async () => {
        await webgazer.setGazeListener(function(data) {
            if (data == null) {
                setyprediction(null)
                return;
            }
            setyprediction(data.y)
            console.log(data.x, data.y);
        }).begin().then().catch()
      }

      fetchData();
    
    });

    return (
        (yprediction == null ?  <div style={{textAlign: 'center'}}>Paused...</div> : <div className="video-player">
        <video className="video-watch" width="1440" height="1040" controls="controls"><source src={videoList[0]} type="video/mp4" /></video>
   </div> )
    )
}

export default VideoPlayer;