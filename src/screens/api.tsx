import axios from 'axios';
import React from 'react';
import { Text } from 'react-native';

const apis = ()=> {

  axios.get("https://restcountries.com/v3.1/all").then((response)=>{

  response.data.filter((data)=> data.independent === true).map((data)=>{
    console.log(data.name.common," ",data.idd.root+data.idd.suffixes);
  })
  
  }).catch((e)=>{
    console.log(e);

  })


  return(<Text></Text>)

}

export default apis;