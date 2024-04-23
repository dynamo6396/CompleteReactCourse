const root = ReactDOM.createRoot(document.getElementById("root")); 
/*
Now to create nested element through react

<div class="parent">
    <div class="child">
        <h1> This is h1 tag </h1>
    </div>
</div>
 */
const parent =React.createElement("div",{class:"parent"},React.createElement("div",{class:"child"},React.createElement("h1",{},"Hey I am heading ")));
root.render(parent);
