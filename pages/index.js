import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import styles from "../styles/styles.module.css";
import MermaidViewer from "./mermaid.service";

export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [snippet, setSnippet] = useState("");
  const [code, setCode] = useState("");

  function sendRequestButton() {
    setPressed(true);
    setCode(snippet);
  }
  function handleTextChange(e) {
    setSnippet(e.target.value);
  }

  function changePressed() {
    setPressed(!pressed);
  }

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
            sendRequestButtonProp={sendRequestButton}
            changePressed={changePressed}
            pressed={pressed}
          />
        </form>
      </div>
      <div className={styles.rightSide}>
        {pressed && <MermaidViewer chart={code}></MermaidViewer>}
      </div>
    </div>
  );
}
