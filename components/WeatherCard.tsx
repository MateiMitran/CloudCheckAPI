import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ReactMarkdown from "react-markdown";
import MermaidViewer from "../pages/mermaid.service";

export interface WeatherCardProps {
  cardLabel: string;
  chart: string;
}

const WeatherCard = ({ cardLabel, chart }: WeatherCardProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 400 }}>
      <CardContent>
          <ReactMarkdown
            children={chart}
            components={{
              p: ({ node, ...props }) => <MermaidViewer chart={chart} />, //code
            }}
          />
      </CardContent>
    </Card>
  );
};
export default WeatherCard;
