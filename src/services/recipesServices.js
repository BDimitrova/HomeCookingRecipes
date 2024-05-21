const Recipies = require('../models/Recipies');
const User = require('../models/User');

exports.create = (recipiesData) => Recipies.create(recipiesData);

exports.getAll = () => Recipies.find().lean();

exports.getOne = (recipiesId) => Recipies.findById(recipiesId).populate('voted');

exports.delete = (recipiesId) => Recipies.findByIdAndDelete(recipiesId);

exports.findOwner = (userId) => User.findById(userId).lean();

exports.getMyRecipiesPost = (userId) => Recipies.find({ owner: userId}).lean();

exports.updateOne = (recipiesId, recipiesData) => Recipies.findByIdAndUpdate(recipiesId, recipiesData);