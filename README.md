
# 🎯 Goal Tracker – Frontend

This is the frontend for the Goal Tracker full-stack application. It allows users to manage personal goals, view public goals, and perform CRUD operations.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v20.19.0)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

### Installation

```bash
npm install
ng serve
````

Then open your browser at:
👉 `http://localhost:4200`

The app will automatically reload if you change any of the source files.

---

## ⚙️ Environment Configuration

Edit `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000' // Backend base URL
};
```

---

## 🧱 Tech Stack Summary

* **Angular** – Frontend framework
* **Bootstrap** – UI styling
* **Axios** – HTTP requests
* **CDK Drag and Drop** – For goal reordering

---

## 📌 Key Features

* ✅ Login/Register using JWT
* ✅ Full CRUD for personal goals
* ✅ Nested goals (up to 2 levels)
* ✅ Public goals listing
* ✅ Drag and drop goal reordering
* ✅ Responsive layout

---

## ⚠️ Known Limitations

* 🚧 Reordering is local; backend sync is not yet implemented
* ⚠️ Minimal validation and UI polish in some areas

---

## 🎬 Optional Walkthrough


