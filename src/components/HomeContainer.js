import React, { useEffect } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import LoadWheel from './LoadWheel';
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import { useHistory } from "react-router-dom"
import ToggleMonthPanel from './ToggleMonthPanel'
import Logo from "./Logo"



const HomeContainer = () => {

    const { loaded, activeMonthHabits, activeMonthProgress, allProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const { user, signUpSuccess, setSignUpSuccess } = useContext(UserContext)
    const { currentMonth } = useContext(DateContext)
     
    const history = useHistory()

    useEffect(() => {
        if (user && currentMonth && !loaded) {
            fetchProgress(user.id, currentMonth)
        }
        if (loaded) {
          
            history.push(`/tracker/${user.username}/create`)
        }
        

    }, [loaded, activeMonthProgress, currentMonth])




  return (
      <>

    <div style={{ display: "block", position: "relative"}}  class="ui center aligned middle aligned grid" >
    {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
    <h1 style={{position: "relative", top:"0", left:"0" }} > HABIT CIRCLE </h1>
    <h2> Welcome, {`${user.name}`}!</h2>

    {loaded ? <> <div style={{ display: "block", position: "relative"}}  class="ui center aligned middle aligned grid" >
            <Logo></Logo>
        
        </div></> : 
    
    <><Logo></Logo>  
             
           <Loader style={{height: "100vh"}}> inline="center" active size='massive'>Loading your habit data</Loader></>}
    </div>
    </>
  );
}

export default HomeContainer;