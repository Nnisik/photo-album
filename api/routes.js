import fs from "fs";
import {DATA_FILE_PATH} from "./index.js";
import app from "./server.js";

app.get("/", (req, res) => {
    res.send('Hello from Express')
});

app.get('/posts', (req, res) => {
    fs.readFile(DATA_FILE_PATH, "utf8", (err, jsonString) => {
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
    fs.readFile(DATA_FILE_PATH, "utf8", (err, jsonString) => {
        if (err) {
            res.status(500).json({ message:`Error reading file from disk: ${err}`});
            return;
        }
        try {
            const posts = JSON.parse(jsonString);

            const { caption, image_url } = req.body;
            if (caption === "" || image_url === "") {
                res.status(500).json({message: "Post create error: empty field provided"})
            }

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

            fs.writeFile(DATA_FILE_PATH, JSON.stringify(posts), err => {
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
});