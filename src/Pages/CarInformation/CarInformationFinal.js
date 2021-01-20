import React, { useEffect, useState } from "react";
import {
  makeStyles,
  Container,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import { Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import "../../index.css";
import { db } from "../../util/config";
import { useLocation } from "react-router-dom";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CancelIcon from "@material-ui/icons/Cancel";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const useStyles = makeStyles((theme) => ({
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  coButton: {
    color: "green",
    marginLeft: "5px",
    fontSize: "17px",
  },
  caButton: {
    color: "red",
    marginLeft: "5px",
    fontSize: "17px",
  },
}));

function CarInformationFinal(props) {
  const classes = useStyles();

  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [c_car, setCar] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    const data = db
      .collection("c_cars")
      .doc(props.match.params.c_car)
      .get()
      .then((result) => {
        if (result.data()) {
          console.log(result.data());
          setCar(result.data());

          let imagesArray = [];

          result.data().images.map((image) => {
            imagesArray.push({ original: image, thumbnail: image });
          });

          setImages(imagesArray);
          setLoading(false);
        } else {
          setLoading(false);
        }
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // console.log(value);
  }, []);

  const handleClick = () => {
    setLoading(true);

    db.collection("c_cars")
      .doc(c_car.vehicle_number)
      .delete()
      .then((result) => {
        setLoading(false);

        props.history.push("/");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  console.log(location);
  console.log(props.match.params.c_car);
  console.log(c_car);
  console.log(images);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <Header />
        <Container
          maxWidth="md"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Grid>
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{
                background: "#FFFFFF",
                padding: "20px",
              }}
            >
              <Grid item xs={12} md={7}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: "bold", fontFamily: "AirbnbCerealBold" }}
                >
                  <h1>
                    {c_car.make} {c_car.model} {c_car.year_of_register}{" "}
                  </h1>
                </Typography>
                <ImageGallery items={images} showPlayButton={false} />
              </Grid>
              <Grid md={1}></Grid>
              <Grid md={4} xs={12} sm={12}>
                <div
                  style={{
                    background: "yellow",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  <h1>LKR.{c_car.prize}</h1>{" "}
                  <h5
                    style={{
                      textAlign: "center",
                      fontFamily: "AirbnbCerealBook",
                    }}
                  >
                    Included Tax and Checkup
                  </h5>
                </div>
                <h4
                  style={{
                    marginTop: "20px",
                    fontFamily: "AirbnbCerealBlack",
                    fontSize: "20px",
                  }}
                >
                  SPECIFICATIONS
                </h4>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Make
                    </Typography>
                  </Grid>
                  {c_car.make ? (
                    <Grid item md={6} sx={6}>
                      <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                        {c_car.make}
                      </Typography>
                    </Grid>
                  ) : null}
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Model
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.modal}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Registration Year
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.year_of_register}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Manufacture Year
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.year_of_manufacture}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Milage
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.milage} km
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Color
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.color}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Trasmission
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.transmission}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Capacity
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.engine_capacity} CC
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                      {" "}
                      Contact No.
                    </Typography>
                  </Grid>
                  <Grid item md={6} xs={6}>
                    <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                      {c_car.contact_number}
                    </Typography>
                  </Grid>
                </Grid>
                {/* <Grid
                xs={12}
                md={12}
                item
                container
                direction="row"
                style={{ marginTop: "10px" }}
              >
                <Grid item md={6} xs={6}>
                  <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                    {" "}
                    Fuel Type
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                  {c_car.make}
                  </Typography>
                </Grid>
              </Grid> */}
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  {/* <Grid item md={6} xs={6}>
                  <Typography style={{ fontFamily: "AirbnbCerealMedium" }}>
                    {" "}
                    Capacity
                  </Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                    {c_car.engine_capacity}CC
                  </Typography>
                </Grid> */}
                </Grid>
                <Grid
                  xs={12}
                  md={12}
                  item
                  container
                  direction="row"
                  style={{
                    marginTop: "20px",
                    backgroundColor: "black",
                  }}
                >
                  <Grid item md={2} xs={2}>
                    <HeadsetMicIcon
                      color="secondary"
                      style={{
                        padding: "20px",
                        marginTop: "10px",
                      }}
                    ></HeadsetMicIcon>
                  </Grid>

                  <Grid
                    item
                    md={10}
                    xs={10}
                    style={{ color: "white", padding: "15px" }}
                  >
                    <Typography style={{ fontSize: "20px" }}>
                      <b>+94 71 531 9577</b>
                    </Typography>
                    <Typography style={{ fontSize: "12px" }}>
                      <b> Call our seller to get the best price</b>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid>
              <div
                style={{
                  background: "#FFFFFF",
                  padding: "20px",
                  marginTop: "10px",
                }}
              >
                <h4 style={{ color: "gray", fontSize: "20px" }}>
                  More Details
                </h4>
                <Grid
                  xs={12}
                  md={12}
                  container
                  direction="row"
                  style={{ marginTop: "10px" }}
                >
                  {c_car.CrCopy ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        CR Copy:
                        <CheckCircleIcon className={classes.coButton} />
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.abs ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        ABS
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.ac ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        AC
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.airBagsEight ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        8 Air Bags{" "}
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.airBagsFour ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        4 Air Bags
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.airBagsOne ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        1 Air Bags
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.airBagsTwo ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        2 Air Bags
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.alloyWheels ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Alloy Wheels
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.autoBreak ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Auto Break
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.autoDoor ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Auto Door
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.backseatScreens ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Backsheat Screens
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.cruiseControl ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Cruise Control
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.crystalLight ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Crystal Light
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.finance ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Finance
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.fogLamp ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Fog Lamp
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.forWheel ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        4Wheel
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.fullOption ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Full Option
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.gumBottle ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Gum Bottle
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.headUpDisplay ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Headup Display
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.headlightWasher ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Head Light Washers
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.jack ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Jack
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.licenceCopy ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Licence Copy
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.multiFunction ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Multi-Function
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.multimediaSetup ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Multimedia-Setup
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.paddleShifters ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Paddle Shifters
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.powerAriel ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Power Ariel
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.powerShutters ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Power Shutters
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.powerSteering ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Power Steering
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.pumpKit ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Pumpkit
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.pushStart ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Push Start
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                  {c_car.reactableMirrors ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Retractable Mirrors
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.reverseSensor ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Reverse Sensor
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.riverseCam ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Reverse Cam
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.safety ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Safety
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.scopeKey ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Scope Key
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.senonLight ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Xenon Light
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.smartKey ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Smart Key
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.spoiler ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Spoiler
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.subWoofers ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Subwoofers
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.tools ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Tools
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.wayCamera ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Way Camera
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.welcomeLight ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Welcome Light
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}

                  {c_car.wheel ? (
                    <Grid item xs={12} xm={6} md={3}>
                      <Typography
                        style={{
                          marginTop: "10px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        {" "}
                        Spare Wheel
                        <CheckCircleIcon className={classes.coButton} />{" "}
                      </Typography>
                    </Grid>
                  ) : null}
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}

export default CarInformationFinal;
