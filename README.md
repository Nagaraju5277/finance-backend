# Finance Data Processing and Access Control Backend

**Live Demo:** [https://finance-backend-1-y5cq.onrender.com/](https://finance-backend-1-y5cq.onrender.com/)

---

## Description
This is a backend system for managing financial records with **authentication**, **role-based access control**, and **financial summaries**. Users can track income and expenses, while admins can manage all users and records.

---

## Tech Stack
- **Node.js**  
- **Express.js**  
- **MongoDB Atlas**  
- **Mongoose**  
- **JWT Authentication**  
- **Nodemon** (for development)  

---

## Features
- User Registration and Login  
- JWT-based Authentication  
- Role-Based Access Control (Admin/User)  
- CRUD Operations for Financial Records  
- Pagination and Filtering  
- Date Range Filtering  
- Financial Summary (Income, Expense, Balance)  
- Admin APIs (View All Users, View All Records)  
- Centralized Error Handling  

---

## API Endpoints

### Auth
| Method | Endpoint         | Description            |
|--------|-----------------|------------------------|
| POST   | /auth/register  | Register a new user    |
| POST   | /auth/login     | Login and get JWT      |

### Records
| Method | Endpoint             | Description                          |
|--------|--------------------|--------------------------------------|
| POST   | /records           | Create a new record (Admin only)     |
| GET    | /records           | Get all your records                 |
| GET    | /records/:id       | Get a single record by ID            |
| PUT    | /records/:id       | Update a record (Admin only)         |
| DELETE | /records/:id       | Delete a record (Admin only)         |
| GET    | /records/summary   | Get total income, total expense, balance |

### Admin
| Method | Endpoint         | Description             |
|--------|-----------------|-------------------------|
| GET    | /admin/users     | Get all users           |
| GET    | /admin/records   | Get all records         |

---

## How to Run Locally

1. **Clone the repo:**  
```bash
git clone https://github.com/Nagaraju5277/finance-backend.git
cd finance-backend

2.Install dependencies:
npm install

3.Create a .env file in the root directory with your own credentials:
MONGO_URI=<YOUR_MONGODB_ATLAS_CONNECTION_STRING>
JWT_SECRET=<YOUR_SECRET_KEY>

4.Run the server:
npm run dev

5.Check API status:
Open http://localhost:5000
 in your browser or Postman.

6.Environment Variables
Key	Description
MONGO_URI	MongoDB Atlas connection string
JWT_SECRET	Secret key for JWT authentication
7.Deployment
Deployed on Render: https://finance-backend-1-y5cq.onrender.com/
Uses MongoDB Atlas for database hosting.


Author
Kanna Nagaraju

GitHub: https://github.com/Nagaraju5277
LinkedIn: https://www.linkedin.com/in/kanna-nagaraju-099769285