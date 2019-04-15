import React from "react";
import axios from "axios";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const backend = "https://contact-notes.herokuapp.com/";

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
    const contact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };
    axios
      .post(`${backend}api/users/contact`, contact)
      .then(response => {
        this.setState({
          error: false
        });
      })
      .catch(err => {
        this.setState({
          error: true,
          errorMessage: err.response.data.error
        });
        console.log("Error", err.response.data)
      });

   // alert("Functionality coming soon!");
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
          <DialogTitle id="form-dialog-title">Get in touch</DialogTitle>
          <div className="form-wrap">
            <DialogContent>
              <DialogContentText>                
              </DialogContentText>
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
                  />
                </div>              
            </DialogContent>
          </div>
          <div className="cta-wrap">
            <DialogActions>
              <div className="buttons-wrap">
                <button className="cta-buttons" onClick={this.handleClose}>
                  Cancel
                </button>
                <button className="cta-buttons" onClick={this.handleMessage}>
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
