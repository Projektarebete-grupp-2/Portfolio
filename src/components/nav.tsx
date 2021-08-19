import { Button, Paper, ThemeProvider, useTheme } from "@material-ui/core";
import React, { CSSProperties, useState } from "react";
/* import "../style/app.css"; */
import Modal from "./modal";
import ModalContent from "./modalContent";
import { Link } from "react-scroll";
import { Link as ReactLinks } from "react-router-dom";

const Nav: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div>
        <ReactLinks to="/">
          <Button>Home</Button>
        </ReactLinks>
        <Link to="team" spy={true} smooth={true}>
          <Button>Team</Button>
        </Link>
        <Link to="divWrapper" spy={true} smooth={true}>
          <Button>Skills</Button>
        </Link>
        <Link to="aboutUs" spy={true} smooth={true}>
          <Button>About</Button>
        </Link>
        <Link to="project" spy={true} smooth={true}>
          <Button>Project</Button>
        </Link>
        <Link to="portfolio" spy={true} smooth={true}>
          <Button>Up comming</Button>
        </Link>
        <ReactLinks to="/blog">
          <Button>Blog</Button>
        </ReactLinks>
        <ReactLinks to="/faq">
          <Button>FAQ</Button>
        </ReactLinks>
        <Link to="root" spy={true} smooth={true}>
          <Modal modalOpen={modalOpen}>
            <ModalContent setModalOpen={setModalOpen} />
          </Modal>
          <Button onClick={() => setModalOpen(true)}>Contact us!</Button>
        </Link>
      </div>
    </ThemeProvider>
  );
};
/* const navdiv: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  position: "fixed",
  
}; */
export default Nav;
