import {
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

//MUI Icons
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DoneIcon from "@material-ui/icons/Done";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import "../index.css";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import backgroundFooter from "./Images/background_footer1.jpg";

const useStyles = makeStyles((theme) => ({
  Hedding: {
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "AirbnbCerealBook",
    color: "white",
  },
  subText: {
    textColor: "#868686",
    textSize: "12px",
    fontFamily: "AirbnbCerealBook",
  },
  text1: {
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "AirbnbCerealBook",
  },

  topicMargin: {
    [theme.breakpoints.up("md")]: {
      marginTop: "12px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
    },
  },
  topicMargin1: {
    [theme.breakpoints.up("md")]: {
      marginTop: "4px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "6px",
    },
  },
  topicMargin2: {
    [theme.breakpoints.up("md")]: {
      marginTop: "30px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "6px",
    },
  },
  xsMargins: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "15px",
    },
  },

  innerMargins: {
    color: "#9e9e9e",
    [theme.breakpoints.up("md")]: {
      marginTop: "5px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  innerMargins1: {
    color: "#9e9e9e",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  innerMargins2: {
    color: "#9e9e9e",
    [theme.breakpoints.up("md")]: {
      marginTop: "20px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },
  textColor: {
    color: "white",
    fontFamily: "AirbnbCerealBook",
  },
  backgroundFooter: {
    backgroundImage: `url(${backgroundFooter})`,
  },
  head: {
    [theme.breakpoints.up("md")]: {
      marginTop: "40px",
    },
  },
  foot: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "20px",
    },
  },
  head1: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "50px",
    },
  },
  iconMargin: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="false" className={classes.backgroundFooter}>
        <Container maxWidth="lg">
          <Grid container sm={12}>
            <Grid item sm={4} xs={12}>
              <Typography
                style={{ textAlign: "center" }}
                className={`${classes.Hedding} ${classes.xsMargins} ${classes.head} ${classes.head1}`}
              >
                CONTACT INFO
              </Typography>

              <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.topicMargin}
              >
                <Grid>
                  <Grid
                    container
                    direction="row"
                    className={classes.innerMargins2}
                  >
                    <LocationOnIcon></LocationOnIcon>
                    <Typography
                      className={`${classes.subText} ${classes.iconMargin}`}
                    >
                      318/5/1 Kaduwela Rd, Malabe 10115
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    className={classes.innerMargins2}
                  >
                    <PhoneIcon />
                    <Typography
                      className={`${classes.subText} ${classes.iconMargin}`}
                    >
                      011 2 407 555
                    </Typography>
                  </Grid>
                  <Grid
                    container
                    direction="row"
                    className={classes.innerMargins2}
                  >
                    <MailOutlineIcon />
                    <Typography
                      className={`${classes.subText} ${classes.iconMargin}`}
                    >
                      info@familycarslk.com
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid item sm={4} xs={12}>
              <Typography
                style={{ textAlign: "center" }}
                className={`${classes.Hedding} ${classes.xsMargins} ${classes.head}`}
              >
                LATEST TWEETS
              </Typography>
            </Grid> */}
            <Grid item sm={4} xs={12} style={{ marginBottom: "20px" }}>
              <Typography
                style={{ textAlign: "center" }}
                className={`${classes.Hedding} ${classes.xsMargins} ${classes.head}`}
              >
                OPEN HOURS
              </Typography>
              <Typography
                style={{ textAlign: "center", color: "#F4DC00" }}
                className={`${classes.text1} ${classes.topicMargin2}`}
              >
                Sales Department
              </Typography>
              <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.topicMargin1}
              >
                <Grid>
                  <Grid container className={classes.innerMargins}>
                    <Typography className={classes.subText}>
                      Mon-Sat : 8:00am - 5:00pm
                    </Typography>
                  </Grid>
                  <Grid container className={classes.innerMargins}>
                    <Typography className={classes.subText}>
                      Sunday is closed
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Typography
                style={{ textAlign: "center", color: "#F4DC00" }}
                className={`${classes.text1} ${classes.topicMargin2}`}
              >
                Service Department
              </Typography>
              <Grid
                container
                direction="column"
                alignItems="center"
                className={classes.topicMargin1}
              >
                <Grid>
                  <Grid container className={classes.innerMargins}>
                    <Typography className={classes.subText}>
                      Mon-Sat : 8:00am - 5:00pm
                    </Typography>
                  </Grid>
                  <Grid container className={classes.innerMargins}>
                    <Typography className={classes.subText}>
                      Sunday is closed
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={4} xs={12} className={classes.foot}>
              <Typography
                style={{ textAlign: "center" }}
                className={`${classes.Hedding} ${classes.xsMargins} ${classes.head}`}
              >
                NEWSLETTER
              </Typography>
              <Grid
                container
                direction="row"
                className={`${classes.topicMargin} ${classes.innerMargins1}`}
                alignItems="center"
                alignContent="center"
                justifyContent="center"
              >
                <Grid>
                  <TextField
                    id="outlined-basic"
                    placeholder="Email"
                    variant="filled"
                    // color="black"
                    style={{ backgroundColor: "white", textAlign: "center" }}
                  />
                  <Button
                    color="secondary"
                    style={{ backgroundColor: "#F4DC00", height: "56px" }}
                  >
                    <DoneIcon />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Grid
        container
        direction="raw"
        justify="space-between"
        className={classes.footerEnd}
        // componet={Paper}
        className={classes.GridBackground2}
        square
        style={{ backgroundColor: "black", padding: "20px" }}
      >
        <Grid>
          <Typography
            className={classes.textColor}
            style={{ marginTop: "12px" }}
          >
            © 2020 Family Cars Malabe, Sri Lanka | All Rights Reserved.
          </Typography>
        </Grid>
        <Grid className={classes.icon}>
          <IconButton href="https://www.facebook.com">
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.twitter.com">
            <TwitterIcon color="primary" />
          </IconButton>

          <IconButton href="https://www.linkedin.com">
            <LinkedInIcon color="primary" />
          </IconButton>

          <IconButton href="https://www.instagram.com">
            <InstagramIcon color="primary" />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}
