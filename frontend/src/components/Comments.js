import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import "../assets/stylesheets/Styles.css";

class Comments extends Component {

  render() {
    const datain = this.props.dataIn;
    let ViewComments;
    if (datain.length > 0) {
      ViewComments = datain.map(cdata => (
        <List className="comments">
          <ListItem alignItems="flex-start">
                   <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={PersonIcon} />
                </ListItemAvatar>
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
                  <br/>
                  {cdata.comment_body}
                  <br />
                  {cdata.datetime.replace(/T/gi, ' - ').replace(/Z/gi, '  ')}
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
