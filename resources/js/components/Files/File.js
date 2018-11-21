import React, { Component } from 'react'
import { Button } from 'reactstrap';

class File extends Component {

    render() {
            return (
            <li className="row">
                <div className="col-3">File 1</div>
                <div className="col-3">3-10-18</div>
                <div className="col-3">5-10-18</div>
                <div className="col-3">
                    <Button>View</Button>
                    <Button>Delete</Button>
                </div>
            </li>
        )
    
    }

}

export default File