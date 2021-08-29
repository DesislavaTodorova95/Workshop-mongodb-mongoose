const express = require('express');

const hbs = require('express-handlebars')

module.exports = (app)=>{
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