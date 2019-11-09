import React, { Fragment } from 'react';
import spinner from './spinner.gif';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Spinner = ({ loading }) => {
    return (
        <Fragment>
            {loading ? (
                <img className='spinner' src={spinner} alt='Loading...' />
            ) : null}
        </Fragment>
    );
};

Spinner.propTypes = {
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    loading: state.loading
});

export default connect(
    mapStateToProps,
    null
)(Spinner);
