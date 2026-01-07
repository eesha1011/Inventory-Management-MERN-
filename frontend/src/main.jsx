console.log("MAIN.JSX LOADED");

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ThemeProvider} from './context/ThemeContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
)
