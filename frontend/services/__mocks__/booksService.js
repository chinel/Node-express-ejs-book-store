const getAllBooks = async (req) => {
  return Promise.resolve({
    data: {
      result: [
        {
          _id: "6664517afdcac6f46d6c34f9",
          title: "How to eat 40",
          author: {
            _id: "66644b4f816d507fe43aa433",
            name: "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7",
            publisher: "Pearson Publisher",
            about: "A highly sophisticated author, New york's best seller.",
            website: "https://google.com",
            __v: 0,
          },
          ISBN: "10-999922-29356",
          numberOfPages: "200",
          price: 200,
          yearPublished: "2022",
        },
        {
          _id: "66644ddd28958e1c1d1f0f35",
          title: "How to run a business1",
          author: {
            _id: "66644b4f816d507fe43aa433",
            name: "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7",
            publisher: "Pearson Publisher",
            about: "A highly sophisticated author, New york's best seller.",
            website: "https://google.com",
            __v: 0,
          },
          ISBN: "10-999922-29304",
          numberOfPages: "209",
          price: 201,
          yearPublished: "2023",
        },
      ],
    },
  });
};

const addBook = async (book) => {
  return Promise.resolve({
    data: {
      result: {
        ...book,
        _id: "6678188839bdf15d24c8eabd",
        __v: 0,
      },
      message: "Book Saved.",
    },
  });
};

const editBook = async (book) => {
  return Promise.resolve({
    data: {
      result: {
        acknowledged: true,
        modifiedCount: 1,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1,
      },
      message: "Book updated.",
    },
  });
};

const getBook = async (bookId) => {
  return Promise.resolve({
    data: {
      result: {
        _id: bookId,
        title: "How to eat 40",
        author: {
          _id: "66644b4f816d507fe43aa433",
          name: "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7",
          publisher: "Pearson Publisher",
          about: "A highly sophisticated author, New york's best seller.",
          website: "https://google.com",
          __v: 0,
        },
        ISBN: "10-999922-29356",
        numberOfPages: "200",
        price: 200,
        yearPublished: "2022",
      },
    },
  });
};

const deleteBook = async (bookId) => {
  return Promise.resolve({
    data: {
      result: {
        acknowledged: true,
        deletedCount: 1,
      },
      message: "Book deleted.",
    },
  });
};

module.exports = { getAllBooks, getBook, addBook, editBook, deleteBook };
