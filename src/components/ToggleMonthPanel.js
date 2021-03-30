import * as React from 'react';
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date';
import { Button, Icon } from 'semantic-ui-react';
import { Segment, Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';




 const ToggleMonthPanel = () => {
    const { activeMonthProgress, loaded, setActiveMonth } = useContext(ProgressContext)
    const { habits, user, signUpSuccess } = useContext(UserContext)
    const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)
    const [month] = useState(new Date().getMonth() + 1)

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




    
    const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })
    

   
    return (

     

    

        <div style={{ textAlign: "center", display: "inline", width: '100%'}} >
         {/* <h2>month: {month}</h2>
        <h2>currentMonth: {currentMonth}</h2>
        <h2>month name: {monthName}</h2>
        <h2>created: {user.created}</h2> */}

        {currentMonth === user.created - 2  ? null : <Icon size="big" style={{ display: "inline"}} name='angle left' onClick={()=> handleBackWardClick()}/>}
         
         <h1 style={{ textAlign: "center", display: "inline", verticalAlign: 'middle'}} className="center" >   {monthName}   </h1>      
         {currentMonth === month + 1 ? null : <Icon size="big" style={{ display: "inline", verticalAlign: 'middle'}}  name='angle right' onClick={()=> handleForwardClick()}/>}
          





        </div>
    )
    
}

export default ToggleMonthPanel