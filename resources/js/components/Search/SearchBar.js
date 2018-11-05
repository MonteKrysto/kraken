import React, { Component } from 'react';
import _ from 'lodash';
import './search.scss';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: props.value || ''
        };
    }


    handleSearch(value) {
        this.setState({ searchText: value });
        // this._throttleSearch(value);
        this.props.onChange && this.props.onChange(value);
    }

    /**
     * Clear the search text. Called externally.
     */
    clear() {
        this.setState({ searchText: '' });
    }

    /**
     * Set the search value. Called externally.
     *
     * @param {String} val
     */
    setValue(val) {
        this.setState({ searchText: val });
    }

    render() {
        const { handleOnFocus } = this.props;
        return (
            <div className={['header-search', this.props.className].join(' ')}>
                <input
                    className="file-search"
                    type="text"
                    value={this.state.searchText}
                    placeholder={'Search'}
                    onChange={e => this.handleSearch(e.target.value)}
                    autoFocus={this.props.autoFocus}
                    disabled={this.props.disabled || false}

                />
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><path d="M12.542 15.283c-.5-.5-.505-1.304-.004-1.804a1.276 1.276 0 0 1 1.805.004l5.333 5.333c.5.5.504 1.304.004 1.805a1.276 1.276 0 0 1-1.805-.005l-5.333-5.333zm1.74-1.419a8.115 8.115 0 0 1-11.571.615c-3.363-3.07-3.634-8.322-.607-11.73a8.115 8.115 0 0 1 11.571-.615c3.363 3.07 3.634 8.321.606 11.73zm-1.218-1.112c2.422-2.727 2.205-6.928-.485-9.384a6.492 6.492 0 0 0-9.257.492c-2.422 2.727-2.205 6.929.485 9.384a6.492 6.492 0 0 0 9.257-.492z"/></svg>
            </div>
        )
    }

}

export default SearchBar