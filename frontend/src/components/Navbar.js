import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import StarIcon from "@material-ui/icons/Star";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import AboutDialog from "./AboutDialog";
import "../assets/stylesheets/Styles.css";

class Navbar extends Component {
  state = {
    dialogopen: false
  };

  render() {
    return (
      <div className="marginbar">
        <AboutDialog ref={ref => (this.dialog = ref)} />
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
            <Button
              color="secondary"
              onClick={() => this.dialog.handleDialogView()}
              to={"/basketball"}
            >
              About App
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;
