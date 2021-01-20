import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { db } from "../util/config";
import { ButtonBase, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    maxHeight: 500,
    borderRadius: "20px",
  },
  media: {
    height: 140,
  },
  image: {
    maxWidth: 500,
    maxHeight: 400,
  },
});

export default function MediaCard() {
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
    <>
      {cars.map((car) => (
        <NavLink to={`/CarInformation/${car.vehicle_number}`}>
          <Card
            className={classes.root}
            style={{ marginBottom: "20px" }}
            maxWidth="false"
          >
            <CardActionArea>
              <CardContent>
                <Grid
                  container
                  justify="center"
                  alignItems="center"
                  direction="column"
                >
                  <img className={classes.image} src={car.images[0]} />

                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{
                      fontFamily: "AirbnbCerealBook",
                      fontWeight: "bold",
                      marginTop: "10px",
                    }}
                  >
                    {car.make} {car.model} {car.year_of_manufacture}
                  </Typography>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </NavLink>
      ))}
    </>
  );
}
