# BFHL REST API

A robust Node.js REST API implementing mathematical operations and AI integration.

## Features

- **POST /bfhl** - Process requests with the following operations:
  - `fibonacci`: Generate Fibonacci series
  - `prime`: Filter prime numbers from array
  - `lcm`: Calculate Least Common Multiple
  - `hcf`: Calculate Highest Common Factor
  - `AI`: Get AI-powered single-word answers

- **GET /health** - Health check endpoint

## Tech Stack

- Node.js
- Express.js
- Google Gemini AI API
- Helmet (Security)
- CORS

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd "Bajaj Test"
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
OFFICIAL_EMAIL=your.email@chitkara.edu.in
GEMINI_API_KEY=your_gemini_api_key_here
```

**Getting Google Gemini API Key:**
1. Visit https://aistudio.google.com
2. Sign in with your Google account
3. Click "Get API Key"
4. Create API key in your project
5. Copy the key to your `.env` file

### 4. Run the Application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Documentation

### POST /bfhl

**Request Examples:**

1. **Fibonacci:**
```json
{
  "fibonacci": 7
}
```
Response:
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

2. **Prime Numbers:**
```json
{
  "prime": [2, 4, 7, 9, 11]
}
```
Response:
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": [2, 7, 11]
}
```

3. **LCM:**
```json
{
  "lcm": [12, 18, 24]
}
```
Response:
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 72
}
```

4. **HCF:**
```json
{
  "hcf": [24, 36, 60]
}
```
Response:
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": 12
}
```

5. **AI Query:**
```json
{
  "AI": "What is the capital city of Maharashtra?"
}
```
Response:
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in",
  "data": "Mumbai"
}
```

### GET /health

**Response:**
```json
{
  "is_success": true,
  "official_email": "your.email@chitkara.edu.in"
}
```

## Error Handling

All errors return appropriate HTTP status codes:
- `400` - Bad Request (invalid input)
- `404` - Not Found (invalid endpoint)
- `500` - Internal Server Error
- `503` - Service Unavailable (AI service issues)

Error response format:
```json
{
  "is_success": false,
  "error": "Error message here"
}
```

## Input Validation

- Request must contain exactly one operation key
- `fibonacci`: Non-negative integer (max 1000)
- `prime`, `lcm`, `hcf`: Non-empty array of integers (max 1000 elements)
- `lcm`, `hcf`: Positive integers only
- `AI`: Non-empty string (max 1000 characters)

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Set environment variables in Vercel dashboard

### Railway

1. Connect your GitHub repository
2. Create new project from repo
3. Add environment variables
4. Deploy automatically

### Render

1. Create new Web Service
2. Connect GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables
6. Deploy

## Project Structure

```
Bajaj Test/
├── middleware/
│   ├── errorHandler.js    # Error handling middleware
│   └── validator.js        # Request validation
├── routes/
│   ├── bfhl.js            # POST /bfhl endpoint
│   └── health.js          # GET /health endpoint
├── utils/
│   ├── aiService.js       # Google Gemini integration
│   └── mathUtils.js       # Mathematical operations
├── .env.example           # Environment variables template
├── .gitignore
├── package.json
├── README.md
└── server.js              # Main application entry point
```

## Security Features

- Helmet.js for security headers
- CORS enabled
- Request size limits
- Input validation
- Error message sanitization

## Testing

Test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

Example cURL command:
```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"fibonacci": 7}'
```

## License

ISC
