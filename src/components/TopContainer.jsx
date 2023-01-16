 import React from 'react';
import bitmoji from '../images/bitmoji2.png';
import Typewriter from 'typewriter-effect';
import "../css/TopContainer.css"

function TopContainer(){
    return(
        <div className="top-container">
                <div className="info-section">
                    <div>
                        <h1 className="text">I'm Ashley </h1>
                        <div className="name-container">
                            <span className="type-writer">
                                <Typewriter options={{strings: ['A programmer in the making'],autoStart: true,loop: true,}}/>
                            </span>
                        </div>
                    </div>
                    <img src={bitmoji} alt="bitmoji" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFFFF" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,133.3C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                
        </div>
    )
}

export default TopContainer;