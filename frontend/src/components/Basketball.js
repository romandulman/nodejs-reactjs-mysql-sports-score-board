import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Item from "./Item";
import "./Styles.css";
import { CSVLink, CSVDownload } from "react-csv";
import Fab from '@material-ui/core/Fab';
import NavigationIcon from './img/file_download_black_27x27.png';

class Basketball extends Component {
  state = {
    data: []
  };
  csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
  componentDidMount() {
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
        this.setState({ data });
      })
      .catch(err => {
        console.log(err);
      });
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
          <CSVLink data={this.csvData}>
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
