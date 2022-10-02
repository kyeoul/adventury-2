const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
<<<<<<< Updated upstream
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: String, required: true}
=======
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone_number: {type: String, required: true},
    trip_type: {type: String, required: true},
    password: {type: String, required: true},
>>>>>>> Stashed changes
}, {
    timestamps: true,
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY);
}

const User = mongoose.model('User', userSchema);

module.exports = User;