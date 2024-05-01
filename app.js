import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";

//  React Element 
const jsxheading =(<h1 id="heading"> Namaste React using JSX 🎈</h1> );
const Title=()=> (
     <h2> Namaste React </h2>
);
{/* This is called component composition  */}
const f2 =function(){
    return (<div>Hello world 2 </div>)
}
const f1 =()=>{
    return (<h1>Hello world </h1>)
}
const Functionalcomponent =()=>(
    <div>
        <Title/>
        <h1> hello friends</h1>
    </div>
);

console.log(jsxheading);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Functionalcomponent/>);
