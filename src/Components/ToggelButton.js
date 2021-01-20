import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(2),
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      maxWidth: 280,
      borderRadius: "40px",
    },
  })
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="center">
          <Grid spacing={2}>
            <NavLink to="/Inventorynew">
              <Button
                size="large"
                variant="outlined"
                color="primary"
                style={{ borderRadius: "40px" }}
              >
                IN SALE
              </Button>
            </NavLink>
          </Grid>
          <Grid md={1} sm={1} xs={1}></Grid>

          <Grid spacing={2}>
            <NavLink to="/CustomerInventory">
              <Button
                size="large"
                variant="outlined"
                color="primary"
                style={{ borderRadius: "40px" }}
              >
                BY USERS
              </Button>
            </NavLink>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
