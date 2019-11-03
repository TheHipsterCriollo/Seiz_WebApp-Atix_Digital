import React from "react";

import { Snackbar, Button, IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";

const Notificaciones = ({ notificacion }) => {
  const useStyles = makeStyles(theme => ({
    close: {
      padding: theme.spacing(0.5)
    }
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      {/* La notificacion esta lista para usar, solo es generar
      un detonador que la active; en este caso, el boton funciona como detonador
      NOTA: al llamar al componente, pasarle el mensaje a notificar por 
      la prop "notificacion" */}
      <Button onClick={handleClick}>Open simple snackbar</Button>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{notificacion}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </div>
  );
};

export default Notificaciones;
