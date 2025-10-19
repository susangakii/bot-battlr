# Bot Battlr

A React application that allows users to browse robots, view their details, and build a custom bot army.

## Description

Bot Battlr is a galactic web app where you can:
- Browse through a collection of robots
- View detailed specifications for each bot
- Enlist bots into your personal army
- Release bots from your army
- Permanently discharge bots from service
- Sort and filter bots by various attributes

## Features

### Core Features
- Bot Collection: View all available bots with their stats
- Your Bot Army: Build your personal army by enlisting bots
- Enlist Once: Each bot can only be enlisted once
- Release Bots: Click on a bot in your army to release it
- Discharge Forever: Permanently remove or discharge bots
- Responsive Design: Clean Bootstrap styling that works on all devices

### Advanced Features
- Bot Specs View: Click on any bot to see detailed specifications
- Sorting: Sort bots by health, damage, or armor
- Filtering: Filter bots by class (Support, Medic, Assault, Defender, Captain, Witch)
- Multi-select Filters: Apply multiple class filters simultaneously

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd bot-battlr
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install bootstrap react-router-dom
```

## Running the Application

1. Start the JSON Server (backend):
```bash
json-server --watch db.json --port 8001
```

2. In a new terminal, start the React app:
```bash
npm start
```

3. Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
bot-battlr/
├── src/
│   ├── components/
│   │   ├── BotCard.js          # Individual bot card component
│   │   ├── BotCollection.js    # Displays all available bots
│   │   ├── BotSpecs.js         # Detailed bot view
│   │   ├── SortBar.js          # Sorting and filtering controls
│   │   └── YourBotArmy.js      # Displays enlisted bots
│   ├── pages/
│   │   └── Home.js             # Main page with state management
│   ├── App.js                  # Route configuration
│   └── index.js                # Entry point
├── db.json                     # Bot data (JSON Server)
├── package.json
└── README.md
```

## API Endpoints

### GET /bots
Retrieves all bots from the database.

**Response:**
```json
[
  {
    "id": 101,
    "name": "wHz-93",
    "health": 94,
    "damage": 20,
    "armor": 63,
    "bot_class": "Support",
    "catchphrase": "1010010101001101100011000111101",
    "avatar_url": "https://robohash.org/...",
    "created_at": "2018-10-02T19:55:10.800Z",
    "updated_at": "2018-10-02T19:55:10.800Z"
  }
]
```

### DELETE /bots/:id
Permanently removes a bot from the database.

**Response:**
```json
{}
```

## Technologies Used

- React
- React Router DOM v6
- Bootstrap 5
- JSON Server
- JavaScript ES6+

## Component Details

### Home.js
Main container component that manages:
- Fetching bot data
- Army state management
- Bot selection for specs view
- Sorting and filtering logic

### BotCollection.js
Displays all bots in a grid layout using BotCard components.

### YourBotArmy.js
Sticky sidebar showing enlisted bots with release and discharge options.

### BotCard.js
Reusable card component displaying bot information with:
- Avatar image
- Name and class badge
- Stats (health, damage, armor)
- Optional release and discharge button

### BotSpecs.js
Detailed view of a selected bot with:
- Avatar
- Full specifications
- Back to list button
- Enlist button

### SortBar.js
Controls for sorting and filtering bots by various attributes.

## Usage

1. Browse Bots: Scroll through the bot collection on the left
2. View Details: Click on any bot to see its full specifications
3. Enlist: Click "Enlist Bot" to add it to your army
4. Release: Click on a bot in your army to release it
5. Discharge: Click the red X button to permanently remove a bot
6. Sort: Use the dropdown to sort by health, damage, or armor
7. Filter: Click class buttons to filter by bot type

## License

This project is licensed under the MIT License.

## Author

Susan Gakii