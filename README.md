# 🚀 Full-Stack Personal Portfolio Project

A comprehensive, full-stack personal portfolio application built to showcase modern responsive web design integration with an enterprise-grade backend infrastructure. This project serves as a milestone submission for the engineering internship track, demonstrating clean folder architecture, environment security compliance, and dynamic server routing.

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

## ⚙️ Environment Configuration

This project uses standard full-stack environment configurations to separate confidential connection parameters from the public codebase. 

### 🛡️ Security Best Practices
* **`.env`**: Contains production keys, port details, and sensitive MongoDB connection strings. This file is explicitly blocked by our `.gitignore` policy and is kept exclusively on the local development machine to prevent accidental exposure of system credentials to public repositories.
* **`.env.example`**: A public template file that serves as a deployment guide for external evaluators. It outlines the structural keys required to execute the server without revealing live database passwords.

### 🚀 Local Setup Instructions
To initialize the backend environment on your local machine, complete the following steps:

1. Duplicate the template configuration file in the project workspace:
```bash
   cp .env.example .env
   PORT=5000
   MONGODB_URI=mongodb+srv://<your-username>:<your-password>@cluster0.example.mongodb.net/portfolioDB


*** Initialize the development environment or execute the server entry point directly

Bash
   cd server
   node server.js