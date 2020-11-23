var express = require('express');
var app = express();
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/mydb');
var schema = require('./schema_file.js').todoSchema;
var Items = mongoose.model('Items', schema);

mongoose.connection.once('open', function () {
    app.use(express.static('./'))
    app.use('/', express.query());
    app.use(express.json());

    app.delete("/", function (request, response) {
        // Items.remove({_id: request.query.id}).exec()
        console.log(request.query)
        Items.deleteOne({_id: request.query.id}).exec()
    })

    app.post('*', function (req, res) {

        var reqObj = JSON.parse(req.body);
        var newItem = new Items({
            item: reqObj
        });

        newItem.save(newItem, function (err, doc) {
            console.log(doc);
            res.status(200);
            res.send(JSON.stringify(doc));
        });
    });
    app.get('/list', function (req, res) {
        var query = Items.find();
        query.exec(function (err, docs) {
            res.status(200);
            res.send(JSON.stringify({docs}));
        });
    });
    app.listen(8080, function () {
        console.log("Application is Running!");
    });
});