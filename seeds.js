var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Homey Shackles",
        image: "https://farm1.staticflickr.com/130/321487195_ff34bde2f5.jpg",
        description: "Lorem ipsum dolor amet cloud bread PBR&B narwhal cray, pop-up tote bag copper mug craft beer biodiesel selfies vaporware hammock bitters cardigan. Tofu jianbing iPhone pabst bicycle rights normcore master cleanse mustache subway tile ugh pork belly. Cray lyft readymade, bitters kombucha whatever flexitarian DIY four dollar toast. Tbh snackwave subway tile copper mug, PBR&B church-key ennui man braid. Twee kogi craft beer actually four loko, jean shorts bespoke brooklyn hell of subway tile hashtag vice deep v. Poutine tbh hoodie master cleanse meggings humblebrag."
    },
    {
        name: "My Backyard",
        image: "https://farm4.staticflickr.com/3492/3823130660_0509aa841f.jpg",
        description: "Church-key DIY beard venmo selfies adaptogen, blue bottle yr ethical vaporware everyday carry. Ugh try-hard listicle bitters activated charcoal vice. Cloud bread XOXO photo booth etsy poke yr polaroid live-edge glossier small batch asymmetrical unicorn hoodie. Fam helvetica butcher celiac squid, sustainable artisan organic disrupt meh. Banh mi you probably haven't heard of them yuccie vegan vice.",
    },
    {
        name: "Dessert Desert",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg",
        description: "Truffaut live-edge celiac vaporware street art four loko. Sriracha pork belly cliche activated charcoal +1 distillery. Vaporware seitan gastropub blog bushwick echo park PBR&B farm-to-table skateboard street art keffiyeh. Tumblr pickled messenger bag kale chips +1 XOXO quinoa meggings humblebrag af fingerstache narwhal wayfarers butcher."
    }
]

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("REMOVED");
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                        //create a comment
                        Comment.create(
                            {
                                text: "I think I'm sleeping in someone else's backyard.",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new comment")
                                }
                            })
                    }
                });
            });
        }
    });
}

module.exports = seedDB;