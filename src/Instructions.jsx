//this component displays instructions

import { useRef, useState } from 'react';

import './Instructions.css'
import { textStyle, buttonStyle } from './dimensions';
import Data from './Data';





const Instructions = (props) => {
    //keeps track of the current page
    const [trialNumber, setTrialNumber] = useState(0);

    //update the page number
    const incrementTrial = () => {
        setTrialNumber((a) => a + 1);
    }

    //the dimensions for some of the text
    const localTextStyle = {
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        alignItems: "center",
        textAlign: "left",
        //minHeight: "100vh",
        marginLeft: "10vw",
        marginRight: "10vw",
        fontSize: "20px",
    }

    //the props we will pass on to each page
    const tutorialProps = {
        setCurrentPhase: props.setCurrentPhase,
        incrementTrial: incrementTrial,
        localTextStyle: localTextStyle
    };



    //the list of pages
    const instructionTrials = [<Intro {...tutorialProps} />,
    <IntroTwo {...tutorialProps} />,
    <IntroThree {...tutorialProps} />
];
 

    //display the current page
    return (
        instructionTrials[trialNumber]
    )

}

//the first page
const Intro = (props) => {
    return (
        <span style={textStyle}
        >
            <p style={{ color: "red" }}>(Please do not refresh the page during the study -- you would be unable to complete the experiment)</p>
            <br></br>
            <p>In this study, we will ask you to imagine that you are a scientist visiting an alien planet.</p>
<p>You are studying the dietary habits of the animals living on that planet.
    Specifically, you are interested in the amount of food the animals consume in a day.</p>


            <button style={buttonStyle} onClick={() => props.incrementTrial()}>click to continue</button>
            <br></br>
        </span>
    )
}


//the second page
const IntroTwo = (props) => {
    
    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton = 
        <button style={buttonStyle} onClick={() => props.incrementTrial()}>click to continue</button>;


    //display the page
    return (

        <div className="page"
        style={textStyle}
        >
            <div //className="text" 
            style={props.localTextStyle}
            >
                <p>You decide to observe several animals. For each animal, you collect data 
                    about that animal's food consumption over a large number of days. </p>

                <p>For each animal, you will see the amount of food that the animal ate for each of 48 days. </p>
                <p>On each page, you will see data about what the animal ate on a given day. </p>
                <p>Then we will ask you some simple questions about the animal.</p>
                {nextPageButton}
            </div>

        </div>

    )

}

//the third page
const IntroThree = (props) => {
    
    //when the participant clicks on 'draw', a button appears which allows him
    //to go to the next page
    const nextPageButton = 
        <button style={buttonStyle} onClick={() => props.setCurrentPhase("test")}>click to start the task</button>;

    //display the page
    return (

        <div className="page"
        //style={textStyle}
        >
            <div //className="text" 
            style={props.localTextStyle}
            >
                <p>You will see data about three animals in total.</p>
                <p>Each animal belongs to a different species.</p>
                <p>Please pay close attention to the data you observe!</p>
                {nextPageButton}
            </div>

        </div>




    )

}





export default Instructions;