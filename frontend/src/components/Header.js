import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Styles.css";

class Header extends Component {
  render() {
    return (
      <div className="marginbar">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" className="appbartitle">
              <StarIcon className="starico" /> Game5core
            </Typography>
            <Button color="primary" component={Link} to={"/football"}>
              Football
            </Button>
            <Button color="primary" component={Link} to={"/basketball"}>
              Basketball
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
