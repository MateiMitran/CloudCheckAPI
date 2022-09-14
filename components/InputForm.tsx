import { Button, TextField } from "@mui/material";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import styles from "../styles/styles.module.css";

export interface InputFormProps {
  control: Control<FieldValues, any>;
  onTextChange(e: React.ChangeEvent<HTMLInputElement>): void;
  sendRequestButtonProp(): void;
  pressed: boolean;
  changePressed(): void;
}
const InputForm = ({
  control,
  onTextChange,
  sendRequestButtonProp,
  pressed,
  changePressed,
}: InputFormProps) => {
  return (
    <div className={styles.box}>
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
            sx={{ width: "500px" }}
            multiline
            fullWidth={true}
            InputProps = {{style: {color:"white"}}}
          />
        )}
        rules={{ required: "Field required" }}
      />
      <div>
        <Button
          onClick={sendRequestButtonProp}
          variant="contained"
          className={styles.inputButton1}
          data-cy="send_Button"
          type="submit"
        >
          Send
        </Button>
        {pressed && (
          <Button
            onClick={changePressed}
            variant="contained"
            className={styles.inputButton2}
            data-cy="reset_Button"
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};
export default InputForm;
