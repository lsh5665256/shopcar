import React from 'react';
import View from "../../router/routerView"
import Homes from '../../views/homes'
const Home: React.FC = (props:any) => {
  return (
    <>
     <View route={props.child}></View>
    <Homes/>
    </>
  );
}

export default Home;