import React, { Component, Fragment } from 'react'
import {Button} from 'reactstrap';
import KrakenModal from "../Modal/KrakenModal";
import DropzoneField from './DropzoneField';

class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleModal() {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {

        return (
            <Fragment>
                <Button
                    onClick={() => this.toggleModal()}
                >Upload File</Button>
                <KrakenModal
                    isOpen={this.state.isOpen}
                    toggle={() => this.toggleModal()}
                    header="Upload a File"
                    body={(
                        <DropzoneField />
                    )}
                >
                </KrakenModal>

            </Fragment>
        )

    }

}

export default UploadFile