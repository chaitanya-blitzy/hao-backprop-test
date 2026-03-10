# hao-backprop-test

A minimal Node.js HTTP server built with [Express.js](https://expressjs.com/). This project serves two endpoints that return plain-text responses.

## Prerequisites

- **Node.js** >= 18 (Express 5.x requires Node.js 18 or later)
- **npm** (bundled with Node.js)

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

This installs Express.js and all of its transitive dependencies.

## Usage

Start the server with either command:

```bash
npm start
```

or

```bash
node server.js
```

The server binds to `http://127.0.0.1:3000/` and logs a confirmation message to the console on startup.

## Endpoints

| Method | Path       | Response Body     | Content-Type | Status |
|--------|------------|-------------------|--------------|--------|
| GET    | `/`        | `Hello, World!\n` | text/plain   | 200 OK |
| GET    | `/evening` | `Good evening`    | text/plain   | 200 OK |

### GET /

Returns the greeting `Hello, World!\n` as plain text.

```bash
curl http://127.0.0.1:3000/
# Hello, World!
```

### GET /evening

Returns the greeting `Good evening` as plain text.

```bash
curl http://127.0.0.1:3000/evening
# Good evening
```

## Technology Stack

- **Runtime:** Node.js (CommonJS modules)
- **Framework:** Express.js 5.x
- **Module System:** CommonJS (`require()` / `module.exports`)
