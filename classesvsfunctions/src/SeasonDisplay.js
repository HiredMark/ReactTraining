import "./SeasonDisplay.css" //use the CSS file available in source to help with styling. 
import React from "react";

const seasonConfig = {
    summer: {
        message: "Let's Hit the beach",
        iconSelector: "sun"
    },
    winter: {
        message: "Wanna make a snowman?",
        iconSelector: "snowflake"
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9){
        return lat > 0 ? "summer" : "winter";
    }else {
        return lat > 0 ? "winter" : "summer";
    }
}

// this is a function and they are most often used to render things and process data. 
const SeasonDisplay = props => {
    // Date().GetMonth() fetches the month from local clock. 
    const season = getSeason(props.lat, new Date().getMonth());
    // deconstructs seasonconfig into two const variables.  
const { message, iconSelector } = seasonConfig[season]
    return <div className={`season-display ${season}`}>
        {/* // this syntax allows for string to be inserted into another string */}
        <i className ={`icon-left massive ${iconSelector} icon`} />
        <h1 className="message-text">{message}</h1>
        <i className ={`icon-right massive ${iconSelector} icon`} />
    </div>
};

export default SeasonDisplay;