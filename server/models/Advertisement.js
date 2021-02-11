/* eslint-disable no-use-before-define */

const mongoose = require('mongoose');

const generateSlug = require('../utils/slugify');
// const Customer = require('./Customer');
// const Purchase = require('./Purchase');

// const { addToMailchimp } = require('../mailchimp');

// const logger = require('../logger');

const { Schema } = mongoose;

const mongoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  _id: {
    type: String,
  },
  _partition: {
    type: String,
  },
  owner: {
    type: String,
  },
  correctAnswer: {
    type: String,
  },
  cpcv: {
    type: Number,
  },
  dailyBudget: {
    type: Number,
  },
  isActive: {
    type: Boolean,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  question: {
    type: String,
  },
  quiz: {
    type: [String],
  },
  radius: {
    type: Number,
  },
  specifiesLocation: {
    type: Boolean,
  },
  totalOwed: {
    type: Number,
  },
  uri: {
    type: String,
  },
  viewers: [String],
  createdAt: {
    type: Date,
    required: true,
  },
});

class AdvertisementClass {
  static async list({ offset = 0, limit = 10 } = {}) {
    const advertisements = await this.find({}).sort({ createdAt: -1 }).skip(offset).limit(limit);
    return { advertisements };
  }

  static async getAdvertisements({ ownerId }) {
    const advertisements = await this.find({ owner: ownerId }).sort({ createdAt: -1 });
    return { advertisements };
  }

  static async getBySlug({ slug }) {
    const advertisementDoc = await this.findOne({ slug });
    if (!advertisementDoc) {
      throw new Error('Advertisement not found');
    }

    const advertisement = advertisementDoc.toObject();
    return advertisement;
  }

  static async add({ name }) {
    const slug = await generateSlug(this, name);
    if (!slug) {
      throw new Error(`Error with slug generation for name: ${name}`);
    }
    return this.create({
      name,
      slug,
      createdAt: new Date(),
    });
  }

  static async edit({
    user,
    id,
    uri,
    specifiesLocation,
    radius,
    quiz,
    name,
    question,
    longitude,
    latitude,
    isActive,
    dailyBudget,
    cpcv,
    correctAnswer,
  }) {
    const advertisement = await this.findById(id, 'slug name');

    if (!advertisement) {
      throw new Error('Advertisement is not found by id');
    }

    if (advertisement && advertisement.owner !== user) {
      throw new Error('You do not have permission to edit this advertisement');
    }

    const modifier = {
      uri,
      specifiesLocation,
      radius,
      quiz,
      name,
      question,
      longitude,
      latitude,
      isActive,
      dailyBudget,
      cpcv,
      correctAnswer,
    };

    if (name !== advertisement.name) {
      modifier.name = name;
      modifier.slug = await generateSlug(this, name);
    }

    const editedAdvertisement = await this.findOneAndUpdate(
      { _id: id },
      { $set: modifier },
      { fields: 'slug', new: true },
    );

    return editedAdvertisement;
  }

  //   static async buy({ book, user, stripeCharge }) {
  //     if (!book) {
  //       throw new Error('Book not found');
  //     }

  //     if (!user) {
  //       throw new Error('User required');
  //     }

  //     const isPurchased =
  //       (await Purchase.find({ userId: user._id, bookId: book._id }).countDocuments()) > 0;
  //     if (isPurchased) {
  //       throw new Error('You already bought this book.');
  //     }

  //     User.findByIdAndUpdate(user._id, { $addToSet: { purchasedBookIds: book._id } }).exec();

  //     try {
  //       await addToMailchimp({ email: user.email, listName: 'purchased' });
  //     } catch (error) {
  //       logger.error('Buy book error:', error);
  //     }

  //     return Purchase.create({
  //       userId: user._id,
  //       bookId: book._id,
  //       amount: book.price * 100,
  //       createdAt: new Date(),
  //       stripeCharge,
  //     });
  //   }
}

mongoSchema.loadClass(AdvertisementClass);

const Advertisement = mongoose.model('Advertisement', mongoSchema);

module.exports = Advertisement;
