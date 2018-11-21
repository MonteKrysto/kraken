import React, { Component } from 'react'
import { Button } from 'reactstrap';
import './dataTable.scss';


const DataRow = ({ id, file, created, type, size, deleteItem }) => {
    return (
        <li className="row datarow">
            <div className="col-3">{file}</div>
            <div className="col-2">{created}</div>
            <div className="col-2">{type}</div>
            <div className="col-2">{parseFloat(size / Math.pow(1024,2)).toFixed(2)} mb</div>
            <div className="col-3">
                <Button color="danger"
                    onClick={() => deleteItem()}
                >Delete</Button>
            </div>
        </li>
    )
};

export default DataRow;