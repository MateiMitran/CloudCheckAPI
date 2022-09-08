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
            label="City"
            onChange={props.onTextChange}
            variant="outlined"
            className="cityField"
            sx={{ input: { color: "white" } }}
            focused
            inputRef={props.cityNameProp}
            data-cy="input_Textfield"
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
