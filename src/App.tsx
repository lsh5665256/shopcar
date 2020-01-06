import React from 'react';
import './App.css';
import View from './router/routerView';
import Config from "./router/routerCofig"
const App: React.FC = () => {
  return (
    <>
 
      <View route={Config}></View>
    
    </>
  );
}

export default App;
