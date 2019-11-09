import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({
    details: {
        id,
        name,
        image_url,
        rating,
        location: { display_address },
        display_phone,
        review_count
    }
}) => {
    return (
        <div className='searchitem'>
            <img src={image_url} alt='Business Icon' />
            <div>{name}</div>
            <div>
                {review_count} - {rating} / 5
            </div>
            <div>{display_address[0]}</div>
            <div>{display_phone}</div>
            <div className='moredetails'>
                <Link className='btn btn-primary' to={`/details/${id}`}>
                    More Details
                </Link>
            </div>
        </div>
    );
};

export default SearchItem;
