import ClickEvent from "./ClickEvent";
// import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariables";
import PassingDataOnEvent from "./PassingDataOnEvent";
import ObjectStateVariable from "./ObjectStateVariable";    
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";



export default function Lab4() {
    function sayHello(): void {
        alert ("Hello!");
    }

  return (
  <div>
    <h2>Lab 4</h2>;
    <ClickEvent /> 
    <PassingDataOnEvent /> 
    <PassingFunctions theFunction={sayHello} />
    <EventObject />
    <Counter />
    <BooleanStateVariables />
    <StringStateVariables />
    <PassingDataOnEvent />
    <ObjectStateVariable />
    <ArrayStateVariable />
    <ParentStateComponent />


  </div>
  );
}
