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
                {review_count ? `${review_count} - ` : null}
                {rating ? `${rating} / 5` : 'N / A'}
            </div>
            <div>{display_address ? display_address[0] : 'N / A'}</div>
            <div>{display_phone ? display_phone : 'N / A'}</div>
            <div className='moredetails'>
                <Link className='btn btn-primary' to={`/details/${id}`}>
                    More Details
                </Link>
            </div>
        </div>
    );
};

export default SearchItem;
