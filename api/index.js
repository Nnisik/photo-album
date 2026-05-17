import express from 'express';
import fs from 'fs';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

dotenv.config();
const PORT = process.env.PORT || 3000;
const DATAFILEPATH = process.env.DATA_FILE_PATH;

app.get("/", (req, res) => {
    res.send('Hello from Express')
});

app.get('/posts', (req, res) => {
    fs.readFile(DATAFILEPATH, "utf8", (err, jsonString) => {
        if (err) {
            res.status(500).json({ message:`Error reading file from disk: ${err}`});
            return;
        }
        try {
            const posts = JSON.parse(jsonString);
            res.status(200).send(posts);
        } catch (err) {
            res.status(500).json({ message:`Error parsing JSON string: ${err}`})
        }
    });
});

app.post('/posts', (req, res) => {
    fs.readFile(DATAFILEPATH, "utf8", (err, jsonString) => {
        if (err) {
            res.status(500).json({ message:`Error reading file from disk: ${err}`});
            return;
        }
        try {
            const posts = JSON.parse(jsonString);

            const { caption, image_url } = req.body;
            let newPost = {
                id: posts.length + 1,
                type: "image_post",
                caption: caption,
                image: {
                    url: image_url,
                    altText: caption
                },
                likes: 0
            }
            posts.push(newPost);

            fs.writeFile(DATAFILEPATH, JSON.stringify(posts), err => {
                if (err) {
                    res.status(500).json({ message:`Error adding new post: ${err}`})
                } else {
                    res.status(201).send(posts);
                }
            });

        } catch (err) {
            res.status(500).json({ message:`Error parsing JSON string: ${err}`})
        }
    });
})

app.listen(PORT, () => {
    console.log(":)");
    console.log(`Server started on: http://localhost:${PORT}`);
});