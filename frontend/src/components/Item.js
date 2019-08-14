import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Styles.css";
import AddComment from './AddComment';

class Item extends Component {

    showAddComment = () =>{
        this.refs.addNew.handleView();
    };

  render() {
    return (
      <Card className="card">
          <AddComment  ref="addNew"/>
        <CardContent>
          <Typography variant="p" component="p">
            <h5>{this.props.teama} vs {this.props.teamb}</h5>
            <h5>
              Score: {this.props.scorea}:{this.props.scoreb}
            </h5>
            <h5>Category:{this.props.category}</h5>
            <h5>{this.props.datetime}</h5>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View comments</Button>
            <Button size="small" onClick={this.showAddComment}>Add Comment</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Item;