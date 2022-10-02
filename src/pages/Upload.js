import React, { useRef } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


function Upload() {

    return (
        <div>
            <div class="boxwrapper">
                <div id="box1">1</div>
                <div class="boxwrapper2">
                <div id="box2">
                    <input type="text" placeholder="Title" required></input>
                </div>
                <div id="box3">
                <textarea placeholder='Description of lecture'></textarea>
                </div>
                <div className="boxwrapper3">
                    <a href='/home'><button>Cancel</button></a>
                    <button>Save</button>
                    <button>Upload</button>
                </div>
                </div>
                
            </div>
        </div>
    );

}

export default Upload;