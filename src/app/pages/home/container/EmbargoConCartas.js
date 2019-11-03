import React, { Component } from "react";

import { Grid, Button, ButtonGroup } from "@material-ui/core";
import VisualizadorDocumento from "../component/VisualizadorDocumento";
import FileNavigationButtons from "../component/FileNavigationButtons";
import HerramientasTablas from "../component/HerramientasTablas";
import AñadirColumnas from "../component/AñadirColumnas";
import FormularioValidacionDatosEmbargo from "../component/FormularioValidacionDatosEmbargo";

class EmbargoConCartas extends Component {
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
          <Grid item container xs={12} justify="space-between">
            <Grid item>
            <ButtonGroup
              color="primary"
              size="large"
              aria-label="large outlined secondary button group"
            >
              <Button>2 Embargo Realizado</Button>
              <Button disabled>Embargo no posible</Button>
              <Button>1 No es embargable</Button>
            </ButtonGroup>
            </Grid>
            <Grid item>
              <Button>Ir al escritorio</Button>
            </Grid>
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

export default EmbargoConCartas;
