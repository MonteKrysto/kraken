import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class File extends Component {

    render() {
    
        // return (
        //     <Col sm="2">
        //         <Card body >
        //             <CardTitle>Special Title Treatment</CardTitle>
        //             <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        //             <Button>Go somewhere</Button><Button>Go Another Place</Button>
        //         </Card>
        //     </Col>
        // )

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