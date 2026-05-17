import dotenv from 'dotenv';
import app from "./server.js";

dotenv.config();
export const PORT = process.env.PORT || 3000;
export const DATA_FILE_PATH = process.env.DATA_FILE_PATH;

app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);
});