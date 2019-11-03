import React, { Component } from "react";
import MenuBar from "../component/MenuBar";
import GeDatosTabla from "../component/GeDatosTabla";
import FiltrosInteligentes from "../component/FiltrosInteligentes";
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, Mail } from "@material-ui/icons";

var data = require("../source/cartas.json");

const Cartas = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
    },
    table: {
      minWidth: 650
    }
  }));

  const createData = (
    IDEmbargo,
    Estado,
    Demandado,
    ID,
    Monto,
    Cuenta,
    Demandante,
    ID2,
    Cartas,
    Opciones
  ) => {
    return {
      IDEmbargo,
      Estado,
      Demandado,
      ID,
      Monto,
      Cuenta,
      Demandante,
      ID2,
      Cartas,
      Opciones
    };
  };

  const rows = [
    createData(
      "as11asd1a3s",
      "confirmado",
      "jorge",
      "123456789",
      "10000000",
      "7774447785",
      "juan",
      "987654321",
      3
    ),
    createData(
      "g5d1vsd8vs6",
      "anulado",
      "jorge2",
      "123456789",
      "10000000",
      "7774447785",
      "juan",
      "987654321",
      2
    )
  ];

  const classes = useStyles();
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
      <Grid
        container
        item
        xs={12}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h4">Cartas</Typography>
        </Grid>
        <Grid item>
          <Button onClick={handleClickOpen}>
            <Typography variant="h6">Filtros</Typography>
          </Button>
        </Grid>
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
        <Paper className={classes.root}>
          <Grid container>
            <Table stickyHeader size="medium" className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Demandado</TableCell>
                  <TableCell align="right">Demandante</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Monto</TableCell>
                  <TableCell align="right">Cuenta</TableCell>
                  <TableCell align="right">Demandante</TableCell>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Cartas</TableCell>
                  <TableCell align="right">Opciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow id={row.name} key={index}>
                    <TableCell component="th" scope="row">
                      {row.IDEmbargo}
                    </TableCell>
                    <TableCell align="right">{row.Demandado}</TableCell>
                    <TableCell align="right">{row.ID}</TableCell>
                    <TableCell align="right">{row.Monto}</TableCell>
                    <TableCell align="right">{row.Cuenta}</TableCell>
                    <TableCell align="right">{row.Demandante}</TableCell>
                    <TableCell align="right">{row.ID2}</TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        className={classes.button}
                        startIcon={<Mail />}
                      >
                        {row.Cartas}
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                      >
                        <Edit fontSize="large" />
                      </IconButton>
                      <Button size="small" className={classes.margin}>
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Cartas;
