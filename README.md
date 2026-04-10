# 🏝️ Top 10 Beaches App

## 📌 Project Description & Purpose

This project is a full-stack web application that displays a list of the top 10 beaches around the world. Users  can view beach details, navigate between pages, and save their favorite beaches.

## 🚀 Live Site

Here's the link to view the live app: https://top-10-beaches.netlify.app/

## 🖼️ Screenshots
<img width="1200" height="688" alt="Screenshot 2026-04-10 at 11 01 10 AM" src="https://github.com/user-attachments/assets/d5d20452-21f8-4159-a3a1-4b699782fb1d" />

<img width="1209" height="650" alt="Screenshot 2026-04-10 at 11 01 28 AM" src="https://github.com/user-attachments/assets/9b65a935-5012-4606-a562-1fa0eeaca60f" />



## ✨ Features

This is what you can do on the app: 
- View a list of top 10 beaches
- Click on a beach to see more details
- Navigate between pages using React Router
- Save and remove favorite beaches
- View a favorites page with saved beaches
- Use back and home buttons for navigation

## 🛠️ Tech Stack

**Frontend**

- **Languages:** JavaScript, HTML, CSS
- **Framework:** React (Vite)
- **Deployment:** React Router

**Server/API**

- **Languages:** JavaScript
- **Framework:** Node.js with Express




## 🔹 API Documentation

These are the API endpoints I built: 
1. GET- /get-beaches
2. ___________
3. ___________

Here's the link to the full API documentation: __________
## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE beaches (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    location VARCHAR NOT NULL,
    image_url TEXT,
    description  VARCHAR NOT NULL
);
```

## 💭 Reflections

**What I learned:** How to connect to frontend to a backend using fetch
- How to use React Router for navigation
- How to manage state using useState and useEffect
- How to build a full-stack app connecting frontend and backend

**What I'm proud of:** Successfully connecting frontend and backend
- Creating multiple pages with navigation
- Building a favorites feature

**What challenged me:** Fixing routing errors
- Debugging JSX syntax issues
- Understanding how state updates work

**Future ideas for how I'd continue building this project:** 
1. Add user login and authentication
2. Deploy the app live (Netlify + Render)

## 🙌 Credits & Shoutouts 
- Instructor examples and class materials
- React and Express documentation


