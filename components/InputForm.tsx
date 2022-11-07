import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { Control } from "react-hook-form";
import { IFormInput } from "../pages";
import styles from "../styles/styles.module.css";
import { TextFieldController } from "./TextFieldController";

export interface InputFormProps {
  control: Control<IFormInput, any>;
  commonCardVisible: boolean;
  changeCardVisible(): void;
}
const InputForm = ({
  control,
  commonCardVisible,
  changeCardVisible,
}: InputFormProps) => {
  return (
    <>
      <div className={styles.box}>
        <Card sx={{ minWidth: 200, maxWidth: 540 }}>
          <CardContent>
            <TextFieldController
              control={control}
              name="code"
              label="MermaidJS"
              variant="outlined"
            />
            <Button
              variant="contained"
              className={styles.inputButton1}
              data-cy="send_Button"
              type="submit"
              sx={{ mt: "20px" }}
            >
              Send
            </Button>
            {commonCardVisible && (
              <Button
                onClick={changeCardVisible}
                variant="text"
                className={styles.inputButton2}
                data-cy="reset_Button"
                sx={{ mt: "20px", ml: "360px" }}
              >
                Reset
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};
export default InputForm;
