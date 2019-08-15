import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Item from './Item'



class Football extends Component {

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
        fetch("/api/football")
            .then(handleErrors)
            .then(res => res.json())
            .then(result => {
                let data = result;
                this.setState({data})
            })
            .catch(err => {
                console.log(err);
            });

    }


    render() {
        const ViewGames = this.state.data.map(data => (
            <Col md={4} >
            <Item
             id ={data.id}
             teama ={data.teamA}
            teamb ={data.teamB}
            scorea = {data.ScoreA}
            scoreb = {data.ScoreB}
            datetime ={data.Time}
            category={data.Category}

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

export default Football;