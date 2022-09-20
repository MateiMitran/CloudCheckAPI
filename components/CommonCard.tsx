import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MermaidViewer from "pages/mermaid.service";
import ReactMarkdown from "react-markdown";

export interface CommonCardProps {
  chart: string; 
}

const CommonCard = ({ chart }: CommonCardProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent> 
        <ReactMarkdown
          children={chart}
          components={{
            p: ({ node, ...props }) => <p>Not MermaidJS syntax!</p>,
            code({ node, inline, className, children, ...props }) {
              const match = /(```mermaid)/.exec(chart); /()/

              return match ? (
                  <MermaidViewer chart={chart} />
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
export default CommonCard;
