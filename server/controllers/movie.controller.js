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
    const { firstName,lastName,phoneNumber,numberOfTickets,status} = request.body;
    await User.create({ firstName,lastName,phoneNumber,numberOfTickets,status})
        .then(person=> {
            Movie.findOneAndUpdate({'_id':'6033d042f0a1912e3ce0e8f5'},{ 
                $push:{Buyers: person}
             }).catch(err => response.json(err));
             return response.json(person)
        })
        .catch(err => response.json(err));
}
module.exports.createCategory = (request, response) => {
    Category.create(request.body)
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.allMovies= (request, response) =>{
    Movie.find().populate('Buyers')
    .then(movies=>response.json(movies))
    .catch(err=>response.status(400).json(err));
}
module.exports.allCategories=(request, response) =>{
    Category.find().populate('Movies')
    .then(categories=>response.json(categories))
    .catch(err=>response.status(400).json(err));
}