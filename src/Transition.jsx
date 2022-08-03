import { textStyle, buttonStyle } from './dimensions';

const Transition = (props) => {
    
    const handleClick = ()=>{
        props.incrementTest(props.testNumber);
    }
    const text = <div style={textStyle}>
        <p>You will now see data about a new animal: a {props.animalName}.</p>
        <p>On each page, you will see information about how much food the {props.animalName} ate on a given day.
         In total you will see data for each of 48 consecutive days. 
        </p>
        <button style={buttonStyle} onClick={()=>handleClick()}>Next</button>
    </div>;
    return(text);


};

export default Transition;