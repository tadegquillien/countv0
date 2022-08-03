// this component controls the display of the food data on a given day.

import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { textStyle, buttonStyle } from './dimensions';
import { lists, listorder, colors } from './randomizedParameters';
import { shuffle } from './convenienceFunctions';

// the next page button. It appears after 750 milliseconds
const Button = (props)=>{
    const [isShown, setIsShown] = useState(false);
    const handleClick = ()=>{
        setIsShown(false);
        props.incrementTest(props.testNumber);
    };
    useEffect(() => {
        const timer = setTimeout(() => {
        setIsShown(true);
        }, 750);
        return () => clearTimeout(timer);
    }, [handleClick]);

    return(isShown ? <button style={buttonStyle} 
        onClick={()=>handleClick()}>Next</button> : "")
};

const TestDisplay = (props) => {

    const number = props.list[props.testNumber-1];
    
    const svgWidth = 400;
    const svgHeight = 400;
    const r = 25

    // generate the berries to be displayed onscreen
    const Circles = (props)=>{
        const circleBoolean = useRef(shuffle([0,1,2,3,4,5,6,7,8,9].map((i)=>{
            return(i < number ? 1 : 0);
        })));
        let circles = [0,1,2,3,4,5,6,7,8,9].map((i) => {
            let color = circleBoolean.current[i] ? colors[props.animalNumber] : "white";
            return (
              <circle
                 cx={(160*i+(r+10)+(.5-Math.random())*20) % svgWidth} 
                 cy = {30*i+(r+10)+(.5-Math.random())*20} r={25} fill={color}
              />
            )
          });
          return(circles)
    }
    
    return(<div style={textStyle}>
        <p>On day number {props.testNumber}, the {props.animalName} ate</p>
        <p> <b>{number}</b> berries.</p>
        
        <span>
      <svg width={svgWidth} height={svgHeight} id={"id"} >
        <Circles animalNumber={props.animalNumber}/>
       
      </svg>
    </span>
        <Button incrementTest={props.incrementTest}
        testNumber={props.testNumber}/>
        </div>)
};

export default TestDisplay;



