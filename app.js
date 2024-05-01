import React from "react";
import ReactDOM from "react-dom";

//  React Element 
const jsxheading =(<h1 id="heading"> Namaste React using JSX 🎈</h1> );
const Title = (
     <h2> Namaste React </h2>
);
{/* This is called component composition  */}
const Functionalcomponent =()=>(
    <div>
        <Title/>
        <h1> hello friends</h1>
    </div>
);

console.log(jsxheading);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<Functionalcomponent/>);
