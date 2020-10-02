import React, {useState} from 'react';
import logo from './logo.svg';
import './tailwind.output.css';
import './App.scss';

import WeightInput from "./components/WeightInput";
import WeightOutput from "./components/WeightOutput";

function App() {

    const [calculatedWeight, setCalculatedWeight] = useState(null);

    return (
        <div className="app bg-green-200 h-full flex flex-col justify-center gap-6 items-center py-4 px-2">
            <WeightInput onChange={(cw) => {
                setCalculatedWeight(cw);
            }}/>
            <WeightOutput weight={calculatedWeight}/>
        </div>
    );
}

export default App;
