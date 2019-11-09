import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchBusiness } from '../../redux/actions/index';
import SearchItem from './SearchItem';
import PropTypes from 'prop-types';

const Search = ({ searchBusiness, search }) => {
    const [formData, setFormData] = useState({
        term: ''
    });

    const { term } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSearch = () => {
        searchBusiness(formData);
    };

    return (
        <div className='container'>
            <div className='search-container'>
                <input
                    onChange={onChange}
                    name='term'
                    type='text'
                    placeholder='Food, restaurant, starbucks etc...'
                    value={term}
                />
                <button className='btn btn-success' onClick={onSearch}>
                    Search
                </button>
            </div>
            <div className='search-header'>
                <div>Photo</div>
                <div>Name</div>
                <div>Rating</div>
                <div>Address</div>
                <div>Phone</div>
                <div>More Details</div>
            </div>
            <div className='search-items-container'>
                {search.length > 0 ? (
                    search.map((business, index) => {
                        return (
                            <SearchItem
                                key={'searchitem-' + index}
                                details={business}
                            />
                        );
                    })
                ) : (
                    <div className='nodata'>No Data</div>
                )}
            </div>
        </div>
    );
};

Search.propTypes = {
    search: PropTypes.array.isRequired,
    searchBusiness: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    search: state.search
});

export default connect(
    mapStateToProps,
    { searchBusiness }
)(Search);
