import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Search, CloudUpload, CloudDownload } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Typography, Paper } from "@material-ui/core";
import Notificaciones from "../component/Notificaciones";

const ManejoDatos = () => {
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
    },
    card: {
      minWidth: 275
    }
  }));

  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2013-08-18T21:11:53")
  );
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <Grid container alignItems="center" justify="center">
      <Grid container item xs={6} justify="content" alignItems="center">
        <Card className={classes.card}>
          <CardContent>
            <Grid
              container
              direction="column"
              justify="content"
              alignItems="center"
            >
              <Grid item>
                <CloudUpload style={{ fontSize: 100 }} color="primary" />
              </Grid>
              <br />
              <Grid item>
                <Typography variant="h5">
                  Arrastra los archivos para comenzar a analizar
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container item xs={6} alignItems="center" justify="center">
        <Paper className={classes.root}>
          <form>
            <Grid container alignItems="center" justify="center">
              <Grid
                container
                direction="column"
                justify="content"
                alignItems="center"
              >
                <Grid item>
                  <CloudDownload style={{ fontSize: 100 }} color="primary" />
                </Grid>
                <br />
                <Grid item>
                  <Typography variant="h5">
                   Descarga los datos. Puedes filtrarlos antes de descargar
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid item xs={5}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label="Desde"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
                <Grid item xs={5}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="mui-pickers-date"
                    label="Hasta"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                      "aria-label": "change date"
                    }}
                  />
                </Grid>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={4}
            >
              <Grid container justify="center" spacing={3}>
                <Grid item xs={5}>
                  <TextField
                    id="standard-dense"
                    label="Demandado"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                </Grid>
                <Grid item xs={5}>
                  <TextField
                    id="standard-dense"
                    label="Demandante"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                  />
                </Grid>
              </Grid>
              <Grid container justify="center" spacing={3}>
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
                    label="ID"
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
              </Grid>

              <Grid item container justify="flex-end" alignItems="flex-end">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                >
                  Descargar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ManejoDatos;
