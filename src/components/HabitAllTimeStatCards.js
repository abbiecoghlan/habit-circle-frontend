import React, { useContext } from 'react';
import { Segment, Header } from 'semantic-ui-react'
import { UserContext } from '../context/user'
import { ProgressContext } from '../context/progress'
import { DateContext } from '../context/date'



const HabitAllTimeStatCards = (props) => {

    const {user} = useContext(UserContext)
    const { currentYear } = useContext(DateContext)


   
    return ( 
        <>
        <Header as='h2'  style={{
            color:"#264653"
          }} textAlign='center'>
              All Time Habit Completion Rates
           </Header>


           <Segment inverted style={{
          color: "#A8DADC", background: "#264653", width: '100%', textAlign: "center"
        }}stacked>
                       <> 

                       
                </>
            <h4>You've been tracking your habits since {new Date(currentYear, user.created - 3, 1).toLocaleString('default', { month: 'long' })}, 2021.</h4>

              
           </Segment>


      </>
    



    )

    
}



export default HabitAllTimeStatCards