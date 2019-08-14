import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from './Item'



class Basketball extends Component {

    state={
        data:[]
    };

    componentDidMount(){
        const handleErrors = response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        };
        fetch("/api/Basketball")
            .then(handleErrors)
            .then(res => res.json())
            .then(result => {
                let data = result;
                this.setState({data})
                //alert(result)
            })
            .catch(err => {
                console.log(err);
            });

    }


    render() {
        const ViewGames = this.state.data.map(guest => (
            <Col md={4} >
                <Item
                    teama ={guest.teamA}
                    teamb ={guest.teamB}
                    scorea = {guest.ScoreA}
                    scoreb = {guest.ScoreB}
                    datetime ={guest.Time}
                    category={guest.Category}

                />

            </Col>
        ));

        return (
            <div>
                <Row>{ViewGames}</Row>
            </div>
        );
    }
}

export default Basketball;