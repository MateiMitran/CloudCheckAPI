import { Button, TextField } from "@mui/material";
import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import styles from "../styles/styles.module.css";
import { Control } from "react-hook-form";

export interface InputFormProps {
    control: Control<FieldValues,any>,
    onTextChange(e: React.ChangeEvent<HTMLInputElement>): void,
    sendRequestButtonProp(): void,
    pressed: boolean,
    changePressed(): void
}
const InputForm = ({control, onTextChange, sendRequestButtonProp,pressed, changePressed}: InputFormProps) => {
  return (
    <div>
      <Controller
        name="city"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="MermaidJS"
            onChange={onTextChange}
            variant="outlined"
            className="cityField"
            focused
            data-cy="input_Textfield"
            multiline
          />
        )}
        rules={{ required: "Field required" }}
      />
      <div className={styles.buttonWrapper}>
      <Button
        onClick={sendRequestButtonProp}
        variant="contained"
        className={styles.inputButton}
        data-cy="send_Button"
        sx={{mt:"10px"}}
        type="submit"
      >
        Send
      </Button>
      {pressed && (
        <Button
          onClick={changePressed}
          variant="contained"
          className={styles.inputButton}
          data-cy="reset_Button"
          sx={{mt:"10px",ml:"60px"}}
        >
          Reset
        </Button>
      )}
      </div>
    </div>
  );
};
export default InputForm;
