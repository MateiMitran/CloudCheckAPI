import MermaidRenderer from "components/MermaidRenderer";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import Navbar from "../components/Navbar";
import styles from "../styles/styles.module.css";

export interface IFormInput {
  code: string;
}

export default function Home() {
  const [code, setCode] = useState("");

  const defaultValues = {
    code: "```mermaid \n flowchart LR \n A o--o B \n B <--> C \n C x--x D \n ```",
  };

  const { handleSubmit, control, watch, reset } = useForm<IFormInput>({
    defaultValues,
  });

  const [cardVisible, setCardVisible] = useState(
    watch("code") !== defaultValues.code
  );

  function changeCardVisible() {
    setCardVisible(!cardVisible);
    reset({
      code: defaultValues.code || "",
    });
  }

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    setCode(data.code);
    setCardVisible(!cardVisible);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.leftSide}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputForm
            control={control}
            changeCardVisible={changeCardVisible}
            commonCardVisible={cardVisible}
          />
        </form>
      </div>
      <div className={styles.rightSide}>
        <>{cardVisible && <MermaidRenderer chart={code} />}</>
      </div>
    </div>
  );
}
