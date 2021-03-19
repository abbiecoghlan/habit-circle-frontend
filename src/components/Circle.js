import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'
import { useEffect, useState } from 'react'


 const Circle = () => {



    

    const [habits, sethabits] = useState([])
    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)    
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [daysOfMonth, setDaysofMonth] = useState(new Date(currentYear, currentMonth, 0).getDate())
    const [daysArray, setDaysArray] = useState([0])




    useEffect(() => {
        fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            user: {
            username: "abigail",
            password: "123456"
            }
        })
        })
        .then(r => r.json())
        .then(data => {
            sethabits(data.user.habits)

            const progresses = data.user.progresses
            console.log(data)
            console.log(currentMonth, currentYear, daysOfMonth)
            const array = [10]
            while (array.length <= daysOfMonth){
                array.push(1)
                setDaysArray([...array])        
                }
                // debugger
                }) 



        }, [])



    // const data = [10, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

    // const testData = []

    const height = 700
    const width = 700

    let pie = d3.pie()(daysArray)

    return (
        <svg height={height} width={width}>
            <g transform={`translate(${width / 2},${height / 2}) rotate(245 0 0)`}>
        
                <DaySlice habits={habits} pie={pie}/>
            </g>
        </svg> 
    )

}

export default Circle