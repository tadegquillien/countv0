//these elements are randomly generated at the start of the experiment
//after being generated, they keep the same value throughout the experiment

import { shuffle } from './convenienceFunctions';

// the possible amounts of food a creature can eat in a day
const amounts = [1,2,3,4,5,6,7,8,9,10];

// the actual amounts observed
export const actuals = shuffle([2,5,8]);

// the distributions of observations shown to participants
const obs_low = [13, 11, 8, 6, 4, 3, 2, 1, 0, 0];
const obs_mid = [0, 2, 5, 8, 9, 9, 8, 5, 2, 0];
const obs_high = [0, 0, 1, 2, 3, 4, 6, 8, 11, 13];

// create lists of observations

const list_low = shuffle(amounts.map((i)=>{
    return(Array(obs_low[i-1]).fill(i))
}).flat());

const list_mid = shuffle(amounts.map((i)=>{
    return(Array(obs_mid[i-1]).fill(i))
}).flat());

const list_high = shuffle(amounts.map((i)=>{
    return(Array(obs_high[i-1]).fill(i))
}).flat());

export const lists = {"low": list_low,
"mid": list_mid,
"high": list_high};

export const listorder = shuffle(["low", "mid", "high"]);

export const animalNames = shuffle(["zorba", "yorgi", "wug"]);

export const colors = shuffle(["red", "blue", "green"]);

console.log(list_low);
console.log(list_mid);
console.log(list_high);









