import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Photo from "../../Images/Contact.jpg";
import CallIcon from "@material-ui/icons/Call";
import { Button, Container } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MailIcon from "@material-ui/icons/Mail";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import GoogleMap from "../../Components/GoogleMap";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 1000,
  },
  //   image: {
  //     width: 200,
  //     height: 200,
  //   },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    width: 200,
    height: 200,
  },
  iconSpace: {
    marginLeft: theme.spacing(1),
    fontSize: "12px",
    marginBottom: "30px",
  },
  addButton: {
    width: 100,
    height: 50,
    borderRadius: "10px",
    backgroundColor: "#F4DC00",
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
const iframe = `<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.869674238925!2d79.96414829999999!3d6.906183899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257019b2b1dd3%3A0x3bdb14fea4f67ff8!2sFamily%20Cars%20Malabe!5e0!3m2!1sen!2slk!4v1600879671630!5m2!1sen!2slk"
width="100%"
height="450"
frameborder="0"
style="border:0;"
allowfullscreen=""
aria-hidden="false"
tabindex="0"
></iframe>`;

export default function ComplexGrid() {
  const classes = useStyles();
  function createMarkup() {
    return { __html: iframe };
  }
  return (
    <div className={classes.root}>
      <Header />
      <Container
        maxWidth="md"
        style={{ marginTop: "50px", marginBottom: "40px" }}
      >
        <Grid
          container
          justify="space-between"
          direction="row"
          style={{
            background: "#FFFFFF",
            padding: "20px",
          }}
        >
          <Grid
            container
            item
            xs={12}
            md={4}
            justify="flex-start"
            alignContent="center"
            alignItems="center"
            // style={{
            //   padding: "50px",
            //   width: "75%",
            // }}
            style={{ backgroundColor: "#f4f5f8", borderRadius: "20px" }}
          >
            {/* <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f5f8",
                width: "100%",
                height: "300px",
                borderRadius: "20px",
              }} */}

            <img src={Photo} className={classes.img} alt="Photo" />
            {/* </div> */}
          </Grid>

          <Grid md={1}></Grid>
          <Grid md={7} xs={12} sm={12}>
            <h1>GET IN TOUCH</h1>
            <Grid style={{ marginBottom: "20px", marginTop: "10px" }}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid style={{ marginBottom: "20px" }}>
              <TextField
                id="outlined-basic"
                label="Massage"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid container md={12}>
              <Grid md={12}>
                <Button className={classes.addButton}>Send</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          justify="space-between"
          direction="row"
          style={{
            background: "#FFFFFF",
            padding: "20px",
          }}
        >
          <Grid
            container
            alignContent="center"
            alignItems="center"
            item
            xs={12}
            sm={12}
            md={4}
            style={{
              background: "#f4f5f8",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Grid container direction="row">
              <LocationOnIcon style={{ fontSize: "15px" }} />

              <Typography className={classes.iconSpace}>
                318/5/1 Kaduwela Rd, Malabe
                <br /> 10115
              </Typography>
            </Grid>

            <Grid container direction="row">
              <CallIcon style={{ fontSize: "15px" }} />

              <Typography className={classes.iconSpace}>
                011 2 407 555
              </Typography>
            </Grid>
            <Grid container direction="row">
              <MailIcon style={{ fontSize: "15px" }} />

              <Typography className={classes.iconSpace}>
                info@familycarslk.com
              </Typography>
            </Grid>
            <Grid container direction="row">
              <EventAvailableIcon style={{ fontSize: "15px" }} />

              <Typography className={classes.iconSpace}>
                Sales Department <br />
                Mon-sat : 8:00am - 5:00pm <br />
                Sunday is closed
              </Typography>
            </Grid>
            <Grid container direction="row">
              <EventAvailableIcon style={{ fontSize: "15px" }} />

              <Typography className={classes.iconSpace}>
                Service Department <br /> Mon-sat : 8:00am - 5:00pm <br />
                Sunday is closed
              </Typography>
            </Grid>
          </Grid>
          <Grid md={1}></Grid>
          <Grid md={7} xs={12} sm={12}>
            <div dangerouslySetInnerHTML={createMarkup()} />
          </Grid>
        </Grid>
      </Container>
      <Grid style={{ marginTop: "10px" }} />
      <Footer />
    </div>
  );
}
