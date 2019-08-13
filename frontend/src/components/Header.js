import React, { Component } from "react";
import "./Styles.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
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
    addGuestHandler = () => {
        this.props.isLoggedIn ? this.props.ShowModal() : this.props.LoginBtn();
    };


    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Header);

