const axios = require('axios');

/**
 * Get AI response from Google Gemini API
 * @param {string} question - Question to ask AI
 * @returns {Promise<string>} Single-word answer
 */
async function getAIResponse(question) {
    if (typeof question !== 'string' || question.trim().length === 0) {
        throw new Error('Question must be a non-empty string');
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        throw new Error('GEMINI_API_KEY not configured');
    }

    try {
        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
            {
                contents: [{
                    parts: [{
                        text: `Answer the following question with ONLY a single word, no punctuation, no explanation: ${question}`
                    }]
                }],
                generationConfig: {
                    temperature: 0.1,
                    maxOutputTokens: 10,
                }
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                timeout: 10000
            }
        );

        if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
            // Extract single word from response
            const answer = response.data.candidates[0].content.parts[0].text
                .trim()
                .split(/[\s\n,.!?;:]+/)[0]; // Get first word only

            return answer;
        }

        throw new Error('Invalid response from AI service');
    } catch (error) {
        if (error.response?.status === 429) {
            throw new Error('AI service rate limit exceeded');
        } else if (error.response?.status === 401 || error.response?.status === 403) {
            throw new Error('Invalid AI API key');
        } else if (error.code === 'ECONNABORTED') {
            throw new Error('AI service timeout');
        }

        throw new Error(`AI service error: ${error.message}`);
    }
}

module.exports = {
    getAIResponse
};
