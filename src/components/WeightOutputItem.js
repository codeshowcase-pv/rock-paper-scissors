import React from "react";

const WeightOutputItem = (props) => {
    return (
        <div className="bg-orange-400 px-4 py-2 mb-1 rounded text-white font-bold">
           <span>{props.title}: {props.weight}</span>
        </div>
    )
};

export default WeightOutputItem;
