import React, {useState, useEffect} from "react";

const WeightInput = (props) => {

    const [weight, setWeight] = useState(0);
    const [weightKoeff, setWeightUnit] = useState(1);

        const calculateWeights = (grams) => {
        return {
            g: grams,
            kg: grams / 1000,
            t: grams / 1000000
        }
    };

    const weightOnChange = (e) => {
        setWeight(Number(e.target.value));
    };

    const weightKoeffOnChange = (e) => {
        setWeightUnit(e.target.value);
    };

    useEffect(() => {
        props.onChange(calculateWeights(weight * weightKoeff));
    }, [weight, weightKoeff]);

    return (
        <div>
            <input type="number" onKeyUp={weightOnChange}/>
            <select name="unit" id="#" onChange={weightKoeffOnChange} defaultValue={weightKoeff}>
                <option value="1">Грамм</option>
                <option value="1000">Килограмм</option>
                <option value="1000000">Тонна</option>
            </select>
        </div>
    )
};

export default WeightInput;
