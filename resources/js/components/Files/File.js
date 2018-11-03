import React, { Component } from 'react'
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class File extends Component {

    render() {
    
        return (
            <Col sm="2">
                <Card body >
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    <Button>Go somewhere</Button><Button>Go Another Place</Button>
                </Card>
            </Col>
        )
    
    }

}

export default File