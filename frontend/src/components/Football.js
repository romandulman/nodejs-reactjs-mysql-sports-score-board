import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


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


class Football extends Component {

    render() {
        return (
            <Card >
                <CardContent>
                    <Typography  color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Word of the Day

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Football);