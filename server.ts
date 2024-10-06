import express from "express";
import router from "./src/modules/book/book.route";

const app = express();
const PORT = 5000;

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});