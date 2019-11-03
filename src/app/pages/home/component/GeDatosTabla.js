import React from "react";

import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@material-ui/core";

import Edit from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { FileCopy, Description } from "@material-ui/icons";

const GeDatosTabla = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
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
    Tipo,
    Cantidad
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
      Tipo,
      Cantidad
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
      "Embargo",
      " "
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
      "Coactivo",
      "7000"
    ),
    createData(
      "gng5s8s4dvs6d",
      "pendiente",
      "jorge3",
      "123456789",
      "10000000",
      "7774447785",
      "juan",
      "987654321",
      "Coactivo",
      "2531"
    ),
    createData(
      "n5s1ac9dfa",
      "pendiente",
      "jorge4",
      "123456789",
      "10000000",
      "7774447785",
      "juan",
      "987654321",
      "Embargo",
      " "
    )
  ];

  const _setEstado = row => {
    switch (row.Estado) {
      case "confirmado":
        return (
          <div
            className="ball"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20px",
              backgroundColor: "green",
              margin: "auto"
            }}
          ></div>
        );
      case "pendiente":
        return (
          <div
            className="ball"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20px",
              backgroundColor: "yellow",
              margin: "auto"
            }}
          ></div>
        );
      case "anulado":
        return (
          <div
            className="ball"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20px",
              backgroundColor: "red",
              margin: "auto"
            }}
          ></div>
        );

      default:
        return (
          <div
            className="ball"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "20px",
              backgroundColor: "grey",
              margin: "auto"
            }}
          ></div>
        );
        break;
    }
  };

  const _setTipo = row => {
    console.log(row.Tipo);
    switch (row.Tipo) {
      case "Embargo":
        return (
          <Button
            variant="contained"
            disabled
            color="secondary"
            className={classes.button}
            startIcon={<Description />}
          >1</Button>
        );
      case "Coactivo":
        return (
          <Button
            variant="contained"
            disabled
            color="secondary"
            className={classes.button}
            startIcon={<FileCopy />}
          >
            {row.Cantidad}
          </Button>
        );
      default:
        return null;
    }
  };

  const classes = useStyles;

  return (
    <Paper className={classes.root}>
      <Grid container>
        <Table stickyHeader size="medium" className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Estado</TableCell>
              <TableCell align="right">Demandado</TableCell>
              <TableCell align="right">Demandante</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Monto</TableCell>
              <TableCell align="right">Cuenta</TableCell>
              <TableCell align="right">Demandante</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Opciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow id={row.name} key={index}>
                <TableCell component="th" scope="row">
                  <Button>{row.IDEmbargo}</Button>
                </TableCell>
                <TableCell align="right">
                  <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>{_setEstado(row)}</Grid>
                    <br />
                    <Grid item>{_setTipo(row)}</Grid>
                  </Grid>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.Demandado}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.ID}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.Monto}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.Cuenta}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.Demandante}</Button>
                </TableCell>
                <TableCell align="right">
                  <Button>{row.ID2}</Button>
                </TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" className={classes.margin}>
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
  );
};

export default GeDatosTabla;
