# Telemarket WP Webhook

This is a webhook service that forwards requests to the ProNet Bilgi Bankası API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following content:
```
PORT=3000
```

3. Start the server:
```bash
# Development mode
npm run dev

# Production mode
npm start
```

## Usage

Send a POST request to the webhook endpoint:

```bash
curl http://localhost:3000/webhook \
  -X POST \
  -H "Content-Type: application/json" \
  -d '{"question": "Eve alarm taktirmak istiyorum"}'
```

## Health Check

You can check if the service is running by making a GET request to the health endpoint:

```bash
curl http://localhost:3000/health
```

## Deployment

This service can be deployed to any Node.js hosting platform like Heroku, Render, or Railway. Make sure to set the `PORT` environment variable in your hosting platform's configuration. 