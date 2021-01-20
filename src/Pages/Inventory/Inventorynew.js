import React, { useEffect, useState } from "react";
import {
  Badge,
  Fab,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  Container,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HeadsetIcon from "@material-ui/icons/Headset";

import CarCard from "../../Components/CarCard";
import Search from "../../Components/SearchNew";

import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import ToggelButton from "../../Components/ToggelButton";

const useStyles = makeStyles((theme) => ({
  textColor: {
    color: "white",
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
    },
  },
  HeadingBar: {
    minHeight: 60,
    position: "static",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: "-19px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginTop: "-11px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      marginTop: "-11px",
    },
  },
  margins: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  searchBar: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      alignContent: "center",
      width: "100vh",
    },
  },
  endGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function () {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <ToggelButton />

        <Grid container justify="center" alignContent="center">
          <Grid item style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Search />
          </Grid>{" "}
          <Grid md={1}></Grid>
          <Grid item style={{ marginTop: "20px" }}>
            <CarCard />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
