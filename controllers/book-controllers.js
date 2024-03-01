const { Book } = require("../models");

const bookControllers = {
  // gets all books
  // Tested successfully in Insomnia 2/26/2023 11:56 AM
  async getAllBooks(req, res) {
    try {
      const bookData = await Book.find().select("-__v");

      res.json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // gets single book
  // Tested successfully in Insomnia 2/26/2023 11:57 AM
  async getSingleBook(req, res) {
    try {
      const dbBookData = await Book.findOne({ _id: req.params.bookId })
        .select("-__v")
        .populate("readers")
        .populate("quotes");

      if (!dbBookData) {
        return res.status(404).json({ message: "No book with this id!" });
      }

      res.json(dbBookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Creates book
  // Tested successfully in Insomnia 2/26/2023 11:58 AM
  async createBook(req, res) {
    try {
      const bookData = await Book.create(req.body);
      res.json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Adds reader to book
  // Tested successfully in Insomnia 2/26/2023 11:59 AM
  async addReader(req, res) {
    try {
      const bookData = await Book.findOneAndUpdate(
        { _id: req.params.bookId },
        { $addToSet: { readers: req.params.readerId } },
        { new: true }
      );

      if (!bookData) {
        return res.status(404).json({ message: "No book with this id!" });
      }

      res.json(bookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Removes reader from book
  // Tested successfully in Insomnia 2/26/2023 12:00 PM
  async removeReader(req, res) {
    try {
      const dbBookData = await Book.findOneAndUpdate(
        { _id: req.params.bookId },
        { $pull: { readers: req.params.readerId } },
        { new: true }
      );

      if (!dbBookData) {
        return res.status(404).json({ message: "No book with this id!" });
      }

      res.json(dbBookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // updates Book
  // Tested successfully in Insomnia 2/26/2023 12:01 PM
  async updateBook(req, res) {
    try {
      const dbBookData = await Book.findOneAndUpdate(
        { _id: req.params.bookId },
        {
          $set: req.body,
        },
        {
          runValidators: true,
          new: true,
        }
      );

      if (!dbBookData) {
        return res.status(404).json({ message: "No book with this id!" });
      }

      res.json(dbBookData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // deletes book
  // Tested successfully in Insomnia 2/26/2023 12:01 PM
  async deleteBook(req, res) {
    try {
      const dbBookData = await Book.findOneAndDelete({
        _id: req.params.bookId,
      });

      if (!dbBookData) {
        return res.status(404).json({ message: "No book with this id!" });
      }

      // BONUS: get ids of book's `quotes` and delete them all
      await Quote.deleteMany({ _id: { $in: dbBookData.quotes } });
      res.json({ message: "Book and associated quotes deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = bookControllers;
