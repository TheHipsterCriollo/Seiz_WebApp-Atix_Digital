import React, { Component } from "react";

import FileNavigationButtons from "../component/FileNavigationButtons";
import VisualizadorDocumento from "../component/VisualizadorDocumento";
import FormularioValidacionDatosEmbargo from "../component/FormularioValidacionDatosEmbargo";
import HerramientasTablas from "../component/HerramientasTablas";
import AñadirColumnas from "../component/AñadirColumnas";
import { Grid } from "@material-ui/core";

class ConfirmacionCarta extends Component {
  render() {
    return (
      <Grid container>
        <Grid container item xs={5}>
          <Grid container>
            <Grid item>
              <VisualizadorDocumento />
            </Grid>
            <Grid item xs={12}>
              <FileNavigationButtons />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <HerramientasTablas />
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={12}>
            <AñadirColumnas />
          </Grid>
          <br />
          <Grid item container justify="center" xs={12}>
            <FormularioValidacionDatosEmbargo />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default ConfirmacionCarta;
