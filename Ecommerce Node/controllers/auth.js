const User = require("../models/user");



exports.signup = (req, res) => {

    const user = new User(req.body);
    user.save((error, user) => {
        if (error) {
            return res.json({
                error: "Unable to save in the database"
            })
        }
        return res.json({
            username: user.username,
            email: user.email,
            id: user._id,
            role: user.role
        })
    });
}