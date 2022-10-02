import React, { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


function Upload() {

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
                    <button className='otherButs'>Save</button>
                    <button id='submitBut'>Upload</button>
                </div>
                </div>
                
            </div>
        </div>
    );

}

export default Upload;