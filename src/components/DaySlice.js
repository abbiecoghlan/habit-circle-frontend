import * as React from 'react';
import * as d3 from "d3";




const DaySlice = props => {
    let { pie } = props 
    let outerRadius = 100 
    let innerRadius = outerRadius * .7
   


    let arc = d3
    .arc()
    .innerRadius(50)
    .outerRadius(100)
    
    const arc2 = d3
    .arc()
    .innerRadius(outerRadius)
    .outerRadius(outerRadius * 3)
    .padAngle(0)
    .cornerRadius(0);


    const arc3 = d3
    .arc()
    .innerRadius(outerRadius)
    .outerRadius(outerRadius * .5)
    .padAngle(0)
    .cornerRadius(0);

    const arc4 = d3
    .arc()
    .innerRadius(outerRadius)
    .outerRadius(outerRadius * 2.1)
    .padAngle(0)
    .cornerRadius(0);

    const arc5 = d3
    .arc()
    .innerRadius(outerRadius)
    .outerRadius(outerRadius * .75)
    .padAngle(0)
    .cornerRadius(0);

  
    const handleOneClick = (e) => {
        e.target.setAttribute("fill", "#E1B181")
    }

    const handleAnotherClick = (e) => {
        e.target.setAttribute("fill", "#2AEBB1")

    }

    const handleThirdClick = (e) => {
        e.target.setAttribute("fill", "#59A2F0")

    }

    const handleForthClick = (e) => {
        e.target.setAttribute("fill", "#C400FA")

    }

    

    

    

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length -1))

        return <><path id={index} onClick={()=> console.log(`you clicked habit one, day ${index + 1} of the month`)} d={arc(slice)} stroke={'black'} fill={sliceColor} />
             <path id={index} onClick={()=> console.log(`you clicked habit two, day ${index + 1} of the month`)} d={arc2(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleOneClick(e)}/>
             <path id={index} onClick={()=> console.log(`you clicked habit three, day ${index + 1} of the month`)} d={arc3(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleAnotherClick(e)} />
             <path id={index} onClick={()=> console.log(`you clicked habit four, day ${index + 1} of the month`)} d={arc4(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleThirdClick(e)}  />
             <path id={index} onClick={()=> console.log(`you clicked habit five, day ${index + 1} of the month`)} d={arc5(slice)} stroke={'black'} fill={'#FFFFFF'} onClick={(e)=> handleForthClick(e)} />
             </>
    })

}

export default DaySlice