const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Webhook endpoint
app.post('/chat', async (req, res) => {
    try {
        const { question } = req.body;
        
        if (!question) {
            return res.status(400).json({ error: 'Question is required' });
        }

        // ProNet'e istek at ve cevabı bekle
        const response = await axios.post(
            'https://pronet-bilgi-bankas.onrender.com/api/v1/prediction/d8c06532-c344-40a0-95e0-73b58f72ea85',
            { question },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        // ProNet'ten gelen cevabı döndür
        res.json(response.data);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ 
            error: 'Internal server error',
            details: error.message 
        });
    }
});

// Vercel için export
module.exports = app;

// Local development için
if (process.env.NODE_ENV !== 'production') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
} 