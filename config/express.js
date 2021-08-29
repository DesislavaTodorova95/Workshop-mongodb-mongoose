const express = require("express");
//setup handlebars
const hbs = require("express-handlebars");

module.exports= async (app)=>{
    app.engine(
        "hbs",
        hbs({
          extname: ".hbs",
        })
      );
      app.set("view engine", "hbs");
      //setup static files
      app.use("/static/", express.static("static"));
      app.use('/js', express.static('js'))
      //setup storage middleware
      app.use(express.urlencoded({ extended: false }));
   
}