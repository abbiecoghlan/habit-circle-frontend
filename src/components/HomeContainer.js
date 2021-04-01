import React, { useEffect } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import LoadWheel from './LoadWheel';

import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import { useHistory } from "react-router-dom"
import ToggleMonthPanel from './ToggleMonthPanel'
import Logo from "./Logo"



const HomeContainer = () => {

    const { loaded, activeMonthProgress, allProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const { user, signUpSuccess, setSignUpSuccess } = useContext(UserContext)
    const { currentMonth } = useContext(DateContext)
     
    const history = useHistory()

    // useEffect(() => {
    //     if (loaded) {
    //         history.push(`/tracker/${user.username}/month`)
    //     }
        
    // }, [loaded])




  return (
    

    <div style={{ display: "block", position: "relative", padding: "30px"}}  class="ui center aligned middle aligned grid" >
        <h1 style={{color:"#264653", position: "relative", top:"0", left:"0" }} > HABIT CIRCLE </h1>
        {!loaded ?
        <div style={{ display: "block", position: "relative"}}  class="ui center aligned middle aligned grid" >
            <Logo></Logo>
        
        </div> : 
    <Logo></Logo>  
             
           }
    </div>
    
  );
}

export default HomeContainer;