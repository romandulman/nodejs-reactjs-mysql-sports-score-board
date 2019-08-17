import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import "./Styles.css";
import moment from "moment";

class Comments extends Component {
  state = {
    // data: this.props.data
  };
  render() {
    const datain = this.props.dataIn;
    let ViewComments;
    if (datain.length > 0) {
      ViewComments = datain.map(cdata => (
        <List className="comments">
          <ListItem alignItems="flex-start">
            {/*        <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>*/}
            <ListItemText
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className="inline"
                    color="textPrimary"
                  >
                    {cdata.commenter}
                  </Typography>
                  <br />
                  {cdata.comment_body}
                  <br />
                  {/*
               { moment((cdata.datetime).format('YYYY/MM/DD HH:mm:ss')).format("YYYY-MM-DD HH:mm:ss")}
*/}
                  {cdata.datetime}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </List>
      ));
    } else {
      ViewComments = "No Comments";
    }

    return (
      <div>
        <Divider variant="fullWidth" />

        {ViewComments}
      </div>
    );
  }
}

export default Comments;
