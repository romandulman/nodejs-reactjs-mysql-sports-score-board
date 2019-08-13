import React, { Component } from "react";
import "./Styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from 'react-bootstrap/Button'
import Dropdown from "react-bootstrap/Dropdown"
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
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand >Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link component={Link} to={'/first'}>Home</Nav.Link>
                    <Nav.Link><Link to="/guests" >Home</Link></Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Header);

