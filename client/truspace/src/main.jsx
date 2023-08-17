import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "@emotion/react";
import {theme} from './theme.jsx'
import store from './redux/store.jsx';
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
     <ThemeProvider theme = {theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
