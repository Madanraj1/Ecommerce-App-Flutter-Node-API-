const User = require("../models/user");

//params
exports.getUserById = (req, res, next, id) => {


    User.findById(id).exec((error, user) => {

        if (error || !user) {
            return res.status(400).json({
                error: "No user found "
            });
        }

        req.profile = user;
        next();

    })

}

// routes
exports.getUser = (req, res) => {

    // console("-----------profile-----", req.profile);
    req.profile.salt = undefined;
    req.profile.encryptedPassword = undefined;
    req.profile.__v = undefined;

    return res.json(req.profile);


}

exports.updateProfile = (req, res) => {

    User.findByIdAndUpdate({ _id: req.profile._id }, { $set: req.body }, { new: true, useFindAndModify: true },
        (error, updateduser) => {

            if (error) {
                return res.status(400).json({
                    error: "updating profile failed"
                })
            }

            if (req.body.password) {
                return res.status(400).json({
                    error: "you cannot update password here"
                })
            }

            updateduser.salt = undefined;
            updateduser.encryptedPassword = undefined;
            updateduser.__v = undefined;
            return res.json(updateduser);

        })


}