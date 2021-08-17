import { Button } from "@material-ui/core";
import React, { CSSProperties, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./modal";
import ModalContent from "./modalContent";

const Nav: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={navdiv}>
      <Link to="/">
        <Button>Home</Button>
      </Link>
      <Link to="/Team">
        <Button>Team</Button>
      </Link>
      <Link to="/Skills">
        <Button>Skills</Button>
      </Link>
      <Link to="/About">
        <Button>About</Button>
      </Link>
      <Link to="/Project">
        <Button>Project</Button>
      </Link>

      <Link to="/faq">
        <Button>FAQ</Button>
      </Link>

      <Modal modalOpen={modalOpen}>
        <ModalContent setModalOpen={setModalOpen} />
      </Modal>
      <Button onClick={() => setModalOpen(true)}>
        <span>Contact us!</span>
      </Button>
    </div>
  );
};
const navdiv: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  /*  backgroundColor: '#282c34', */
};
export default Nav;
