import {
  Container,
  CssBaseline,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import NewsCard from "../../Components/News";
import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";

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
}));

export default function News() {
  const classes = useStyles();
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
            <AnnouncementIcon color="primary" />
            <b style={{ marginLeft: "10px", fontSize: "28px" }}>NEWS</b>
          </Typography>
        </Grid>

        <Grid container justify="center" style={{ marginBottom: "20px" }}>
          <NewsCard />
        </Grid>
      </Grid>
      <Divider />
      <Footer />
    </div>
  );
}
