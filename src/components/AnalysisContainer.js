import React, { useEffect, useState, useContext } from 'react';
import { Segment, Grid, Card, Header} from 'semantic-ui-react';
import LoadWheel from './LoadWheel';
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import ToggleMonthPanel from './ToggleMonthPanel'
import HabitMonthStatCard from './HabitMonthStatCard'
import HabitAllTimeStatCards from './HabitAllTimeStatCards'
import Logo from "./Logo"


const AnalysisContainer = () => {

    const { activeMonthHabits, activeMonthProgress, allProgress, loaded, fetchProgress} = useContext(ProgressContext)
    const { user, signUpSuccess, setSignUpSuccess } = useContext(UserContext)
    const { currentMonth, daysOfMonth, currentYear } = useContext(DateContext)

    const colors = useState(['#264653', '#2a9d8f', "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC", '#264653', '#2a9d8f', "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC", '#264653', '#2a9d8f', "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC", '#264653', '#2a9d8f', "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC", '#264653', '#2a9d8f', "#e9c46a", "#f4a261", "#e76f51", "#F18C8E", "#A8DADC"])
    

    const [possibleDays, setPossibleDays] = useState(0)
    const [completedDays, setCompletedDays] = useState(0)
    const [allHabits, setAllHabits] = useState([])


    




    useEffect(() => {
    

      if (activeMonthProgress.length > 1 && signUpSuccess) {
          setSignUpSuccess(false)
      }

     if (!loaded){
       debugger
     } 


    }, [loaded, activeMonthProgress, currentMonth])


    useEffect(() => {
      if (user && currentMonth && loaded) {

        const totalDays = (currentMonth === new Date().getMonth() + 1) ? new Date().getDate() : daysOfMonth
        

      const days = []
      let i = 0;
        do {
          i += 1;
          let day = activeMonthProgress.filter((prog) => {
            return prog.day.day === i
        })

        const dayHabitsCompleted = day.filter((d) => {
          return d.completed == true 
        })
        
        if (dayHabitsCompleted.length === activeMonthHabits.length){
          days.push(day)
        }

        
          } while (i < totalDays);

          setCompletedDays(days.length)
          setPossibleDays(totalDays)

    }
    }, [loaded, activeMonthProgress, currentMonth])





    const habits = activeMonthHabits.map((habitName) =>{
      const matching = activeMonthProgress.find((prog) => {
          return prog.habit.name === habitName
      })
      return matching.habit
  })

  


  const habitStatCards = habits.reverse().map((habit, index) => {
    
    const totalDays = (currentMonth === new Date().getMonth() + 1) ? new Date().getDate() : daysOfMonth
    console.log(`the month is ${currentMonth} and the total days are ${totalDays}`)

    const totalCompleted = activeMonthProgress.filter((prog) => {
      return prog.completed === true && prog.habit.name === habit.name 
    }).length

    return (

      <HabitMonthStatCard
        key={habit.id}
        habit={habit}
        cardColor={colors[0][index]}
        totalDays={totalDays}
        totalCompleted={totalCompleted}

      /> 
      
    )
  })


  useEffect(() => {
    if (user && currentMonth && loaded) {



      const allHabitNames =  allProgress.map(progress => {
        return progress.habit.name
      })
      
      const nameArr = [...new Set(allHabitNames)]

      const allHabits = nameArr.map((habitName) =>{
      const matching = allProgress.find((prog) => {
          return prog.habit.name === habitName
      })
      return matching.habit
      })
      
      setAllHabits(allHabits)

    }
        
  }, [loaded, activeMonthProgress, currentMonth])






const allTimeHabitStatCards = allHabits.reverse().map((habit, index) => {


        const removeDuplicates = (array) => {
          const flag = {}
          const uniqueDays = []
          array.forEach(progress => {
              if (!flag[progress.day.id]){
                  flag[progress.day.id] = true
                  uniqueDays.push(progress.day)
              }
          })
          
          return uniqueDays
      }
      
  const days = removeDuplicates(allProgress)

  const totalDays = allProgress.filter((prog) => {
    if (prog.habit.name === habit.name){
      return prog.day.month !== new Date().getMonth() + 1 && prog.day.day <= new Date().getDate()
    }
  }).length
  
  

  console.log(`the month is ${currentMonth} and the total days are ${totalDays}`)
  

  const totalCompleted = allProgress.filter((prog) => {
    if (prog.habit.name === habit.name){
    return prog.completed === true && prog.day.month !== new Date().getMonth() + 1 && prog.day.day <= new Date().getDate() 
    }
  }).length

  

  

  return (

    <HabitMonthStatCard
      key={habit.id}
      habit={habit}
      cardColor={colors[0][index]}
      totalDays={totalDays}
      totalCompleted={totalCompleted}

    /> 
    
  )
})











  return (
      


     loaded ? <>
    


<div stretched style={{ marginLeft: '150px', height: '100vh', position: "relative", display: "flex" }} id="check1" class="ui center aligned middle aligned grid" >
  
  
  
<Grid style={{height: '100vh', width: "100%", paddingTop: '20px', position: "relative", display: "flex", overflow: "scroll" }} stretched stackable id="check2" divided='vertically' textAlign='center'   >

<Grid.Row id="check3" columns={1}>
    <Grid.Column id="check4" style={{ marginLeft: '0px', height: '100vh', paddingTop: '20px'}} >

    <ToggleMonthPanel style={{textAlign: "center", marginLeft: "0px"}}></ToggleMonthPanel>
 
        <>
        <Header as='h2'  style={{
            color:"#264653"
          }} textAlign='center'>
              Monthly Habit Completion Rates
           </Header>


           <Segment inverted style={{
          color: "#A8DADC", background: "#264653", width: '100%', textAlign: "center"
        }}stacked>
                       <> 

                       
                </>
            <h4>In {new Date(currentYear, currentMonth- 1, 1).toLocaleString('default', { month: 'long' })}, you completed all {`${activeMonthHabits.length}`} of your tracked habits on {`${completedDays}`} of out {`${possibleDays}`} days.</h4>
              
           </Segment>


      </>


 <Card.Group itemsPerRow={3} >

 {habitStatCards}

    </Card.Group>
    <Grid.Column stretched style={{ textAlign: 'center', width: '100%', marginLeft: '0', padding: "10px" }} > 
  
    <HabitAllTimeStatCards> </HabitAllTimeStatCards>

    <Card.Group itemsPerRow={3} >
      {allTimeHabitStatCards}
   </Card.Group>
</Grid.Column>

</Grid.Column>

</Grid.Row>


</Grid>


</div>
</> : <Logo></Logo>

     
     
   


   

  );
}

export default AnalysisContainer;