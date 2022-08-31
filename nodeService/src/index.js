const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
    console.log('Called GET /');
    return res.status(200).json({
        message: 'Hello world'
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});