# Finance Data Processing and Access Control Backend

## Description
This is a backend system for managing financial records with authentication, role-based access control, and financial summaries.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

## Features
- User Registration and Login
- JWT Authentication
- Role-Based Access Control (Admin/User)
- CRUD Operations for Financial Records
- Pagination and Filtering
- Date Range Filtering
- Financial Summary (Income, Expense, Balance)
- Admin APIs (View Users, View All Records)
- Centralized Error Handling

## API Endpoints

### Auth
POST /auth/register  
POST /auth/login  

### Records
POST /records  
GET /records  
GET /records/:id  
PUT /records/:id  
DELETE /records/:id  
GET /records/summary  

### Admin
GET /admin/users  
GET /admin/records  

## How to Run
1. Install dependencies
   npm install

2. Create .env file and add:
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_secret_key

3. Run server
   npm run dev