import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import DataTable from "./Datatable/DataTable";
import Header from "./Header/Header";
import {deleteFile, fetchFiles, resetSearch, searchAllFiles} from '../actions/actions';

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
        // this.props.searchFiles(text);
    }

    render() {
        const { allFiles, isFetching } = this.props;

        if (isFetching && !allFiles.length) {
            return <p>Loading...</p>;
        }

        return (
            <Fragment>
                {!allFiles.length &&
                    <Row>
                        <Col>
                            <p>There have been no allFiles uploaded</p>
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
                        {allFiles.length &&
                            <DataTable
                                data={allFiles}
                                deleteItem={(id) => this.deleteItem(id)}
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
        sortBy: (col) => console.log(col),
        getFiles: () => dispatch(fetchFiles()),
        deleteFile: (id) => dispatch(deleteFile(id)),
        searchFiles: (text) => dispatch(searchAllFiles(text)),
        resetSearch: () => dispatch(resetSearch())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

