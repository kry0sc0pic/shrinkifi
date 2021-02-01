const express = require('express');
const bodyParser = require('body-parser');
// require('dotenv').config(); // Uncomment when using .env file
const shortid = require('shortid');
const MongoClient = require('mongodb').MongoClient;
const mongo_url = process.env.MONGODB_URI;
const app = express();
const PORT = process.env.PORT || 5000 ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'ejs');

app.post('/api/create'  ,function (req, res){
    var body = req.body;
    var id = shortid.generate();
    MongoClient.connect(mongo_url  ,function (err , db){
        if(err){
            console.log(err);
            return;
        }
        var dbo = db.db('test_data');
        
        var target = body.url;
        dbo.collection('urls').insertOne({_id: id , target: target} , function( err , _){
            if (err){
                console.log(err);
                return;
            }
        });
        db.close();
    });

    res.redirect(`/done/${id}`);
});

app.get('/done/:id', function (req, res){
    var id = req.params.id;
    console.log(req.ip);
    res.render("done", {url: `${process.env.DOMAIN}/link/${id}`});
});



app.get('/link/:id' , function (req , res){
    var id = req.params.id;
    MongoClient.connect(mongo_url ,function (err , db){
        if (err){
            console.log(err);
            return;
        }
        var dbo = db.db('test_data');
        dbo.collection('urls').findOne({_id: id} , function( _ , result){
            if (err){
                console.log(err);
                return;
            }
            if (result == null){
               res.status(404).send("404 Not Found");
    
            } else{
            var target = result.target;
            res.redirect(target);
            }
        });
        db.close();
    });

});


app.listen(PORT, "0.0.0.0" ,function () {
    console.log(`Listening on port ${PORT}`);
    console.log(`Website is accessible at http://localhost:${PORT}`);
});