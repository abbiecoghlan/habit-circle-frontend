import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date';



 const Circle = () => {
    const [progressArray, setProgressArray] = useContext(ProgressContext)
    const { habits } = useContext(UserContext)


    const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)

    // const testRef = useRef(0)

    

    // const [progressArray, setProgressArray] = useState([])
    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)

    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)    
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    // const [daysOfMonth, setDaysofMonth] = useState(new Date(currentYear, currentMonth, 0).getDate())
    // const [daysArray, setDaysArray] = useState([0])

    // const [habits, setHabits] = useState([])




    useEffect(() => {
        fetch('http://localhost:3000/user_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            id: 2, 
            currentMonth: currentMonth
        })
        })
        .then(r => r.json())
        .then(data => {
            setProgressArray(data)
                })
                      
            
                    }
                    , [currentMonth])
            

                    

    useEffect(() => {
        const array = [10]
        while (array.length <= daysOfMonth){
            array.push(1)        
            }
            setDaysArray(array)

        
    }, [currentMonth])





    // const data = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    // const testData = []

    
    const height = 800
    const width = 800
    

    let pie = d3.pie()(daysArray)

    




    return (
        <>
       
        <div>
        <svg height={height} width={width} style={{ display: "block", margin: "auto" }}>
            <g transform={`translate(${width / 2},${height / 2}) rotate(245 0 0)`}>
                <DaySlice habits={habits}  pie={pie}/>
            </g>
        </svg> <div style={{ textAlign: "center"}} >
            <button  onClick={() => decrementMonth()} > Back </button>
            <button onClick={() => incrementMonth()} > Forward</button> 
        </div>
        </div>
        </>
    )
    
}

export default Circle