import axios from "axios";
import mermaid from "mermaid";
import React, { useEffect } from "react";

export interface MermaidViewerProps {
  chart: string;
}

export default function MermaidViewer(props: MermaidViewerProps) {
  useEffect(() => mermaid.contentLoaded(), []);
  mermaid.initialize({
    startOnLoad: true,
  });

  let data = JSON.stringify({ input: props.chart.trimStart() });
  axios
    .post("http://localhost:8080/parse", data, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch();
  return <div className="mermaid">{props.chart}</div>;
}
