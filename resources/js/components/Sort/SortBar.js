import React from 'react';
import PropTypes from 'prop-types';
import './sortBar.scss';
import {makeClassName} from "../../utils/helpers";

/**
 * The sort bar which appears at the top of a data table.
 *
 * @property {function(String key)} onSort - Called when a column header is clicked. Passes in a key from the items property.
 * @property {Object} confirm - ?
 * @property {array<{String key, String label, int cols, String className, Boolean noAction}>} items - Definition of
 *   the column headers to show. Each item can include:
 *   key: The key that will be passed to the onSort property.
 *   label: The displayed label of the column header.
 *   cols: The width of the column, out of 12 total.
 *   className: Additional classes to add to the column header.
 *   noAction: If true, the column is not sortable.
 *
 * @param {Object} props - Component properties
 * @returns {XML}
 * @constructor
 */
const SortBar = (props) => {
    const { onSort, confirm } = props;

    const _makeClassName = item => {
        return 'col-md-' + item.cols + ' col-sm-' + item.cols + (item.className ? ' ' + item.className : '');
    };

    return (
        <section
            className={makeClassName([
                'sortBar data-sort',
                props.className,
            ])}
        >
            <div className="sort-menu col-xs-12">
                <div className="row sort-content">
                    {
                        props.items.map((item, idx) =>
                            !item.label ? (
                                <div key={'sort'+(item.key||idx)} className={_makeClassName(item)}></div>
                            ) : item.noAction ?  (
                                <div key={'sort'+(item.key||idx)} className={_makeClassName(item)}>
                                    <span>{item.label}</span>
                                </div>
                            ): (
                                <div key={'sort'+(item.key||idx)} className={_makeClassName(item)}>
                                    <span className="sort_by_item" onClick={() => onSort(item.key)}>{item.label}</span>
                                    <div className="double-carets sort_by_item" onClick={() => onSort(item.key)}>
                                        <i className="double-carets__element icon ion-arrow-up-b"></i>
                                        <i className="double-carets__element icon ion-arrow-down-b"></i>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
};

// SortBar.propTypes = {
//     onSort: PropTypes.func.isRequired,
//     // confirm: PropTypes.object,
//     items: PropTypes.array.isRequired
// };

export default SortBar;
