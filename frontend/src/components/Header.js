import React, { Component } from "react";
import "./Styles.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            <div>

                <AppBar position="static" color="default">
                    <Toolbar>
                            <StarIcon/>
                        <Button color="primary" component={Link} to={'/football'}>
                            Football
                        </Button>
                        <Button color="primary" component={Link} to={'/basketball'}>
                            Basketball
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default Header;

