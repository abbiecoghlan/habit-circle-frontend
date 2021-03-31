import React, { useEffect, useState } from 'react';
import Circle from './Circle';
import NavBar from './NavBar'
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Segment, Progress, Dimmer, Loader, Button, Card, Item, Form, Input } from 'semantic-ui-react';
import LoadWheel from './LoadWheel';
import {Redirect, Link} from "react-router-dom"
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'



const HabitMonthStatCard = ({habit, cardColor, totalDays, totalCompleted}) => {

    const { user } = useContext(UserContext)
    const { activeMonthProgress } = useContext(ProgressContext)
    const { currentMonth, daysOfMonth } = useContext(DateContext)


    useEffect(() => {
        // console.log('hi')
        
        // console.log(totalDays)
        // console.log(totalCompleted)
    }, [currentMonth])


    const handleClick = (e) => {
        // console.table(habit)
        // console.log(habit.name)
        // console.log(cardColor)
        // console.log(daysOfMonth)
        console.log("hi again")
    }



  return (

<>
 

 <Card inverted style={{color: cardColor}} >
 
 <Card.Content extra>
         <Card.Header style={{ backgroundcolor: cardColor, textAlign: "center", verticalAlign: 'top' }}> 
         
   
             <h3 style={{color: cardColor}} >{habit.name.toUpperCase()}</h3>
 
 
                 
 
 
       
     {/* <Card.Content style={{ color: "#264653", textAlign: "left", verticalAlign: 'top' }} >
         <Form.Input 
 
             id='form-input-control-first-name'
             name={habit.name}
 
             
             placeholder={habit.name}
             value={habit.name}
             onChange={(e) => handleChange(e)}
         />
     </Card.Content> */}
     
        
        
         </Card.Header>
     
         
         <Progress onClick={(e) => {handleClick(e)}} percent={`${Math.round(totalCompleted/totalDays * 100)}`}  progress='percent'  color='grey'  >{`${totalCompleted}/${totalDays} days completed`}</Progress>
 
 
         
     </Card.Content>
     </Card>
 </>
 
 
    
  );
}

export default HabitMonthStatCard;



 


// //

// <>
 

// <Card stretched inverted style={{ color: cardColor}}  >
    


//            <Card.Content extra>
//             <Card.Header  style={{textAlign: "center", verticalAlign: 'top' }}> 
//             <h3  style={{color: cardColor}} >{habit.name.toUpperCase()}</h3>
            
           
//             {/* <Button id={habit.id} name={habit.name}   style={{ background: "#A8DADC", color: "#FFFFFF" }} stackable size='small'>
//             {habit.name ? `Edit Habit Name` : `Cancel`}
//             </Button>
//             <Button  style={{ background: "#264653", color: "#FFFFFF" }} >
//             Delete Habit 
//             </Button> */}
//             </Card.Header>


//         </Card.Content>

//         {/* <Card.Content extra>

//         </Card.Content> */}
//         </Card>


//     </>