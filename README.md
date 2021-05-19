# Habit Circle ⭕️

Habit Circle is a habit tracker that provides an appealing data visualization of monthly progress to motivate the completion of daily tasks. Rendering a circle with a ring for each habit you are a tracking and a slice for each day of that month, users can click on squares to color in habits and record completion, allowing user to playfully engage, track success, and visualize outcomes. This simple click to mark a habit complete is fun and simple. 

## ✨ [Watch Demo](https://www.youtube.com/watch?v=GRaE4yxGVP0).

<img width="1583" alt="screenshot of habit circle app with side nav bar and large circular data visualization" src="https://user-images.githubusercontent.com/66394682/118742835-c511c700-b816-11eb-9f53-908bbdc985c0.png">

## 🚀 Technology
Single Page Web Application built with:
- React frontend
- Rails API backend
- Semantic UI for styling
- useState, useContext and useReducer hooks to manage global state
- d3 charting library to render nested donut charts to visualize outcomes
- JSON Web Tokens, Rails Bcrypt and localStorage to store encrypted user information client-side

## ⚡️ Installation
- Fork and clone this repository and the [backend repository](https://github.com/abbiecoghlan/habit-circle-backend) onto your local environment.
- Open a terminal and cd into the backend folder. Run rails s to launch backend server. 
- Open a second terminal and cd into the frontend folder.
- Run npm start to launch front end. Follow the prompts to create account or login. 
