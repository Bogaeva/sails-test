/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	addUser: function (req, res) {
        
        var data = {
            email           : req.param('email'),
            userName        : req.param('userName'),
            phone           : req.param('phone')
        };
        
        User.create(data).exec(function (err, user) {
            
            res.redirect('/user');
            
            if (err) {
                return res.send(500);
            }
            
        });
        
    },

    updateUser: function (req, res) {
        
        var userId = req.param('id');
        
        var updatedData = {
            userName        : req.param('userName'),
            phone           : req.param('phone'),
        };
        
        User.update(userId, updatedData).exec(function (err) {
            
            if (err) {
                return res.send(500);
            }
            
            res.redirect('/user');
        });
    },

    deleteUser: function (req, res) {
        
        var userId = req.param('id');
        
        User.destroy(userId).exec(function (err) {
            
            if (err) return res.send(500);            
            
            res.redirect('/user');
            
        });
        
    },

    index: function (req, res) {
        
        User.find()
            .sort('id DESC')
            .exec(function (err, users) {
            
                if (err) {
                    return res.send(500)
                };
            
                res.view({
                    users: users
                });
            
            });
        
    },

    create: function(req, res) {
        
        res.view();
    },

    view: function (req, res) {
        
        var userId = req.param('id');
        
        User.findOne(userId).exec(function (err, user) {
            
            if (!user) {
                return res.send(404);
            };
            
            if (err) {
                return res.send(500);
            };
            
            res.view({
                user: user
            });
            
        });
            
    }, 
};

