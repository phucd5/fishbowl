import React from 'react'
import{ useState, useEffect } from "react";
import {storage} from '../firebase'
import{ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { useAuth } from "../firebase";



function Upload() {

    const videoListRef = ref(storage, "video/")
    const [videoUpload, setVideoUpload] = useState(null);
    const currentUser = useAuth();
    const[videoList, setVideoList] = useState([]);

    const uploadVideo =  () => {
        if (videoUpload == null)  {
            return;
        }
        const videoRef = ref(storage, `video/${videoUpload}${currentUser.uid} `)
        uploadBytes(videoRef, videoUpload).then(() => {
            console.log("Image uploaded")
        })
    }

    // useEffect(() => {
    //     listAll(videoListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setVideoList((prev) => [...prev, url]);
    //             })
    //         })
    //     })
    // }, [])

    return (
        <div>
            <div class="boxwrapper">
                <div id="box1">
                </div>
                <div class="boxwrapper2">
                <div id="box2" >
                    <input type="text" placeholder="Title" required></input>
                </div>
                <div id="box3">
                <textarea placeholder='Description of lecture'></textarea>
                </div>
                <div className="boxwrapper3">
                    <a href='/home'><button className='otherButs'>Cancel</button></a>
                    <button id='submitBut' onClick={uploadVideo}>Upload Video</button>
                    {videoList.map((url) => {
                    return <img src={url} />
                    })}
                    <label className='choose'>
                        Select file
                    <input type="file" id='chooseBut'  onChange={(e) => {
                        setVideoUpload(e.target.files[0])}} />
                    </label>
                </div>
                </div>
                
            </div>
        </div>
    );

}

export default Upload;