import React from 'react'
import{ useState, useEffect } from "react";
import {storage} from '../firebase'
import{ref, uploadBytes, listAll, getDownloadURL} from "firebase/storage"
import { useAuth } from "../firebase";


function Upload() {

    const [videoUpload, setVideoUpload] = useState(null);
    const[videoList, setVideoList] = useState([]);

    const videoListRef = ref(storage, "video/")

    const uploadVideo =  () => {
        if (videoUpload == null)  {
            return;
        }
        const videoRef = ref(storage, `video/${videoUpload} `)
        uploadBytes(videoRef, videoUpload).then(() => {
            alert("The video has been uploaded!")
        })
    }

    useEffect(() => {
        listAll(videoListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setVideoList((prev) => [...prev, url]);
                })
            })
        })
    }, [])
    
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
                    <label id='chooseBut'>
                        Select File
                    <input type="file" id='chooseBut' onChange={(vid) => {
                        setVideoUpload(vid.target.files[0])}} />
                    </label>

                </div>
                </div>
                
            </div>
        </div>
    );

}

export default Upload;