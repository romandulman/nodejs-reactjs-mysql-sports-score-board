import React, { Component } from "react";
import "./Styles.css";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StarIcon from '@material-ui/icons/Star';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {

    };
};

const mapDispachToProps = dispach => {
    return {
        LoginConfirm: profile =>
            dispach({ type: "IsLoggedIn", UserProfile: profile }),
        LoginBtn: () => dispach({ type: "LOGIN" }),
        ShowModal: () => dispach({ type: "SHOWMODAL" })
    };
};


class Header extends Component {

    render() {
        return (
            <div>

                <AppBar position="static" color="default">
                    <Toolbar>

                            <StarIcon/>

                       {/* <Nav.Link component={Link} to={'/first'}>Home</Nav.Link>*/}
                        <Button color="primary" component={Link} to={'/football'}>
                            Football
                        </Button>
                        <Button color="primary" component={Link} to={'/football'}>
                            Basketball
                        </Button>
                      <Link to="/guests" >Home</Link>
                    </Toolbar>
                </AppBar>




            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Header);

