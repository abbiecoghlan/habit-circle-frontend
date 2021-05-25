import React, { useEffect } from 'react';
import { useContext } from 'react'
import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
import { useHistory } from "react-router-dom"

import Logo from "./Logo"



const HomeContainer = () => {
    const { loaded, submitted, activeMonthProgress, allProgress, activeMonthHabits } = useContext(ProgressContext)
    const { user } = useContext(UserContext)
    const { currentMonth } = useContext(DateContext)
     
    const history = useHistory()

    useEffect(() => {
     
        if (loaded && !submitted) {
            history.push(`/tracker/${user.username}/month`)
        }
        
    }, [loaded])

    




    return (
        <div style={{ display: "block", position: "relative", padding: "30px"}}  class="ui center aligned middle aligned grid" >
            <h1 style={{color:"#264653", position: "relative", top:"0", left:"0" }} > HABIT CIRCLE </h1>
                {!loaded ?
                    <div style={{ display: "block", position: "relative"}}  class="ui center aligned middle aligned grid" >
                        <Logo></Logo>
                    </div> : 
                    <Logo></Logo> }
        </div>
    );
}

export default HomeContainer;