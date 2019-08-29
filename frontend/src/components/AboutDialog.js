import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class AboutDialog extends Component {

    state = {
        open: false,
    };

    handleDialogView = () => {
        (this.state.open) ? this.setState({open: false}) : this.setState({open: true});
    };

    componentDidMount() {
        this.handleDialogView();
    }

    render() {
        return (
            <div name="addModaldialog">
                <Dialog

                    open={this.state.open}
                    onClose={this.handleDialogView}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            <h5>  <b>  This is React.js + Node.js based Games Score Board</b></h5>
                            <ul>
                                <h5>Architecture and Properties:</h5>
                                <li>React.js</li>
                                <li>Node.js + Express Backend</li>
                                <li>MySQL</li>
                                <li>Download as CSV option</li>
                            </ul>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleDialogView} name="modalOk" color="primary" autoFocus>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AboutDialog;