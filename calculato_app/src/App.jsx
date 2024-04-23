import React, { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

function App() {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonName;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div classNameName={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
