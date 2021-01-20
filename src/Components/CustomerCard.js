import React from "react";
import custmerImage from "../Images/customer.jpg";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import { Card, Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  Cimage: {
    [theme.breakpoints.up("md")]: {
      width: 400,
      Height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 350,
      Height: 275,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
      Height: 250,
    },
  },
  root: {
    [theme.breakpoints.up("md")]: {
      maxWidth: 400,
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: 350,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 250,
    },
    borderRadius: "20px",
    padding: "20px",
    backgroundColor: "#616161",
  },
}));

export default function CustomerCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <Grid
          container
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <img
            className={classes.Cimage}
            src={custmerImage}
            alt="customerImage"
          />
        </Grid>
        <Grid>
          <DirectionsCarIcon />
          Today 31th July we celebrate another amazing sell of our vehicle to
          this lovely Couple…. Wagon R 2017
        </Grid>
      </Card>
    </div>
  );
}
