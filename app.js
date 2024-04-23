// here this object {} is used to give attributes to the h1 tag 
const heading = React.createElement("h1", {id:"heading" , abc:"xyz"}, "Hello world from react !");
console.log(heading); //object is printing which is basicly a react element 
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(heading); //reactElement(object)=> html(browser understand);
