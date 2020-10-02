import React from "react";
import WeightOutputItem from "./WeightOutputItem";

const WeightOutput = (props) => {
    return (
        <div>
            {props.weight && (
                <>
                    <WeightOutputItem title="Грамм" weight={props.weight.g}/>
                    <WeightOutputItem title="Килограмм" weight={props.weight.kg}/>
                    <WeightOutputItem title="Тонн" weight={props.weight.t}/>
                </>
            )}
        </div>
    )
};

export default WeightOutput;
