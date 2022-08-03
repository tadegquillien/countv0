// this component displays the food data and asks the counterfactual question
// for a given animal

import { useState } from 'react';
import { listorder, lists } from "./randomizedParameters";

import Transition from './Transition';
import TestDisplay from './TestDisplay';
import Question from './Question';



const TestAnimal = (props) => {

  //keep track of the current trial
  const [testNumber, setTestNumber] = useState(0);
  //increment the trial number
  const incrementTest = (integer) => setTestNumber(integer + 1);

  // the animal name and the test ids
  const animalName = props.animalName;
  const test_ids = Array.from(Array(lists.low.length).keys());

  // select the relevant distribution
  const list = listorder[props.animalNumber] === "low" ? lists.low :
  listorder[props.animalNumber] === "mid" ? lists.mid :
  listorder[props.animalNumber] === "high" ? lists.high: NaN;
  
  // create the test trials 
  var tests = test_ids.map((i) => {
    return(
        <TestDisplay 
        list={list}
        animalName = {animalName} incrementTest={incrementTest}
        animalNumber = {props.animalNumber} testNumber={testNumber}/>
    )
  })

  // add a transition screen
  tests.unshift(<Transition animalName={animalName} testNumber={testNumber}
  incrementTest={incrementTest}/>);

  tests.push(<Question list={list} setAnimalNumber={props.setAnimalNumber}
    animalNumber={props.animalNumber} animalName={props.animalName}
  setTestNumber={setTestNumber}/>);

  // cycle through trials
  return (tests[testNumber])

};

export default TestAnimal;