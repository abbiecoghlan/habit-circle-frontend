import * as React from 'react';
import * as d3 from "d3";
import { useEffect, useState, useRef, useContext } from 'react'
import { ProgressContext } from '../context/progress'
import HabitRingPath from './HabitRingPath'
import { UserContext } from '../context/user'
import { DateContext } from '../context/date'
 



const DaySlice = props => {
   
    const { habits } = useContext(UserContext)
    const [progressArray] = useContext(ProgressContext)
    const { currentMonth } = useContext(DateContext)

    // const learningHooks = useContext(ProgressContext)
    // console.log("i am", learningHooks)

    let { pie } = props 
    // let outerRadius = 100 
    // let innerRadius = outerRadius * .7
   
    // useEffect(() => {
    //     console.table(habits)
    //     }, [])
    
    


    // const totalRadius = 0
    
    const habitArray = habits.map((habit) => habit.name)

    const radiusStart = 50
    const ringDistance = 34.7

    
  
    const secretArc = d3
    .arc()
    .innerRadius(25)
    .outerRadius(50)

    const arc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(radiusStart + ringDistance)
    
    const arc2 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance))
    .outerRadius(radiusStart + (ringDistance * 2))
    .padAngle(0)
    .cornerRadius(0);


    const arc3 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 2))
    .outerRadius(radiusStart + (ringDistance * 3))
    .padAngle(0)
    .cornerRadius(0);

    const arc4 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 3))
    .outerRadius(radiusStart + (ringDistance * 4))
    .padAngle(0)
    .cornerRadius(0);

    const arc5 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 4))
    .outerRadius(radiusStart + (ringDistance * 5))
    .padAngle(0)
    .cornerRadius(0);

    const arc6 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 5))
    .outerRadius(radiusStart + (ringDistance * 6))
    .padAngle(0)
    .cornerRadius(0);

    const arc7 = d3
    .arc()
    .innerRadius(radiusStart + (ringDistance * 6))
    .outerRadius(radiusStart + (ringDistance * 7))
    .padAngle(0)
    .cornerRadius(0);

    
    const arcArray =[secretArc, arc, arc2, arc3, arc4, arc5, arc6, arc7]



    //add code to deal with diff number of habits 
    const habitNames = habits.map(habit => {
        return habit.name.toUpperCase()
    })
    // console.table(habitNames)

    useEffect(() => {

     setColors()    
    }, [currentMonth, progressArray])


    // const findProgress = (day, )

    const setColors = () => {
        const paths = document.querySelectorAll("path")
        paths.forEach((path) => {
            const day = parseInt(path.id.slice(3, path.id.length)) 
            const habitNum = parseInt(path.id.slice(-1))

            const habitName = path.dataset.name.toUpperCase()
            
            const prog = progressArray.filter((progress) => {
                return progress.day.day === day && progress.habit.name.toUpperCase() === habitName
            })
            if (prog[0]) {
            if (prog[0].completed){ 
                if (habitNum == 1){
                    path.setAttribute("fill", "#A8DADC")
                } else if (habitNum == 2) {
                    path.setAttribute("fill", "#F18C8E")
                } else if (habitNum == 3) {
                    path.setAttribute("fill", "#e76f51")
                } else if (habitNum == 4) {
                    path.setAttribute("fill", "#f4a261")
                } else if (habitNum == 5) {
                    path.setAttribute("fill", "#e9c46a")
                } else if (habitNum == 6) {
                    path.setAttribute("fill", "#2a9d8f")
                }
                else if (habitNum == 7) {
                    path.setAttribute("fill", "#264653")
                } else {
                    path.setAttribute("fill", "#FFFFFF")
                }
    
            }
        } else {
            path.setAttribute("fill", "#FFFFFF")
        }
        })
    }


    const findStatus = (dayNum, habitName, habitNum, e) => {
        console.log(dayNum)
        console.log(habitName)
        const prog = progressArray.filter((progress) => {
            return progress.day.day === dayNum && progress.habit.name.toUpperCase() === habitName
        })

        if (prog[0].completed){ 
            if (habitNum == 1){
                e.target.setAttribute("fill", "#e76f51")
            } else if (habitNum == 2) {
                e.target.setAttribute("fill", "#e76f51")
            } else if (habitNum == 3) {
                e.target.setAttribute("fill", "#e76f51")
            } else if (habitNum == 4) {
                e.target.setAttribute("fill", "#e76f51")
            } else if (habitNum == 5) {
                e.target.setAttribute("fill", "#e76f51")
            } else if (habitNum == 6) {
                e.target.setAttribute("fill", "#e76f51")
            }
            else if (habitNum == 7) {
                e.target.setAttribute("fill", "#e76f51")
            }

        }

    }

    


    // const setComletedStatus = (dayNum, habitName, e) => {
    //     console.log(dayNum)
    //     console.log(habitName)
    //     const prog = progressArray.filter((progress) => {
    //         return progress.day.day === dayNum && progress.habit.name.toUpperCase() === habitName
    //     })
    //     debugger
    // }


    const secretRingClick = (e) => {
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit name is: NONE`)
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`target id is: ${e.target.id}`)
    }

    // const habitOneRef = useRef()


    const habitRingOneClick = (e) => {
        // const path = habitOneRef.current
        // console.log("id of path:", path.id)


        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#A8DADC")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        console.log(e.target.id)
        const name = e.target.dataset.name.toUpperCase()
        findStatus(day, name, habit, e)
    }

    const habitRingTwoClick = (e) => {
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#F18C8E")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        console.log(e.target.id)
    }

    const habitRingThreeClick = (e) => {
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#e76f51")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit name is: ${e.target.dataset.name}`)
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(e.target.id)
    }

    const habitRingFourClick = (e) => {
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#f4a261")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        console.log(e.target.id)
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
    }

    const habitRingFiveClick = (e) => {
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#e9c46a")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        console.log(e.target.id)
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
    }

    const HabitRingSixClick = (e) => {
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#2a9d8f")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }        
        console.log(e.target.id)
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
    }

    const habitRingSevenClick = (e) => {
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#264653")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }        

        console.log(e.target.id)
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`habit name is: ${e.target.dataset.name}`)
    }

    // const captureAllClick = (e) => {

    //     const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
    //     const habit = parseInt(e.target.id.slice(-1))
    //     console.log(`habit id is: ${habit}`)
    //     console.log(`day id is: ${day}`)
    //     debugger

    // }


//NEEDS TO BE MOVED TO A CHILD COMPONENT 
    // const setColors = () => {
    //     debugger
    //     const paths = document.querySelectorAll("path")
    //     paths.forEach((path) => {
    //         const day = parseInt(path.id.slice(3, path.id.length)) 
    //         const habit = parseInt(path.id.slice(-1))
    //         const color = path.data-color
    //         if (day === 0 && habit >0)
    //         path.setAttribute("fill", {color})                    
    //     })
    // }




    // const handleseventhClick = (e) => {
    //     e.target.setAttribute("fill", "#C400FA")

    // }
    


    // let daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 29, 30, 31]
    

    // let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

//    const habitArray = habits.map((habit) => habit.name)

//    const habitArray = habits.map((habit) => {
//     return habit.name
//     debugger 
//  })



    const paths = pie.map((slice, index) => {
        
        
           
        return <>
            <path className="secretPath" data-name={"secret-path"} id={`day${index.toString()}habit0`} key={`day${index.toString()}habit0`}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} data-color={"#FFFFFF"} onClick={(e)=> secretRingClick(e)} />
            <path className="habbitOne" data-name={habitNames[0]} id={`day${index.toString()}habit1`} key={`day${index.toString()}habit1`}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} data-color={"#e76f51"} onClick={(e)=> habitRingOneClick(e)}/>
            <path className="habbitTwo" data-name={habitNames[1]} id={`day${index.toString()}habit2`} key={`day${index.toString()}habit2`} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingTwoClick(e)}/>
            <path className="habbitThree" data-name={habitNames[2]} id={`day${index.toString()}habit3`} key={`day${index.toString()}habit3`}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingThreeClick(e)} />     
             <path className="habbitFour" data-name={habitNames[3]} id={`day${index.toString()}habit4`} key={`day${index.toString()}habit4`}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingFourClick(e)}  />       
             <path className="habbitFive" data-name={habitNames[4]} id={`day${index.toString()}habit5`} key={`day${index.toString()}habit5`} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"}  onClick={(e)=> habitRingFiveClick(e)} />
             <path className="habitSix" data-name={habitNames[5]} id={`day${index.toString()}habit6`} key={`day${index.toString()}habit6`} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> HabitRingSixClick(e)} />
             <path className= "habitSeven" data-name={habitNames[6]} id={`day${index.toString()}habit7`} key={`day${index.toString()}habit7`} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingSevenClick(e)} />
             </>

        })
        




        return ( <>

                {/* <HabitRingPath pie={pie}></HabitRingPath> */}


                {paths}
                <text>
                    <textPath  textLength="65" startOffset="02" href="#day0habit0">  {habitNames[0]} </textPath>
                </text>
                <text>
                    <textPath textLength="100" startOffset="03" href="#day0habit1"> {habitNames[1]} </textPath>
                </text>
                <text>
                    <textPath textLength="120" startOffset="5%" side="right" x="40" href="#day0habit2"> {habitNames[2]} </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="9%" side="right" x="40" href="#day0habit3"> {habitNames[3]} </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="11%" side="right" x="40" href="#day0habit4"> {habitNames[4]} </textPath>
                </text>
                <text>
                    <textPath textLength="110" startOffset="13%" side="right" x="40" href="#day0habit5"> {habitNames[5]} </textPath>
                </text>       
                <text>
                    <textPath textLength="110" startOffset="15%" side="right" x="40" href="#day0habit6"> {habitNames[6]} </textPath>
                </text>
    

             <text>
                    <textPath startOffset="9%" href="#day1habit7"> 
                        <tspan startOffset="" dy="-5" fill="#264653" > 1 </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day2habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 2
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day3habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 3
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day4habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 4
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day5habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 5
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day6habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 6
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day7habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 7
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day8habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 8
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day9habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 9
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day10habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 10
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day11habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 11
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day12habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 12
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day13habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 13
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day14habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 14
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day15habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 15
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day16habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 16
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day17habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 17
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day18habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 18
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day19habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 19
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day20habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 20
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day21habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 21
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day22habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 22
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day23habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 23
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day24habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 24
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day25habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 25
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day26habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 26
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day27habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 27
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day28habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 28
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day29habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 29
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day30habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 30
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day31habit7"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 31
                    </tspan>   
                    </textPath>
            </text> 
            
             </>
)


 

}





export default DaySlice
