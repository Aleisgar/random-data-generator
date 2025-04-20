import { Detail } from "@raycast/api";
import { useEffect, useState } from "react";
import { generateCIFNumber } from "./functions/cif-generator.function";

export default function documentCreator() {
  const [cif, setCif] = useState<string>();
  const result = `CIF:${cif}`;
  useEffect(() => {
    async function fetchData() {
      try {
        const cif = generateCIFNumber();
        setCif(cif);
        //  const nif= await fetchNif();
        //  setNif(nif);
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
