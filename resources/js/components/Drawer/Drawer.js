import React, { Component, Fragment } from 'react'
import SlidingPane from 'react-sliding-pane';
import Modal from 'react-modal';
import 'react-sliding-pane/dist/react-sliding-pane.css';

class Drawer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPaneOpen: false
        }
    }

    componentDidMount() {
        Modal.setAppElement(this.el);
    }

    render() {

        return (
            <Fragment>
                <SlidingPane
                    className='some-custom-class'
                    overlayClassName='some-custom-overlay-class'
                    isOpen={ this.props.isPaneOpen }
                    title='Hey, it is optional pane title.  I can be React component too.'
                    subtitle='Optional subtitle.'
                    onRequestClose={ () => {
                        // triggered on "<" on left top click or on outside click
                        this.setState({ isPaneOpen: false });
                    } }>
                    {this.props.render()}
                </SlidingPane>
            </Fragment>
        )

    }

}

export default Drawer