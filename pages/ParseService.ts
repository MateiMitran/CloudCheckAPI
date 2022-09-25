import axios from "axios";

export default class ParseService {
  static parseCalculator(input: string) {

    axios.post("http://localhost:8080/parseCalculator", { input: "4+2"});
  }
}
