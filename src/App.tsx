// import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Styles/App.css';
import Contact from './components/Contact';

import React from "react";
import RoutesContinental from "./routers/Routes";

const App: React.FC = () => {
    return (
      <div className="w-screen h-screen flex items-center justify-start flex-col ">
        <RoutesContinental/>
        
      </div>
    );
}

export default App;
