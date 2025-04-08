
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function PathCompo({onpathChange}) {
    const location = useLocation();


   useEffect(()=>{
   
    onpathChange(location.pathname);
 
   }, [onpathChange , location.pathname])

   return null ; 
}

export default PathCompo ;
