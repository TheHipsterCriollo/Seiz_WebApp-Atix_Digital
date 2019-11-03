import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Search, Add } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import clsx from "clsx";
import { FormControl, Typography, Paper, FormGroup } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";

const FormularioValidacionDatosEmbargo = () => {
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
      padding: theme.spacing(3, 2)
    }
  }));

  const classes = useStyles();

  return (
    <form>
      <br />
      <Typography variant="h5">Demandantes</Typography>
      <Grid container>
        <Paper className={classes.root}>
          <Grid container spacing={4} alignItems="flex-end">
            <Grid item xs={6}>
              <TextField
                id="standard-dense"
                label="Demandante"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl>
                <InputLabel htmlFor="demo-simple-select-label">
                  Tipo ID
                </InputLabel>
                <Select
                  native
                  value="TipoID"
                  input={<Input id="demo-simple-select-label" />}
                >
                  <option value="Tipo ID" />
                  <option value={1}>Cedula Ciudadanía</option>
                  <option value={2}>NIT</option>
                  <option value={3}>Pasaporte</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="standard-dense"
                label="Numero ID"
                className={clsx(classes.textField, classes.dense)}
                margin="dense"
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Button color="secondary">
          <Add style={{ fontSize: 32 }} />
        </Button>
      </Grid>
      <br />
      <Typography variant="h5">Demandados</Typography>
      <Paper className={classes.root}>
        <Grid container spacing={4} alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              id="standard-dense"
              label="Demandado"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl>
              <InputLabel htmlFor="demo-simple-select-label">
                Tipo ID
              </InputLabel>
              <Select
                native
                value="TipoID"
                input={<Input id="demo-simple-select-label" />}
              >
                <option value="Tipo ID" />
                <option value={1}>Cedula Ciudadanía</option>
                <option value={2}>NIT</option>
                <option value={3}>Pasaporte</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Numero ID"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Oficio"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Ciudad"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Direccion"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Monto"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Cuenta"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
        </Grid>
      </Paper>
      <br />
      <Typography variant="h5">Embargo</Typography>
      <Paper className={classes.root}>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <TextField
              id="standard-dense"
              label="Fecha"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-dense"
              label="Entidad Remitente"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="standard-dense"
              label="Ref. de embargo"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
            />
          </Grid>
        </Grid>
      </Paper>
      <Button color="secondary">
        <Add style={{ fontSize: 32 }} />
      </Button>
      <br />
      <Grid container item justify="flex-end">
        <Button variant="contained" color="primary" size="large">
          Confirmar
        </Button>
      </Grid>
    </form>
  );
};

export default FormularioValidacionDatosEmbargo;
