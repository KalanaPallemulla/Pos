import React from "react";
import "../index.css";
//MUI
import Grid from "@material-ui/core/Grid";

//Components
import Appbar from "./Appbar";

//MUI
import { Typography, Divider } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

//MUI Icons
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  // Divider: {
  //   // marginTop: theme.spacing(2),
  // },
  // cout: {
  //   padding: "24px",
  //   backgroundColor: "white",
  // },
  // WelocomeText: {
  //   [theme.breakpoints.down("xs")]: {
  //     fontWeight: "bold",
  //     marginTop: theme.spacing(2),
  //     fontFamily: "AirbnbCerealBook",
  //     fontSize: "16px",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     fontWeight: "bold",
  //     marginTop: theme.spacing(2),
  //     fontFamily: "AirbnbCerealBook",
  //     fontSize: "20px",
  //   },
  // },
  // iconMargin: {
  //   [theme.breakpoints.up("md")]: {
  //     marginLeft: theme.spacing(1),
  //     fontSize: "20px",
  //     fontFamily: "AirbnbCerealBook",
  //   },
  //   [theme.breakpoints.up("sm")]: {
  //     marginLeft: theme.spacing(1),
  //     fontFamily: "AirbnbCerealBook",
  //   },
  // },
  container: {
    padding: "20px",
  },
  details: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "10px",
    },
  },
  topic: {
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
      alignContent: "center",
      margin: "center",
    },
  },
  headerText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  cont: {
    maxHeight: "10px",
  },
  headerSpacing: {
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
  },
  xs: {
    [theme.breakpoints.down("xs")]: { marginLeft: theme.spacing(2) },
    [theme.breakpoints.down("sm")]: { marginLeft: theme.spacing(2) },
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div>
      {/* <Grid container className={classes.cout}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Grid>
            <Grid container direction="row">
              <Grid>
                <Grid container direction="row">
                  <PhoneIcon></PhoneIcon>
                  <Typography className={classes.iconMargin}>
                    +94 71 531 9577
                  </Typography>
                </Grid>
              </Grid>
              <Grid>
                <Grid container direction="row">
                  <MailOutlineIcon
                    className={classes.iconMargin}
                  ></MailOutlineIcon>
                  <Typography className={classes.iconMargin}>
                    info@familycarslk.com
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Typography
              className={classes.WelocomeText}
              style={{ fontStyle: "AirbnbCerealBook" }}
            >
              <b> Welcome to Family Cars Malabe</b>
            </Typography>
          </Grid>
        </Grid>
        
      </Grid> */}

      <Grid
        container
        direction="row"
        justify="space-between"
        alignContent="center"
        className={classes.container}
        style={{ padding: "15px" }}
      >
        <Grid>
          <Grid container direction="row">
            <Grid>
              <Grid container direction="row">
                <PhoneIcon color="primary" />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "AirbnbCerealBook", fontSize: "14px" }}
                  className={classes.headerSpacing}
                >
                  +94 71 531 9577
                </Typography>
              </Grid>
            </Grid>
            <Grid className={classes.details}>
              <Grid container direction="row">
                <MailOutlineIcon className={classes.xs} color="primary" />
                <Typography
                  variant="body1"
                  style={{ fontFamily: "AirbnbCerealBook", fontSize: "14px" }}
                  className={classes.headerSpacing}
                >
                  info@familycarslk.com
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Grid className={classes.topic}>
            <Typography
              // variant="h6"
              style={{
                fontWeight: "bold",
                fontFamily: "AirbnbCerealBook",
                fontSize: "14px",
              }}
              className={classes.headerText}
            >
              Welcome to Family Cars Malabe
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Divider className={classes.Divider} />
      <Grid style={{ marginTop: "0px" }}>
        <Appbar />
      </Grid>
    </div>
  );
}
