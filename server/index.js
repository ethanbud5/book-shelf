require("dotenv").config();
const express = require("express");
const {json} = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const axios = require("axios");

var app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set("db",dbInstance)
    //console.log(app.get('db'))
    // axios({
    //     headers: {'Authorization': 'Bearer 5555555'},
    //     url:"https://reactnd-books-api.udacity.com/books",
    //     method:"get"
    // }).then(res=>{
        //  console.log(res.data.books)
        // res.data.books.map(book=>{
        //     app.get("db").books.insert({
        //         book_id: book.id,
        //         title: book.title,
        //         author:book.authors[0],
        //         publisher:book.publisher,
        //         published_date:book.publishedDate,
        //         rating:book.averageRating,
        //         shelf:book.shelf,
        //         image:book.imageLinks.thumbnail
        //        }, function(err, res) {
        //            console.log(err)
        //      });
        // })
        //console.log(res.data);
    // }).catch(err=>console.log("Error getting books...",err))
}).catch(err=>console.log(err));


//console.log(app)

var port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log("Listening on port: "+port);
})
