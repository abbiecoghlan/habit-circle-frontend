import React, { useEffect } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Dimmer, Loader, Card, Grid, GridRow, GridColumn } from 'semantic-ui-react';
import HabitCard from './HabitCard';
import {Redirect} from "react-router-dom"
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import NewHabit from './NewHabit'
import NewMonthHabitsForm from './NewMonthHabitsForm';

const HabitsContainer = () => {

    const { loaded, activeMonthHabits, activeMonthProgress, fetchProgress, setActiveMonth } = useContext(ProgressContext)
    const {currentMonth, setCurrentMonth} = useContext(DateContext)
    const { user } = useContext(UserContext)

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
        console.table(activeMonthHabits)
        console.table(habits)
        console.log(currentMonth)
        
    }, [currentMonth])




    // const habits = progressArray.filter(progress => {
    //     return   (progress.day.month == month)
    //     })

    // const { user } = useContext(UserContext)
    // const { currentMonth } = useContext(DateContext)
     
    // useEffect(() => {
    //     if (user && currentMonth && !loaded) {
    //         fetchProgress(user.id, currentMonth)
    //     }

    // }, [loaded])

    const habitCards = habits.map((habit) => {

        return (
          <HabitCard
            key = {habit.id}
            habit = {habit}

          /> 
        )
      })



  return (
      <>


    <div class="ui center aligned middle aligned grid" >
        <h1 style={{marginLeft: '150px', color: "#264653"}}>{`${user.name}'s habits`}</h1>
    <Grid divided='vertically' textAlign='center'  >
    <Grid.Row columns={1}>
        <Grid.Column style={{ marginLeft: '150px', height: '100vh', paddingTop: '100px' }} >


     <h2 style={{
            color:"#264653"
          }} >Update or delete habits</h2>
     <Card.Group itemsPerRow={3} >

     {habitCards}

        </Card.Group>
        <Grid.Column style={{ textAlign: 'center', width: '50%', marginLeft: '25%', padding: "10px" }} > 
        <NewHabit ></NewHabit  >
    </Grid.Column>

    </Grid.Column>

    </Grid.Row>

    </Grid>

    
    </div>
    </>
  );
}

export default HabitsContainer;




//with two columns

// <>


// <div class="ui center aligned middle aligned grid" >
//     <h1>{`${user.name}'s habits`}</h1>
// <Grid divided='vertically' textAlign='center' style={{ marginLeft: '150px', height: '100vh', paddingTop: '100px' }} >
//   <Grid.Row columns={2}>
//     <Grid.Column >

// {/* {loaded && activeMonthHabits.length === 0 ? <Redirect to='/tracker/createhabits' /> : null} */}
//  <h2 style={{
//         color:"#264653"
//       }} >Update or delete habits</h2>
//  <Card.Group itemsPerRow={1} >

//  {habitCards}

//     </Card.Group>
// </Grid.Column>
// <Grid.Column>
// <NewHabit></NewHabit>
// </Grid.Column>
// </Grid.Row>
// </Grid>

// </div>
// </>