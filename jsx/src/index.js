// Import the React and ReactDom libraries

import React from "react";
import ReactDOM from "react-dom";

// Create a React component

function getButtonText () {
    return " Who tis a function inside a button"
}

const App = () => {
    // const propsedButtonText = ["It can be a string", "or an array", 3, "numbers also work"] // JavaScripts objects need to be reffered as attribute however. so const jsObject = {text: "Example text"} it can then be called as const jsObjectCall = jsObject.text

    return (

        <div>
        Hi, Software Institute!
    <ul>
        <li> Hey </li>
        <li> Hey there </li>
        <li> Wassup? </li>
        <li> How is it going? </li>
        <li> Wazzzaaaaaaaaaaaaaaaaaaaaaaaaaaaa </li>
        <li> Hooooooooow YOU doin'? </li>
        </ul>
    {/* </div>  */}
    
    {/* //this reads as HTML but is actually JSX. It is HTML for readability. BABEL process it out to JavaScript. 

    //     <div>
    //     <label class="important" for="name">Enter Name</label> - class becomes className - this avoids collision with class . htmlFor voids collision with for 
    //     <input id="name" type="text" />
    //     <button style="background-color: red; color: white;"> Submit </button> -style becomes JS for style options
    //       {} allows for variables to be inserted. 
    //     </div>
    //  This HTML code snippet will not work. ^ 
     */}
        <label className="important" htmlFor="name"> Enter Name: </label> 
        <input id="name" type="text" />
        <button style = {{backgroundColor: "red", color: "white"}}> {getButtonText()} </button> 
    </div>
    )
}


// Take the React component and show it on the screen. 

ReactDOM.render(

    <App />,
    document.querySelector("#root")
    

);