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



const CircleContainer = () => {

    const { loaded, activeMonthHabits, activeMonthProgress, allProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const { user, signUpSuccess, setSignUpSuccess } = useContext(UserContext)
    const { currentMonth } = useContext(DateContext)
     
    const history = useHistory()

    useEffect(() => {
    
        if (user && loaded && activeMonthProgress.length < 1 && !signUpSuccess ) {
            history.push(`/tracker/${user.username}/create`)
        }

        if (activeMonthProgress.length > 1 && signUpSuccess) {
            setSignUpSuccess(false)
        }

    }, [loaded, activeMonthProgress, currentMonth])

    // useEffect(() => {
    //     console.log("from circle container")   
    //     console.log("the progress length is: ", allProgress.length)
    //     console.log("the active progress length is: ", activeMonthProgress.length)
    //     console.log("the habit length is: ", activeMonthHabits.length)
    //     console.log("the current month is: ", currentMonth)


    // }, [loaded, currentMonth, activeMonthProgress, allProgress, activeMonthHabits])


  return (
    <>
        <div class="ui center aligned middle aligned grid" style={{height: "100vh"}}>
            {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
            {loaded ? <><ToggleMonthPanel></ToggleMonthPanel><Circle></Circle></> : <Logo></Logo> }
        </div>
    </>
  );
}

export default CircleContainer;
