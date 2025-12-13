# Travlr Getaways – Full Stack Web Application (CS 465)

## Overview
Travlr Getaways is a full stack travel booking web application developed using the MEAN stack (MongoDB, Express, Angular, Node.js). The project includes a customer-facing website and an administrator single-page application (SPA) used to manage trips securely.

This repository represents the final iteration of the CS 465 project and demonstrates full stack architecture, database integration, RESTful APIs, SPA development, and security implementation.

---

## Architecture

### Frontend
Two frontend approaches were used in this project:
- **Express + Handlebars (HBS):** Used for the customer-facing website to render dynamic HTML pages with server-side templates.
- **Angular SPA:** Used for the admin interface to provide rich, interactive functionality such as adding, editing, and deleting trips without page reloads.

The SPA offers a smoother user experience and better separation of concerns compared to traditional multi-page web applications.

### Backend
The backend is built with **Node.js and Express**, exposing RESTful API endpoints that the Angular SPA consumes.

A **MongoDB NoSQL database** was used because it is flexible, schema-driven with Mongoose, and well-suited for handling JSON-style data used in modern web applications.

---

## Functionality

### JSON and Full Stack Integration
JSON is a lightweight data format used to exchange data between the frontend and backend. Unlike JavaScript, JSON is purely a data representation format. In this project, JSON ties together the Angular frontend, Express API, and MongoDB database by serving as the common data structure for requests and responses.

### Refactoring and Reusable Components
Throughout development, code was refactored to improve clarity and efficiency. Angular components and services were reused to reduce duplication and simplify maintenance. This improved scalability and made the UI easier to update.

---

## Testing

API endpoints were tested using tools like Postman and through direct interaction with the Angular SPA. Testing included GET, POST, PUT, and DELETE requests to verify database operations.

With added security layers, testing required valid JWT tokens to access protected endpoints. This ensured only authenticated admin users could modify trip data.

---

## Security
Security was implemented using JWT-based authentication. The admin SPA includes a login form, and API endpoints are protected to prevent unauthorized access. Tokens are verified on each request to secure sensitive operations.

---

## Reflection
This course strengthened my understanding of full stack web development and the MEAN stack. I gained hands-on experience with SPA development, RESTful APIs, database design, and authentication. These skills directly support my professional goal of becoming a software developer capable of building secure, scalable web applications.

---

## Project Structure
```
travlr/
  - Express backend and customer-facing site
travlr-admin/
  - Angular admin SPA
```

---

## Author
Raziuddin Syed  
CS 465 – Full Stack Development
