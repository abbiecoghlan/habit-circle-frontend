import React, { useEffect } from 'react';
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { Progress, Card } from 'semantic-ui-react';

import { UserContext } from '../context/user'
import { DateContext } from '../context/date'



const HabitMonthStatCard = ({habit, cardColor, totalDays, totalCompleted}) => {

    const { currentMonth } = useContext(DateContext)




  return (
    <>
      <Card inverted style={{color: cardColor}} >
        <Card.Content extra>
          <Card.Header style={{ backgroundcolor: cardColor, textAlign: "center", verticalAlign: 'top' }}>    
            <h3 style={{color: cardColor}} >{habit.name}</h3> 
          </Card.Header>
            <Progress 
            percent={`${Math.round(totalCompleted/totalDays * 100)}`}  
            progress='percent'  
            color='grey'> 
              {`${totalCompleted}/${totalDays} days completed`}
            </Progress>
          </Card.Content>
      </Card>
    </> 
  );
}

export default HabitMonthStatCard;