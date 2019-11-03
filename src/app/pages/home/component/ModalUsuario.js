import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  TextField,
  Input,
  InputAdornment,
  IconButton,
  InputLabel,
  Switch,
  FormControlLabel,
  Button
} from "@material-ui/core";
import clsx from "clsx";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const ModalUsuario = () => {
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
    },
    root: {
      display: "flex",
      flexWrap: "wrap"
    },
    margin: {
      margin: theme.spacing(1)
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    textField: {
      width: 200
    }
  }));

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2013-08-18T21:11:53")
  );
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const [values, setValues] = React.useState({
    password: ""
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Grid
      container
      item
      xs={12}
      justify="center"
      spacing={4}
      direction="column"
    >
      <Grid container item direction="row" spacing={4}>
        <Grid item xs={6}>
          <TextField
            id="standard-dense"
            label="Nombre"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="standard-dense"
            label="Apellido"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
          />
        </Grid>
      </Grid>
      <Grid container item direction="row" spacing={4} alignItems="flex-end">
        <Grid item xs={6}>
          <TextField
            id="standard-dense"
            label="Correo"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      <br />
      <Grid container item justify="space-around">
        <Grid item>
          <FormControlLabel
            control={<Switch value="checkedC" />}
            label="Estado"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            className={classes.button}
          >
            Subir foto
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ModalUsuario;
