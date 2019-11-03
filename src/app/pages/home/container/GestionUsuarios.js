import React, { Component } from "react";
import MenuBar from "../component/MenuBar";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Usuario from "../component/Usuario";
import usuarios from "../source/usuarios";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Search } from "@material-ui/icons";

const GestionUsuarios = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "100%"
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 200
    },
    grid: {
      width: "60%"
    }
  }));

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2013-08-18T21:11:53")
  );

  const user = usuarios;
  return (
    <Grid container>
      <Typography variant="h4"> Gestion de usuarios</Typography>
      <br />
      <Grid container alignItems="flex-end" justify="center">
        <Grid item xs={3}>
          <TextField
            id="standard-dense"
            label="Buscar"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
          />
        </Grid>
        <Grid item xs={1}>
          <Button>
            <Search className={clsx(classes.leftIcon, classes.iconSmall)} />
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={4} justify="flex-start">
        {user.map((elem, index) => {
          return (
            <Grid item xs={2}>
              <br />
              <Usuario
                key={index}
                nombre={elem.nombre}
                apellido={elem.apellido}
                email={elem.email}
                contraseña={elem.contraseña}
                foto={elem.foto}
                estado={elem.estado}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default GestionUsuarios;
