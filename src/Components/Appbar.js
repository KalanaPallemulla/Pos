import React, { useState } from "react";
import "../index.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useLocation } from "react-router-dom";

//Images
import Logo from "./Images/Logo.png";
import { Grid, Button, ButtonBase } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import { app } from "../util/config.js";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionDesktop2: {
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  img: {
    maxWidth: 250,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 200,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 200,
    },
  },
  button: {
    maxWidth: 150,
    backgroundColor: "#F4DC00",
    borderRadius: "10px",

    [theme.breakpoints.up("md")]: {
      // marginRight: "-10px",
    },
  },
  Button1: {
    maxWidth: 30,
  },
  textMargin: {
    marginLeft: theme.spacing(2),
    fontFamily: "AirbnbCerealBold",
    fontSize: "16px",
    color: "black",
  },
  fontFamily: {
    fontFamily: "AirbnbCerealBold",
    fontSize: "16px",
    marginLeft: "-16px",
    color: "black",
  },
  toolbar: {
    [theme.breakpoints.up("md")]: {
      maxHeight: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      height: "75px",
    },
  },
  // top: {
  //   [theme.breakpoints.up("md")]: {
  //     marginTop: "10px",
  //   },
  // },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [inventoryAnchorEl, setInventoryEnchorEl] = useState(null);
  const location = useLocation();
  console.log(location.pathname);

  const isMenuOpen = Boolean(anchorEl);
  const isInventoryOpen = Boolean(inventoryAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInventoryOpen = (event) => {
    setInventoryEnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setInventoryEnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/login">Login</NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/register">Register</NavLink>
      </MenuItem>
    </Menu>
  );

  const renderInventory = (
    <Menu
      anchorEl={inventoryAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isInventoryOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/customerInventory">Customer Inventory</NavLink>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <NavLink to="/InventoryNew">Company Inventory</NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleInventoryOpen}>
        <IconButton color="inherit" href="inventoryNew">
          <Badge color="secondary"></Badge>
        </IconButton>
        <NavLink to="/InventoryNew">
          <Typography style={{ fontFamily: "AirbnbCerealBook" }}>
            Inventory
          </Typography>
        </NavLink>
      </MenuItem>
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge color="secondary"></Badge>
        </IconButton>
        <p>NEWS</p>
      </MenuItem> */}
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <NavLink to="/about">
          <Typography>About</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <NavLink to="/contact">
          <Typography>Contact</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <Typography>Profile</Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AddCircleOutlineIcon></AddCircleOutlineIcon>
        </IconButton>
        <NavLink to="/addCar">
          <Typography>Add Your Item</Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <NavLink to="/login">
          <Typography>
            <Typography>Logout</Typography>
          </Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar elevation="0" position="static">
        <Grid
          className={classes.top}
          style={{ backgroundColor: "#F4DC00", minHeight: "50px" }}
        >
          <Toolbar
            elevation="0"
            // style={{ backgroundColor: "#ffff00" }}
            className={`${classes.toolbar} `}
          >
            <ButtonBase href="/home">
              <img className={classes.img} src={Logo} alt="logo" />
            </ButtonBase>
            <div className={classes.grow} />
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
            >
              <div className={classes.sectionDesktop}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  md={12}
                  className={classes.sectionDesktop}
                >
                  <Grid className={classes.fontFamily}>
                    <NavLink to="/Inventorynew">INVENTORY</NavLink>
                  </Grid>
                  <Grid className={classes.textMargin}>
                    <NavLink to="News" style={{ textDecoration: "none" }}>
                      NEWS
                    </NavLink>
                  </Grid>

                  <Grid className={classes.textMargin}>
                    <NavLink to="/about" style={{ textDecoration: "none" }}>
                      ABOUT
                    </NavLink>
                  </Grid>
                  <Grid className={classes.textMargin}>
                    <NavLink to="/Contact" style={{ textDecoration: "none" }}>
                      CONTACT
                    </NavLink>
                  </Grid>
                  <Grid className={classes.textMargin}>
                    <NavLink
                      to="#"
                      onClick={handleProfileMenuOpen}
                      style={{ textDecoration: "none" }}
                    >
                      PROFILE
                    </NavLink>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            {location.pathname === "/addCar" ? (
              <NavLink to="userCars">
                <Button
                  className={` ${classes.sectionDesktop}`}
                  style={{
                    height: "50px",
                    marginRight: "10px",
                    backgroundColor: "black",
                    // padding: "10px",
                  }}
                >
                  <b
                    style={{
                      color: "#F4DC00",
                      marginLeft: "20px",
                      marginRight: "20px",
                      fontFamily: "AirbnbCerealBook",
                    }}
                  >
                    Your Dashbord
                  </b>
                </Button>
              </NavLink>
            ) : null}
            <Grid
              className={`${classes.button} ${classes.sectionDesktop}`}
              container
              justify="center"
            >
              <Button
                style={{
                  height: "50px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  backgroundColor: "black",
                  marginRight: "10px",
                  fontFamily: "AirbnbCerealBook",
                }}
                elevation="0"
                href="/addCar"
              >
                <AddCircleOutlineIcon
                  color="primary"
                  style={{ marginLeft: "10px" }}
                />
                <b
                  style={{
                    color: "#F4DC00",
                    marginLeft: "10px",
                    marginRight: "10px",
                  }}
                >
                  Add Item
                </b>
              </Button>
            </Grid>
            {location.pathname === "/addCar" ? (
              <Button
                className={` ${classes.sectionDesktop}`}
                style={{
                  height: "50px",
                  // width: "30px",
                  backgroundColor: "black",
                  // padding: "10px",
                }}
                onClick={() =>
                  app
                    .auth()
                    .signOut()
                    .then(() => {
                      props.history.push("/home");
                    })
                    .catch((err) => console.log(err))
                }
              >
                <b
                  style={{
                    color: "#F4DC00",
                    marginLeft: "20px",
                    marginRight: "20px",
                    fontFamily: "AirbnbCerealBook",
                  }}
                >
                  Logout
                </b>
              </Button>
            ) : null}

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                styles={{ borderRadius: "10px" }}
              >
                <MoreVertIcon color="secondary1" />
              </IconButton>
            </div>
          </Toolbar>
        </Grid>
      </AppBar>

      {renderMobileMenu}
      {renderMenu}
      {renderInventory}
    </div>
  );
}
