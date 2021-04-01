import * as React from 'react';
import * as d3 from "d3";
import { useContext } from 'react'
// import { ProgressContext } from '../context/progress'
import { UserContext } from '../context/user'
// import { DateContext } from '../context/date';
import { ProgressContext } from '../context/progress'



const TextPaths = props => {

    const { activeMonthHabits } = useContext(ProgressContext)
    const habitNames = activeMonthHabits.map((habit) => habit.toUpperCase())

        return ( <>
            <text>
                    <textPath  textLength="65" startOffset="2%" href="#day0habit0">  {habitNames[0]} </textPath>
                </text>
                <text>
                    <textPath textLength="100" startOffset="04" href="#day0habit1"> {habitNames[1]} </textPath>
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
                    <textPath startOffset="9%" href="#day1number"> 
                        <tspan startOffset="" dy="-5" fill="#264653" > 1 </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day2number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 2
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day3number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 3
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day4number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 4
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day5number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 5
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day6number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 6
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day7number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 7
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day8number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 8
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day9number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 9
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day10number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 10
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day11number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 11
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day12number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 12
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day13number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 13
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day14number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 14
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day15number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 15
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day16number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 16
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day17number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 17
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day18number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 18
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day19number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 19
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day20number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 20
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day21number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 21
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day22number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 22
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day23number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 23
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day24number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 24
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day25number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 25
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day26number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 26
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day27number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 27
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day28number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 28
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day29number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 29
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day30number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 30
                    </tspan>   
                    </textPath>
            </text> 
            <text>
                    <textPath startOffset="9%" href="#day31number"> 
                    <tspan startOffset="" dy="-5" fill="#264653" > 31
                    </tspan>   
                    </textPath>
            </text> 
            
             </>
        )



}


export default TextPaths