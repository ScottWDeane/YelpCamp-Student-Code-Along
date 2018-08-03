var mongoose    = require("mongoose");
var Campground  = require("./models/campground");
var Comment     = require("./models/comment");

var data = [
        {
            name: "Clouds Rest", 
            image: "http://www.photosforclass.com/download/flickr-2182093741",
            description: "Quisque volutpat et quam vel ultrices. Duis non erat faucibus, euismod eros vitae, auctor nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget aliquam metus. Proin ultricies metus varius aliquam convallis. Integer pellentesque diam lorem, ut eleifend tortor tristique dapibus. Proin euismod, sapien id pellentesque suscipit, lectus metus tristique dolor, non aliquet arcu enim id nunc. Vivamus molestie ante non sem tincidunt bibendum. Pellentesque mi augue, maximus et viverra in, malesuada non ex. Morbi vulputate quis enim vel maximus. Etiam mollis, nibh ac facilisis rutrum, metus lacus iaculis tortor, sit amet vestibulum est metus quis tellus. Morbi eu molestie lorem. Phasellus molestie diam id consequat egestas. Nulla in rutrum odio."
        },
        {
            name: "Desert Mesa", 
            image: "http://www.photosforclass.com/download/flickr-7842069486",
            description: "Quisque volutpat et quam vel ultrices. Duis non erat faucibus, euismod eros vitae, auctor nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget aliquam metus. Proin ultricies metus varius aliquam convallis. Integer pellentesque diam lorem, ut eleifend tortor tristique dapibus. Proin euismod, sapien id pellentesque suscipit, lectus metus tristique dolor, non aliquet arcu enim id nunc. Vivamus molestie ante non sem tincidunt bibendum. Pellentesque mi augue, maximus et viverra in, malesuada non ex. Morbi vulputate quis enim vel maximus. Etiam mollis, nibh ac facilisis rutrum, metus lacus iaculis tortor, sit amet vestibulum est metus quis tellus. Morbi eu molestie lorem. Phasellus molestie diam id consequat egestas. Nulla in rutrum odio."
        },
        {
            name: "Canyon Floor", 
            image: "http://www.photosforclass.com/download/flickr-2251892884",
            description: "Quisque volutpat et quam vel ultrices. Duis non erat faucibus, euismod eros vitae, auctor nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eget aliquam metus. Proin ultricies metus varius aliquam convallis. Integer pellentesque diam lorem, ut eleifend tortor tristique dapibus. Proin euismod, sapien id pellentesque suscipit, lectus metus tristique dolor, non aliquet arcu enim id nunc. Vivamus molestie ante non sem tincidunt bibendum. Pellentesque mi augue, maximus et viverra in, malesuada non ex. Morbi vulputate quis enim vel maximus. Etiam mollis, nibh ac facilisis rutrum, metus lacus iaculis tortor, sit amet vestibulum est metus quis tellus. Morbi eu molestie lorem. Phasellus molestie diam id consequat egestas. Nulla in rutrum odio."
        }
    ];

function seedDB(){
    //remove all current campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } 
        console.log("Removed campgrounds.");
        
        //add a few campgrounds
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else {
                console.log("Added a campground.");
                //create a comment
                Comment.create(
                    {
                        text: "This place is great, but I wish there was internet.",
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                        }
                    }
                    );
            }
        });
    });
});
    //add some comments
}

module.exports = seedDB;
