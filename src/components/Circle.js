import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date';
import { Button, Icon } from 'semantic-ui-react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import HabitForm from './HabitForm';
import NewMonthContainer from './NewMonthContainer';



 const Circle = () => {
    const { activeMonthProgress, loaded, setActiveMonth } = useContext(ProgressContext)
    const { habits, user } = useContext(UserContext)
    const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)


    useEffect(() => {
        if (user){
            console.log("circle use effect")
            }
        if (loaded) {
            setActiveMonth(currentMonth)
            }   
        }, [currentMonth])

    const handleForwardClick = () => {
        incrementMonth()   
        }

    const handleBackWardClick = () => {
        decrementMonth()      
        }

        
    useEffect(() => {
        const array = [10]
        while (array.length <= daysOfMonth){
            array.push(1)        
            }
            setDaysArray(array)        
        }, [currentMonth])



    
    const height = 750
    const width = 800
    

    let pie = d3.pie()(daysArray)

    
    const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })
    
       
   
    return (
        <>
        {user && loaded && activeMonthProgress.length < 1? <>         <h1 className="center" ><Icon name='angle left' onClick={()=> handleBackWardClick()}/>{monthName}       <Icon name='angle right' onClick={()=> handleForwardClick()}/></h1>  <div><NewMonthContainer/></div>
        </>
        :        
        <div>
        <div style={{ textAlign: "center"}} >
        <h1 className="center" ><Icon name='angle left' onClick={()=> handleBackWardClick()}/>{monthName}       <Icon name='angle right' onClick={()=> handleForwardClick()}/></h1> 
        <svg height={height} width={width} style={{ display: "block", margin: "auto" }}>
            <g transform={`translate(${width / 2},${height / 2}) rotate(245 0 0)`}>
                <DaySlice pie={pie}/>
            </g>
        </svg> 

        </div>
        </div>}
        </>
    )
    
}

export default Circle