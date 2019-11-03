import React from "react";
import { Button, Grid } from "@material-ui/core";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";

const FileNavigationButtons = () => {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item>
        <Button>
          <ArrowLeft style={{ fontSize: 36 }} />
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <ArrowRight style={{ fontSize: 36 }} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default FileNavigationButtons;
