# Blogger App

Blogger App is a simple blogging platform built with Node.js, Express.js, and MongoDB. Users can create, view, and manage blog posts. The app uses EJS for server-side rendering and Bootstrap for styling.

## Features

- **Home Page**: Displays a list of blog posts with previews and a "Read More" feature for expanded content.
- **Compose Page**: Allows users to create new blog posts.
- **Dynamic Post Pages**: Each post has its own page for full details.
- **Static Pages**: Includes an About page and a Contact page.
- **Responsive Design**: Styled with Bootstrap for a modern and mobile-friendly UI.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/cyrochak/Blogger-App.git
   cd Blogger-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment:
   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:
     ```env
     MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/BlogDB?retryWrites=true&w=majority
     ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

### Folder Structure

```
Blogger-App/
├── node_modules/          # Node.js dependencies
├── public/                # Static assets (CSS, images, etc.)
├── views/                 # EJS templates
│   ├── partials/          # Shared header/footer templates
│   ├── about.ejs          # About page
│   ├── contact.ejs        # Contact page
│   ├── compose.ejs        # Compose post page
│   ├── index.ejs          # Home page
│   ├── post.ejs           # Single post page
├── .gitignore             # Files to ignore in Git
├── index.js               # Main server file
├── package.json           # App metadata and dependencies
└── README.md              # Documentation
```

## Usage

### Create a Post
1. Navigate to `/compose`.
2. Fill in the form fields (title, weather, date, and content).
3. Click "Publish" to save the post.

### View Posts
- Visit the home page (`/`) to see a list of all posts.
- Click "Read More" to expand a post or navigate to its dedicated page.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS, Bootstrap
- **Database**: MongoDB with Mongoose


## Acknowledgments

- [Bootstrap](https://getbootstrap.com/)
- [EJS](https://ejs.co/)
- [MongoDB](https://www.mongodb.com/)

---
