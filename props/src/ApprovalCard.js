import React from "react";

const ApprovalCard = (props) => { // this will wrap arround comments component, but notexclusively. Props can contain everything. In this case the comment

    return ( 
        <div className="ui card">
            <div className="content">
                {/* the comment becomes a child component of the ApprovalCard */}
                {props.children} 
                <div className="extra content">
                    <div className="ui two buttons">
                        <div className="ui basic green button"> Approve </div>
                        <div className="ui basic red button"> Reject </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default ApprovalCard;