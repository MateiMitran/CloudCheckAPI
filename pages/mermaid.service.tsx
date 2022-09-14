import mermaid from "mermaid";
import React from "react";
import { useEffect } from "react";

export interface MermaidViewerProps {
    chart?: string
}
export default function MermaidViewer(props: MermaidViewerProps) {
    useEffect(() => mermaid.contentLoaded(), []);
    mermaid.initialize({
        startOnLoad: true,
        useMaxWidth: true,
    });
    return <div className="mermaid">{props.chart}</div>;
}