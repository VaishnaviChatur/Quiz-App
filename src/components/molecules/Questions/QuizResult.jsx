import React from 'react'
// /import './cd.css'
import styles from './QuizResult.module.css'

function QuizResult(props) {
// const [score, setScore]=usestate(' ')

  return (
    <>
                        {props.score >= 12 ? (
                            <div className={styles.score}>
                        <p className={styles.colorsuccess}>Congratulations! You passed the test!</p>
                        <br></br>
         
                        </div>
                    ) : (
                      <>
                            <div className={styles.score}>
                            <p className={styles.colorsuccess}>Sorry!... You loose Try Again</p>
                        <br></br>
                      <p> Your Score:{props.score}/{props.totalScore}  </p></div>
                        <button  className={styles.btn} onClick={props.tryAgain}>Restart</button>
                        </>
                    )}

    
   
    </>
  )
}

export default QuizResult