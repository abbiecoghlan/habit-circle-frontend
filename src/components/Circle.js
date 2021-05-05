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
import LoadWheel from './LoadWheel';
import Logo from './Logo'




const Circle = () => {
    const { activeMonthProgress, allProgress, loaded, setActiveMonth } = useContext(ProgressContext)
    const { habits, user, signUpSuccess } = useContext(UserContext)
    const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)
    const [month] = useState(new Date().getMonth() + 1)

    useEffect(() => {      
        if (loaded) {
            setActiveMonth(currentMonth)
        }     
    }, [allProgress, currentMonth])
        
    useEffect(() => {
        const array = [10]
        while (array.length <= daysOfMonth){
            array.push(1)        
            }
            setDaysArray(array)        
        }, [currentMonth])

    
    const height = 800
    const width = 800
    
    let pie = d3.pie()(daysArray)

    
    // const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })
    
       

    return (
        <>
            {user && loaded && activeMonthProgress.length < 1 ? !signUpSuccess && currentMonth !== month ? <>  <div><Redirect to={`/tracker/${user.username}/create`} /></div>
        </> : <Logo></Logo>
        :        
        <div>
        <div style={{ textAlign: "center"}} >
        <svg id="circle" height={height} width={width} style={{ display: "block", margin: "auto" }}>
       
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