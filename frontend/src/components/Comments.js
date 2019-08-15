import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import "./Styles.css";
import Col from "react-bootstrap/Col";
import Item from "./Item";



class Comments extends Component{
    state ={
   // data: this.props.data
    };
render() {
  const  datain = this.props.dataIn;
    const ViewComments = datain.map(cdata => (
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
                            <br/>
                            {cdata.comment_body}
                            <br/>
                            {cdata.datetime}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
        </List>
    ));
    return (
        <div>
        <Divider variant="fullWidth" />

        {ViewComments}</div>
    );
}
}

export default Comments