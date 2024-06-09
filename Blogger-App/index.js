import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
  res.render("index.ejs");
});

app.get("/home", (req, res) =>{
  res.render("index.ejs");
});

app.get("/about", (req, res) =>{
  res.render("about.ejs");
});
app.get("/contact", (req, res) =>{
  res.render("contact.ejs");
});

app.post("/submit", (req, res) =>{
  
  res.render("index.ejs", 
  {
    weather: req.body["weather"],
    date: req.body["date"],
    text: req.body["text"], 
  });
})
app.put("/update", (req, res) =>{
  
    res.render("index.ejs", 
    {
      weather: req.body["weather"],
      date: req.body["date"],
      text: req.body["text"], 
    });
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  