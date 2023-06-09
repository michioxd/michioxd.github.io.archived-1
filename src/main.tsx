import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

import '@fontsource/prata/400.css';
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
