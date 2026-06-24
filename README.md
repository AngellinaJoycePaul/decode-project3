# Project 3 - Secure Authentication 
**Decode Labs Backend Development Internship**
Built by: Angellina Joyce Paul

## About

A minimal backend implementation for a secure authentication flow using Argon2id password hashing, JSON Web Tokens, and protected API routes.

## Features

- Password hashing with Argon2id and OWASP-recommended parameters
- JWT issuance on successful login
- Middleware-protected routes requiring `Authorization: Bearer <token>`
- Simple user storage using a local JSON file

## Tech Stack

- Node.js
- Express
- Argon2
- JSON Web Tokens (`jsonwebtoken`)
- dotenv for environment variables
- nodemon for local development

## Setup

1. Copy `.env.example` to `.env`
2. Set `JWT_SECRET` to a strong secret
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

## API Endpoints

- `POST /api/register`
  - body: `{ "email": "user@example.com", "password": "secret" }`
- `POST /api/login`
  - body: `{ "email": "user@example.com", "password": "secret" }`
- `GET /api/profile`
  - header: `Authorization: Bearer <token>`

## Notes

This project is intentionally focused on authentication fundamentals and secure handling of credentials. For production, connect to a real database and use secure secrets management.
