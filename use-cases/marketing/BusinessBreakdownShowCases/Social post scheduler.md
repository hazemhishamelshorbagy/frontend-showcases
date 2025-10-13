# Social Post Scheduler

A frontend demo of a **Social Post Scheduler** — a platform that allows users to plan, create, schedule, and manage social media posts across multiple platforms from a single dashboard.

This project is part of the **Frontend Use Case Portfolio**, showcasing advanced UI/UX, state management, and interactive components.

---

## 🚀 Overview

The Social Post Scheduler demo is designed to highlight:

- **Post creation**: Text editor, media uploads, and scheduled publishing.
- **Calendar scheduling**: Drag-and-drop rescheduling of posts.
- **Multi-platform previews**: Visual mock-ups for Facebook, Instagram, LinkedIn, and Twitter.
- **Analytics dashboard**: Mocked engagement metrics (likes, comments, shares).

This demo focuses on **frontend complexity and UI patterns** while using mock data to simulate real-world interactions.

---

## 🛠️ Features (MVP)

- **Dashboard Calendar** – Visualize scheduled posts in a calendar view.
- **Create Post Modal** – Add new posts with text, images, and scheduled time.
- **Drag & Drop Rescheduling** – Easily move posts to new dates/times.
- **Platform Previews** – Static previews for multiple social media platforms.
- **Mock Analytics** – Charts showing engagement metrics (likes, comments, shares).

---

## 💻 Tech Stack

- **Frontend:** Next.js, React, TypeScript  
- **UI / Styling:** TailwindCSS, Shadcn UI  
- **State Management:** Zustand / React Context  
- **Charts & Data Visualization:** Recharts / Chart.js  
- **Mock Data:** JSON / Local storage  

> Optional: Integrate OpenAI API for AI-generated post suggestions.

---

## 📂 Folder Structure

social-post-scheduler/
│
├── README.md ← Project overview
├── package.json
├── tsconfig.json
├── public/ ← Images & icons
├── src/
│ ├── components/ ← Reusable UI components
│ │ ├── Calendar/
│ │ ├── PostCard/
│ │ ├── Modal/
│ │ └── AnalyticsChart/
│ ├── pages/ ← Next.js pages
│ │ ├── index.tsx
│ │ └── posts/
│ ├── store/ ← Zustand store or context
│ └── utils/ ← Helper functions & mock data
└── README.md


---

## 🎨 UI / Interaction Highlights

- Drag-and-drop post scheduling  
- Responsive dashboard for desktop and mobile  
- Reusable card components for posts  
- Dynamic analytics charts using mock data  

---

## 📈 Next Steps / Enhancements

- Integrate AI-powered caption generator  
- Add team collaboration & approvals  
- Connect with real social media APIs for posting  
- Export analytics reports (PDF / CSV)  

---

## ⚡ How to Run (Frontend Demo)

```bash
# 1. Clone repo
git clone https://github.com/hazemhishamelshorbagy/social-post-scheduler.git
cd social-post-scheduler

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
http://localhost:3000
