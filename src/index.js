import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/app.scss"
import  "./styles/statics.scss";
import { ChakraProvider, theme } from "@chakra-ui/react";
import  ColorModeSwitcher  from "./ColorModeSwitcher";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
    <ColorModeSwitcher/>
    <App />
    </ChakraProvider>
  </React.StrictMode>
);

