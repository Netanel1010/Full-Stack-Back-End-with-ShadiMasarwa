# ⚙️ Node.js REST API

A Node.js and Express REST API for managing products and administrators, with CRUD operations, middleware, bcrypt password verification, and JSON-based data storage.

## ✨ Features

- REST API
- Product CRUD
- Admin management
- Express middleware
- bcrypt password verification
- JSON file storage

## 🛠️ Technologies

- Node.js
- Express
- JavaScript
- bcrypt
- dotenv
- JSON

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get a product by ID |
| POST | `/products` | Create a product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

## 🚀 Getting Started

### Install dependencies

```bash
npm install
```

### Create .env

```bash
PORT=3000
```

### Run the server

```bash
npx nodemon server.js
```

## 📁 Project Structure
```bash
NodeJS-REST-API/
├── routes/
├── routesTwo/
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🎓 Project Context
Built during my second year (Semester 1) of Software Engineering practical studies.
