import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'
import { useEffect, useState } from 'react'


 const Circle = () => {



    

    const [progressArray, setProgressArray] = useState([])
    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)    
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    const [daysOfMonth, setDaysofMonth] = useState(new Date(currentYear, currentMonth, 0).getDate())
    const [daysArray, setDaysArray] = useState([0])
    const [currentUser, setUser] = useState([])
    const [habits, setHabits] = useState([])




    useEffect(() => {
        fetch('http://localhost:3000/user_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            id: 2
        })
        })
        .then(r => r.json())
        .then(data => {
            setProgressArray(data)
            console.table(data)
            console.log(currentMonth, currentYear, daysOfMonth)
            const array = [10]
            while (array.length <= daysOfMonth){
                array.push(1)
                setDaysArray([...array])        
                }
                // debugger
                })
                
                
            
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: "thatsabbie",
                    password: "123456"
                    }
            })
            })
            .then(r => r.json())
            .then(data => {
                setHabits(data.user.habits)
                setUser(data.user)
                // const user = data.user
                // console.log(currentMonth, currentYear, daysOfMonth)
                const array = [10]
                while (array.length <= daysOfMonth){
                    array.push(1)
                    setDaysArray([...array])        
                    }
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
        
                <DaySlice habits={habits} progressArray={progressArray} pie={pie}/>
            </g>
        </svg> 
    )

}

export default Circle