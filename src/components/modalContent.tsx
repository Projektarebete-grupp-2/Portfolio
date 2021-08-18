import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ContactPage from "./contactPage";
import ErrorBoundary from "./errorboundary";

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

const ModalContent: React.FC<Props> = ({ setModalOpen }) => (
  <Wrapper>
    <ErrorBoundary errorMsg="whoopsie daisy, something went wrong with the contact form...">
      <ContactPage></ContactPage>
    </ErrorBoundary>
    <Button
      type="button"
      variant="outlined"
      color="primary"
      onClick={() => setModalOpen(false)}
    >
      Close
    </Button>
  </Wrapper>
);

export default ModalContent;
