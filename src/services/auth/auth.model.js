let mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  profile_img: {
    type: String,
    default: "boat.png"
  },
  event:{
      type:String
  }
});
module.exports = mongoose.model("users", userSchema);
