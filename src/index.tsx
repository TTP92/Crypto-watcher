import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app';
import { ReduxProvider } from './redux/ReduxProvider';

const root = document.getElementById('root');
ReactDOM.render(
    <React.StrictMode>
        <ReduxProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ReduxProvider>
    </React.StrictMode>,
    root,
);
