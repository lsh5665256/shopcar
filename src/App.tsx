import React from 'react';
import './App.css';
import View from './router/routerView';
import Cofig from "./router/routerCofig"


const App: React.FC = () => {
  return (
    <>
      <View route={Cofig}></View>
    </>
  );
}

export default App;
