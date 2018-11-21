import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import DataRow from "./DataRow";
import SortBar from "../Sort/SortBar";


/**
 * The data table component renders a basic table with rows.
 *
 * @property {Object} data - the data from which to create the table
 * @property {function} deleteItem = Called when the button is clicked to delete an item
 * @property {function(String key)} onSort - Called when a column header is clicked. Passes in a key from the items property.
 * @param {Object} props - Component properties
 * @returns {XML}
 * @constructor
 */

class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false,
            file: {}
        }
    }
    render() {
        const { data, deleteItem, sortBy } = this.props;

        return (
            <Fragment>
                <SortBar
                    onSort={sortBy}
                    className="list-files"
                    items={[
                        {
                            key: 'file',
                            label: 'File',
                            cols: 3,
                            className: 'sort-menu__title'
                        },
                        {
                            key: 'created',
                            label: 'Uploaded',
                            cols: 2,
                            className: 'sort-menu__status hide-mobile'
                        },
                        {
                            key: 'type',
                            label: 'File Type',
                            cols: 2,
                            className: 'hide-mobile'
                        },
                        {
                            key: 'size',
                            label: 'File Size',
                            cols: 2
                        }
                    ]}
                />
                {data && data.map(d => (
                    <DataRow
                        key={d.id}
                        file={d.file}
                        created={d.created}
                        type={d.type}
                        size={d.size}
                        deleteItem={id => deleteItem(d.id)}
                    />
                ))}
            </Fragment>
        )

    }

}

export default DataTable