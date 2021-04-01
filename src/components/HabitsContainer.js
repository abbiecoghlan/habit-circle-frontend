import React, { useState, useEffect } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Card, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import HabitCard from './HabitCard';

import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import NewHabit from './NewHabit'
import NewMonthHabitsForm from './NewMonthHabitsForm';
import LoadWheel from './LoadWheel';
import Logo from './Logo'
import ToggleMonthPanel from './ToggleMonthPanel'
import { useHistory } from "react-router-dom"

const HabitsContainer = () => {

    const { loaded, allProgress, activeMonthHabits, activeMonthProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const {currentMonth, setCurrentMonth} = useContext(DateContext)
    const { user, signUpSuccess } = useContext(UserContext)

    const history = useHistory()

    const colors = useState(["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC"])

    const habits = activeMonthHabits.map((habitName) =>{
        const matching = activeMonthProgress.find((prog) => {
            return prog.habit.name === habitName
        })
        return matching.habit
    })


    useEffect(() => {
            if (currentMonth !== new Date().getMonth() + 1){
            setCurrentMonth()
            setActiveMonth(new Date().getMonth() + 1) }  

            if (user && loaded && activeMonthProgress.length < 1 && !signUpSuccess ) {
              history.push(`/tracker/${user.username}/create`)
          }
        
    }, [currentMonth])


    useEffect(() => {
      console.log("from habits container")   
      console.log("the progress length is: ", allProgress.length)
      console.log("the active progress length is: ", activeMonthProgress.length)
      console.log("the habit length is: ", activeMonthHabits.length)
      console.log("the current month is: ", currentMonth)


  }, [loaded, currentMonth, activeMonthProgress, allProgress, activeMonthHabits])

    const habitCards = habits.reverse().map((habit, index) => {
      
        return (
          <HabitCard
            key={habit.id}
            habit={habit}
            cardColor={colors[0][index]}
 
          /> 
        )
      })



  return (
      loaded ?

        <>

    <div id="check1" class="ui center aligned middle aligned grid" >
        {/* <h1 style={{marginLeft: '150px', color: "#264653"}}>{`${user.name}'s habits`}</h1> */}
        {/* <ToggleMonthPanel></ToggleMonthPanel> */}
    <Grid id="check2"  divided='vertically' textAlign='center'  >
    <Grid.Row id="check3" columns={1}>
        <Grid.Column id="check4" style={{ marginLeft: '150px', height: '100vh', paddingTop: '100px' }} >


     <h2 style={{
            color:"#264653"
          }} >Update or delete habits</h2>

     <Card.Group itemsPerRow={3} >

     {habitCards}

        </Card.Group>
        <Grid.Column id="check1" style={{ textAlign: 'center', width: '50%', marginLeft: '25%', padding: "10px" }} > 
        
        <NewHabit ></NewHabit  >
    </Grid.Column>

    </Grid.Column>

    </Grid.Row>

    </Grid>

    
    </div>
    </> 
    : <Logo></Logo>
  );
}

export default HabitsContainer;


