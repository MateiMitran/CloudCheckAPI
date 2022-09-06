import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styles from "../styles/styles.module.css";
import ApiService from "./api.service";

export default function Home() {
  const [temp, setTemp] = useState("");
  const [cardLabel, setCardLabel] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [visibility, setVisibility] = useState("");
  const [region, setRegion] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [pressed, setPressed] = useState(false);

  // ref to TextField
  const cityName = useRef();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  //Expand more Card
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  function handleExpandClick(e) {
    setExpanded(!expanded);
  }

  // sends post request and validates
  function sendRequestButton() {
    if (
      cityName.current.value !== "" &&
      cityName.current.value.length > 2 &&
      /[0-9]/.test(cityName.current.value) == false
    ) {
      ApiService.sendRequest(city).then((response) => {
        if (JSON.stringify(response.data).includes("false")) {
          alert("Please enter a valid city");
        } else {
          SetDataFromResponse();
          function SetDataFromResponse() {
            setTemp(response.data.current.temperature);
            setCountry(response.data.location.country);
            setRegion(response.data.location.region);
            setLatitude(response.data.location.lat);
            setLongitude(response.data.location.lon);
            setVisibility(response.data.current.visibility);
            setCardLabel(city);
            setPressed(true);
          }
        }
      });
    } else {
      alert("Please enter a valid city!");
      setPressed(false);
    }
  }
  function handleTextChange(e) {
    setCity(e.target.value);
  }

  function changePressed() {
    if (pressed == false) {
      alert("No city to reset!");
    } else {
      setPressed(!pressed);
      cityName.current.value = "";
    }
  }
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Weather
            </Typography>
            <WbSunnyIcon sx={{ mr: "90%", ml: "10px" }}> </WbSunnyIcon>
          </Toolbar>
        </AppBar>
      </Box>

      <div className={styles.leftSide}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="city"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                label="City"
                onChange={handleTextChange}
                variant="outlined"
                className="cityField"
                sx={{ input: { color: "white" } }}
                focused
                inputRef={cityName}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: "Field required" }}
          />
          <Button
            onClick={sendRequestButton}
            variant="contained"
            className="send_Button"
            type="submit"
          >
            Send
          </Button>
          {pressed && (
            <Button
              onClick={changePressed}
              variant="contained"
              className="reset_Button"
            >
              Reset
            </Button>
          )}
        </form>
      </div>
      <div className={styles.rightSide}>
        {pressed && (
          <Card sx={{ minWidth: 275, maxWidth: 500 }} visible={false} >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Weather in
              </Typography>
              <Typography variant="h5" component="div" className="cardLabel">
                <span style={{ fontWeight: "bold" }}> {cardLabel} </span>
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <span style={{ fontWeight: "italic" }}> {country} </span>
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 26 }}>
                <span style={{ fontWeight: "bold" }}> {temp + "°"} </span>
              </Typography>
            </CardContent>
            <CardActions>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}> Visibility: </span>{" "}
                  {visibility} km
                </Typography>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Region: </span> {region}
                </Typography>
                <Typography paragraph>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Latitude: </span>{" "}
                  {latitude + "°"}{" "}
                  <span style={{ fontWeight: "bold" }}>| Longitude: </span>{" "}
                  {longitude + "°"}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        )}
      </div>
    </div>
  );
}
