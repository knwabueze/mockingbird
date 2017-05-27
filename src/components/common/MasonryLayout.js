import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const MasonryLayout = ({ children, columnSize, columnGap, columnCount, style, className }) => {
    const styles = StyleSheet.create({
        masonry: {
            columns: `${columnCount ? columnCount : ''} ${columnSize ? columnSize : ''}`,
            columnGap: `${columnGap ? columnGap : ''}`,
            columnFill: 'balanced'
        }
    });
    return <div
        data-masonry
        className={`${className} ${css(styles.masonry)}`}
        style={style}>
        {children}
    </div>
};

MasonryLayout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    columnSize: PropTypes.string,
    columnGap: PropTypes.string,
    columnCount: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
}

export default MasonryLayout;
