const amplitude = require('amplitude');

exports.handler = async (event, context) => {
    const apiKey = process.env.AMPLITUDE_API_KEY; // Access the environment variable

    return {
        statusCode: 200,
        body: JSON.stringify({ apiKey }), // Return the API key (or any other data you need)
    };
}; 