
// import Timer from './timer';
//   export default questions;
import React, {useEffect, useState } from 'react'

import QuizResult from './QuizResult';
import styles from './Question.module.css'
import { QuizData } from '../QuizData/QuizData';


function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
   const [time, setTime] = useState(10)
    const isLastQuestion = currentQuestion === QuizData.length - 1;//
//time

function timer(){
    if(time==0){
        // resetAll();
        lastQuestion();
    }else{
    setTime(time-1)
    }
}

useEffect(()=>{
   const intervalclear=setInterval(timer ,10000);
      
     return ()=>{
        clearInterval(intervalclear)
     } 
},[timer])

const lastQuestion = ()=>{
    updateScore();
    if(currentQuestion< QuizData.length-1){
        setCurrentQuestion(QuizData.length-1);
        setClickedOption(0);
        
    }else{
       
        setTime(0)
        setShowResult(true)
    
    }
}

    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
            
        }else{
           
            setTime(0)
            setShowResult(true)
       
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+2);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
        setTime(10)
        }
  
  return (
    <div>
     
        <p className={styles.headingtxt}>Quiz APP</p>
        <div className={styles.container}>
            {showResult ? (
                <>
            
                <QuizResult  score={score} totalScore={QuizData.length*2} tryAgain={resetAll}/></>
            ):(
            <>
             <h3>Time : {time} minutes left</h3>
            <div className={styles.question}>
         
                <span id="question-number">{currentQuestion+1}. </span>
                <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className={styles.optioncontainer}>
                {QuizData[currentQuestion].options.map((option,i)=>{
                    return(
                        // <button 
                        // // className="option-btn"
                        // className={`option-btn ${
                        //     clickedOption === i+1?"checked":null
                        // }`}
                        // key={i}
                        // onClick={()=>setClickedOption(i+1)}
                        // >
                        // {option}
                        // </button>
                        <>  <li className={styles.optionbtn} key={i}>
                        <input
                        
                            type="radio"
                            // id={`option-${i}`}
                     
                            name="options"
                            value={option}
                            checked={clickedOption === i+1}
                            onClick={() => setClickedOption(i+1)}
                        />
                        <label  htmlFor={`option-${i}`}>{option}</label>
                    </li></>
                    )
                })}                
            </div>
            {isLastQuestion ? (
                        <button className={styles.button} onClick={lastQuestion}>Submit</button>
                    ) : (
                        <button className={styles.button} onClick={changeQuestion}>Next</button>
                    )}
            
            </>)}
         
            {/* <Timer seconds={600}/> */}
        </div>
    </div>
  )
}

export default Quiz