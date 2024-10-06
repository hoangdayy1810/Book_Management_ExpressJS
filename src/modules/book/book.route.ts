import express from "express";
import { BookSchema } from "./book.schema";
import { getBooksList, getDetailBook } from "./book.controller";

const router = express.Router();
router.get('/', getBooksList);

router.get('/:id', getDetailBook)

export default router;