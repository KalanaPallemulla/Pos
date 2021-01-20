import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";

//Icons
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

//Images
import Car from "./Images/Car.jpg";
import { Button, CssBaseline } from "@material-ui/core";

//colors
import amber from "@material-ui/core/colors/amber";
import { db } from "../util/config";
import { TheatersRounded } from "@material-ui/icons";
import { auth } from "firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 800,
    maxHeight: "auto",
  },
  image: {
    width: 235,
    height: 176,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  Button: {
    backgroundColor: "#F4DC00",
  },
  FinalDiv: {
    border: "1px solid",
  },
}));

const InnerTheme = createMuiTheme({
  palette: {
    newww: {
      main: amber[500],
    },
  },
});

// const FullTheme = MuiThemeProvider({
//   palette: {
//     primary: {
//       main: amber(500),
//     },
//   },
// });

export default function CarCard() {
  const classes = useStyles();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = db
      .collection("cars")
      .get()
      .then((querySnapshot) => {
        let CarList = [];

        console.log(querySnapshot.docs);
        querySnapshot.docs.map((doc) => {
          CarList.push(doc.data());
          console.log(doc.data());
        });
        setCars(CarList);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      {cars.map((car) => (
        <Paper className={classes.paper} style={{ marginBottom: "20px" }}>
          <Grid container spacing={2} justify="flex-start">
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={car.images[0]}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    varient="h1"
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      fontFamily: "AirbnbCerealBold",
                    }}
                  >
                    {car.make} {car.modal} {car.year_of_manufacture}
                  </Typography>
                </Grid>
                <Grid item sm>
                  <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                    Year Of Registration: {car.year_of_register}
                  </Typography>
                </Grid>
                <Grid item sm>
                  <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
                    Milage: {car.milage}km
                  </Typography>
                </Grid>
                <Grid item>
                  {/* <ThemeProvider theme={InnerTheme}> */}
                  <NavLink to={`/CarInformation/${car.vehicle_number}`}>
                    <Button variant="outlined" color="primary">
                      <Typography
                        style={{
                          fontSize: "12px",
                          fontFamily: "AirbnbCerealBook",
                        }}
                      >
                        View More
                      </Typography>
                      <ArrowRightIcon />{" "}
                    </Button>
                  </NavLink>

                  {/* </ThemeProvider> */}
                </Grid>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#ffd600" }}
                  disabled
                >
                  <Typography
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontFamily: "AirbnbCerealBook",
                    }}
                  >
                    LKR.{car.price}
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
