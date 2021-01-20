import React from "react";
import {
  makeStyles,
  Container,
  Typography,
  Grid,
  CssBaseline,
  Card,
  Divider,
} from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import Photo from "../../Images/Home1.jpg";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

//carImages

import custmerImage from "../../Images/customer.jpg";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import CustomerCard from "../../Components/CustomerCard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import News from "../../Components/News";
import { NavLink } from "react-router-dom";
import AddvImage from "../../Images/background_footer2.jpg";

import ImageSlider from "../../Components/ImageSlider";
import FCars from "../../Components/FCars";
import EmojiTransportationIcon from "@material-ui/icons/EmojiTransportation";

const useStyle = makeStyles((theme) => ({
  cont: {
    display: "flex",
    margin: "0px",
    padding: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${Photo})`,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      height: "100px",
    },
    [theme.breakpoints.down("sm")]: { height: "300px", marginTop: "-7px" },

    [theme.breakpoints.up("md")]: { height: "550px", marginTop: "-10px" },
  },
  txt: {
    [theme.breakpoints.down("xs")]: { fontSize: "15px" },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    color: "white",
    fontFamily: "AirbnbCerealBook",
  },

  mrgT: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "0px",
    },
    [theme.breakpoints.down("sm")]: { marginTop: "-5px" },

    [theme.breakpoints.up("md")]: { marginTop: "-10px" },
  },
  searchButton: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "40px",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "40px",
    },
  },
  carImages: {
    [theme.breakpoints.up("md")]: {
      width: 350,
      height: 240,
    },
  },
  Cimage: {
    [theme.breakpoints.up("md")]: {
      width: 600,
      Height: 500,
      marginLeft: -theme.spacing(8),
    },
    [theme.breakpoints.down("sm")]: {
      width: 500,
      Height: 600,
    },
    [theme.breakpoints.down("xs")]: {
      width: 400,
      Height: 350,
      marginLeft: theme.spacing(6),
    },
  },
  record: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(8),
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(8),
      marginTop: theme.spacing(5),
    },
  },
  HeadingBar: {
    minHeight: 50,
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
    fontFamily: "AirbnbCerealBook",
  },
  cCard: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
    },
  },
  // addv: {
  //   [theme.breakpoints.up("md")]: {
  //     maxHeight: "1450px",
  //     maxWidth: 480,
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     maxHeight: "1450px",
  //     maxWidth: 250,
  //   },
  //   [theme.breakpoints.down("xs")]: {
  //     maxHeight: 1000,
  //     maxWidth: "",
  //   },
  // },
  Fcars: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  },
}));

function Home() {
  const classes = useStyle();
  return (
    <>
      <Header />

      <Container maxWidth="false" className={classes.cont}>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item>
            <Typography className={classes.txt}>
              <b style={{ color: "yellow" }}>Best Choice</b> <b>For</b>
            </Typography>
            <Typography className={`${classes.txt}  ${classes.mrgT}`}>
              <b>Buying and Selling Vehicles</b>
            </Typography>
          </Grid>

          <Grid item>
            <Grid item>
              <NavLink to="/Inventorynew">
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  className={classes.searchButton}
                  startIcon={<SearchIcon style={{ color: "black" }} />}
                  md={6}
                  style={{
                    color: "white",
                    fontweight: "bold",
                    height: "50px",
                    borderRadius: "30px",
                  }}
                >
                  <b
                    style={{
                      fontSize: "21px",
                      fontFamily: "AirbnbCerealBook",
                      color: "black",
                    }}
                  >
                    Find Your Dream Vehicle
                  </b>
                </Button>
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid container xs={12}>
        <Grid
          container
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "black", padding: "10px" }}
          className={classes.HeadingBar}
          alignContent="center"
          alignItems="center"
          position="fixed"
        >
          <Typography className={classes.textColor} variant="h4">
            <EmojiTransportationIcon color="primary" />
            <b style={{ marginLeft: "10px", fontSize: "28px" }}>
              FEATURED CARS
            </b>
          </Typography>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid container direction="row" style={{ marginTop: "50px" }}>
          <Grid item md={8} sm={12} xs={12} justify="center">
            <Grid container md={12}>
              <Grid className={classes.Fcars} md={12}>
                <FCars />
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid md={1}></Grid>
          <Grid item md={3} sm={12} xs={12} container alignItems="center">
            <img
              className={classes.addv}
              src={AddvImage}
              style={{ width: "100%", margin: "10px" }}
            />
          </Grid>
        </Grid>
      </Container>

      <Grid style={{ height: "15px" }}></Grid>
      <Footer style={{ marginTop: "15px" }} />
    </>
  );
}

export default Home;
