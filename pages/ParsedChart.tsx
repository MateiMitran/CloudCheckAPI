import axios, { AxiosResponse } from "axios";
import Chart from "./Chart";

const inputFlow = `
  flowchart TB
    c1-->a2
    a1-->a2
    b1-->b2
    c1-->c2
`;

const inputSequence = `
sequenceDiagram
par Alice to Bob
    Alice->>Bob: Go help John
and Alice to John
    Alice->>John: I want this done today
    par John to Charlie
        John->>Charlie: Can we do this today?
    and John to Diana
        John->>Diana: Can you help us today?
    end
end`;

const inputClass = `classDiagram
classA --|> classB : implements
classC --* classD : composition
classE --o classF : aggregation
classG ..> classH 
`;

const inputState = `stateDiagram-v2
[*] --> First
First --> Second
First --> Third

state First {
    [*] --> fir
    fir --> [*]
}
state Second {
    [*] --> sec
    sec --> [*]
}
state Third {
    [*] --> thi
    thi --> [*]
}`;

const inputER = `erDiagram
CAR ||--o{ NAMED-DRIVER : allows
CAR {
    string registrationNumber
    string make
    string model
}
PERSON ||--o{ NAMED-DRIVER : is
PERSON {
    string firstName
    string lastName
    int age
}`;

export default async function ParsedChart() {
  const response = await axios({
    url: "http://localhost:8080/parse",
    method: "POST",
    data: {
      input: inputER
    }
  })

  return response.data
 
}


const parsedChart = async (input: string) => {
  input = inputER;

}