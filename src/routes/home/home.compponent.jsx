import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import React from 'react';

function Home() {


 
  return (
    <div>
     
      <Directory/>
      <Outlet />
    </div>
    
   
  );
}

export default Home;
