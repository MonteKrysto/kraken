import React, {Component, Fragment} from 'react';
import { Row, Col } from 'reactstrap';
import SortBar from "../Sort/SortBar";
import SearchBar from "../Search/SearchBar";
import UploadFile from "../Upload/UploadFile";

class Header extends Component {

    render() {
        const { searchText } = this.props;

        return (
            <Fragment>
                <Row>
                    <Col>
                        <UploadFile/>
                        <SearchBar
                            onChange={(text) => searchText(text)}
                        />
                    </Col>
                </Row>
            </Fragment>
        )

    }

}

export default Header