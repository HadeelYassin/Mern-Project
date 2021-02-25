const  {Movie}  = require('../models/movie.model');
const { User } = require('../models/user.model');
const { Category } = require('../models/category.model');

module.exports.createMovie = (request, response) => {
    const { title, description,imageUrl, totalnumberOfTickets,trailerUrl,price,showingDate,numberOfSeats,selectedCategory } = request.body;
    Movie.create({ title, description,imageUrl, totalnumberOfTickets,trailerUrl,price,showingDate,numberOfSeats })
        .then(movie=> {
            Category.findOneAndUpdate({'_id':selectedCategory},{ 
                $push:{Movies: movie}
             }).catch(err => response.json(err));
             return response.json(movie)
        })
        .catch(err => response.json(err));
}
module.exports.createUser = async (request, response) => {
    const { firstName,lastName,phoneNumber,numberOfTickets,status,id} = request.body;
    await User.create({ firstName,lastName,phoneNumber,numberOfTickets,status})
        .then(person=> {
            Movie.findOneAndUpdate({'_id':id},{ 
                $push:{Buyers: person}
             }).catch(err => response.json(err));
             return response.json(person)
        })
        .catch(err => response.status(400).json(err))
}

module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.allMovies= (request, response) =>{
    Movie.find().sort({showingDate: 'ascending'}).populate('Buyers')
    .then(movies=>response.json(movies))
    .catch(err=>response.status(400).json(err));
}
module.exports.findOneSingleMovie = (request, response) => {
    Movie.find({_id: request.params.id})
        .then(oneSingleMovie => response.json({ Movie: oneSingleMovie}))
        .catch(err => response.json({ message: "Something went wrong", error: err}));
};
module.exports.deleteMovie = (request, response) => {
    Movie.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.allCategories=(request, response) =>{
    Category.find().populate('Movies')
    .then(categories=>response.json(categories))
    .catch(err=>response.status(400).json(err));
}

module.exports.getMovie = (request, response) => {
    Movie.findOne({_id:request.params.id}).populate('Buyers')
        .then(movie => response.json(movie))
        .catch(err => response.json(err))
}

module.exports.deleteCategory = (request, response) => {
    Category.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.getOneCategory= (request, response) => {
    Category.findOne({_id:request.params.id})
    .then(category => response.json(category))
        .catch(err => response.json(err))
}
