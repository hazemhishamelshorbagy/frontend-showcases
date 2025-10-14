# 🌐 Social Post Scheduler (Postiz Clone)

A **modern social media management platform** — inspired by [Postiz.com](https://postiz.com/) — built to help users **plan, create, schedule, and analyze** social media posts from one unified dashboard.

This is a **frontend showcase project**, focusing on UI/UX architecture, state management, and real-world SaaS patterns using **Next.js 14 (App Router)** and **Shadcn UI**.

---

## 🚀 Overview

The **Social Post Scheduler** is a demo SaaS app that allows users to:

- Plan and schedule posts visually via a **calendar interface**
- Create and manage multi-platform content (Facebook, Instagram, LinkedIn, Twitter/X)
- Preview how posts look across platforms
- View **mock analytics** (likes, comments, shares)
- Demonstrate a scalable **frontend architecture** suitable for production-grade SaaS

> 🧠 Designed as part of a **Frontend Use Case Portfolio** to demonstrate senior-level frontend engineering, component architecture, and state design.

---

## ✨ Core Features (MVP)

| Feature | Description |
|----------|--------------|
| 🗓️ **Dashboard Calendar** | Visualize all scheduled posts using a drag-and-drop calendar view |
| ✍️ **Create Post Modal** | Add posts with text, images, and scheduled publish times |
| 🔄 **Drag & Drop Rescheduling** | Change publishing dates directly from the calendar |
| 💬 **Multi-Platform Previews** | Simulate how posts appear on Facebook, Instagram, LinkedIn, and Twitter |
| 📊 **Analytics Dashboard** | Display mock metrics like reach, engagement, likes, and shares |
| 💾 **Mock API Integration** | Simulate CRUD actions (create, edit, delete posts) via mock Next.js API routes |

---

## 🧩 Tech Stack

| Layer | Technologies |
|--------|---------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **UI / Styling** | TailwindCSS + Shadcn/UI Components |
| **State Management** | Zustand (lightweight global state) |
| **Data Visualization** | Recharts / Chart.js |
| **Mock Backend** | Next.js API Routes + Static JSON |
| **Optional AI Integration** | OpenAI API for caption & idea generation |

---

## 📁 Folder Structure

social-post-scheduler/
│
├── README.md
├── package.json
├── tsconfig.json
├── public/ # Static assets
│ └── icons/, images/
│
├── app/ # Next.js App Router
│ ├── layout.tsx
│ ├── page.tsx
│ ├── dashboard/
│ │ ├── page.tsx
│ │ ├── calendar/
│ │ └── analytics/
│ ├── posts/
│ │ ├── page.tsx
│ │ └── [id]/
│ ├── api/ # Mock API endpoints
│ │ ├── posts/route.ts
│ │ ├── posts/[id]/route.ts
│ │ ├── analytics/route.ts
│ │ └── scheduler/route.ts
│
├── src/
│ ├── components/ # Reusable components
│ │ ├── Calendar/
│ │ ├── PostCard/
│ │ ├── CreatePostModal/
│ │ ├── AnalyticsChart/
│ │ └── Navbar/
│ ├── store/ # Zustand store
│ │ └── postStore.ts
│ ├── types/ # TypeScript interfaces
│ │ ├── post.ts
│ │ └── analytics.ts
│ └── utils/ # Helpers & mock data
│ ├── mockData.ts
│ └── formatDate.ts
└── ...


---

## 🧠 UI / Interaction Highlights

- **Responsive layout** optimized for both desktop and tablet
- **Smooth animations** using Framer Motion and Shadcn UI transitions
- **Drag-and-drop rescheduling** (React Beautiful DnD / DnD Kit)
- **Dynamic modals and forms** with validation
- **Analytics charts** visualizing mock engagement data
- **Theming & clean design** inspired by Postiz

---

## ⚙️ How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/hazemhishamelshorbagy/social-post-scheduler.git
cd social-post-scheduler

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open your browser
http://localhost:3000
