import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import { TableChart, ViewColumn, YoutubeSearchedFor } from "@material-ui/icons"

class HerramientasTablas extends Component {
  render() {
    return (
      
      <Grid container direction="column" justify="space-between" alignItems="center">
      <Grid item>
        <Button>
          <TableChart color="primary" style={{ fontSize: 28 }} />
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <ViewColumn color="primary" style={{ fontSize: 28 }} />
        </Button>
      </Grid>
      <Grid item>
        <Button>
          <YoutubeSearchedFor color="primary" style={{ fontSize: 28 }} />
        </Button>
      </Grid>
    </Grid>
    );
  }
}

export default HerramientasTablas;
