import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "../auth";
import SignUp from "../sign-up";
import GraphPage from "../graph-page";
import '../css/App.css';
import '../css/tablet.css'
import '../css/mobile.css'


function App() {

  return (
        <div className="App">
            <Routes>
                <Route path="signUp" element={<SignUp />} />
                <Route path="/" element={<Auth />} />
                <Route path="graph" element={<GraphPage/>} />
            </Routes>
        </div>
  );
}

export default App;
