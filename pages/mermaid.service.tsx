import mermaid from "mermaid";
import { useEffect } from "react";
import axios from "axios";

export interface MermaidViewerProps {
  chart: string;
}

export default function MermaidViewer(props: MermaidViewerProps) {
  useEffect(() => mermaid.contentLoaded(), []);
  mermaid.initialize({
    startOnLoad: true,
  });
  
  console.log(props.chart);
  let data = JSON.stringify({input: props.chart.trim()});
    axios
    .post("http://localhost:8080/parse", data, {headers:{"Content-Type" : "application/json"}})
    .then((res) => {
      console.log(res.data);
    }).catch();
    return <div className="mermaid">{props.chart}</div>
  
}
