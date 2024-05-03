import { useState, useEffect } from "react";

function CopyToClipboard(hex) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex.hex);
      setCopied(true);
    } catch (error) {
      console.log("Failed to copy Color: ", error);
    }
  };

  return (
    <>
      <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>
    </>
  );
}

export default CopyToClipboard;
