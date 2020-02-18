import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import StoreContext from "./context/StoreContext";
import store from "./store/index";

//引入antd
import 'antd-mobile/dist/antd-mobile.css';

ReactDOM.render(<StoreContext.Provider value={store}>
                    <App />
                </StoreContext.Provider> , document.getElementById('root'));

ReactDOM.render(
    
        <App />
        
    , document.getElementById('root'));