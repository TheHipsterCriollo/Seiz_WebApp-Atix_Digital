import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Paper, Grid } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { CheckCircle } from "@material-ui/icons";

const SubirArchivos = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "90%",
      padding: theme.spacing(3, 2)
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    card: {
      maxWidth: 345
    },
    media: {
      height: 140
    },
    rootProgress: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  }));

  function getSteps() {
    return [
      "Revisa los archivos que subiste",
      "Subiendo archivos",
      "Ya puedes empezar a confirmar"
    ];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <Grid
            container
            direction="row"
            spacing={4}
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require("../source/images/ejemploEmbargo.jpg")}
                    title="Embargo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                      Embargo 1
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={require("../source/images/ejemploEmbargo.jpg")}
                    title="Embargo"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h5">
                      Embargo 2
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid
            container
            direction="row"
            spacing={4}
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <div className={classes.rootProgress}>
                <LinearProgress color="secondary" />
              </div>
            </Grid>
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5">
                Estamos subiendo tus archivos
              </Typography>
              <br />
              <Typography variant="h6">
                Puedes ir por un café mientras nos encargamos de lo más difícil
              </Typography>
            </Grid>
          </Grid>
        );
      case 2:
        return (
          <Grid
            container
            direction="row"
            spacing={4}
            justify="center"
            alignItems="center"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <CheckCircle style={{ fontSize: "250" }} color="secondary" />
              <br />
              <Typography variant="h4">
                ¡Ya estan listos los archivos!
              </Typography>
              <br />
              <Typography variant="h5">
                Haz click en Analizar para empezar a confirmar,¡Ánimos!
              </Typography>
            </Grid>
          </Grid>
        );
      default:
        return "Unknown stepIndex";
    }
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item container xs={12} justify="center" alignItems="center">
        <Grid item>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid item>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.backButton}
          >
            Atrás
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {activeStep === steps.length - 1 ? "Analizar" : "Siguiente"}
          </Button>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid item xs={12}>
        {getStepContent(activeStep)}
      </Grid>
    </Grid>
  );
};

export default SubirArchivos;
