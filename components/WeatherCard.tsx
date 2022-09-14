import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MermaidViewer from "../pages/mermaid.service";

export interface WeatherCardProps {
  cardLabel: string;
  chart: string;
}

const WeatherCard = ({ cardLabel, chart }: WeatherCardProps) => {
  return (
    <Card sx={{ minWidth: 275, maxWidth: 500 }}>
      <CardContent>
        <Typography>
          <MermaidViewer chart={chart}></MermaidViewer>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WeatherCard;
