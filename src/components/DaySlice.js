import * as React from 'react';
import * as d3 from "d3";

// const Day = props => {
//     let { pie } = props;
  
//     let arc = d3
//       .arc()
//       .innerRadius(0)
//       .outerRadius(100);
  
//     let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358");
  
//     return pie.map((slice, index) => {
//       let sliceColor = interpolate(index / (pie.length - 1));
  
//       return <path d={arc(slice)} fill={sliceColor} />;
//     });
//   }


const DaySlice = props => {
    let { pie } = props 

    let arc = d3
    .arc()
    .innerRadius(30)
    .outerRadius(300)
    

    let interpolate = d3.interpolateRgb("#eaaf79", "#bc3358")

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length -1))

        return <path id={index} onClick={()=> console.log(`you clicked ${index}`)} d={arc(slice)} stroke={'black'} fill={sliceColor} />
    })

}

export default DaySlice