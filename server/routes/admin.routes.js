const Admin = require('../controllers/admin.controllers');
const Movie = require('../controllers/movie.controller');
const User = require('../controllers/movie.controller');
const  Category  = require('../controllers/movie.controller');
//const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/register", Admin.register);
  app.get("/api/logout", Admin.logout);
  app.get('/api/admin',Admin.getAdmin);
  app.post("/api/createmovie",Movie.createMovie);
  app.post("/api/createuser",User.createUser);
  app.post("/api/createcategory",Movie.createCategory);
  app.get("/api/getAllMovies",Movie.allMovies);
  app.get("/api/getAllCategories",Movie.allCategories);
  app.get("/api/getMovie/:id",Movie.getMovie);
  app.delete('/api/movie/:id', Movie.deleteMovie);
  app.delete('/api/category/:id', Movie.deleteCategory);
  app.get('/api/getCategory/:id',Movie.getOneCategory);
}