# Project 3 - Secure Authentication System
**DecodeLabs Backend Development Internship**
Built by: Angellina Joyce Paul

## About

This repository demonstrates a secure backend authentication system using modern security best practices. It includes password hashing with Argon2id, JWT generation at login, and protected API routes enforced by middleware.

## Tech Stack

- Node.js
- Express
- Argon2id (`argon2`)
- JSON Web Tokens (`jsonwebtoken`)
- dotenv for environment configuration
- nodemon for local development

## Key Features

- Secure password hashing before storage
- JWT issuance on successful login
- Protected route requiring a valid bearer token
- Environment-based secret management via `.env`

## Setup

1. Copy `.env.example` to `.env`
2. Set a secure `JWT_SECRET` in `.env`
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

5. Visit the API root:

```bash
http://localhost:5000/
```

## Environment Variables

Copy the example values and replace the placeholder secret:

```env
PORT=5000
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=1h
```

## API Endpoints

### Register a new user

`POST /api/register`

Request body:

```json
{
  "email": "user@example.com",
  "password": "secret"
}
```

Success response:

```json
{
  "id": "1",
  "email": "user@example.com"
}
```

### Login and receive a JWT

`POST /api/login`

Request body:

```json
{
  "email": "user@example.com",
  "password": "secret"
}
```

Success response:

```json
{
  "token": "<jwt-token>",
  "expiresIn": "1h"
}
```

### Access protected profile data

`GET /api/profile`

Headers:

```http
Authorization: Bearer <jwt-token>
```

Success response:

```json
{
  "message": "Protected profile data",
  "user": {
    "id": "1",
    "email": "user@example.com"
  }
}
```
