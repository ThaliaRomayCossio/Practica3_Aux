import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import PropTypes from 'prop-types';

function App() {
   return (
      <div >
         <BrowserRouter>
             <BaseLayout/>
         </BrowserRouter>
        
      </div>
   );
}
App.propTypes = {
   backgroundColor: PropTypes.string
   
};

export default App;
