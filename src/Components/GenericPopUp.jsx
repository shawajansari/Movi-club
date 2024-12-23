import React, { Children } from "react";
import { Button, Modal } from "react-bootstrap";
import { CREW } from "./common.const";

const GenericPopUp = (props) => {
  const { show, handleClose, showHeading, showFooter,children } = props;
  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">{showHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {children}
      </Modal.Body>
      {showFooter ? (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      ) : (
        <></>
      )}
    </Modal>
  );
};

export default GenericPopUp;
