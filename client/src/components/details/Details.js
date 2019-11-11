import React, { useLayoutEffect } from 'react';
import { searchDetails } from '../../redux/actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Hours from './Hours';
import PropTypes from 'prop-types';

const Details = ({ match, details, loading, searchDetails }) => {
    useLayoutEffect(() => {
        if (details && details.id !== match.params.id) {
            searchDetails({ id: match.params.id });
        }
    }, []);

    return (
        <div className='container'>
            <Link to='/' className='btn btn-primary goback'>
                Go Back
            </Link>
            {details && !loading ? (
                <div className='details-container'>
                    <div className='details-title'>
                        {details.name ? details.name : 'N/A'}
                    </div>
                    <div className='details-photo'>
                        <img src={details.image_url} alt='Icon' />
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Location</div>
                        <div className='right-item'>
                            {details.location
                                ? details.location.display_address[0]
                                : 'N/A'}
                        </div>
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Open</div>
                        <div className='right-item'>test</div>
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Phone</div>
                        <div className='right-item'>
                            {details.display_phone
                                ? details.display_phone
                                : 'N/A'}
                        </div>
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Reviews</div>
                        <div className='right-item'>
                            {details.review_count
                                ? details.review_count
                                : 'N/A'}
                        </div>
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Rating</div>
                        <div className='right-item'>
                            {details.rating ? details.rating : 'N/A'} / 5
                        </div>
                    </div>
                    <div className='details-item'>
                        <div className='left-item'>Website</div>
                        <div className='right-item'>
                            {details.url ? (
                                <a
                                    href={details.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Link
                                </a>
                            ) : (
                                'N/A'
                            )}
                        </div>
                    </div>
                    {details.hours
                        ? details.hours[0].open.map((day, index) => (
                              <Hours key={`hours-${index}`} hours={day} />
                          ))
                        : null}
                </div>
            ) : null}
        </div>
    );
};

Details.propTypes = {
    searchDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    details: state.details,
    loading: state.loading
});

export default connect(
    mapStateToProps,
    { searchDetails }
)(Details);
