
import { useState } from 'react';
import { listorder, actuals } from "./randomizedParameters";
import { textStyle, buttonStyle } from './dimensions';
import { sum } from './convenienceFunctions';
import './Question.css';
import Data from "./Data";


const Question = (props) => {
    
    // the actual food amount eaten by the creature on the current day
    const actualNumber = actuals[props.animalNumber];
    // this array will store the slider values
    const [ response, setResponse ] = useState([...Array(10)].fill(100/10));
    const [ clicked, setClicked ] = useState([...Array(10)].fill(0));

    const buttontext = props.animalNumber < 2 ? "click to go to the next animal" : "click to go to the next phase";
    const nextButton = sum(clicked) > (response.length-1) ? <button style={buttonStyle} onClick={()=>handleClick()}>{buttontext}</button> : "";


    // submit the answers and go to the next screen
    const handleClick = ()=>{
        Data.responses.push({
            "animalName": props.animalName,
            "ratings": response,
            "actualAmount": actualNumber,
            "distribution": listorder[props.animalNumber],
            "trainingSequence": props.list
        })
        console.log(Data);
        props.setAnimalNumber((i)=>i+1);
        props.setTestNumber(0);
    };

    // make the sliders
    const sliders = <div class="rotate">{[...Array(10).keys()].map((i)=>{
        return(<div>
            {i+1}<span> berries</span>{i===9 ? <span>&nbsp;</span> : <span> &nbsp; </span>}
            <input onChange = {(e)=>handleSlider(e,i)} onMouseUp={()=>normalize(i)} 
            type="range" min="1" max="100" //style={{width:"30vw"}} 
            value={response[i]} className="slider"  id={i}/>
        </div>
            
        )
    })}</div>

    const updateClicked = (id) => {
        const newCs = [...Array(clicked.length).keys()].map((i)=>{
                return(
                    id===i ? 1 : clicked[i]
                )
            });
        setClicked(newCs)
    }
    // when the user moves the slider, adjust the slider value
    const handleSlider = (e,id)=>{
        const proposal = [...Array(response.length).keys()].map((i)=>{
            return(
                i == id ? e.target.valueAsNumber : response[i]
            )
        })
        updateClicked(id);
        setResponse(proposal);

    };

    // normalize so that slider values sum to 100
    const normalize = (id)=>{
        // this function creates a vector that will help us compute
        // the sum of the values of all other sliders
        // const filter = (vector, index)=>{
        //     return([...Array(vector.length).keys()].map((i)=>{
        //         return(i === index ? 0 : vector[i])
        //     }))
        // };
        // // adjust slider values. 
        // const newRs = [...Array(response.length).keys()].map((i)=>{
        //     return(
        //         id===i ? response[i] : (response[i])/(sum(filter(response,id))+1)*(100-response[id])
        //     )
        // });
        // console.log(sum(newRs));
        // console.log(newRs);
        // setResponse(newRs);
    }

    const text = <div>
        <p>Today you saw the {props.animalName} eat <b>{actualNumber}</b> berries.</p>
        <p>If the {props.animalName} had eaten some other number of berries today, how many berries would it have eaten?</p>
        <p>Please use the slider next to each number to indicate how much you agree with the statement
            that the {props.animalName} would have eaten that number of berries.
        </p>
        

    <div class="slidecontainer">

        {sliders}
       
   </div>
    </div>
    return(<div style={textStyle}>
        {text}<br></br><br></br>
        {nextButton}
    </div>)
  }

  export default Question;