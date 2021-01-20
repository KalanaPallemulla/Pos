import React from "react";
import Login from "../src/Pages/Login/Login";
import About from "../src/Pages/AboutUs/About";
import ContactNew from "./Pages/Contact/ContactNew";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { green, orange, white, yellow } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import CustomerInventory from "./Pages/Inventory/CustomerInventory";
import Inventorynew from "./Pages/Inventory/Inventorynew";
import CarInformation from "./Pages/CarInformation/CarInformation";
import CarInformationNew from "./Pages/CarInformation/CarInformationFinal";
import FCars from "./Components/FCars";
import AddCar from "./Pages/AddCar/AddCar";
import "./App.css";
import News from "./Pages/News/News";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import UserCars from "./Pages/UserCars/UserCars";
//auth route
import AuthRoute from "./util/AuthRoute";
import AuthProvider from "./util/AuthProvider";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: yellow["A700"],
    },
    secondary: {
      main: grey[50],
    },
    secondary1: {
      main: grey[900],
    },
    // secondary2: [],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <AuthProvider>
            <BrowserRouter>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/About" component={About} />
                <Route path="/Contact" component={ContactNew} />
                <Route
                  path="/CustomerInventory"
                  component={CustomerInventory}
                />
                <Route path="/Inventorynew" component={Inventorynew} />
                <Route path="/CarInformation/:car" component={CarInformation} />
                <Route
                  path="/CarInformationNew/:c_car"
                  component={CarInformationNew}
                />

                <AuthRoute path="/addCar" component={AddCar} />
                <Route path="/news" component={News} />
                <Route path="/register" component={Register} />
                <Route path="/UserCars" component={UserCars} />
                <Route path="/fcars" component={FCars} />

                <Route path="/home" component={Home} />
              </Switch>
            </BrowserRouter>
          </AuthProvider>
        </MuiPickersUtilsProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
