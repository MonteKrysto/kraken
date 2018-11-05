import React, { Component } from 'react'
import './styles.scss';
class LeftNav extends Component {

    render() {

        return (
            <nav className="sidebar">
                <div className="sidebar-header">
                    <h3>Kraken DMS</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>My Documents</li>
                </ul>
            </nav>
        )

    }

}

export default LeftNav