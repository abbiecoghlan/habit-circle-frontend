import React, { useEffect } from 'react';
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import LoadWheel from './LoadWheel';
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import ToggleMonthPanel from './ToggleMonthPanel'

const AnalysisContainer = () => {

    const { activeMonthHabits, activeMonthProgress} = useContext(ProgressContext)
    // const { user } = useContext(UserContext)
    // const { currentMonth } = useContext(DateContext)
     
    // useEffect(() => {
    //     if (user && currentMonth && !loaded) {
    //         fetchProgress(user.id, currentMonth)
    //     }

    // }, [loaded])

    const habits = activeMonthHabits.map((habitName) =>{
      const matching = activeMonthProgress.find((prog) => {
          return prog.habit.name === habitName
      })
      return matching.habit
  })



  return (
      <>

    <div class="ui center aligned middle aligned grid" >
    {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
     <h1>THIS WILL BE AN ANALYSIS CONTAINER</h1>
     <br></br>
     <ToggleMonthPanel></ToggleMonthPanel>

    </div>
   

    </>
  );
}

export default AnalysisContainer;