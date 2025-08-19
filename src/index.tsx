import { Detail } from "@raycast/api";
import { useEffect, useState } from "react";
import { generateCIFNumber } from "./functions/cif-generator.function";
import { generateNIFNumber } from "./functions/nif-generator.function";

export default function documentCreator() {
  const [cif, setCif] = useState<string>();
  const [nif, setNif] = useState<string>();
  const result = `CIF:${cif} 
  NIF:${nif}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const cif = generateCIFNumber();
        setCif(cif);
        const nif = generateNIFNumber();
        setNif(nif);
      } catch (error) {
        console.error("error", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Detail markdown={result}></Detail>
    </>
  );
}
