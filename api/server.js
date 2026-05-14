import express from 'express';
import {getPosts, getPostsByID} from './src/routes/postsRoutes.js';

export const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send('Hello from Express')
});

app.get('/posts', getPosts);
app.get('/posts/:id', getPostsByID);

app.listen(PORT, () => {
    console.log(":)");
    console.log(`Server started on: http://localhost:${PORT}`);
});