import React, { Component } from "react";

import ConfirmacionCarta from "./ConfirmacionCarta";
import Progreso from "../component/Progreso";

class EvaluacionCarta extends Component {
  render() {
    return (
      <div>
        <Progreso />
        <br />
        <ConfirmacionCarta />
      </div>
    );
  }
}

export default EvaluacionCarta;
