import Display from "./componets/Display";
import ButtonContainer from "./componets/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";
import "./App.css";
function App() {
  const [calVal, setCalVal]=useState("");
  const onButtonClick=(buttonText)=>{
    if (buttonText==="C"){
      setCalVal("");
    }else if(buttonText==="="){
      const result=eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue=calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  } 
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
      </div>
  );
}
export default App;
