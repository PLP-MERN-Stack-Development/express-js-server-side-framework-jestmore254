Week 2: Express.js – Product API

📖 Project Overview
This project is a RESTful API built using Express.js for managing products. It allows users to perform CRUD operations — Create, Read, Update, and Delete — on a list of products. It also includes middleware for logging, authentication, validation, and error handling.

This project was created as part of Week 2 Assignment for server-side framework development using Express.js.

📁 Project Structure
week2assignment/
│
├── server.js                 # Main entry point
├── package.json              # Dependencies and scripts
├── .env                      # Local environment variables
├── .env.example              # Example environment file
│
├── routes/
│   └── productRoutes.js      # All product routes (CRUD)
│
├── middleware/
│   ├── logger.js            
HTTP requests
│   ├── auth.js                  authentication middleware
│   └── errorHandler.js       # Global error handler
│
└── data/
    └── products.json         # Sample product data

⚙️ Technologies Used
- Node.js v18+
- Express.js
- UUID (for unique IDs)
- dotenv (for managing environment variables)
- body-parser

🚀 How to Run the Server
1️⃣ Prerequisites
Before you begin, make sure you have installed:
- Node.js (v18 or later)
- npm (Node Package Manager)
- Postman (for API testing)

2️⃣ Installation
Clone this repository and install dependencies:
git clone <your-repository-url>
cd week2assignment
npm install

3️⃣ Environment Configuration
Create a .env file in your project root and add the following:
PORT=3000
API_KEY=12345

Or copy the sample file provided:
cp .env.example .env

4️⃣ Start the Server
Run the following command:
node server.js

If everything is configured properly, you should see this message:
✅ Server running at http://localhost:3000

5️⃣ Test the API
You can use Postman, Insomnia, or cURL to test the API.
Example test in browser:
http://localhost:3000/api/products

📘 API Documentation
Base URL: http://localhost:3000/api/products

1️⃣ GET /api/products
Fetch all products.

Example Response:
[
  {
    "id": "1",
    "name": "Laptop",
    "description": "High-performance laptop with 16GB RAM",
    "price": 1200,
    "category": "electronics",
    "inStock": true
  }
]

2️⃣ GET /api/products/:id
Fetch a specific product by ID.

Example Response:
{
  "id": "1",
  "name": "Laptop",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1200,
  "category": "electronics",
  "inStock": true
}

3️⃣ POST /api/products
Add a new product (Requires API key in header).

Headers:
Content-Type: application/json
x-api-key: 12345

Example Request Body:
{
  "name": "Headphones",
  "description": "Noise-cancelling headphones",
  "price": 150,
  "category": "electronics",
  "inStock": true
}

Example Response:
{
  "message": "Product created successfully",
  "product": {
    "id": "c2a1b83b-2f41-48e7-bae7-6f3f97f8d93a",
    "name": "Headphones",
    "description": "Noise-cancelling headphones",
    "price": 150,
    "category": "electronics",
    "inStock": true
  }
}

4️⃣ PUT /api/products/:id
Update an existing product (Requires API key).

Example Response:
{
  "message": "Product updated successfully",
  "product": {
    "id": "1",
    "name": "Laptop Pro",
    "description": "Upgraded laptop with 32GB RAM",
    "price": 1800,
    "category": "electronics",
    "inStock": true
  }
}

5️⃣ DELETE /api/products/:id
Delete a product by ID (Requires API key).

Example Response:
{ "message": "Product deleted successfully" }

⚙️ Middleware
| Middleware | File | Description |
|-------------|------|-------------|
| Logger | /middleware/logger.js | Logs HTTP method, URL, and timestamp |
| Auth | /middleware/auth.js | Validates API key from headers |
| Error Handler | /middleware/errorHandler.js | Handles and formats error responses |
| Body Parser | Built-in | Parses JSON request bodies |

🧪 Testing with cURL using postman app
Get All Products:
curl http://localhost:3000/api/products

Add New Product:
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -H "x-api-key: 12345" -d "{"name":"Tablet","description":"Android tablet","price":250,"category":"electronics","inStock":true}"

🧾 .env.example
PORT=3000
API_KEY=your_api_key_here

👨‍💻 Author
Morgan Jestmore
Kenyatta University
Week 2 – Express.js API Development Assignment



