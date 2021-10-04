import React from 'react';
import ExperienceCard from './ExperienceCard'

function BottomContainer(){
    return (
        <div className="bottomContainer">
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F9DFDC" fill-opacity="1" d="M0,224L120,197.3C240,171,480,117,720,112C960,107,1200,149,1320,170.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
            <div>
                <h1>Experience</h1>
            </div>
            <div className="exp-card-container">
                <ExperienceCard title={'Dreams for Schools'} job_title={'Mentor/Instructor'} description={'Providing children in underserved communities access to Science, Technology, Engineering & Math activities to empower and cultivate curiosity. Guiding students in developing and debugging a game using Scratch.'}></ExperienceCard>
                <ExperienceCard title={'Graffix'} job_title={'Junior Web Developer'} description={'Responsible for keeping the student union website updated. As well as transitioning to React framework.'}></ExperienceCard>
                <ExperienceCard title={'Snap Engineering Academy'} job_title={'Snap Scholar'} description={'Selected as one of fifteen scholars out of a competitive application pool of 100+ community college applicants in the LA metropolitan area. Honed skills in Git/Github, Javascript, p5.js,ml5.js, React Native, Firebase.'}></ExperienceCard>
                <ExperienceCard title={'Cal State Los Angeles: Code Brew'} job_title={'Web Developer'} description={'Led the development of the organization\'s web platform. The project involved ne UX creations and menotring of students over HTML and CSS coding. Helped organize coding sessions to teach high school students HTML and CSS basics and assisted in creating a simple website.'}></ExperienceCard>

            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9dfdc" fill-opacity="1" d="M0,224L48,186.7C96,149,192,75,288,69.3C384,64,480,128,576,165.3C672,203,768,213,864,197.3C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div>
    )
}

export default BottomContainer