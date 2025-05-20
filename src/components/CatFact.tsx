import { useEffect, useState } from "react";
import Box from "./Box";

function CatFact() {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((result) => setFact(result.fact))
      .catch((error) => {
        console.error("There is an error when fetching the cat fact: " + error);
      });
  }, []);

  return (
    <div className="HeaderBox">
      <Box>
        <h2>Some Cat Fact</h2>
        <p>{fact ?? "Loading the cat fact"}</p>
      </Box>
    </div>
  );
}

export default CatFact;
