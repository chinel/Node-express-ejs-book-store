const getAllAuthors = async () => {
  return Promise.resolve({
    data: {
      result: [
        {
          _id: "66644b4f816d507fe43aa433",
          name: "James doe 545074cd-d1c0-49b4-b42c-4688eff1a3f7",
          publisher: "Pearson Publisher corp",
          about: "A highly sophisticated author, New york's best seller.",
          website: "https://google.com",
          twitter: "",
        },
        {
          _id: "66815b77da021e230b639a27",
          name: "Harry Doe",
          website: "www.harry.com",
          about: "I am an author with 700 books published",
          twitter: "@harry",
          publisher: "Parker Publishers",
        },
        {
          _id: "66817923da021e230b639a33",
          name: "Jane Doe",
          website: "www.doe.com",
          about: "I am another author",
          twitter: "@doe",
          publisher: "Doe publishers",
        },
      ],
    },
  });
};

const getAuthor = async (id) => {
  return Promise.resolve({
    _id: id,
    name: "Harry Doe",
    website: "www.harry.com",
    about: "I am an author with 700 books published",
    twitter: "@harry",
    publisher: "Parker Publishers",
  });
};

const postAuthor = async (author) => {
  return Promise.resolve({
    data: {
      result: {
        ...author,
        _id: "6678188839bdf15d24c8eafg",
        __v: 0,
      },
      message: "Author Saved.",
    },
  });
};

const editAuthor = async (author) => {
  return Promise.resolve({
    data: {
      result: {
        acknowledged: true,
        modifiedCount: 1,
        upsertedId: null,
        upsertedCount: 0,
        matchedCount: 1,
      },
      message: "Author updated.",
    },
  });
};

const deleteAuthor = async (authorId) => {
  return Promise.resolve({
    data: {
      result: {
        acknowledged: true,
        deletedCount: 1,
      },
      message: "Author deleted.",
    },
  });
};

module.exports = {
  getAllAuthors,
  getAuthor,
  postAuthor,
  editAuthor,
  deleteAuthor,
};
