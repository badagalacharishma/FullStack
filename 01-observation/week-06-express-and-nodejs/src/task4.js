// middleware demonstration
const express = require('express');
const app = express();

// custom interceptor for logging
app.use((req, res, next) => {
    console.log(`[CHARISHMA_INTERCEPT] -> Hit path: ${req.url} at ${new Date().toISOString()}`);
    next();
});

app.get('/', (req, res) => res.send('Middleware active on this route.'));
app.listen(3000, () => console.log('App running on 3000...'));