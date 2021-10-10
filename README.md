# Open data visualization

This application is to retrieve the access via JWT token using `/api/signup` or `/api/login` and then create a visualization (Pie chart) for the returned data (4 sensors). The data will be changed every hour. Api endpoint `https://opendata.hopefully.works/api/events`

Live demo: https://open-data-ulrich.netlify.app/

## Project

- **Front-end:** React, Redux.
- **Back-end:** Node.js (Express).
- **Deployment:** Heroku for Backend deployment && Netlify for Frontend.

## Folder structure

- `server` directory contains the server side codes.
- `client` directory contains the client side codes.
- Each for the folder has its own `package.json`.

## Scripts

**Install dependencies:**

- `cd ./client && yarn `: Install client side dependencies.
- `cd ./server && yarn `: Install client side dependencies.

**Start:**

- `npm install` or `sudo npm install` at the root of the folder will automatically install all dependencies for frontend and backend. 
- `npm run dev` will start the application immediately (run both frontend & backend simultaneously).
- `npm start` will create a `build` folder and serve it within the static server (localhost:5000).
- In case the port is already used and didn't close properly, which led to `listen EADDRINUSE: address already in use :::5000`, run `lsof -i tcp:5000 ` in terminal and kill the process `kill -9 <PID>` or `sudo kill -9 <PID>`

## Note on updates:
- Add databse to store previous fetched sensors.
- Users able to select date to see corresponding sensors.
- Multiple charts for selection (Bar, Column, Line, etc.).
- ?
