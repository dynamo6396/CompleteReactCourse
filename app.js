import React from "react";
import ReactDOM from "react-dom";
import { jsx } from "react/jsx-runtime";

// React.createElement => Object => HTMLElement (render)

const heading = React.createElement("h1",{id:"heading"},"Namaste react");
console.log(heading);


// This is very length,not developer friendly,unreadable and boaring to write html like this in react 
// So jsx comes in picture.

// jsx - HTML-Like or XML -like syntax
// JSX (transpied before it reaches the JS) -Parcel-Babel
// JSX => Bebel transpiled it to React.createElement => ReactElement - JS Object => HTMLElement(render)
const jsxheading =<h1 id="heading"> Namaste React using JSX 🎈</h1> 

console.log(jsxheading);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
