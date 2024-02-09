# modzero

![Artboard](https://github.com/mxvh/modzero/assets/31907722/e504b081-0595-4aca-af29-48297db4b336)

Mange your Telegram groups and channels from one place, packed with multiple moderation tools to help you become a pro administrator.

## ✨ Features

## ⚡ Installation

### Step 1: Fork the Repository
Start by forking the repository into your GitHub account. This creates a copy of the original repository under your account, allowing you to make changes without affecting the original project.

### Step 2: Create Accounts
Sign up for accounts on Vercel and Neon.tech if you haven't already. These platforms will be used to host and deploy your application.

### Step 3: Add Repository to Vercel
Navigate to Vercel and add your forked repository. Vercel provides an intuitive interface for deploying and managing web applications.

### Step 4: Set Environment Variables
Fill in the required environment variables to configure your application:

```env
WEBHOOK_ADDRESS: This is the address where your application's webhook will be hosted. Replace your_vercel_address with the address provided by Vercel.
DATABASE_URL: This is the URL of your database hosted on Neon.tech. Replace neontech_db_url with the URL of your database.
SECRET: Use ` openssl rand -base64 32` to generate random string.
```
