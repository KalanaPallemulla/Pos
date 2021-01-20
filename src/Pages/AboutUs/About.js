import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Photo from "../../Images/AboutUs.jpg";
import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import A1 from "../../Images/A1.jpg";
import A2 from "../../Images/A2.jpg";
import A3 from "../../Images/A3.jpg";
import InfoIcon from "@material-ui/icons/Info";
import "../../index.css";

const useStyle = makeStyles((theme) => ({
  cont: {
    backgroundColor: "white",
    borderRadius: "20px",
    padding: "30px",
    marginTop: "50px",

    // marginTop: "123px",
  },
  fTxt: {
    fontSize: "22px",
    color: "#222222",
    fontFamily: "AirbnbCerealBold",
    fontWeight: "700",
    // marginTop: "20px",
  },
  sTxt: {
    fontFamily: "AirbnbCerealBold",

    fontWeight: "bold",
    fontSize: "17px",
    lineHeight: "26px",
    color: "#222222",
  },
  tTxt: {
    fontWeight: "400",
    color: "#565656",
    fontFamily: "AirbnbCerealMedium",
    lineHeight: "26px",
    fontSize: "15px",
    marginTop: "20px",
  },
  foTxt: {
    fontSize: "25px",
    color: "#222222",
    textAlign: "center",
    position: "relativ",
    paddingBottom: "22px",
    marginTop: "44px",
    fontFamily: "AirbnbCerealBold",
  },
  HeadingBar: {
    minHeight: 60,
    position: "static",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // marginTop: "-19px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // marginTop: "-11px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      // marginTop: "-11px",
    },
    fontFamily: "AirbnbCerealBook",
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
  },
}));

function AboutUs() {
  const classes = useStyle();

  return (
    <div>
      <Header />
      <Grid container xs={12}>
        <Grid
          container
          md={12}
          sm={12}
          xs={12}
          style={{ backgroundColor: "black" }}
          className={classes.HeadingBar}
          alignContent="center"
          alignItems="center"
          position="fixed"
        >
          <Typography className={classes.textColor} variant="h4">
            <InfoIcon color="primary" />
            <b style={{ marginLeft: "10px", fontSize: "28px" }}>ABOUT US</b>
          </Typography>
        </Grid>
      </Grid>
      <Container component="main" maxWidth="md" className={classes.cont}>
        <CssBaseline />
        <Grid container>
          <Grid
            container
            direction="row"
            item
            md={12}
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <Typography>
                <h2 className={classes.fTxt}>
                  WELCOME TO{" "}
                  <b style={{ color: "#ffa000" }}>FAMILY CARS MALABE</b>
                </h2>
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                <h4 clh4ssName={classes.sTxt}>
                  We offer high quality vehicles at unbelievable prices &
                  creates pleasant buying experience.
                </h4>
              </Typography>
              <Typography style={{ marginTop: "20px" }}>
                <p className={classes.fiTxt}>
                  Best choice for buying and selling Cars, Vans, Cabs, Jeeps,
                  Trucks, Buses. Family Cars Malabe opened to public on 12th
                  September 2019, Proud to be the new upcoming leading
                  Registered and Unregistered vehicle dealing company in
                  automobile industry in Malabe. The company that always
                  dedicates their heart and soul for pleasing the customers with
                  satisfaction, under three partners who are highly experienced
                  in selling cars for past fifteen years. We providing you with
                  our trust for best care vehicles to our customers…. You can
                  find us in Malabe, Kaduwella rd near Chandrika Kumarathunga
                  mawatha, Malabe. You also can contact our hotline 0112407555
                  or 0112407888
                </p>
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={Photo} alt="Photo" style={{ width: "100%" }}></img>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container component="main" maxWidth="md">
        <CssBaseline />

        <Grid Container style={{ textAlign: "center" }}>
          <Typography>
            <h2 className={classes.foTxt}>Meet Our Team</h2>
          </Typography>

          <Grid
            container
            direction="row"
            item
            md={12}
            justify="space-between"
            alignItems="center"
            style={{ marginBottom: "30px" }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <div
                style={{
                  backgroundColor: "white",
                  margin: "30px",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={A1}
                  alt="A1"
                  style={{ width: "75%", marginTop: "20px" }}
                ></img>
                <Typography>
                  <h4>NALIN FERNANDO</h4>
                  <h4>071 5 319 577</h4>
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <div
                style={{
                  backgroundColor: "white",
                  margin: "30px",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={A2}
                  alt="A2"
                  style={{ width: "75%", marginTop: "20px" }}
                ></img>
                <Typography>
                  <h4>SAKETHA BATALANGALA</h4>
                  <h4>077 7 351 374</h4>
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <div
                style={{
                  backgroundColor: "white",
                  margin: "30px",
                  borderRadius: "20px",
                }}
              >
                <img
                  src={A3}
                  alt="A3"
                  style={{ width: "75%", marginTop: "20px" }}
                ></img>
                <Typography>
                  <h4>MANJULA THEWAHETTI</h4>
                  <h4>077 7 597 502</h4>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Grid>
        <Footer />
      </Grid>
    </div>
  );
}

export default AboutUs;
