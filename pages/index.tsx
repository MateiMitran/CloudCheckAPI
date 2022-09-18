import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import WeatherCard from "../components/WeatherCard";
import styles from "../styles/styles.module.css";

export default function Home() {
  const [pressed, setPressed] = useState(false);
  const [snippet, setSnippet] = useState("");
  const [code, setCode] = useState("");

  function sendRequestButton() {
    setPressed(true);
    setCode(snippet);
  }
  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSnippet(e.target.value);
  }

  function changePressed() {
    setPressed(!pressed);
  }

  const { handleSubmit, control } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.leftSide}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            control={control}
            onTextChange={handleTextChange}
            sendRequestButtonProp={sendRequestButton}
            changePressed={changePressed}
            pressed={pressed}
          />
        </form>
      </div>
      <div className={styles.rightSide}>
        {pressed && <WeatherCard cardLabel="Label" chart={code} />}
      </div>
    </div>
  );
}
