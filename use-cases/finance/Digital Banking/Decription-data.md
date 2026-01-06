# Project Description

This document provides an overview of the project. Below are the details:

## Description

✅ STEP 1 — Create the ROOT data folder

At project root:

/data


This folder simulates what normally lives in databases + services.

✅ STEP 2 — Create TOP-LEVEL DOMAIN SPLIT

Based on your sitemap + architecture, create:

/data
  /auth
  /customers
  /accounts
  /cards
  /transactions
  /payments
  /loans
  /investments
  /pfm
  /services
  /settings
  /system


Now I’ll explain each one in business terms.

🔐 /data/auth — Identity & Security Layer

Matches:

/auth/login

/auth/register

/auth/set-security

/data/auth
  users.json
  credentials.json
  devices.json
  sessions.json

Why this is real

Banks separate identity from accounts.

Examples:

One user → many accounts

Multiple devices per user

Sessions are auditable

👤 /data/customers — Customer Profile & KYC

Matches:

Onboarding

Profile

Privileges

Risk

/data/customers
  customers.json
  kyc.json
  risk-profiles.json
  privileges.json

Business truth

Customer ≠ User
Customer is a legal entity with:

KYC

Risk score

Tier (Gold / Platinum)

💰 /data/accounts — Core Money Containers

Matches:

/app/accounts

/app/accounts/:id

/data/accounts
  accounts.json
  balances.json
  limits.json
  statements.json

Why split balances?

In real banks:

Account metadata ≠ balance

Balance is often cached / derived

This lets you simulate:

Pending vs available

Statement generation

💳 /data/cards — Card Domain (Very Separate in Banks)

Matches:

/app/cards

/app/cards/:id/settings

/data/cards
  debit-cards.json
  credit-cards.json
  card-limits.json
  card-settings.json

Real-world fact

Cards usually belong to a card processor, not the core account system.

That’s why this is its own domain.

📜 /data/transactions — Immutable Ledger (READ-ONLY)

Matches:

Transaction history

Transaction details

Receipts

/data/transactions
  transactions.json
  transaction-index.json
  receipts.json

Critical banking rule

❗ Transactions are append-only
❗ Never edited
❗ Reversals are new records

Your dummy data must respect this.

🔁 /data/payments — Money Movement Orchestration

Matches:

Transfers

Bill payments

Beneficiaries

Scheduled payments

/data/payments
  transfers.json
  scheduled-payments.json
  beneficiaries.json
  billers.json

Why not in transactions?

Because:

Payments can be PENDING

Payments can FAIL

Transactions are only created after posting

This separation is very real.

🏦 /data/loans — Lending Domain

Matches:

/app/loans

/data/loans
  loans.json
  repayment-schedules.json
  loan-payments.json

Realism

Loans have:

Amortization schedules

Due dates

Penalties

This structure allows future simulation.

📈 /data/investments — Wealth Domain

Matches:

/app/investments

/data/investments
  portfolios.json
  holdings.json
  valuations.json

Why this matters

Investment values:

Are NOT real-time

Are NOT cash

Are derived daily

Your data model reflects that.

📊 /data/pfm — Financial Wellness (Derived Data)

Matches:

/app/insights

/app/budgeting

/app/savings-goals

/data/pfm
  categories.json
  insights.json
  budgets.json
  savings-goals.json

Important concept

PFM is derived, not primary.
It reads from transactions.

🧾 /data/services — Requests & Support

Matches:

/app/support

/app/services

/data/services
  service-requests.json
  disputes.json
  tickets.json

Real banking behavior

These are:

Async

Status-driven

Auditable

⚙️ /data/settings — User Preferences

Matches:

/app/settings/*

/data/settings
  user-settings.json
  notification-preferences.json
  security-settings.json

🧠 /data/system — Internal Simulation Layer (Advanced)

This is what makes your system feel real.

/data/system
  audit-logs.json
  exchange-rates.json
  feature-flags.json


Used for:

Audit trails

Experiments

Environment toggles

## Features

- Feature 1
- Feature 2
- Feature 3

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server using `npm run dev`.

## Usage

...usage instructions...

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.