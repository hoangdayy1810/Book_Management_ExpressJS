import { Request, Response } from "express";
import { booksList, detailBook } from "./book.service";


export const getBooksList = async (req: Request, res: Response) => {
    try {
        const books_list = await booksList();
        // console.log(books_list, "books_list_controller");
        res.status(200).json(books_list);

    } catch (error) {
        console.error("Lỗi khi lấy sách:", error);
        // throw new Error("Không thể lấy danh sách sách.");
        res.status(500).json({ message: "Lỗi CSDL khi lấy sách" });
    }
}

export const getDetailBook = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const detail_Book = await detailBook(id);
        res.status(200).json(detail_Book);

    } catch (error) {
        console.error("Lỗi khi lấy chi tiết sách:", error);
        // throw new Error("Could not fetch book details.");
        res.status(500).json({ message: "Lỗi CSDL khi lấy chi tiết sách" });
    }
}