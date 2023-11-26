import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from "../auth";
import SignUp from "../sign-up";
import Graph from "../graph";
import '../css/App.css';

function App() {
  return (
        <div className="App">
            <Routes>
                <Route path="signUp" element={<SignUp />} />
                <Route path="/" element={<Auth />} />
                <Route path="graph" element={<Graph />} />
            </Routes>
        </div>
  );
}

export default App;
