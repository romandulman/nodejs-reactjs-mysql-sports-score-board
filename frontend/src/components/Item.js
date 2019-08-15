import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Styles.css";
import AddComment from "./AddComment";
import Comments from "./Comments";
class Item extends Component {
  state = {
    comments: [],
    viewComments: false
  };
  showAddComment = () => {
    this.refs.addNew.handleView(this.props.id);
  };
  viewComments = () => {
    if (this.state.viewComments === false) {
      const handleErrors = response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      };

      fetch("/api/comments/" + this.props.id)
        .then(handleErrors)
        .then(res => res.json())
        .then(result => {
          let comments = result;
          this.setState({ comments });
          this.setState({ viewComments: true });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.setState({ viewComments: false });
    }
  };

  render() {
    return (
      <Card className="card">
        <AddComment ref="addNew" id={this.props.id} />
        <CardContent>
          <h5>{this.props.category}</h5>

          <Typography variant="p" component="p">
            <h5>
              {this.props.teama} VS {this.props.teamb}
            </h5>
            <h5>
              {this.props.scorea}:{this.props.scoreb}
            </h5>
            <h6>{this.props.datetime}</h6>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.viewComments}>
            {this.state.viewComments ? "Close" : "View comments"}
          </Button>
          <Button size="small" color="secondary" onClick={this.showAddComment}>
            Add Comment
          </Button>
        </CardActions>
        {this.state.viewComments && <Comments dataIn={this.state.comments} />}
      </Card>
    );
  }
}

export default Item;
