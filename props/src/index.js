// Task is to display a bunch of comments

import React from "react";// react import
import ReactDOM from "react-dom";// react renderer
import CommentDetail from "./CommentDetail"; //imports component from other file for me to use here.
import faker from "faker";// imports faker to create dummy data. 
import ApprovalCard from "./ApprovalCard";
{/* <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
/> 

This goes into index.html in the head tag to import styling. Rather than making our own. 

*/}

// 
// const App = () => {


//     return (
//         <div className="ui container comments">
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} /> 
//                 </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     Sam </a>
//                 <div className="metadata">
//                     <span className="date"> Today at 6:00pm
//                     </span>
//                     </div>
//                 <div className="text"> Nice Blog Post! </div>

//             </div>

//             </div>
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} /> 
//                 </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     Sam </a>
//                 <div className="metadata">
//                     <span className="date"> Today at 6:00pm
//                     </span>
//                     </div>
//                 <div className="text"> Nice Blog Post! </div>

//             </div>

//             </div>
//             <div className="comment">
//                 <a href="/" className="avatar">
//                     <img alt="avatar" src={faker.image.avatar()} /> 
//                 </a>
//             <div className="content">
//                 <a href="/" className="author">
//                     Sam </a>
//                 <div className="metadata">
//                     <span className="date"> Today at 6:00pm
//                     </span>
//                     </div>
//                 <div className="text"> Nice Blog Post! </div>

//             </div>

//             </div>


            

//             </div>
//     )


// }  Don't do this. This is too much JSX 


const App = () => {


        return (
            <div className="ui container comments">
                <ApprovalCard > 
                    <CommentDetail 
                    author="Stuart" 
                    timePosted="Today at 6:00pm" 
                    commentText="Nice Post!" 
                    avatarPic={faker.image.avatar()} />
                </ApprovalCard>
                {/* Notice it now wraps around instead of being a self closing tag.
                    By doing so it can become a parent component of the commentDetail component
                    and therefore the commentDetail becomes a child of the ApprovalCard component.  */}
                <ApprovalCard >
                <CommentDetail 
                author="Adam" 
                timePosted="Today at 5:00pm" 
                commentText="Looks like a fun event!" 
                avatarPic={faker.image.avatar()} /> 
                </ApprovalCard>
                <ApprovalCard>    
                <CommentDetail 
                author="Juliet" 
                timePosted="Yesterday at 11:00am" 
                commentText="Well Done!" 
                avatarPic={faker.image.avatar()} /> 
                </ApprovalCard>

            </div>
        );
}

// much nicer way of replicating data. 

ReactDOM.render(

    <App />,
    document.querySelector("#root")
    

);