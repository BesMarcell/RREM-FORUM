var Message = require('../models/Message');
//var bodyparser = require('body-parser');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};


exports.list = function(req, res) {

    Message.find().sort('time').exec(function(err, data) {
        if (err) {

            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(data);
        }
    });
};

exports.create = function(req, res) {
    var newMessage = new Message(req.body);

    newMessage.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(newMessage);
        }
    });
};