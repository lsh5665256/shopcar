import React, {useEffect} from "react";
import {useObserver} from "mobx-react-lite"
import useStore from "../utils/useStore"
import { observable } from 'mobx';
interface propsType{
    location:boolean,
    state:boolean
}
const Details: React.FC<propsType> = (props:any) =>{

    let store=useStore();
    let {details}=store;
    useEffect(()=>{
        details.setList(props.location.state.id)
    },[])
    return <>
            Details
           </>
}

export default Details