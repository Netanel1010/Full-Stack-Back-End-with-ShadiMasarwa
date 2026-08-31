# ⚙️ Node.js REST API

A Node.js and Express REST API for managing products and administrators, with CRUD operations, middleware, bcrypt password verification, and JSON-based data storage.

## ✨ Features

- REST API
- Product CRUD
- Admin CRUD operations
- Express middleware
- bcrypt password verification
- JSON file storage
- Password hashing with bcrypt

## 🛠️ Technologies

- Node.js
- Express
- JavaScript
- bcrypt
- dotenv
- JSON

## 📡 API Endpoints

| Method | Endpoint        | Description         |
| ------ | --------------- | ------------------- |
| GET    | `/products`     | Get all products    |
| GET    | `/products/:id` | Get a product by ID |
| POST   | `/products`     | Create a product    |
| PUT    | `/products/:id` | Update a product    |
| DELETE | `/products/:id` | Delete a product    |
| GET    | `/admins`       | Get all admins      |
| GET    | `/admins/:id`   | Get an admin by ID  |
| POST   | `/admins`       | Create an admin     |
| PUT    | `/admins/:id`   | Update an admin     |
| DELETE | `/admins/:id`   | Delete an admin     |


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
│   ├── admins.js
│   ├── admins.json
│   ├── products.js
│   └── products.json
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## 🎓 Project Context
Built during my second year (Semester 1) of Software Engineering practical studies.
