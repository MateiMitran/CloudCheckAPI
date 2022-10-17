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
        
           // eslint-disable-next-line
          children={chart}
          components={{
            p: ({ node, ...props }) => <p>Not MermaidJS syntax!</p>,
            code({ node, inline, className, children, ...props }) {
              const match = /(```mermaid)/.exec(chart); /()/
              let hello: string;
                hello = chart.substring(10).slice(0, -3);
            
              return match ? (
                  <MermaidViewer chart={hello} />
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
