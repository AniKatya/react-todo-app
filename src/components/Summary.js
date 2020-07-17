import React from 'react';

export default function Summary(props) {
    return (
        <div className="summary-main">
            Total Number of Tasks: {props.todosTotalNumber}
        </div>
    )
}

