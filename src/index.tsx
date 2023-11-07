import { Detail } from "@raycast/api";
import { useEffect,useState } from "react";
import { fetchCif, fetchNif } from "./api";
import { Nif,Cif } from "./types";



export default function documentCreator() {
  const [nif,setNif]=useState<Nif>()
  const [cif,setCif]=useState<Cif>()
const result=`CIF:${cif?.data}  NIF:${nif?.data}`
  useEffect(()=>{
    async function fetchData(){
      try{
        const cif= await fetchCif();
       setCif(cif);
       const nif= await fetchNif();
       setNif(nif);
    
      }
    catch(error){
      console.error("error",error)

    }
 } fetchData()},[])
 


return (
  <>
    
    <Detail markdown={result}></Detail>
 
  </>
);
  
}