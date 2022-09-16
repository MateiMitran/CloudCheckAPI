import SendIcon from "@mui/icons-material";
import { Button, IconButton, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
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
      <Card sx={{ minWidth: 200, maxWidth: 540 }}>
        <CardContent>
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
                // InputProps={{ style: { color: "white" } }}
              />
            )}
            rules={{ required: "Field required" }}
          />
          <Button
            startIcon={<SendIcon/>}
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
              variant="text"
              className={styles.inputButton2}
              data-cy="reset_Button"
            >
              Reset
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
export default InputForm;
