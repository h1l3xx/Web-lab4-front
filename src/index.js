import React, {StrictMode} from 'react';

import './css/index.css';
import './css/auth.css';
import './css/graph.css';
import './image/cats.gif'
import './image/plink-cat.gif'
import App from "./js/App";
import {BrowserRouter} from "react-router-dom";
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
