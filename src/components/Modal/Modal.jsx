import React from 'react';

const Modal = ({show,onHide}) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onHide={handleClose}>
            Close
          </Button>
          <Button variant="primary" onHide={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
};

export default Modal;