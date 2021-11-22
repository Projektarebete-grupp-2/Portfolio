import { Button } from "@material-ui/core";
import styled from "styled-components";
import ContactPage from "./contactPage";
import ErrorBoundary from "./errorboundary";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import './LinnModal.css';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    margin-bottom: 20px;
  }
`;

type Props = {
  setModalOpen: any;
};
class MyModal extends React.Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h2>Try my React Modal</h2>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <p>Hello there!</p>
            <p>You have now opened the modal!</p>
          </Modal>
          <button type="button" onClick={this.showModal}>
            Press to open
          </button>
        </main>
      );
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
  
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Close</button>
        </section>
      </div>
    );
  };
  
  const container = document.createElement("div");
  document.body.appendChild(container);
  ReactDOM.render(<MyModal />, container);

/*class Dashboard extends Component {
    state = { show: false };
  
    showModal = () => {
      this.setState({ show: true });
    };
  
    hideModal = () => {
      this.setState({ show: false });
    };
  
    render() {
      return (
        <main>
          <h1>React Modal</h1>
          <button type="button" onClick={this.showModal}>
            open
          </button>
        </main>
      );
    }
  }

  const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Dashboard />, container);*/

  export default MyModal;
