import React from "react";

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.loading}</div>
        </div>
    );
};


//creates a default property in case we forget to specify it. 
Spinner.defaultProps = {
    loading: "Loading ..."
};

export default Spinner; 