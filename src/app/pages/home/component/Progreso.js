import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Button, Grid } from "@material-ui/core";

const Progreso = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      width: "100%",
      "& > * + *": {
        marginTop: theme.spacing(2)
      }
    }
  }));

  const classes = useStyles();
  const [completed, setCompleted] = React.useState(0);

  React.useEffect(() => {
    function progress() {
      setCompleted(oldCompleted => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Button>Ir al escritorio</Button>
        </Grid>
        <Grid item xs={10}>
          <LinearProgress
            variant="determinate"
            value={completed}
            color="secondary"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Progreso;
