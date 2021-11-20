import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner"
import "semantic-ui-css/semantic.min.css";

// const App = () => {
     // Here we are getting user position, based on geolocation. We need to be prepared for geolocation to take some time.
     // this is an in-built API into JavaScript . 
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position) , 
//         (err) => console.log(err)
//     );
//     return (
//         <div>Latitude: </div>
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
    // constructor(props){
    //     super(props) 
        // super borrows from React. This overrides and replaces from the original React Class. 
        
        // this is the only time we do direct assignment to this.state 
        // this.state = { lat: null, errorMessage:""}; 
        // this is a state object. starting value is null because to start with the application doesn't know what it is. 
    // }

    state = { lat: null, errorMessage: ""}; // this is the equivalent of having a constructor. 

// Lifecycle methods
    // componentDidMount() {}
        // executes something at the start of the class component. Very much like a constructor. 
    // componentDidUpdate() {}
        // executes something when an object is updated by getState or setState 
    // componentWillUnmount() {}
        // executes something when a component becomes hidden . Usually used for clean up.  

// it is recommended that you always load code and data it should be done in componentDidMount()
        componentDidMount(){
            // again here we track location. 
            window.navigator.geolocation.getCurrentPosition(
                (position) => {
                    // set state is the ONLY way to update state. 
                    this.setState({ lat: position.coords.latitude });
                } , 
                (err) => {
                    // this is trying to handle the error gracefully. 
                    this.setState({errorMessage: err.message});
                }
            );
        }

//Helper method helps us manager rending in case adjustments need to be made.
// this keeps the render functionality slim and the site responsive. 
 renderContent(){
            // this is conditional rending with if statements
            if (this.state.errorMessage && !this.state.lat){
                return <div> Error : {this.state.errorMessage} </div>
                }
            // this allows us to pass state as a props. 
            if (!this.state.errorMessage && this.state.lat){
                return <SeasonDisplay lat={this.state.lat}/>
            }
    
            return <Spinner loading="Fetching Location, Please Ensure It Is Enabled ..." /> 

 }
// render MUST exist in every class. Otherwise it will cause an error. 
    render() {
        return(
            <div> 
                {this.renderContent()} 
            </div>
        );


    }

}

ReactDOM.render(
    
    // this still calls our class even though it is not a function. 
    <App />, 
    document.querySelector("#root")    

);