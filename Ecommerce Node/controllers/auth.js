const User = require("../models/user");
var expressJwt = require("express-jwt");
var jwt = require("jsonwebtoken");

//  actual routes
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


exports.signin = (req, res) => {

    const { username, password } = req.body;


    User.findOne({ username }, (error, user) => {

        if (error || !user) {
            return res.status(400).json({
                error: "Invalid Credentials"
            })
        }

        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: "Username and password do not match"
            })
        }
        const token = jwt.sign({ _id: user._id }, process.env.SECRET);
        res.cookie("token", token, { expire: new Date() + 100 });
        const { _id, username, email, role } = user;
        return res.json({
            token,
            user: { _id, username, email, role }
        });


    })


}

exports.signout = (req, res) => {

    res.clearCookie("token");

    res.json({
        message: "Logged out successfully"
    })

}



//  custom middlewares
exports.isSignedIn = expressJwt({
    secret: process.env.SECRET,
    userProperty: "auth",
    algorithms: ["HS256"]
});

// official middlewares
exports.isAuthenticated = (req, res, next) => {

    let checker = req.profile && req.auth && req.profile._id == req.auth._id;

    // console.log("profile", req.profile, "auth", req.auth, "profile_ID", req.profile._id, "authID", req.auth._id);
    // console.log(checker);
    if (!checker) {
        return res.status(403).json({
            error: "ACCESS DENIED"
        });
    }
    next();

}

exports.isAdmin = (req, res) => {

    if (req.profile.role === 0) {
        return res.status(403).json({
            error: "Only admins are allowed"
        })
    }
    next();

}