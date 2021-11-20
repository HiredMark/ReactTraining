import React from "react"
import ReactDOM from "react-dom"

// const App = () => {
     // Here we are getting user position, based on geolocation. We need to be prepared for geolocation to take some time.
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position) , 
//         (err) => console.log(err)
//     );
//     return (
//         <div>Lattitude: </div>
//     );
// }

// This function will struggle to keep a state and update the lattitude based on what we have. 
// Although hooks can achieve this inside a function.  


// the reason we use extends React.Component to borrow functionality from it into our App class. 

class App extends React.Component{
    

// state only gathers a factor from a component that is mutable.
// props can contain all properties relative to component and are immutable.
// getState causes a component to re-render.
// state must be initialised during component creation.
// state can only be updated using setState. <<<<<<<<<< Very important.   


// constructor is specific to JavaScript rather than React. It will be called before anything first.
// this also makes it a very good place to initialise a state. 
    constructor(props){
        super(props) // super borrows from React. This overrides and replaces from the original React Class. 
        
        // this is the only time we do direct assignment to this.state 
        this.state = { lat: null}; // this is a state object. starting value is null because to start with the application doesn't know what it is. 
        // again here we track location. 
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // set state is the ONLY way to update state. 
                this.setState({ lat: position.coords.latitude });
            } , 
            (err) => console.log(err)
        );
    }

// render MUST exist in every class. Otherwise it will cause an error. 
    render() {
        return <div>Latitude: {this.state.lat} </div>
    }
}

ReactDOM.render(
    <App />, // this still calls our class even though it is not a function. 
    document.querySelector("#root")    

);