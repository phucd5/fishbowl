import React from 'react'
import { useState , useEffect} from "react";
import { storage } from '../firebase';
import { listAll, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
// import { v4 } from 'uuid';


function Upload() {
    const [imageUpload, setImageUpload] = useState(null);
  

    
    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {
            alert("image uploaded successfully");
        });

    };



    return (
        <div className = "App">
            <input type = "file" onChange = {(event) => {setImageUpload(event.target.files[0])}}/>
            <button onClick = {uploadImage}> Upload Image </button>
        </div>
        );

}

export default Upload;