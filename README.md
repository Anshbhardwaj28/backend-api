# Backend API Development

A simple REST API built with Node.js and Express that handles tasks, user input, and data validation.

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | /api/tasks | Get all tasks |
| GET | /api/tasks/:id | Get one task |
| POST | /api/tasks | Create a task |

## Validation
- `title`: required, string, min 3 characters
- `completed`: optional, boolean

## Run locally
```bash
git clone https://github.com/YOUR_USERNAME/backend-api.git
cd backend-api
npm install
npm start
```

## Example request
POST /api/tasks
```json
{ "title": "Finish Project 2" }
```

## Tech Stack
Node.js, Express.js

*Built as part of the DecodeLabs Full Stack Internship, Project 2.*
