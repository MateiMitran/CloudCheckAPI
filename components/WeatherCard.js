import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "./ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";

const WeatherCard = (props) => {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 500 }} visible={false}>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Weather in
              </Typography>
              <Typography variant="h5" component="div" data-cy="card_Label">
                <span style={{ fontWeight: "bold" }}> {props.cardLabel} </span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span style={{ fontWeight: "italic" }}> {props.country} </span>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 26 }}>
                <span style={{ fontWeight: "bold" }}> {props.temp + "°"} </span>
              </Typography>
            </CardContent>
            <CardActions>
              <ExpandMore
                expand={props.expanded}
                onClick={props.handleExpandClick}
                aria-expanded={props.expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={props.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}> Visibility: </span>{" "}
                  {props.visibility} km
                </Typography>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Region: </span> {props.region}
                </Typography>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Latitude: </span>{" "}
                  {props.latitude + "°"}{" "}
                  <span style={{ fontWeight: "bold" }}>| Longitude: </span>{" "}
                  {props.longitude + "°"}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
    );
}
export default WeatherCard;