import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  PlaylistAddCheck,
  FilterNone,
  CancelPresentation
} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const Resumen = () => {
  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(1)
    },
    iconSmall: {
      fontSize: 20
    }
  }));

  const classes = useStyles;

  return (
    <ButtonGroup size="large">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        <List style={{ fontSize: 42 }} className={clsx(classes.leftIcon, classes.iconSmall)} />4 Embargos
        Totales
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className={classes.button}
      >
        <PlaylistAddCheck style={{ fontSize: 42 }}
          className={clsx(classes.leftIcon, classes.iconSmall)}
        />
        1 Embargos Confirmados
      </Button>
      <Button
        variant="contained"
        color="default"
        size="large"
        className={classes.button}
      >
        <FilterNone style={{ fontSize: 42 }} className={clsx(classes.leftIcon, classes.iconSmall)} />2
        Embargos Pendientes
      </Button>
      <Button
        variant="contained"
        color="default"
        size="large"
        className={classes.button}
      >
        <CancelPresentation style={{ fontSize: 42 }}
          className={clsx(classes.leftIcon, classes.iconSmall)}
        />
        1 Embargos Anulados
      </Button>
    </ButtonGroup> 
  );
};

export default Resumen;
