const { Schema, model } = require("mongoose");
const plm = require("passport-local-mongoose");

const userSchema = new Schema({
  username: String,
  email:String,
  role: {
    type: String,
    enum: ["Cliente", "User"],
    default:"Usuario"
  },
  profile:{
    ref:"Profile",
    type:Schema,Types.ObjectId
  },
  products: [{
    ref:"Product",
    type: Schema.Types.ObjectId
  }
]
},

{
  timestamps: {
    createdAt;"createdAt",
    updatedAt:"updatedAt"
  }
}
)

userSchema.plugin(plm, { usernameQueryFields:["email","username"})