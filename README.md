# Harry Potter Elixirs Explorer

A vanilla JavaScript web application that allows users to browse, search, filter, and view details about elixirs from the Wizarding World.  
The project uses modern ES6+ features (classes, modules, async/await) and the Fetch API to retrieve data from the public Wizard World API.

## Features

- Display a list of elixirs
- Search elixirs by name
- Filter elixirs by difficulty level
- Display detailed information about a selected elixir
- Show loading indicators and error messages

## Technical Overview

- Written entirely in vanilla JavaScript (no frameworks or libraries)
- Uses modern JavaScript features: ES6 classes, modules, async/await
- Data is retrieved via the Fetch API
- Simple modular structure with reusable components
- Basic styling using CSS (no CSS framework required)

## Project Structure

├── index.html # Main HTML file 

├── app.js # Main application logic 

├── styles/ 

│ 

└── styles.css # Styling 

├── services/ 
│ 
└── api.js # API communication (fetching data) 
├── components/ 
│ 
├── ElixirsList.js # Component for listing elixirs 
│ 
├── ElixirDetails.js # Component for showing detailed info 
│ 
├── SearchBar.js # Component for searching by name 
│ 
└── FilterBar.js # Component for filtering by difficulty

## API Reference

Data is fetched from the Wizard World API:

- GET all elixirs: `https://wizard-world-api.herokuapp.com/Elixirs`
- GET elixir by ID: `https://wizard-world-api.herokuapp.com/Elixirs/{id}`
