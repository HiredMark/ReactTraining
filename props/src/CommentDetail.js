import React from "react";// imports basic react



const CommentDetail = (props) => { //props is passed in instead of just author and then it is referred to as props.author 
    return(
        <div className="ui container comments">
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={props.avatarPic} /> 
                    </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author} </a> 
                    <div className="metadata">
                        <span className="date"> {props.timePosted}
                        </span>
                        </div>
                    <div className="text"> {props.commentText} </div>
    
                </div>
    
                </div>
                </div>
    );
}



export default CommentDetail ; // exports function to index