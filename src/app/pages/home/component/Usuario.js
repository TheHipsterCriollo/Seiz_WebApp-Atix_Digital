import React from "react";
import ModalUsuario from "./ModalUsuario";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Switch,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid
} from "@material-ui/core";

import { Link } from "react-router-dom";

const Usuario = props => {
  const useStyles = makeStyles({
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    }
  });

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
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.foto}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.nombre}
            {props.apellido}
          </Typography>
          <Typography variant="subtitle" color="textSecondary" component="p">
            {props.email}
          </Typography>
          {props.estado === "activo" ? (
            <Switch
              checked={true}
              value="estado"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          ) : (
            <Switch
              checked={false}
              value="estado"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          <Typography variant="h6">Editar</Typography>
        </Button>
      </CardActions>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Editar usuario</DialogTitle>
        <DialogContent>
          <ModalUsuario />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default Usuario;
