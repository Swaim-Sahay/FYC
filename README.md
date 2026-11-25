# Realtime Device Tracker

A real-time device tracking web application built with **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**. The application tracks device locations using the browser's Geolocation API and displays live markers on an interactive OpenStreetMap.

---

## 🚀 Features

- **Live Location Tracking**: Continuously tracks device coordinates using HTML5 Geolocation (`watchPosition`).
- **Real-Time Communication**: Uses WebSockets via Socket.IO for low-latency bidirectional updates.
- **Interactive Map**: Displays dynamic markers on an OpenStreetMap interface rendered with Leaflet.js.
- **Multi-Device Support**: Each connected client is identified uniquely, allowing multiple users to be tracked simultaneously.
- **Automatic Cleanup**: Markers are automatically removed from the map when a user disconnects.
- **Responsive Full-Screen View**: Map dynamically fits the full viewport of desktop and mobile screens.

---

## 🛠️ Tech Stack

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Real-Time WebSockets**: [Socket.IO](https://socket.io/)
- **Templating Engine**: [EJS](https://ejs.co/)
- **Frontend Map & Styling**: [Leaflet.js](https://leafletjs.com/), [OpenStreetMap](https://www.openstreetmap.org/), CSS3
- **Location Services**: HTML5 Geolocation API

---

## 📁 Project Structure

```text
.
├── app.js               # Express server and Socket.IO connection handling
├── package.json         # Project metadata and dependencies
├── package-lock.json
├── public/
│   ├── css/
│   │   └── style.css    # Fullscreen layout and map styles
│   └── js/
│       └── script.js    # Client-side geolocation and Leaflet map logic
└── views/
    └── index.ejs        # Main HTML view template
```

---

## ⚙️ Prerequisites

Make sure you have installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

---

## 📦 Getting Started

### 1. Clone or Navigate to the Repository

```bash
cd FYC-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
# or
node app.js
```

### 4. Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

> **Note**: Your browser will prompt for location permissions. Click **Allow** to enable real-time tracking. To test multi-device tracking, open the URL in multiple browser tabs or devices connected to the same network.

---

## 🔄 How It Works

1. **Client Connection**: When a client visits `http://localhost:3000`, the browser connects to the Socket.IO server and requests location access.
2. **Sending Coordinates**: If allowed, `navigator.geolocation.watchPosition()` monitors coordinate changes (`latitude` and `longitude`) and emits a `send-location` event to the server.
3. **Broadcasting**: The server receives the coordinates and broadcasts them (`receive-location`) to all connected clients along with the unique `socket.id`.
4. **Rendering Markers**: Client-side Leaflet script updates existing markers or adds a new marker at the user's position and centers the map view.
5. **Disconnection**: When a client leaves or closes the tab, the server emits `user-disconnected` to remove the corresponding marker from all active maps.

---

## 📄 License

This project is open-source and available under the [ISC License](LICENSE).
