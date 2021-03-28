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

const HabitsContainer = () => {

    // const { loaded, activeMonthHabits, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    // const { user } = useContext(UserContext)
    // const { currentMonth } = useContext(DateContext)
     
    // useEffect(() => {
    //     if (user && currentMonth && !loaded) {
    //         fetchProgress(user.id, currentMonth)
    //     }

    // }, [loaded])




  return (
      <>

    <div class="ui center aligned middle aligned grid" style={{height: "100vh"}}>
    {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
     <h1>THIS IS WILL A HABITS CONTAINER</h1>
    {/* {loaded ? <Circle></Circle> : <LoadWheel></LoadWheel>} */}
    </div>
    </>
  );
}

export default HabitsContainer;