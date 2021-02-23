const mongoose = require('mongoose');
const AdminSchema = new mongoose.Schema({
  userName: {
    type: String,
    enum: ["admin"],
    required: [true, "Username is required"]
  },
  password: {
    type: String,
    enum: ["admin"],
    required: [true, "Password is required"]
  }
}, { timestamps: true });




module.exports.Admin = mongoose.model('Admin', AdminSchema);