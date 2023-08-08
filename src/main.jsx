import React from 'react'
import ReactDOM from 'react-dom/client'
import { CrudApp } from './CrudApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <CrudApp />
        </React.StrictMode>
    </BrowserRouter>
)
