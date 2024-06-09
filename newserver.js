const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

const openaiApiKey = process.env.OPENAI_API_KEY;

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: message}],
            max_tokens: 150,
            temperature: 0.7,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openaiApiKey}`,
            },
        });
        console.log('OpenAI Response:', response.data)
        res.json({response: response.data.choices[0].message.content});
    } catch (error) {
        console.error("Error Details: ", error.response ? error.response.data : error.message);
        res.status(500).json({error: error.response ? error.response.data : error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});