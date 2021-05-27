import * as React from 'react';
import { useEffect, useState, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date';
import { Icon } from 'semantic-ui-react';




 const ToggleMonthPanel = () => {
    const { loaded, setActiveMonth } = useContext(ProgressContext)
    const { user } = useContext(UserContext)
    const { currentMonth, currentYear, daysOfMonth, daysArray, setDaysArray, incrementMonth, decrementMonth} = useContext(DateContext)
    const [month] = useState(new Date().getMonth() + 1)

    useEffect(() => {       
        if (loaded) {
            setActiveMonth(currentMonth)
        }
    }, [currentMonth])

        
    useEffect(() => {
        //sets an array for the circle to use to render based on the current month 
        const array = [10]
        while (array.length <= daysOfMonth){
            array.push(1)        
        }
        setDaysArray(array)        
    }, [currentMonth])


    const handleForwardClick = () => {
        incrementMonth()   
    }

    const handleBackWardClick = () => {
        decrementMonth()      
    }
    
    const monthName = new Date(currentYear, currentMonth - 1, 1).toLocaleString('default', { month: 'long' })
    
   
    return (
        <div style={{textAlign: "center", display: "inline", width: '100%', marginTop:"30px"}} >
            {currentMonth === user.created  ? null : <Icon size="big" style={{ color:"#264653", display: "inline"}} name='angle left' onClick={()=> handleBackWardClick()}/>}
            <h1 style={{color:"#264653", textAlign: "center", display: "inline", verticalAlign: 'middle'}} className="center" >   {monthName}   </h1>      
            {currentMonth === month ? null : <Icon size="big" style={{ color:"#264653", display: "inline", verticalAlign: 'middle'}}  name='angle right' onClick={()=> handleForwardClick()}/>}
        </div>
    )    
}

export default ToggleMonthPanel