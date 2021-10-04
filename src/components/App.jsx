import React, {useState} from 'react';
import TopContainer from './TopContainer'
import ProjectsContainer from './ProjectsContainer';
import BottomContainer from './BottomContainer'


function App(){
    
    return (
        <div>
            <TopContainer></TopContainer>
            <ProjectsContainer></ProjectsContainer>
            <BottomContainer></BottomContainer>
            
            

        </div>
    )
}

export default App;