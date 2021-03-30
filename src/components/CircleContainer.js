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



const CircleContainer = () => {

    const { loaded, activeMonthHabits, activeMonthProgress, allProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const { user, signUpSuccess } = useContext(UserContext)
    const { currentMonth } = useContext(DateContext)
     
    const history = useHistory()

    useEffect(() => {
        if (user && currentMonth && !loaded) {
            fetchProgress(user.id, currentMonth)
        }

        if (user && loaded && activeMonthProgress.length < 1) {

            history.push(`/tracker/${user.username}/create`)
        }
        

    }, [loaded, activeMonthProgress, currentMonth])




  return (
      <>

    <div class="ui center aligned middle aligned grid" style={{height: "100vh"}}>
    {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
    
    {loaded ? <><ToggleMonthPanel></ToggleMonthPanel><Circle></Circle></> : <LoadWheel></LoadWheel>}
    </div>
    </>
  );
}

export default CircleContainer;
