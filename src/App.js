import React, {useState} from 'react';
import logo from './logo.svg';
import './tailwind.output.css';
import './App.scss';

import WeightInput from "./components/WeightInput";

function App() {
  return (
    <div className="app bg-green-200 h-full flex flex-col justify-around items-center py-4 px-2">
        <WeightInput onChange={(e) => {console.log(e)}}/>
    </div>
  );
}

export default App;
