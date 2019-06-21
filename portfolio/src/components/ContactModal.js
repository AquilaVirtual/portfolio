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

  //this fuction displays a dynamically created box with a text informing visitor that contact message was successfully sent.
  displaySuccessBox = (status, name) => {
    if (status === 201) {
      let SuccessTimeout;
      let successBox = document.createElement("div");
      successBox.className = "success";
      successBox.innerHTML = `Hello, ${name}! Thank you for contacting me. I'll get back to you as soon as possible.`;
      //here we reference textBox ID in Landing page
      let textBox = document.getElementById("textBox");

      if (document.body.contains(successBox)) {
        window.clearTimeout(SuccessTimeout);
      } else {
        textBox.parentNode.insertBefore(successBox, textBox.nextSibling);
      }
      SuccessTimeout = window.setTimeout(function() {
        successBox.parentNode.removeChild(successBox);
        SuccessTimeout = -1;
      }, 6000);
    }
  };
  handleMessage = event => {
    //event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.message) {
      this.setState({
        error: true,
        errorMessage: "All fields are required!"
      });
    }
    const contact = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    axios
      .post(`${backend}api/users/contact`, contact)
      .then(response => {
        this.displaySuccessBox(
          response.status,
          //Grap only the first name
          response.data.name.split(" ")[0]
        );
        this.setState({
          error: false,
          name: "",
          email: "",
          message: ""
        });
        this.props.handleModalToggle();
      })
      .catch(err => {
        this.setState({
          error: true,
          errorMessage: err.response.data.errorMessage
        });
      });
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
              <DialogContentText />
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
            <div className="error-message">
              {" "}
              {this.state.error ? this.state.errorMessage : null}
            </div>
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
