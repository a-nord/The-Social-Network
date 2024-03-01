const { Quote, Book } = require("../models");

const quoteController = {
  // gets all quotes
  // Tested successfully in Insomnia 2/26/2023 12:04 PM
  async getAllQuotes(req, res) {
    try {
      const quoteData = await Quote.find().sort({ createdAt: -1 });

      res.json(quoteData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  
  // gets single quote by id
  // Tested successfully in Insomnia 2/26/2023 12:04 PM
  async getSingleQuote(req, res) {
    try {
      const quoteData = await Quote.findOne({
        _id: req.params.quoteId,
      });

      if (!quoteData) {
        return res.status(404).json({ message: "No quote with this id!" });
      }

      res.json(quoteData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // creates a quote
  // Tested successfully in Insomnia 2/26/2023 12:07 PM
  async createQuote(req, res) {
    try {
      const quoteData = await Quote.create(req.body);

      const dbBookData = await Book.findOneAndUpdate(
        { _id: req.body.bookId },
        { $push: { quotes: quoteData._id } },
        { new: true }
      );

      if (!dbBookData) {
        return res
          .status(404)
          .json({ message: "Quote created but no book with this id!" });
      }

      res.json({ message: "Quote successfully created!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // updates quote by ID
  // Tested successfully in Insomnia 2/26/2023 12:10 PM
  async updateQuote(req, res, err) {
    const quoteData = await Quote.findOneAndUpdate(
      { _id: req.params.quoteId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!quoteData) {
      return res.status(404).json({ message: "No quote with this id!" });
    }

    res.json(quoteData);

    console.log(err);
    res.status(500).json(err);
  },
  // deletes quote by ID
  // Tested successfully in Insomnia 2/26/2023 12:08 PM
  async deleteQuote(req, res) {
    try {
      const dbQuoteData = await Quote.findOneAndRemove({
        _id: req.params.quoteId,
      });

      if (!dbQuoteData) {
        return res.status(404).json({ message: "No quote with this id!" });
      }

      const dbBookData = Book.findOneAndUpdate(
        { quotes: req.params.quoteId },
        { $pull: { quotes: req.params.quoteId } },
        { new: true }
      );

      if (!dbBookData) {
        return res
          .status(404)
          .json({ message: "Quote created but no book with this id!" });
      }

      res.json({ message: "Quote successfully deleted!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // adds reaction to Quote
  // Tested successfully in Insomnia 2/26/2023 12:15 PM
  async addReaction(req, res) {
    try {
      const dbQuoteData = await Quote.findOneAndUpdate(
        { _id: req.params.quoteId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!dbQuoteData) {
        return res.status(404).json({ message: "No quote with this id!" });
      }

      res.json(dbQuoteData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // removes reaction from quote
  // Tested successfully in Insomnia 2/26/2023 12:16 PM
  async removeReaction(req, res) {
    try {
      const dbQuoteData = await Quote.findOneAndUpdate(
        { _id: req.params.quoteId },
        { $pull: { reactions: { reactionId: req.params.reactionId }}},
        { runValidators: true, new: true }
      );

      if (!dbQuoteData) {
        return res.status(404).json({ message: "No quote with this id!" });
      }

      res.json(dbQuoteData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = quoteController;
