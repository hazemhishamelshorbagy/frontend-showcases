# 🏦 BankDash: Digital Banking Dashboard Blueprint

BankDash is a high-fidelity digital banking platform blueprint. This project follows modern fintech architectural patterns to ensure financial integrity, security, and a premium user experience, based on the BankDash design system.

---

## 🎨 UI Reference

The implementation is based on the **BankDash UI Kit**:
[View Figma Design](https://www.figma.com/design/izBG53JvFM2mmkvPm6sdku/BankDash---Dashboard-UI-Kit---Admin-Template-Dashboard---Admin-Dashboard--Community-?node-id=0-1)

---

## 1. Information Architecture (Sitemap)

The structure is organized by primary navigation areas, defining the user journey and application routing.

### 🔐 0.0 Authentication & Onboarding

- **`/auth/login`**: Login Screen (with Biometric option).
- **`/auth/register`**: Registration & KYC Flow (ID scanning, Liveness Check).
- **`/auth/set-security`**: PIN/Password setup, MFA configuration.

### 🏠 1.0 Dashboard (Home)

- **`/app/dashboard`**: The main overview.
  - Global Header (Notifications, Search).
  - Balance Carousel Widget (Checking, Savings, Credit).
  - Quick Actions Grid (Transfer, Pay Bill).
  - Recent Transactions Feed.

### 📒 2.0 Accounts Module (The Ledger)

- **`/app/accounts`**: All Accounts Overview.
- **`/app/accounts/:id`**: Individual Account Detail Page.
  - **Transaction History**: Search, Filter by Date/Category.
  - **Account Info**: IBAN, Routing Number (Copy-to-Clipboard).
- **`/app/transactions/:ref`**: Single Transaction Detail View (Receipt, Dispute Action).

### 💸 3.0 Money Movement (Transfers & Pay)

- **`/app/transfers`**: Payment Hub.
- **`/app/transfers/new`**: New Transfer Wizard Flow (Source → Recipient → Details → Review).
- **`/app/beneficiaries`**: Beneficiary Management (Add, Edit, Delete).

### 💳 4.0 Cards Management

- **`/app/cards`**: Card Carousel (Physical & Virtual).
- **`/app/cards/:id/settings`**: Card Controls (Freeze, Manage Limits, PIN Reset).

### 📊 5.0 Financial Wellness (PFM)

- **`/app/insights`**: Spending Analytics Overview (Charts by Category/Time).
- **`/app/savings-goals`**: Savings Vaults/Pots (Progress Indicators).

---

## 2. Architectural & Reliability Patterns

| Pattern                        | Implementation                                                    | Justification                                                 |
| :----------------------------- | :---------------------------------------------------------------- | :------------------------------------------------------------ |
| **Microservices**              | Segmented by domain (e.g., `account-service`, `payment-service`). | Resilience and independent deployment.                        |
| **BFF (Backend for Frontend)** | Dedicated API gateway for mobile/web aggregation.                 | Optimized performance and reduced latency.                    |
| **Idempotency**                | Unique client-generated keys for every transfer.                  | Prevents duplicate transactions on network retries.           |
| **Saga Pattern**               | Distributed transaction management.                               | Ensures consistency across services with automated rollbacks. |
| **Pessimistic UI**             | Blocking load states for critical actions.                        | Ensures financial accuracy before updating the user view.     |

---

## 🧠 3. Data Architecture (The Simulation Layer)

The project uses a **Domain-Driven Data Structure** located in the `/data` root. This simulates a real-world banking backend where data is decoupled by business responsibility.

### Directory Structure

- **📂 `/data/auth`**: Identity & Security (Users, Credentials, Active Sessions).
- **📂 `/data/customers`**: Legal entities, KYC status, and Risk Profiles.
- **📂 `/data/accounts`**: Core ledger info, account types, and cached balances.
- **📂 `/data/cards`**: Card-specific data (Debit/Credit/Virtual) and processor settings.
- **📂 `/data/transactions`**: **Immutable Ledger**. Append-only history and digital receipts.
- **📂 `/data/payments`**: Orchestration data (Beneficiaries, Scheduled/Pending transfers).
- **📂 `/data/loans`**: Lending domain (Amortization schedules and repayment history).
- **📂 `/data/investments`**: Wealth domain (Holdings and non-cash valuations).
- **📂 `/data/pfm`**: Financial Wellness (Budgets, Savings goals, Categorized insights).
- **📂 `/data/services`**: Support tickets, dispute requests, and async service logs.
- **📂 `/data/settings`**: User preferences and notification toggles.
- **📂 `/data/system`**: Internal simulation (Audit logs, Exchange rates, Feature flags).

---

## 4. UI Component & Interaction Patterns

### Core Display Components

- **Card/Widget Pattern**: Modular data blocks for Dashboard and PFM insights.
- **Data Masking**: Sensitive numbers (`**** 1234`) hidden until Biometric Reveal (e.g., FaceID).
- **Skeleton Screens**: Layout placeholders shown during data fetching to prevent layout shift.

### Action and Flow Components

- **Wizard/Stepper Flow**: Guides users through multi-step processes (e.g., New Transfer).
- **Progressive Disclosure**: Detailed metadata is revealed only upon user action to reduce noise.
- **Button Hierarchy**: Clear distinction between Primary (Action), Secondary (Cancel), and Destructive.

---

## 🛡 Security & Compliance

- **Encryption**: AES-256 for data at rest; TLS 1.3 for data in transit.
- **Audit Trails**: Every state change is recorded in `/data/system/audit-logs.json` for non-repudiation.
- **Session Management**: Automatic timeouts (5 mins) and concurrent session detection.

---

## 🚀 5. Getting Started (Local Development)

To run the BankDash dashboard with a live simulated backend, follow these steps.

---

### 🛠️ Prerequisites

- **Node.js** (v18+)
- **Python 3** (for data merging)

---

### 🛰️ Step 1: Initialize the Mock Backend

The project uses a Domain-Driven data structure. We merge these domains into a single source of truth for the API.

1. **Merge Data**: Run the merger script to consolidate all JSON domains from the `/data` folder.

   ```bash
   python merge_db.py

   ```

2. **Start JSON Server**: Launch the mock REST API.

   **npx json-server --watch db.json --port 3001**

   The API will be available at http://localhost:3001 (e.g., /accounts, /transactions).

---

### 💻 Step 2: Start the Next.js App

       2.1:Install dependencies:
            npm install
       2.2: Run development server:
            npm run dev
       2.3:Open the dashboard: Navigate to http://localhost:3000/app/dashboard.

---

## Project Status 🚧

This project is currently in the **Initial Blueprint Phase**. Core architecture, UI flows, and data models are defined, and we are preparing realistic dummy data for a full digital banking sandbox.

## Connect & Follow

Stay updated on the progress, report issues, or contribute:

- ⭐ Star this repo on GitHub to follow updates
- 🔗 Connect with me on [LinkedIn](https://www.linkedin.com/in/hazemhishamelshorbagy/) for insights on fintech, frontend architecture, and digital banking projects

Thank you for checking out the project! 🚀
