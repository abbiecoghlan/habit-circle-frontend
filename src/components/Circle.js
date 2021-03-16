import * as React from 'react';
import * as d3 from "d3";
import DaySlice from './DaySlice'

 const Circle = () => {
    const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const height = 700
    const width = 700

    let pie = d3.pie()(data)

    return (
        <svg height={height} width={width}>
            <g transform={`translate(${width / 2},${height / 2})`}>
                <DaySlice pie={pie} />
            </g>
        </svg> 
    )

}

export default Circle