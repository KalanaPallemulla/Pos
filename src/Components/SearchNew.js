import React from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  createMuiTheme,
  Button,
} from "@material-ui/core";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";

const CarType = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Car",
    label: "Car",
  },
  {
    value: "Van",
    label: "Van",
  },
  {
    value: "Truck",
    label: "Truck",
  },
];

const CarMake = [
  {
    value: "All",
    label: "ALL",
  },
  {
    value: "Honda",
    label: "Honda",
  },
  {
    value: "Toyota",
    label: "Toyota",
  },
  {
    value: "Suzuki",
    label: "Suzuki",
  },
  {
    value: "Nissan",
    label: "Nissan",
  },
  {
    value: "BMW",
    label: "BMW",
  },
  {
    value: "Mercedez-Benz",
    label: "Mercedez-Benz",
  },
  {
    value: "Lamborghini",
    label: "Lamborghini",
  },
  {
    value: "Audi",
    label: "Audi",
  },
  {
    value: "Ferrai",
    label: "Ferrai",
  },
];

const CarModel = [
  {
    value: "All",
    label: "ALL",
  },
  {
    value: "520D",
    label: "520D",
  },
  {
    value: "Panda",
    label: "Panda",
  },
];

const CarRegistration = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: "2013",
    label: "2013",
  },
  {
    value: "2014",
    label: "2014",
  },
  {
    value: "2015",
    label: "2015",
  },
  {
    value: "2016",
    label: "2016",
  },
  {
    value: "2017",
    label: "2017",
  },
  {
    value: "2018",
    label: "2018",
  },
  {
    value: "2019",
    label: "2019",
  },
  {
    value: "2019",
    label: "2020",
  },
];

const CarMileage = [
  {
    value: "Any",
    label: "Any",
  },
  {
    value: "15,000 km",
    label: "15,000 km",
  },
  {
    value: "30,000 km",
    label: "30,000 km",
  },
  {
    value: "45,000 km",
    label: "45,000 km",
  },
  {
    value: "60,000 km",
    label: "60,000 km",
  },
];

const theme = createMuiTheme({
  Typography: {
    body2: {
      fontFamily: "AirbnbCerealBook",
    },
  },
});

function Search() {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <>
      <Container maxWidth="xs">
        <Grid container direction="column">
          <Grid
            item
            md={12}
            xs={12}
            sm={12}
            alignItems="center"
            justify="flex-start"
            style={{
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "20px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Grid
              container
              justify="space-between"
              direction="row"
              style={{ backgroundColor: "black", padding: "10px" }}
            >
              <DirectionsCarIcon style={{ color: "yellow" }} />
              <Typography
                style={{ color: "white", fontFamily: "AirbnbCerealMedium" }}
              >
                SEARCH VEHICLE
              </Typography>
            </Grid>
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "50px",
                marginBottom: "8px",
              }}
            >
              KEYWORD:
            </Typography>
            <TextField
              id="outlined-basic"
              placeholder="Keyword"
              variant="outlined"
              fullWidth
            />
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "20px",
                marginBottom: "8px",
              }}
            >
              VEHICLE TYPE:
            </Typography>
            <TextField
              fullWidth
              id="vehicle-type"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {CarType.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "20px",
                marginBottom: "8px",
              }}
            >
              MAKE:
            </Typography>
            <TextField
              style={{ fontSize: "10px" }}
              fullWidth
              id="vehicle-type"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {CarMake.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "20px",
                marginBottom: "8px",
              }}
            >
              MODEL:
            </Typography>
            <TextField
              fullWidth
              id="vehicle-type"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {CarModel.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              REGISTRATION DATE:
            </Typography>
            <TextField
              fullWidth
              id="vehicle-type"
              select
              placeholder="Type"
              label="Lower Value"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              style={{ marginBottom: "15px" }}
            >
              {CarRegistration.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="vehicle-type"
              label="Highest Value"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {CarRegistration.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <Typography
              style={{
                fontSize: "15px",
                fontFamily: "AirbnbCerealBook",
                marginTop: "20px",
                marginBottom: "10px",
              }}
            >
              MILEAGE:
            </Typography>
            <TextField
              fullWidth
              id="vehicle-type"
              label="Lower Value"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
              style={{ marginBottom: "15px" }}
            >
              {CarMileage.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="vehicle-type"
              label="Highest Value"
              select
              placeholder="Type"
              onChange={handleChange}
              SelectProps={{
                native: true,
              }}
              variant="outlined"
            >
              {CarMileage.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
            <Grid style={{ marginTop: "10px" }}>
              <Button
                fullWidth
                color="secondary"
                style={{
                  height: "45px",
                  backgroundColor: "#F4DC00",
                  fontStyle: "AirbnbCerealBook",
                  color: "black",
                  marginTop: "30px",
                  marginBottom: "30px",
                }}
              >
                <b>Search </b>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Search;
