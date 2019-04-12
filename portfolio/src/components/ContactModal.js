import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      error: false,
      open: true,
      errorMessage: ""
    };
  }

  handleMessage = event => {
    event.preventDefault();
    alert("Functionality coming soon!")
    this.props.handleModalToggle();
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.handleModalToggle();
  };

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>        
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Get in touch
          </DialogTitle>
          <div className="form-wrap">
            <DialogContent>
              <DialogContentText>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    type="text"
                    required
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    type="text"
                    required
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <textarea                  
                    placeholder="Message"
                    name="message"                    
                    required
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    >
                  </textarea>
                </div>
              </DialogContentText>
            </DialogContent>
          </div>
          <div className="ctn-wrap">
          <DialogActions >
            <div className="buttons-wrap">
              <button className="ctn-buttons" onClick={this.handleClose}>
                Cancel
              </button>
              <button className="ctn-buttons" onClick={this.handleMessage}>
                Submit
              </button>
            </div>
          </DialogActions>   
          </div>       
        </Dialog>
      </div>
    );
  }
}
export default ContactModal;
