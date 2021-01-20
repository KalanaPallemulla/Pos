import React from "react";
import {
  Badge,
  Container,
  Fab,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HeadsetIcon from "@material-ui/icons/Headset";

import CCarCard from "../../Components/CCarCard";
import Search from "../../Components/SearchNew";

import Pagination from "@material-ui/lab/Pagination";
import SearchIcon from "@material-ui/icons/Search";

import Header from "../../Components/Header";
import Footer from "../../Components/FooterNew";
import ToggelButton from "../../Components/ToggelButton";

const useStyles = makeStyles((theme) => ({
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
  HeadingBar: {
    minHeight: 60,
    position: "static",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      // marginTop: "-19px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      // marginTop: "-11px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      // marginTop: "-11px",
    },
  },
  margins: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  searchBar: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "10px",
      alignContent: "center",
      width: "100vh",
    },
  },
  endGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10px",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
}));

export default function () {
  const classes = useStyles();

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMobileMenuOpen = (event) => {
  //   setMobileMoreAnchorEl(event.currentTarget);
  // };

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     {" "}
  //     <MenuItem>
  //       <Search />
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <div>
      <Header />
      <Container maxWidth="lg">
        <ToggelButton />

        <Grid container justify="center" alignContent="center">
          <Grid item style={{ marginTop: "20px" }}>
            <Search />
          </Grid>
          <Grid md={1}></Grid>
          <Grid item style={{ marginTop: "20px" }}>
            <CCarCard></CCarCard>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
