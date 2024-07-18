import express from 'express';
import AppRoutes from './routes.js';

const app = express();
const PORT = process.env.PORT||8000;
app.use(express.json())
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express CRUD App</h1>');
});

app.use('/api', AppRoutes); // Use a base route like '/api' for the imported routes

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
