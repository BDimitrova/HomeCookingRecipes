const mongoose = require('mongoose');

let recipiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
    },
    species: {
        type: String,
        required: true,
        minLength: 3,
    },
    skinColor: {
        type: String,
        required: true,
        minLength: 3,
    },
    eyeColor: {
        type: String,
        required: true,
        minLength: 3,
    },
    image: {
        type: String,
        required: true,
        validate: /^https?:\/\//i
    },
    description: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 500,
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    recommend: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        }
    ],

});

recipiesSchema.method('getRecommend', function () {
    return this.recommend.map(x => x._id);
})

let Recipies = mongoose.model('Creatures', recipiesSchema);

module.exports = Recipies;