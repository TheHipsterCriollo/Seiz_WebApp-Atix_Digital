import React, { Component } from "react";

import Resumen from "../component/Resumen";
import GeDatosTabla from "../component/GeDatosTabla";
import FiltrosInteligentes from "../component/FiltrosInteligentes";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const EscritorioMain = () => {
  var data = require("../source/datos.json");

  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%"
    },
    root2: {
      padding: theme.spacing(3, 2)
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    }
  }));

  const classes = useStyles;

  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = event => {
    setAge(Number(event.target.value) || "");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Typography variant="h4">Escritorio</Typography>
      </Grid>
      <br />
      <Grid container item justify="center">
        <Card className={classes.card}>
          <CardContent>
            <Grid item>
              <Typography variant="h5">
                Arrastra los archivos para comenzar a analizar
              </Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <br />
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Resumen />
        <Button onClick={handleClickOpen}>
          <Typography variant="h6">Filtros</Typography>
        </Button>
      </Grid>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Filtros</DialogTitle>
        <DialogContent>
          <FiltrosInteligentes accion="Filtrar" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <br />
      <Grid item xs={12}>
        <GeDatosTabla />
      </Grid>
    </Grid>
  );
};

export default EscritorioMain;
