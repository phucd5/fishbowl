import React from 'react'
import logo from '../logo.png'

function Home() {
    return (
        <div>
            <div className="title">Fishbowl</div>
        <div class="box-wrapper-home">
        <div id="box1-home">
        <video preload="auto" width="1928" height="400" controls>
        <source src="vid1" type="video/mp4" id="myVideo1"/>
            Your browser doesn\'t support HTML 5.
        </video>
        </div>
        <div className="vid-des">Latest Lectures</div>
        <div class ="box-wrapper2">
        <div id="box2-home">
        <video preload="auto" width="311" height="181" controls>
        <source src="vid1" type="video/mp4" id="myVideo1"/>
            Your browser doesn\'t support HTML 5.
        </video>
        </div>
        <div id="box2-home">
        <video preload="auto" width="311" height="181" controls>
        <source src="vid1" type="video/mp4" id="myVideo1"/>
            Your browser doesn\'t support HTML 5.
        </video>
        </div>
        <div id="box2-home">
        <video preload="auto" width="311" height="181" controls>
        <source src="vid1" type="video/mp4" id="myVideo1"/>
            Your browser doesn\'t support HTML 5.
        </video>
        </div>
        <div id="box2-home">
        <video preload="auto" width="311" height="181" controls>
        <source src="vid1" type="video/mp4" id="myVideo1"/>
            Your browser doesn\'t support HTML 5.
        </video>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Home;
