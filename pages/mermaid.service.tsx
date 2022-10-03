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
  let hello: string;
  if (/(```mermaid)/.exec(props.chart)) {
    hello = props.chart.substring(10).slice(0, -3);
  } else {
    hello = "Not MermaidJS syntax.";
  }
  axios
    .post("http://localhost:8080/parse", { input: hello})
    .then((res) => {
      console.log(res.data);
    });
  try {
    return mermaid.parse(hello) ? (
      <div className="mermaid">{hello}</div>
    ) : (
      <p>Not MermaidJS syntax!</p>
    );
  } catch (e) {
    return <p>Incorrect MermaidJS syntax!</p>;
  }
}
