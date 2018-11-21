import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import DataTable from "./Datatable/DataTable";
import Header from "./Header/Header";
import {deleteFile, fetchFiles, resetSearch, searchAllFiles, sortFiles} from '../actions/actions';
import { digIn } from "../utils/helpers";

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFiles()
    }

    deleteItem(id) {
        this.props.deleteFile(id);
    }

    search(text) {
        this.props.searchFiles(text);
    }

    render() {
        const { allFiles, isFetching, sortBy } = this.props;

        if (isFetching && !allFiles.length) {
            return <p>Loading...</p>;
        }

        return (
            <Fragment>
                { !digIn(['files'], allFiles, []).length &&  //!allFiles && !allFiles.files && !allFiles.files.length &&
                    <Row>
                        <Col>
                            <p>There have been no files uploaded</p>
                        </Col>
                    </Row>
                }
                <Row>
                    <Col>
                        <Header
                            searchText={(text) => this.search(text)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        { digIn(['files'], allFiles, []).length && //allFiles && allFiles.files && allFiles.files.length &&
                            <DataTable
                                data={allFiles.files}
                                deleteItem={(id) => this.deleteItem(id)}
                                sortBy={field => sortBy(field)}
                            />
                        }
                    </Col>
                </Row>
          </Fragment>
        )

    }

}


const mapStateToProps = state => {
    const {
        allFiles,
        isFetching
    } = state;

    return {
        allFiles,
        isFetching,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        sortBy: (col) => dispatch(sortFiles(col)),
        getFiles: () => dispatch(fetchFiles()),
        deleteFile: (id) => dispatch(deleteFile(id)),
        searchFiles: (text) => dispatch(searchAllFiles(text)),
        resetSearch: () => dispatch(resetSearch())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

