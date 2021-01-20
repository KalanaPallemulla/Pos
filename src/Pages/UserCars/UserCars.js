import React, { useState, useEffect } from "react";
import Dashboard from "../../Components/Dashbord";
import { NavLink } from "react-router-dom";

import { db } from "../../util/config";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  CircularProgress,
  Button,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

export default function ViewCars(props) {
  const classes = useStyles();

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    setLoading(true);

    const data = db
      .collection("c_cars")
      .get()
      .then((querySnapshot) => {
        let carsList = [];

        console.log(querySnapshot.docs);
        querySnapshot.docs.map((doc) => {
          carsList.push(doc.data());
          console.log(doc.data());
        });
        setCars(carsList);
        setLoading(false);
      })

      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    // console.log(value);
  }, []);

  //search text handleChange
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchText);

    return db
      .collection("users")
      .doc(searchText)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
          props.history.push(`UserCars/${doc.data().users.c_car}`);
        } else {
          setSearchError("Car does not exist");
        }
      })
      .catch((err) => console.log(err));
  };

  console.log(searchText);

  return (
    <Dashboard>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <TextField
              style={{ float: "left", marginBottom: "25px" }}
              label="Find Car"
              onChange={handleChange}
              error={searchError ? true : false}
              helperText={searchError ? searchError : null}
              InputProps={{
                endAdornment: (
                  <InputAdornment>
                    <IconButton onClick={handleSubmit}>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <b>Vehicle Number</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Make</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Modal</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Customer Name</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Customer Number</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Color</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Engine Capacity</b>
                    </TableCell>
                    <TableCell align="left">
                      <b>Show more</b>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cars.map((c_car) => (
                    <TableRow key={c_car.vehicle_number}>
                      <TableCell component="th" scope="row">
                        {c_car.vehicle_number}
                      </TableCell>
                      <TableCell align="left">{c_car.make}</TableCell>
                      <TableCell align="left">{c_car.modal}</TableCell>
                      <TableCell align="left">{c_car.customer_name}</TableCell>
                      <TableCell align="left">{c_car.contact_number}</TableCell>
                      <TableCell align="left">{c_car.color}</TableCell>
                      <TableCell align="left">
                        {c_car.engine_capacity}
                      </TableCell>
                      <TableCell align="left">
                        <NavLink
                          to={`/CarInformationNew/${c_car.vehicle_number}`}
                          className={classes.navlink}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                          >
                            View
                          </Button>
                        </NavLink>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </>
        )}
      </Container>
    </Dashboard>
  );
}
