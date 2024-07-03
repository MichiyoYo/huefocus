import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/pixelify-sans';
import '@fontsource/russo-one';
import '@fontsource/play';

const theme = extendTheme({
  fonts: {
    heading: `'Pixelify Sans Variable', monospace, system-ui`,
    body: `'Play', sans-serif`,
  },
  styles: {
    global: {
      body: {
        color: 'white',
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
