import {useState, use} from "react";
import "../components/counter.css"

export function Counter(value){
    const [counter,setCounter] =useState(0);
    const handlechange=(value)=>{
        setCounter(counter+value);
    };
    const handlechange1=(value)=>{
        setCounter((counter)*2);
    };
    
    



   
    return ( 
        <div>
    <h3>Counter:{counter}</h3>
    <button onClick={()=> handlechange(1)}> Add </button>
    <button onClick={()=>{
        if(counter>=1){
            handlechange(-1)
        }
    } }> Decrease</button>
    
    <button onClick={()=>handlechange1(1)}>Double Button</button>
    </div>
    );
};
