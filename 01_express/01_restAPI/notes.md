## 📝 REST & RESTful APIs

## 1. What is an API vs. RESTful API?

- API (Application Programming Interface): Any messenger that lets two softwares talk.
- RESTful API: A specific type of API that follows strict, globally accepted web design rules.

---

## 2. The 5 Core Rules of REST

To be truly "RESTful," an API must respect these standard practices:

## 👤 Rule 1: Client-Server Separation

- The frontend (Client/UI) and backend (Server/Database) are completely independent.
- You can redesign the app's look without changing how the database stores data.

## 🔄 Rule 2: Respect HTTP Methods (CRUD)

Actions are determined by standard HTTP verbs, never custom words.

- GET → Read/Retrieve data.
- POST → Create new data.
- PUT → Replace existing data entirely.
- PATCH → Modify a small part of existing data.
- DELETE → Remove data.

## 🏷️ Rule 3: Uniform Interface (Nouns, Not Verbs)

Endpoints (URLs) must target resources (things) using nouns, never actions.

- ❌ Bad: https://api.com or https://api.com
- Good: GET https://api.com or DELETE https://api.com

## 🧠 Rule 4: Statelessness

- The server has "amnesia" and keeps no memory of past requests.
- Every single request from the client must contain all necessary data (like user tokens) to complete it.

## 📦 Rule 5: JSON Format

- Data is exchanged using JSON (JavaScript Object Notation).
- It is lightweight text structured in universal key-value pairs:

```json
{
  "user_id": 102,
  "username": "coder_dev",
  "is_active": true
}
```

---

## 3. Quick Comparison: Normal vs. RESTful

| Feature     | Normal API (e.g., SOAP / Custom RPC) | RESTful API                       |
| ----------- | ------------------------------------ | --------------------------------- |
| URL Style   | Uses verbs (/createUser)             | Uses nouns (/users)               |
| Operations  | Custom command names                 | Standard HTTP methods (GET, POST) |
| Data Format | Heavy XML or custom text             | Lightweight, clean JSON           |
| Setup       | Rigid, custom connection             | Standardized, open web system     |

---

## 4. Why This Matters

- Industry Standard: Over 90% of the modern web runs on REST (Stripe, Google, Spotify).
- Easy Scaling: Statelessness allows servers to handle millions of users efficiently.
- Team Separation: Frontend and Backend teams can code independently.
