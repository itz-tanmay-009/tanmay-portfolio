# Tanmay Kumar Mallick Portfolio

A modern **Full-Stack Personal Portfolio** built using **Next.js, React.js, Node.js, Express.js, and MySQL**. The portfolio showcases my projects, technical skills, certifications, experience, and contact information through a responsive and database-driven application.

---

## Features

- Modern and responsive UI
- Full-Stack Architecture
- Dynamic Projects loaded from MySQL
- REST API using Express.js
- GitHub project integration
- Live Portfolio Demo
- Resume Download
- Responsive Navigation
- SEO Optimized
- Framer Motion animations
- Tailwind CSS styling

---

## Tech Stack

### Frontend
- Next.js
- React.js
- JavaScript
- Tailwind CSS
- Framer Motion
- Lucide React
- React Icons

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Tools
- Git
- GitHub
- Vercel

---

## Project Structure

```text
tanmay-portfolio/
│
├── public/
│   └── assets/
│
├── server/
│   ├── config/
│   ├── routes/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── src/
│   ├── app/
│   ├── assets/
│   ├── components/
│   ├── data/
│   └── hooks/
│
├── package.json
├── package-lock.json
├── README.md
└── next.config.mjs
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/itz-tanmay-009/tanmay-portfolio.git
```

### 2. Navigate to the Project

```bash
cd tanmay-portfolio
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Install Backend Dependencies

```bash
cd server
npm install
```

---

## Database Setup

Create a MySQL database:

```sql
CREATE DATABASE portfolio_db;
```

Update the database configuration in:

```
server/config/db.js
```

Example:

```javascript
const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "portfolio_db",
});

module.exports = db;
```

---

## Run the Backend

```bash
cd server
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## Run the Frontend

Open another terminal and run:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

## API Endpoint

### Get All Projects

```
GET /api/projects
```

Example:

```
http://localhost:5000/api/projects
```

---

## Portfolio Sections

- Home
- About
- Skills
- Projects
- Experience
- Certifications
- GitHub Showcase
- Contact
- Footer

---

## Deployment

### Frontend

Deploy using **Vercel**.

### Backend

Deploy using **Render** or **Railway**.

### Database

Use **MySQL** (Local or Cloud).

---

## Author

**Tanmay Kumar Mallick**

**GitHub**
https://github.com/itz-tanmay-009

**Portfolio**
https://tanmay-portfolio-beta.vercel.app

---

## Future Enhancements

- Admin Dashboard
- Authentication
- CRUD Operations for Projects
- Contact Form Database Storage
- Image Upload Support
- Online Database Deployment

---

## License

This project is created for educational purposes and personal portfolio use.
