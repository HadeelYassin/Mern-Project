const mongoose = require('mongoose'), Schema = mongoose.Schema;

const MovieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Movie name is required"]

    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "Poster is required"]
    },

    totalnumberOfTickets: {
        type: Number,
    },
    trailerUrl: {
        type: String,
        required: [true, "Trailer is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]
    },
    showingDate: { type: Date, min: Date.now },


    Buyers: [{ type: Schema.Types.ObjectId, ref: 'User' }]

}, { timestamps: true });




module.exports.Movie = mongoose.model('Movie', MovieSchema);