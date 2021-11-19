// Task is to display a bunch of comments

import React from "react";// react import
import ReactDOM from "react-dom";// react renderer

{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/> 

This goes into index.html in the head section to import styling. Rather than making our own. 

*/}

// 
const App = () => {


    return (
        <div> Hello there </div>
    )


}



ReactDOM.render(

    <App />,
    document.querySelector("#root")
    

);