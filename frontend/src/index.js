import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';

const container = document.getElementById('root');
const root = createRoot(container);

// Fetch data from Django API endpoint
fetch('/api/data/') // Replace '/api/data/' with your actual API endpoint URL
  .then(response => response.json())
  .then(data => {
    // Pass the fetched data to the App component
    root.render(
      <Provider store={store}>
        <App data={data} />
      </Provider>
    );
  });

// Render the App component without data initially
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
