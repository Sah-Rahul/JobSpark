# 💼 MERN Job Portal

A full-stack **Job Portal** application built with **MERN Stack** (MongoDB, Express, React, Node.js) where users can browse and apply for jobs, save favorites, and track applications. Admins (recruiters) can post jobs, view applications, and manage job listings.

---

## ✨ Features

### 👤 User Features
- **Browse jobs** with complete details including job title, company, location, salary, and job type
- **Apply for jobs** directly from the portal
- **Save favorites** for easy access later
- **User Dashboard:**
  - Track total jobs applied
  - View recently applied jobs
  - Manage favorite jobs

###  Admin / Recruiter Features
- **Post new jobs** with detailed information (title, description, skills, salary range, job type)
- **Update or delete** posted jobs
- **Admin Dashboard:**
  - Track total jobs posted
  - View applications per job
  - Manage job status (Active/Closed)
- **View applications** submitted by users for each job

---

##  Tech Stack

### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB

### Libraries & Tools
- **State Management:** Zustand
- **HTTP Requests:** Axios
- **Notifications:** React Hot Toast

---

## 📂 Project Structure

```
/client                    → React frontend
  /src
    /components
      /Dashboard
      /JobList
      /JobTable
    /pages
      /UserDashboard
      /Favorites
    /Api
      jobApi.ts
    /zustand
      useUserData.ts

/server                    → Node.js backend
  /models                  → MongoDB models (User, Job, Application)
  /routes                  → API routes for users and recruiters
  /controllers             → Route handlers
```

---

## 🚀 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sah-Rahul/job-portal.git
```

### 2️⃣ Install backend dependencies

```bash
cd server
npm install
```

### 3️⃣ Install frontend dependencies

```bash
cd ../client
npm install
```

### 4️⃣ Set up environment variables

Create a `.env` file in the `/server` directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret
```

### 5️⃣ Run the backend

```bash
cd server
npm run dev
```

### 6️⃣ Run the frontend

```bash
cd client
npm run dev
```

### 7️⃣ Access the app

Open your browser and navigate to:
```
http://localhost:5173
```

 

## ✅ Completed Features

- ✅ User authentication and authorization
- ✅ Job browsing and filtering
- ✅ Job application system
- ✅ Favorites functionality
- ✅ User dashboard with statistics
- ✅ Admin dashboard for recruiters
- ✅ Job posting and management
- ✅ Application tracking

---

## 🔮 Future Enhancements

- 📧 Email notifications for applied jobs
- 🔔 Real-time updates for application counts
- 🔍 Advanced filter and search functionality
- 📄 Resume upload for job applications
- 💬 Chat system between recruiters and applicants
- 📊 Advanced analytics dashboard
- 🌐 Social login (Google, LinkedIn)
- ⭐ Job reviews and ratings

---

## 🤝 Contributing

Contributions are **welcome**! Follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

> **Note:** Please open an issue before making major changes.

---

## 👨‍💻 Author

Made with ❤️ by **Rahul Sah**

---

## 🙏 Acknowledgments

- Built with modern MERN stack technologies
- Inspired by popular job portals like LinkedIn and Indeed
- Thanks to the open-source community

---

**⭐ If you find this project helpful, please give it a star!**