const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/exampleApp")

const Cat = mongoose.model("Cat", { name: String })

const kitty = new Cat({ name:"Ironhack"})

kitty.save((err) => {
    if(err) {
        console.log(err)
    } else {
        console.log("meow")
    }
})