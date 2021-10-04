import React from 'react';
import Card from './Card';
import clock from '../images/timer.svg';
import game from '../images/game.svg';
import naruto from '../images/camera.svg';
import snapchat from '../images/snapchat.svg'
function ProjectsContainer(){


    return(
        <div className="projects-section">
           
            <div className="projects-box">
                 <h1 >Projects</h1>
                <div className="card-container">
                    <Card source={snapchat} alt={'snapchat'} title={'SnapLove'} link={"https://github.com/sugarfig/SnapLove"}description={'Worked in a cross-functional team to develop a prototype feature for Snapchat. Programmed a responsive and interactive app using Expo, React.js, and Firebase.'}></Card>
                    <Card source={naruto} alt={'naruto'} title={'Naruto Filter'} link={"https://github.com/3100ashley/naruto-snap-lens--ml5"} description={'Developed a Naurto based Snap Lens using p5.js and ml5.js. Using event logic to add in a new drawing.'}></Card>
                    <Card source={clock} alt={'clock'} link={"https://github.com/3100ashley/pomodoro"} title={'Pomodoro Timer'} description={'Created a time management timer using React.js to promote productivity'}></Card>
                    <Card source={game} link={"https://3100ashley.github.io/memory-game/"} alt={'memory game'} title={'Memory Game'} description={'Constructed a responsive and interactive game using HTML, CSS, and JavaScript.'}></Card>
                    
                    

                </div>
                
            </div>
        </div>
    )
}

export default ProjectsContainer;