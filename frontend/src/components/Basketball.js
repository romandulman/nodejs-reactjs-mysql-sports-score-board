import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { CSVLink} from "react-csv";
import Fab from '@material-ui/core/Fab';
import Item from "./Item";
import "../assets/stylesheets/Styles.css";
import NavigationIcon from '../assets/images/file_download_black_27x27.png';
import {basketballScore} from "../api";

class Basketball extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    basketballScore()
        .then(data =>{
          console.log(data);
          this.setState({ data });
        })
  }


  render() {
    const ViewGames = this.state.data.map(data => (
      <Col lg={6}>
        <Item
          id={data.id}
          teama={data.teamA}
          teamb={data.teamB}
          scorea={data.ScoreA}
          scoreb={data.ScoreB}
          datetime={data.Time}
          category={data.Category}
        />
      </Col>
    ));
    return (
      <Container>
        <Row>{ViewGames}</Row>
        <div className="exportSec">
          <CSVLink data={this.state.data}>
            <Fab variant="extended" aria-label="delete">
              <img src={NavigationIcon} />
              Download CSV
            </Fab>
          </CSVLink>
        </div>
      </Container>
    );
  }
}

export default Basketball;
