const mongoose = require("mongoose");
const { Schema } = mongoose;
const crypto = require('crypto');
const { v4: uuidv4 } = require('uuid');

const userModel = new Schema({


    username: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true
    },

    email: {
        type: String,
        required: true,
        maxlength: 100,
    },

    salt: String,

    encryptedPassword: {
        type: String,
        required: true
    },

    role: {
        type: Number,
        default: 0
    }

}, { timestamps: true });


userModel.virtual("password")
    .set(function(password) {
        this._password = password;
        this.salt = uuidv4();
        this.encryptedPassword = this.securePassword(password);
    })
    .get(function() {
        return this._password;
    })

userModel.methods = {

    authenticate: function(plainpassword) {
        return this.securePassword(plainpassword) === this.encryptedPassword
    },

    securePassword: function(plainpassword) {
        if (!plainpassword) return "";
        try {
            return crypto.createHmac("sha256", this.salt)
                .update(plainpassword)
                .digest('hex')
        } catch (error) {
            return error;
        }
    }

}


module.exports = mongoose.model("User", userModel);