import mermaid from "mermaid";
import { useEffect } from "react";

const MermaidViewer = (props) => {
    useEffect(()=> mermaid.contentLoaded(), []);
    mermaid.initialize({
        startOnLoad: true,
        useMaxWidth: true,
    });
    return (
        <div className="mermaid">
            {props.chart}
        </div>
    )
}

export default MermaidViewer;