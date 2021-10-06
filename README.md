# Open data visualization

This application is to retrieve the access via JWT token using `/api/signup` or `/api/login` and then create a visualization (Pie chart) for the returned data (4 sensors). The data will be changed every hour. Api endpoint `https://opendata.hopefully.works/api/events`

Live demo: https://open-data-ulrich.netlify.app/

## Project

- **Front-end:** React, Redux.
- **Back-end:** Node.js (Express).

## Folder structure

- `server` directory contains the server side codes.
- `client` directory contains the client side codes.
- Each for the folder has its own `package.json`.

## Scripts

**Install dependencies:**

- `cd ./client && yarn `: Install client side dependencies.
- `cd ./server && yarn `: Install client side dependencies.

**Start:**

- `npm run server` or `yarn server`: Start the server.
- `npm run client` or `yarn client`: Start the client.

**Note on updates:
- Add databse to store previous fetched sensors.
- Users able to select date to see corresponding sensors.
- Multiple charts for selection (Bar, Column, Line, etc.).
- ?
