import React from 'react'
import styles from './ButtonContainer.module.css'

function ButtonContainer({onButtonClick}) {
    const buttonNames = [
        "C",
        "1",
        "2",
        "+",
        "3",
        "4",
        "-",
        "5",
        "6",
        "*",
        "7",
        "8",
        "/",
        "=",
        "9",
        "0",
        ".",
      ];
  return (
    <div classNameName={styles.buttonContainer}>
        {buttonNames.map(button =><button classNameName={styles.button}
        onClick={() => onButtonClick(button)}>{button}</button> )}
      </div>
  )
}

export default ButtonContainer