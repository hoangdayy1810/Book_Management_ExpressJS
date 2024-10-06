import prisma from "../../../src/utils/prisma";

export const booksList = async () => {
    const books_list = await prisma.book.findMany();
    const result = books_list.map((book) => ({
        id: book.id,
        title: book.title,
        publishedDate: book.publishedDate,
        price: book.price,
        summary: book.summary,
    }));
    // console.log(result, 'book_service');
    return result;
}

export const detailBook = async (id: string) => {
    const book = await prisma.book.findUnique({
        where: { id: id },
        include: {
            authors: {
                select: {
                    author: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
            genres: {
                select: {
                    genre: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });

    if (!book) {
        throw new Error("Book not found");
    }

    const detailedBook = {
        title: book.title,
        publishedDate: book.publishedDate,
        price: book.price,
        summary: book.summary,
        authors: book.authors.map((a) => ({
            name: a.author.name,
        })),
        genres: book.genres.map((g) => ({
            name: g.genre.name,
        })),
    };

    return detailedBook;
}