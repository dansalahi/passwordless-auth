# Passwordless Authentication Node.js App

This is a Node.js application that implements passwordless authentication via email. Users can log in by receiving a link in their email and clicking on it to authenticate.

## Features

- Passwordless authentication using email
- JWT (JSON Web Tokens) for secure token generation
- Nodemailer for sending authentication emails
- Environment variable configuration for sensitive information

## Requirements

- Node.js
- NPM (Node Package Manager)

## Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/dansalahi/passwordless-auth
cd passwordless-auth
npm install
```

Create a .env file in the root of the project.
Replace your_jwt_secret with a secure secret for JWT.
Replace SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, and MY_EMAIL with your email service configuration.
Replace CLIENT_URL with the URL of your client application.

## Project Structure

```bash
passwordless-auth
├── .env
├── app.js
├── routes
│   └── auth.js
└── utils
    └── mailer.js
