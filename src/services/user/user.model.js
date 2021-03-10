let mongoose = require("mongoose");

let ProfileSchema = mongoose.Schema({
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
      },
    //   agenda:[
    //     {
    //       type:String
    //     }
    //   ]
  
},{ collection: "userProfile" });
module.exports = mongoose.model("userProfile", ProfileSchema);
