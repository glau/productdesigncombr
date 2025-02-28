exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            apiKey: process.env.AMPLITUDE_API_KEY 
        })
    };
}; 