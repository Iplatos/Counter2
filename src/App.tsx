import React from 'react';
import './App.css';
import Counter from "./Components/NewCounter/Counter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Menu from "./Menu";
import Counter2 from "./Components/Counter2/Counter2";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/Counter1" element={<Counter/>}/>
                <Route path="/Counter2" element={<Counter2/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
