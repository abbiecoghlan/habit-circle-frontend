import * as React from 'react';
import * as d3 from "d3";
import { useEffect, useState } from 'react'





const DaySlice = props => {
    let { pie, progressArray, habits } = props 
    // let outerRadius = 100 
    // let innerRadius = outerRadius * .7
   
    useEffect(() => {
        console.table(habits)
        }, [])
    


    // const totalRadius = 0
    
    // const arcs = habits.map((habit, index) => {
    //      d3
    //     .arc()
    //     .innerRadius(50)
    //     .outerRadius(75)
    //     })


  
    const secretArc = d3
    .arc()
    .innerRadius(25)
    .outerRadius(50)

    const arc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(75)
    
    const arc2 = d3
    .arc()
    .innerRadius(75)
    .outerRadius(100)
    .padAngle(0)
    .cornerRadius(0);


    const arc3 = d3
    .arc()
    .innerRadius(100)
    .outerRadius(125)
    .padAngle(0)
    .cornerRadius(0);

    const arc4 = d3
    .arc()
    .innerRadius(125)
    .outerRadius(150)
    .padAngle(0)
    .cornerRadius(0);

    const arc5 = d3
    .arc()
    .innerRadius(150)
    .outerRadius(175)
    .padAngle(0)
    .cornerRadius(0);

    const arc6 = d3
    .arc()
    .innerRadius(175)
    .outerRadius(200)
    .padAngle(0)
    .cornerRadius(0);

    const arc7 = d3
    .arc()
    .innerRadius(200)
    .outerRadius(225)
    .padAngle(0)
    .cornerRadius(0);

    
    const arcArray =[secretArc, arc, arc2, arc3, arc4, arc5, arc6, arc7]

    //add code to deal with diff number of habits 
    const habitNames = habits.map(habit => habit.name.toUpperCase())
    console.table(habitNames)

    

    const secretRingClick = (e) => {
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        console.log(`target id is: ${e.target.id}`)
    }


    const habitRingOneClick = (e) => {
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
        if (e.target.attributes.fill.value === "#FFFFFF") {
            e.target.setAttribute("fill", "#A8DADC")
        }
        else {
            e.target.setAttribute("fill", "#FFFFFF")
        }
        console.log(e.target.id)
    }

    const habitRingTwoClick = (e) => {
        const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
        const habit = parseInt(e.target.id.slice(-1))
        console.log(`habit id is: ${habit}`)
        console.log(`day id is: ${day}`)
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
    }

    // const captureAllClick = (e) => {

    //     const day = parseInt(e.target.id.slice(3, e.target.id.length)) 
    //     const habit = parseInt(e.target.id.slice(-1))
    //     console.log(`habit id is: ${habit}`)
    //     console.log(`day id is: ${day}`)
    //     debugger

    // }


//NEEDS TO BE MOVED TO A CHILD COMPONENT 
    const setColors = () => {
        const paths = document.querySelectorAll("path")
        paths.forEach((path) => {
            const day = parseInt(path.id.slice(3, path.id.length)) 
            const habit = parseInt(path.id.slice(-1))
            const color = path.data-color
            if (day === 0 && habit >0)
            path.setAttribute("fill", {color})
        
            
        })
    }




    // const handleseventhClick = (e) => {
    //     e.target.setAttribute("fill", "#C400FA")

    // }
    


    // let daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28, 29, 30, 31]
    

    // let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

    const paths = pie.map((slice, index) => {

        // habits.map((habit) => {
           
        return <>
            <path className="secretPath" id={`day${index.toString()}habit0`} key={`day${index.toString()}habit0`}  d={secretArc(slice)} stroke={'white'} fill={"#FFFFFF"} data-color={"#FFFFFF"} onClick={(e)=> secretRingClick(e)}/>
            <path className="habbitOne" id={`day${index.toString()}habit1`} key={`day${index.toString()}habit1`}  d={arc(slice)} stroke={'black'} fill={"#FFFFFF"} data-color={"#e76f51"} onClick={(e)=> habitRingOneClick(e)}/>
            <path className="habbitTwo" id={`day${index.toString()}habit2`} key={`day${index.toString()}habit2`} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingTwoClick(e)}/>
            <path className="habbitThree" id={`day${index.toString()}habit3`} key={`day${index.toString()}habit3`}  d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingThreeClick(e)} />     
             <path className="habbitFour" id={`day${index.toString()}habit4`} key={`day${index.toString()}habit4`}   d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingFourClick(e)}  />       
             <path className="habbitFive" id={`day${index.toString()}habit5`} key={`day${index.toString()}habit5`} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"}  onClick={(e)=> habitRingFiveClick(e)} />
             <path className="habitSix" id={`day${index.toString()}habit6`} key={`day${index.toString()}habit6`} d={arc6(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> HabitRingSixClick(e)} />
             <path className= "habitSeven" id={`day${index.toString()}habit7`} key={`day${index.toString()}habit7`} d={arc7(slice)} stroke={'black'} fill={'#FFFFFF'} data-color={"#e76f51"} onClick={(e)=> habitRingSevenClick(e)} />
             </>

        // })
        })

        // const habitNames = habits.map((habit) => {
        //     return habit.name
        // })


        // const floss = habits[0].name



        return ( <>


                {paths}
                <text>
                    <textPath textLength="65" startOffset="02" href="#day0habit0">  {habitNames[0]} </textPath>
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
                    <textPath fill="black" textLength="110" startOffset="15%" side="right" x="40" href="#day0habit6"> {habitNames[6]} </textPath>
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
