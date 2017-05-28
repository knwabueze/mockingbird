import React from 'react';
import Radium from 'radium'
import PropTypes from 'prop-types';

const MasonryLayout = Radium(({ children, columnSize, columnGap, columnCount, style, className }) => {
    const styles = {
        masonry: {
            columns: `${columnCount ? columnCount : ''} ${columnSize ? columnSize : ''}`,
            columnGap: `${columnGap ? columnGap : ''}`,
            columnFill: 'balanced'
        }
    };
    return <div
        data-masonry
        className={`${className}`}
        style={[style, styles.masonry]}>
        {children}
    </div>
});

MasonryLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    columnSize: PropTypes.string,
    columnGap: PropTypes.string,
    columnCount: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
}

export default MasonryLayout;
