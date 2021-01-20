import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Container,
  Grid,
  Typography,
  Card,
} from "@material-ui/core";
import photo1 from "./Images/customer.jpg";

import { db } from "../util/config";

import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
const useStyle = makeStyles((theme) => ({}));

function News() {
  const className = useStyle();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const data = db
      .collection("news")
      .get()
      .then((querySnapshot) => {
        let newsList = [];

        console.log(querySnapshot.docs);
        querySnapshot.docs.map((doc) => {
          newsList.push(doc.data());
          console.log(doc.data());
        });
        setNews(newsList);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(news);

  return (
    <Container maxWidth="md">
      <div>
        {news.map((news) => (
          <Card style={{ marginTop: "20px", width: "auto" }}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              style={{
                background: "#FFFFFF",
                padding: "10px",
                // marginBottom: "10px",
                borderRadius: "10px",
              }}
              md={12}
            >
              <Grid item xs={12} md={4}>
                <img
                  alt="complex"
                  src={news.image}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={8} style={{ paddingLeft: "10px" }}>
                <Grid
                  container
                  direction="column"
                  style={{
                    backgroundColor: "yellow",
                    padding: "10px",
                    fontSize: "15px",
                    borderRadius: "10px",
                  }}
                >
                  <DirectionsCarIcon />

                  <p style={{ fontFamily: "AirbnbCerealBook" }}>
                    {news.description}
                  </p>

                  <p
                    style={{
                      fontFamily: "AirbnbCerealMedium",
                      fontSize: "12px",
                    }}
                  >
                    <b>{news.date}</b>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default News;
