import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import moment from "moment";

class AddComment extends Component {
  state = {
    open: false,
    datetime: "2019-04-29 21:11:54",
    commenter: "",
    body: "",
    id: ""
  };

  handleView = () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  };

  handlePublish = () => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + " " + time;

    const id = this.props.id;
    this.handleView();
    let comment = {
      commenter: this.state.commenter,
      body: this.state.body,
      datetime: dateTime
    };

    fetch("/api/addcomment/" + id, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment })
    })
      .then(response => response.json())
      .then(res => {
        //// add res
      });
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleView}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Your Name..."
              type="text"
              onChange={e => {
                this.setState({ commenter: e.target.value });
              }}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              label="Comment"
              type="text"
              onChange={e => {
                this.setState({ body: e.target.value });
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleView} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handlePublish} color="primary">
              Publish Comment
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AddComment;
