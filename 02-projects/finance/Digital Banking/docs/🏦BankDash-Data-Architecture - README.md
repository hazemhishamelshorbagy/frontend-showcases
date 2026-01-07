# BankDash Synthetic Data Ecosystem

This repository contains a production-grade synthetic dataset designed for the **BankDash** platform. It simulates a modern Kuwaiti retail banking environment, covering everything from core financial ledgers to advanced security and session management.

## 🏗️ Data Architecture & Relationships

The ecosystem is built using a relational JSON structure. The **Customer ID** serves as the primary foreign key across all financial modules, while the **User ID** governs the security and authentication layers.

### 1. Core Financial Layer

- **`customers.json`**: Master profile data (Name, Email, Civil ID, Nationality).
- **`accounts.json`**: Account types (Current, Savings, Fixed Deposit) with KWD balances.
- **`transactions.json`**: Ledger of all movements (Merchant info, direction, status).
- **`savings_goals.json`**: Progress tracking for "Vaults" (Target vs. Current amount).

### 2. Service & Engagement Layer

- **`service_requests.json`**: Tickets for card replacements, cheque books, and general inquiries.
- **`dispute_records.json`**: Detailed logs for contested `FAILED` transactions.
- **`notifications.json`**: History of Push, SMS, and Email alerts.

### 3. Identity & Security Layer (Auth)

- **`auth_users.json`**: Digital identities, login status, and failed attempt counters.
- **`credentials.json`**: Bcrypt-simulated password hashes and 4-digit PINs.
- **`mfa_settings.json`**: Configuration for Biometrics, SMS, App, and Email MFA.
- **`registered_devices.json`**: Trusted hardware fingerprints (Device model, OS, Push tokens).
- **`login_sessions.json`**: Real-time session tracking with Kuwait-based IP addresses.
- **`audit_logs.json`**: Immutable security trail for high-severity actions.

---

## 🛠️ Key Implementation Rules

To maintain high fidelity, the following business rules are baked into the data:

1.  **Referential Integrity**: Every `related_entity_id` in the notification or dispute files maps to a real UUID in the transaction or account files.
2.  **Financial Logic**: In `savings_goals.json`, the `current_amount` is mathematically guaranteed to be $\leq$ `target_amount`.
3.  **Security State Machine**:
    - If `failed_login_attempts` $\geq$ 5, the user status in `auth_users.json` is set to `LOCKED`.
    - A session in `login_sessions.json` only appears if the user has an `ACTIVE` device in `registered_devices.json`.
4.  **Kuwaiti Localization**:
    - **Currency**: All amounts are in Kuwaiti Dinar (**KWD**).
    - **Language**: Support for **EN** and **AR** (RTL) via `customer_settings.json`.
    - **Geography**: IP addresses and session locations are mapped to Kuwaiti cities (Salmiya, Hawally, Ahmadi).

---

## 💡 Dashboard Use Cases (Frontend)

- **Financial Health Overview**: Aggregate balances from `accounts.json` and calculate monthly spending trends from `transactions.json`.
- **Interactive Vaults**: Use `savings_goals.json` to render progress bars and "Time-to-Goal" estimates.
- **Security Cockpit**: Build a "Device Management" screen where users can see their `registered_devices.json` and "Terminate" active sessions from `login_sessions.json`.
- **Timeline View**: Merge `audit_logs.json` and `transactions.json` into a unified "Recent Activity" feed.

---

## 💡 Backend & Security Logic

- **Auth Flow**: Fetch the `password_hash` from `credentials.json` by `user_id`. Use Bcrypt comparison to validate. If `mfa_enabled` is true, trigger a challenge based on `mfa_settings.json`.
- **Authorization**: Ensure a user can only access `accounts.json` or `transactions.json` where the `customer_id` matches their own identity.
- **Auditability**: Every sensitive POST/PATCH request (like `ADDRESS_UPDATED`) must trigger a new entry in `audit_logs.json` with the user's current `ip_address`.
- **Notification Dispatch**: Check `customer_settings.json` for `notifications_enabled` before hitting the Push/SMS gateway.

---

## 🚀 Usage Guide

1.  **Mocking**: Use `json-server` to serve these files as a full REST API.
2.  **Seeding**: Use these files to seed a PostgreSQL or MongoDB instance for development.
3.  **Testing**: Use the `LOCKED` status and `EXPIRED` credentials to test error handling and "Forgot Password" flows.
