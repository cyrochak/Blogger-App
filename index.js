import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://cyrochak:Benedict.2619@blogapi.wy4gwlp.mongodb.net/?retryWrites=true&w=majority&appName=BlogAPI/BLogDB");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "No title specified."]
  },
  weather: {
    type: String,
    required: [true, "No content specified."]
  },
  date: {
    type: Date,
    required: [true, "No content specified."]
  },
  content: {
    type: String,
    required: [true, "No content specified."]
  }
});

const Post = mongoose.model("Post", postSchema);

app.get("/", async (req, res) => {
  try {
    const existedPosts = await Post.find({});
    res.render("index.ejs", {
      posts: existedPosts
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while retrieving posts.");
  }
});
app.get("/home", (req, res) =>{
  res.render("/");
});

app.get("/about", (req, res) =>{
  res.render("about.ejs");
});
app.get("/contact", (req, res) =>{
  res.render("contact.ejs");
});

app.get("/compose", (req, res) =>{
  res.render("compose.ejs");
});

app.post("/compose",function(req,res){
  const post = new Post({
    title:req.body.postTitle,
    weather:req.body.weather,
    date:req.body.date,
    content:req.body.postBody
  });

  post.save(function(err){
    if (!err){
      res.redirect("/");
    }
  });
});

app.get("/posts/:postID", async (req, res) => {
  try {
      const reqPostID = req.params.postID;
      const post = await Post.findById(reqPostID);

      if (!post) {
          // Handle case where post is not found
          return res.status(404).render('404.ejs');
      }

      res.render("post.ejs", { post: post });
  } catch (err) {
      console.error(err);
      // Handle server error
      res.status(500).send('Server Error');
  }
});
// app.put("/update", (req, res) =>{
  
//     res.render("index.ejs", 
//     {
//       weather: req.body["weather"],
//       date: req.body["date"],
//       text: req.body["text"], 
//     });
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  