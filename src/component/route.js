import {
    Routes, Route
  } from 'react-router-dom';
  import { Landing } from './landingpage';
  import { Myprofile } from './myprofile';
import React from 'react';

  
  const routes = (
      <Routes>
            <Route  path="/" element={<Landing/>}/>
            <Route  path="/myprofile" element={<Myprofile/>}/>
      </Routes>
  )
  
  export default routes