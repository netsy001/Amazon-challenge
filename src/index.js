import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from './Reducer';


ReactDOM.render(
  <React.StrictMode>

    {/* wrapping App in state provier , so that every componenet can get access to the data layer */}
    {/* initialstate: what is the data look like in the begining and reducer: how we maipulate the data and how we are going to play with data */}

    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

