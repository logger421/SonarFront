import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ItemsContextProvider} from "./context/ItemsContext";
import {CartContextProvider} from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ItemsContextProvider>
            <CartContextProvider>
                <App/>
            </CartContextProvider>
        </ItemsContextProvider>
    </React.StrictMode>
);
