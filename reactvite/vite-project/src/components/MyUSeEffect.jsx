import React,{useEffect, useState} from 'react'
//when we update something useEffect is called automatically and value will update
function MyUSeEffect() {
    const[counter, setCounter]=useState(0);
    const[pointer,setPointer]=useState(100);

    function increaseCounter(){
        setCounter(counter+10);
    }

    function decreasePointer(){
        setPointer(pointer-5);
    }



    useEffect(()=>{
        console.log("Counter=",counter);
        console.log("Pointer=",pointer);
    },[pointer,counter])      //array passed is called dependency arrray
//value to be tracked is passed in dependency array

  return (
    <div>
        <h2>Counter App</h2>
        <h1 style={{color:'red'}}>Counter Value={counter}</h1>
        <h1 style={{color:'red'}}>Pointer Value={pointer}</h1>
        <button onClick={increaseCounter}>IncCount</button>
         <button onClick={decreasePointer}>DecPointer</button>
    </div>
  )
}

export default MyUSeEffect