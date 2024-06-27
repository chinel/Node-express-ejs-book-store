const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const messages = {
  successful_registration: "Registration Successful",
  successful_login: "Login Successful",
  failed_login: "Login Failed",
  failed_registration: "Registration Failed",
  get_books_failed: "Unable to get books.",
  get_authors_failed: "Unable to get authors.",
  book_added: "Book saved successfully",
  get_book_failed: "Unable to get book.",
  book_updated: "Book updated successfully.",
  book_update_failed: "Book update failed.",
  book_deleted: "Book Deleted",
  book_delete_failed: "Unable to delete book",
  author_deleted: "Author Deleted",
  author_delete_failed: "Unable to delete author",
};
module.exports = {
  isEmpty,
  messages,
};
