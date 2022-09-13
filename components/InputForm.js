import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import styles from "../styles/styles.module.css";

const InputForm = (props) => {
  return (
    <div>
      <Controller
        name="city"
        control={props.control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="MermaidJS"
            onChange={props.onTextChange}
            variant="outlined"
            className="cityField"
            inputProps={{ style: { color: "white" } }}
            focused
            data-cy="input_Textfield"
            multiline
          />
        )}
        rules={{ required: "Field required" }}
      />
      <Button
        onClick={props.sendRequestButtonProp}
        variant="contained"
        className={styles.inputButton}
        data-cy="send_Button"
        type="submit"
      >
        Send
      </Button>
      {props.pressed && (
        <Button
          onClick={props.changePressed}
          variant="contained"
          className={styles.inputButton}
          data-cy="reset_Button"
        >
          Reset
        </Button>
      )}
    </div>
  );
};
export default InputForm;
