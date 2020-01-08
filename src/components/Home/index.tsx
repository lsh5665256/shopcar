import React from 'react';
import View from "../../router/routerView"

const Home: React.FC = (props:any) => {
  return (
    <>
     home
     <View route={props.child}></View>
    </>
  );
}

export default Home;