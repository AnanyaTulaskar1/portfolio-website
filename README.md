# 🚀 Full-Stack Personal Portfolio Project

A comprehensive, full-stack personal portfolio application built to showcase modern responsive web design integration with an enterprise-grade backend infrastructure. This project serves as a milestone submission for the MY MCA  internship track, demonstrating clean folder architecture, environment security compliance, and dynamic server routing.

---

## 💻 Tech Stack & Architecture

The application is split cleanly into a static client workspace and an isolated Node.js server system to maintain a professional separation of concerns:

### 🎨 Frontend (Client Side)
* **HTML5:** Semantic structural markup (`index.html`) defining distinct portfolio sections (Hero, About, Projects, and Contact details).
* **CSS3:** Custom stylesheet configurations (`style.css`) incorporating flexible layouts, modern CSS variables, and fluid transitions.
* **JavaScript:** Native client-side scripting (`script.js`) handling dynamic view transitions, form input capture, and smooth navigational behaviors.

### ⚙️ Backend (Server Side)
* **Node.js:** Core runtime execution environment handling filesystem paths and cross-origin resource requests.
* **Express.js:** Lightweight routing framework providing robust endpoint monitoring and client-to-server data mapping.
* **Dotenv:** Secure runtime configuration loader managing system ports and local database environment variables.

### 🗄️ Database Layer (Cloud)
* **MongoDB Atlas:** Multi-node replica set cloud cluster configured to receive, parse, and store inbound client messages permanently.

---

## 📂 Project Directory Breakdown

The codebase follows an enterprise-standard full-stack structure for straightforward navigation:

```text
portfolio/
│
├── public/                 # Static Frontend Client Assets
│   ├── index.html          # Main web application interface layout
│   ├── style.css           # Styling rules, typography, and responsive media queries
│   └── script.js           # Client-side dynamic handling and DOM interactions
│
├── server/                 # Isolated Backend Environment
│   ├── .env                # Private local credentials (RESTRICTED BY GIT)
│   └── server.js           # Express application routing and operational entry point
│
├── .gitignore              # Global source control exclusion registry
├── package.json            # Main project metadata and dependency registry
└── README.md               # Technical project documentation and deployment guide
---

### Advanced Network Firewall Optimization
During deployment over mobile hotspot connections, database traffic querying cloud servers over standard paths frequently faces carrier-level blocks, causing MongooseServerSelectionError exceptions.

To overcome this constraint without reverting to local mock database solutions, this application utilizes an explicit Standard Shard Array Connection Layout via standard web protocols. By explicitly addressing individual cluster nodes, the app forces a steady data line through restrictive mobile carrier firewalls, ensuring full backend connectivity from cellular networks.

📋 API Endpoint Reference
1. Submit Contact Message
Endpoint: /api/contact

Method: POST

Content-Type: application/json

Request Payload Schema:

JSON
{
  "name": "String (Required)",
  "email": "String (Required, Auto-sanitized to lowercase)",
  "subject": "String (Optional, Defaults to 'No Subject')",
  "message": "String (Required)"
}
Success Response: 201 Created — {"success": true, "message": "Message sent successfully!"}

📦 Database Schema Structure
Document items are strictly validated on the server using Mongoose schemas before database insertion occurs:

### JavaScript
const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, default: 'No Subject' },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now }
});

## ⚙️ Environment Configuration

This project uses standard full-stack environment configurations to separate confidential connection parameters from the public codebase. 

### 🛡️ Security Best Practices
* **`.env`**: Contains production keys, port details, and sensitive MongoDB connection strings. This file is explicitly blocked by our `.gitignore` policy and is kept exclusively on the local development machine to prevent accidental exposure of system credentials to public repositories.
* **`.env.example`**: A public template file that serves as a deployment guide for external evaluators. It outlines the structural keys required to execute the server without revealing live database passwords.

### Local Setup Instructions
To initialize the backend environment on your local machine, complete the following steps:

1. Navigate into the isolated backend directory:

Bash
cd server

2. Install required system dependencies:

Bash
npm install

3. Initialize your environment file configuration parameters:

Bash
# Create a .env file inside your /server directory using this template format:

PORT=5000
MONGODB_URI=mongodb://<username>:<password>@cluster0-shard-00-00.qhtxful.mongodb.net:27017,cluster0-shard-00-01.qhtxful.mongodb.net:27017,cluster0-shard-00-02.qhtxful.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-qhtxful-shard-0&authSource=admin&retryWrites=true&w=majority

4. Execute the server entry point directly:

Bash
node server.js