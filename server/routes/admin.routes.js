const Admin = require('../controllers/admin.controllers');

module.exports = app => {
  app.post("/api/register", Admin.register);
 
  
  
}