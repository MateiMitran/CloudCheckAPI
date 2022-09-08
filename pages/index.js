import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/styles.module.css";
import ApiService from "./api.service";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [visibility, setVisibility] = useState("");
  const [region, setRegion] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [pressed, setPressed] = useState(false);
  const [cardLabel, setCardLabel] = useState("");

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
            console.log(pressed);
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
  const cityName = useRef();

  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  function handleExpandClick(e) {
    setExpanded(!expanded);
  }

  return (
    <div>
      <Navbar />
      <div className={styles.leftSide}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            control={control}
            onTextChange={handleTextChange}
            cityNameProp={cityName}
            sendRequestButtonProp={sendRequestButton}
            changePressed={changePressed}
            pressed={pressed}
          />
        </form>
      </div>
      <div className={styles.rightSide}>
        {pressed && (
          <WeatherCard
            cardLabel={cardLabel}
            country={country}
            temp={temp}
            expanded={expanded}
            handleExpandClick={handleExpandClick}
            visibility={visibility}
            region={region}
            latitude={latitude}
            longitude={longitude}
          />
        )}
      </div>
    </div>
  );
}
