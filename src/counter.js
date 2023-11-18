import React from 'react';
import './App.css';
import { useState,useEffect } from 'react';
import Love from './love.png'
import Sad from './sad.png'
import Angry from './angry.png'
import Haha from './haha.png'

function HookControlledButtonState()
{ 
    const increaseCounter=() =>
    {
    setCounter(count + 1)
    
    }
    const decreaseCounter=()=>
    {
        setCounter(count-1)
    }
    const [count, setCounter] = useState(0);
    return (
    <div className="App-header">
    <form>
    <h1>Click Counts are {count}</h1>
    <div class='counter-btn'>
    <button type= "button" onClick={increaseCounter}>Increase + </button>
    <button type= "button" onClick={decreaseCounter}>Decrease - </button>
    </div>
    
    </form>
    </div>
    );
   }

function EmojeeCounter(props){
console.log("pic is ",props.pic)
const [pic, setPic]=useState(Love)
const [count,setCount]=useState(0)
useEffect(()=>{
if (props.pic==="love")
 setPic(Love)
else if (props.pic==="angry")
setPic(Angry)
else if (props.pic==="haha")
setPic(Haha)
else if (props.pic==="sad")
 setPic(Sad)
})
const ClickHandle=() =>
 {
 setCount(count+1)
 }
return (
<div class = "image-row"> 
<div class = "text-column">
{props.pic.toUpperCase()} 
 <button onClick={ClickHandle}>{count}
 <div class= "image-container">
 <img src={pic} alt=""/>
 </div>
 </button>
 </div>
 </div>
)
}


export {HookControlledButtonState,EmojeeCounter};