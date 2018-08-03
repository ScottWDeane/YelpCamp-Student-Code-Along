// all middleware goes here
var Campground = require("../models/campground");
var Comment = require("../models/comment");
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Campground.findById(req.params.id, function(err, foundCampground){
            if(err || !foundCampground){ //is there an error, or an item that is null?
                req.flash("error", "Campground not found.");
                res.redirect("back");
            } else {
                //does user "own" the comment?
                if(foundCampground.author.id.equals(req.user._id)) {    //mongoose method to compare mongoose objects to JS 
                    next();
                } else {
                    req.flash("error", "You do not have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
    if(req.isAuthenticated()){
        Comment.findById(req.params.comment_id, function(err, foundComment){
            if(err || !foundComment){ //if there is an error, OR if the foundComment returns null
                req.flash("error", "Comment not found.");
                res.redirect("back");
            } else {
                //does user "own" the campground?
                if(foundComment.author.id.equals(req.user._id)) {    //mongoose method to compare mongoose objects to JS 
                    next();
                } else {
                    req.flash("error", "You do not have permission to do that.");
                    res.redirect("back");
                }
            }
        });
    } else {
        req.flash("error", "You need to be logged in to do that.");
        res.redirect("back");
    }
};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that."); //key, value
    res.redirect("/login");
};

module.exports = middlewareObj;