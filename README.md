
# NotesHere

This is a full-stack web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application allows users to sign up, log in, and manage their notes. Users can create, edit, pin, search, and delete notes, with each note linked to a specific user account.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features

### User Authentication
- **Sign Up:** Users can create an account by providing a username, email, and password. Passwords are securely hashed using bcrypt.
- **Sign In:** Users can log in with their email and password. Upon successful login, a JWT token is generated and stored in an HTTP-only cookie.
- **Sign Out:** Users can log out, which clears the authentication token.

### Notes Management
- **Add Note:** Users can create a new note with a title, content, and optional tags.
- **Edit Note:** Users can edit the title, content, tags, and pin status of their existing notes.
- **Delete Note:** Users can delete any of their notes.
- **Pin Note:** Users can pin important notes, which will appear at the top of the note list.
- **Search Notes:** Users can search for notes by title or content using a search query.

### Responsive Design
- The frontend is built with React and styled using Tailwind CSS, ensuring that the application is responsive and accessible on various devices.

## Technologies Used

### Frontend
- **React**: Library for building user interfaces
- **Redux Toolkit**: State management
- **React Router**: Client-side routing
- **Axios**: HTTP client for API requests
- **Moment.js**: Date manipulation library
- **React Icons**: Icons for UI components
- **React Modal**: Accessible modal dialog component
- **React Toastify**: Notifications for user actions
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Frontend build tool

### Backend
- **Node.js**: JavaScript runtime for building the backend
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing user data and notes
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT token generation and verification
- **dotenv**: Environment variable management
- **Nodemon**: Development tool for automatically restarting the server

## Installation

### Prerequisites
- Node.js
- npm (Node Package Manager)
- MongoDB (local or Atlas)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZyanHere/Zyan-taking-notes.git
   cd Zyan-taking-notes
   ```

2. **Install dependencies for the frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Install dependencies for the backend**
   ```bash
   cd ../backend
   npm install
   ```

4. **Create a `.env` file in the backend directory**
   ```bash
   JWT_SECRET=your_jwt_secret
   MONGO_URI=your_mongo_db_uri
   ```

5. **Start the development servers**
   - **Frontend:**
     ```bash
     cd frontend
     npm run dev
     ```
   - **Backend:**
     ```bash
     cd backend
     npm run dev
     ```

6. **Open your browser and navigate to**
   ```bash
   http://localhost:5173
   ```

## Usage

1. **Sign Up** to create a new account.
2. **Sign In** using your credentials.
3. **Create, edit, pin, search, and delete notes** using the available functionalities.
4. **Log Out** when you are done.

## API Endpoints

### User Authentication
- `POST /api/auth/signup` - Sign up a new user.
- `POST /api/auth/signin` - Sign in a user.
- `POST /api/auth/signout` - Sign out a user.

### Note Management
- `POST /api/notes` - Add a new note.
- `PUT /api/notes/:noteId` - Edit an existing note.
- `GET /api/notes` - Get all notes for the logged-in user.
- `DELETE /api/notes/:noteId` - Delete a note.
- `PATCH /api/notes/:noteId/pin` - Update the pin status of a note.
- `GET /api/notes/search` - Search for notes by title or content.


