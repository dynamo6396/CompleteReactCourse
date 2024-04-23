const root = ReactDOM.createRoot(document.getElementById("root")); 
/*
Now to create nested element through react

<div class="parent">
    <div class="child">
        <h1> This is h1 tag </h1>
    </div>
    <div class="child">
        <h1> This is h1 tag </h1>
    </div>
</div>
 */

const parent =React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hey I am heading "),React.createElement("h2",{},"Hey I am a h2 tag ")]),React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hey I am heading "),React.createElement("h2",{},"Hey I am a h2 tag ")])]);
// this is looking complex but it is made easy by jsx. 

console.log(parent);

root.render(parent);
