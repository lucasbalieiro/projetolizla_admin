import express, { request } from 'express';

const app = express();

app.get('/', (request, response) => {
    return response.json('API - Projeto Lizla v1.0');
});

app.listen(process.env.PORT || 3333, () => {
    console.log('Backend started');
});

export default app;