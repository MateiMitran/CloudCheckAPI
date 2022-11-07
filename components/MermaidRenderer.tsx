import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import ReactMarkdown from "react-markdown";
import MermaidViewer from "../pages/mermaid.service";

export interface MermaidRendererProps {
  chart: string;
}

const MermaidRenderer = ({ chart }: MermaidRendererProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
        <ReactMarkdown
          // eslint-disable-next-line
          children={chart}
          components={{
            p: ({ node, ...props }) => <p>Not MermaidJS syntax!</p>,
            code({ node, inline, className, children, ...props }) {
              const match = /(```mermaid)/.exec(chart);
              let mermaidSyntax: string;
              mermaidSyntax = chart.substring(10).slice(0, -3);

              return match ? (
                <MermaidViewer chart={mermaidSyntax} />
              ) : (
                <p>Not MermaidJS syntax!</p>
              );
            },
          }}
        />
      </CardContent>
    </Card>
  );
};
export default MermaidRenderer;
