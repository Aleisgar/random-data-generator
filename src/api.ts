import fetch from "node-fetch"
import { getPreferenceValues } from "@raycast/api"
import { Cif,Nif,Preferences } from "./types";


export async function fetchCif(): Promise<Cif> {
    const preferences: Preferences = getPreferenceValues();
    const password = preferences.token;
 
    
    const url= 'https://www.generador-de-dni.com/id/cif';
    const response = await fetch(url, {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': password,
            'X-RapidAPI-Host': url
        },
    });
    if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
    
      const responseData = await response.json();

      return responseData as Cif;
}
export async function fetchNif(): Promise<Nif> {
     const preferences: Preferences = getPreferenceValues();
     const password = preferences.token;
  
     
     const url= 'https://www.generador-de-dni.com/id/nif';
     const response = await fetch(url, {
         method: "GET",
         headers: {
             'X-RapidAPI-Key': password,
             'X-RapidAPI-Host': url
         },
     });
 
     if (!response.ok) {
         throw new Error('Error en la respuesta de la API');
       }

       const responseData = await response.json();    
       return responseData as Nif;
 }
 