import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap';



class KrakenModal extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { isOpen, toggle, header, body, footer} = this.props;

        return (
            <Modal
                isOpen={isOpen}
                toggle={() => toggle()}
            >
                <ModalHeader toggle={() => toggle()}>{header}</ModalHeader>
                <ModalBody>
                    {body}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => toggle()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}

export default KrakenModal;