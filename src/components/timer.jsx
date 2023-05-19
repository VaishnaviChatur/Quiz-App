import React from 'react'
import { useEffect, useState, useRef } from 'react'

const formatTime = (time) =>{
let minutes = Math.floor(time/60)
let seconds = Math.floor(time - minutes *60)
if(minutes<=10) minutes = '0' + minutes;
if(seconds<=10) seconds = '0' + seconds;
return minutes +':'+seconds;
}
export default function Timer({seconds}) {

    const [countdown, setCountdown] = useState(seconds)
    const timerId = useRef()
    // const [Minute, setMinute] = useState(0)

    
    useEffect(()=>{
        timerId.current= setInterval(()=>{

            setCountdown(prev => prev-1);
         
        },1000)
        return()=> clearInterval(timerId.current);
    },[]);


    useEffect(()=>{
      
            if(countdown <= 0){
                clearInterval(timerId.current)
                // alert("End")
            }
            
        },[countdown])
    //     return()=> clearInterval(timerId.current);
    // },[]);
   function stopp(){
    setCountdown(0)
   }
   
  return (
    <div>
        {/* //countdown seconds={15} */}
        <h3>countdown : {formatTime(countdown)}</h3>
        {/* <h3>{Minute<10?"0"+Minute:Minute}:{second<10?"0"+second:second}</h3> */}
        {/* <button onClick={stopp}>stop</button> */}
    </div>
  )
}
