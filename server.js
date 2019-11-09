const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const app = express();
const { check, validationResult } = require('express-validator');
require('dotenv').config();

// -------------------------------------------------------------
// Middleware
// -------------------------------------------------------------
app.use(express.json());

// -------------------------------------------------------------
// Express routes
// -------------------------------------------------------------
app.post(
    '/search',
    [
        [
            check('term', 'Search term must be between 1 and 32 characters')
                .isLength({
                    min: 1,
                    max: 32
                })
                .trim()
                .escape()
        ]
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const results = await axios.get(
                `https://api.yelp.com/v3/businesses/search?location=naperville&term=${req.body.term}&limit=10`,
                {
                    headers: {
                        Authorization: `Bearer ${process.env.YELP_API_KEY}`
                    }
                }
            );
            res.send(results.data.businesses);
        } catch (error) {
            res.status(500).json({ errors: [{ msg: 'Server Error' }] });
        }
    }
);

app.post('/details', async (req, res) => {
    try {
        const results = await axios.get(
            `https://api.yelp.com/v3/businesses/${req.body.id}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.YELP_API_KEY}`
                }
            }
        );
        res.send(results.data);
    } catch (error) {
        res.status(500).json({ errors: [{ msg: 'Server Error' }] });
    }
});

// -------------------------------------------------------------
// Port
// -------------------------------------------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
