# 🗓️ Social Post Scheduler (Postiz-Inspired)

A **modern social media management platform** built with **Next.js + TypeScript**, inspired by [Postiz](https://postiz.com/).  
This project demonstrates **frontend architecture, real-world UI/UX**, and **mock API design** for SaaS-level applications.

---

## 🚀 Overview

The **Social Post Scheduler** enables users to **plan, create, and manage posts** across multiple social media platforms — all from a single dashboard.

It’s part of the **Frontend Use Case Portfolio**, showcasing clean architecture, reusable components, and scalable UI patterns.

---

## 🎯 Core Features

| Feature | Description |
|----------|--------------|
| 🏠 **Dashboard** | Overview of all posts (drafts, scheduled, published). |
| 🗓️ **Calendar Scheduler** | Drag-and-drop interface for rescheduling posts. |
| ✍️ **Post Composer** | Create text/image posts and schedule publishing. |
| 📊 **Analytics** | View mock engagement metrics like likes and shares. |
| 🔗 **Platform Previews** | Preview how posts look on Facebook, Instagram, LinkedIn, or X (Twitter). |
| 👤 **Auth Pages** | Basic mock login & signup flow (no backend). |

---

## 🧭 Sitemap (Feature Flow)

```text
/
├── (auth)
│   ├── /login
│   └── /register
│
└── (dashboard)
    ├── /               → Dashboard Overview
    ├── /calendar       → Visual post scheduler
    ├── /posts          → All posts (drafts, scheduled, published)
    ├── /analytics      → Engagement insights & performance
    └── /settings       → Manage accounts, connected platforms