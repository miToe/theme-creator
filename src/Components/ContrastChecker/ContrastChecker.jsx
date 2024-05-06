import { useState, useEffect } from "react";
import "./ContrastChecker.css";

function ContrastChecker({ hex, contrastText }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.aremycolorsaccessible.com/api/are-they",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ colors: [hex, contrastText] }),
        }
      );
      const json = await response.json();
      setResult(json.overall);
    }

    fetchData();
  }, [hex, contrastText]);

  if (result === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="contrastChecker">
      <h4>Is Contrast ok?</h4>
      <p>{result}</p>
    </div>
  );
}

export default ContrastChecker;
