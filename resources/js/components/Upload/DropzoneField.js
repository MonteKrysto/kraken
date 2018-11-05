import React, { Component } from 'react'
import { connect } from 'react-redux';
import Dropzone from "react-dropzone";
import './dropzoneField.scss';
import {saveFiles} from "../../actions/actions";


/**
 * The dropzone field component returns a react-dropzone component
 *
 * @returns {XML}
 * @constructor
 */
class DropzoneField extends Component {

    constructor(props) {
        super(props)
    }

    onDrop(files) {
        this.props.uploadFiles(files)
    }


    render() {
        const dropStyle = {
            position: 'relative',
            width: 460,
            height: 250,
            borderWidth: 2,
            borderColor: 'rgb(102, 102, 102)',
            borderStyle: 'dashed',
            borderRadius: 5,
        };
        return (
            <div className="dropzone">
                <Dropzone
                    onDrop={(files) =>this.onDrop(files)}
                    onFileDialogCancel={() => this.onCancel()}
                    style={dropStyle}
                >
                    <p>Try dropping some files here, or click to select files to upload.</p>
                </Dropzone>
            </div>
        )

    }

}

const mapStateToProps = state => {
    return {
        isUploading: state.isUploading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        uploadFiles: (files) => dispatch(saveFiles(files))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DropzoneField)