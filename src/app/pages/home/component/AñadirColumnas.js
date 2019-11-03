import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core"

const AñadirColumnas = () => {
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }));

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
    <div>
      <Grid container justify="center">
      <Button onClick={handleClickOpen}>
        <Typography variant="h6">Asignar columnas (coactivos)</Typography>
      </Button>
      </Grid>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Asigna las columnas a un valor</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Nombre</InputLabel>
              <Select
                native
                value="nombreCol"
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={1}>Columna 1</option>
                <option value={2}>Columna 2</option>
                <option value={3}>Columna 3</option>
                <option value={3}>Columna 4</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Tipo ID</InputLabel>
              <Select
                native
                value="tipoIDCol"
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={1}>Columna 1</option>
                <option value={2}>Columna 2</option>
                <option value={3}>Columna 3</option>
                <option value={3}>Columna 4</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Numero ID</InputLabel>
              <Select
                native
                value="NoIDCol"
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={1}>Columna 1</option>
                <option value={2}>Columna 2</option>
                <option value={3}>Columna 3</option>
                <option value={3}>Columna 4</option>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="demo-dialog-native">Monto</InputLabel>
              <Select
                native
                value="MontoCol"
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option value="" />
                <option value={1}>Columna 1</option>
                <option value={2}>Columna 2</option>
                <option value={3}>Columna 3</option>
                <option value={3}>Columna 4</option>
              </Select>
            </FormControl>
          </form>
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
    </div>
  );
};

export default AñadirColumnas;
