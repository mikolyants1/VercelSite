import { Block ,Spin } from '../../style/style.js';
import { useState,useEffect } from 'react';


export function Loader():JSX.Element{
 const [spin,setSpin]=useState<number>(0);
  useEffect(():void=>{
   setInterval(():void=>{
    setSpin((x:number)=>x==360?0:x+10);
    }, 50);
  },[]);
    return (
      <Block>
        <Spin 
         spin={spin}
          />
      </Block>
       );
     };

export function Error():JSX.Element{
const [err,setErr]=useState<string>('');
 useEffect(():void=>{
  setInterval(():void => {
   setTimeout(():void=>setErr(''),0);
   setTimeout(():void=>setErr('.'),200);
   setTimeout(():void=>setErr('..'),400);
   setTimeout(():void=>setErr('...'),600);
   }, 800);
  },[]);
    return (
         <Block>
             error {err}
         </Block>
       );
};