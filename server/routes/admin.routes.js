const Admin = require('../controllers/admin.controllers');
const Movie = require('../controllers/movie.controller');
const User = require('../controllers/movie.controller');
const  Category  = require('../controllers/movie.controller');
module.exports = app => {
  app.post("/api/register", Admin.register);
  app.post("/api/createmovie",Movie.createMovie);
  app.post("/api/createuser",User.createUser);
  app.post("/api/createcategory",User.createCategory);
  app.get("/api/getAllMovies",Movie.allMovies);
  app.get("/api/getAllCategories",Movie.allCategories);
}