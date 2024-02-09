# modzero

![Artboard](https://github.com/mxvh/modzero/assets/31907722/e504b081-0595-4aca-af29-48297db4b336)

Mange your Telegram groups and channels from one place, packed with multiple moderation tools to help you become a pro administrator.

## ✨ Features

1. 🔓 **Open Source**: Our platform is open source, meaning the underlying code is freely available for anyone to view, use, and modify. This fosters transparency, collaboration, and community-driven development.

2. 💻 **Modern and Intuitive UI**: We pride ourselves on offering a modern and intuitive user interface (UI) that is easy to navigate and aesthetically pleasing. Our UI is designed to enhance user experience and streamline the management of Telegram groups and channels.

3. 🤖 **Custom Telegram Bot**: Our platform includes a custom Telegram bot that provides advanced functionality and automation. This bot can perform various tasks, such as scheduling messages, managing member permissions, and executing moderation actions, all tailored to meet your specific needs.

4. 📈 **Unlimited Chats and Members**: With our platform, you can manage an unlimited number of Telegram chats (groups and channels) and members. Whether you're running a small community or a large organization, our platform can scale to accommodate your requirements.

5. 🛠️ **Moderation Tools**: We offer a comprehensive set of moderation tools to help you maintain a safe and enjoyable environment within your Telegram communities. From banning users and deleting messages to setting content guidelines and managing member roles, our moderation tools give you full control over your groups and channels.

6. 📢 **Announcements**: Our platform allows you to create and send announcements to your Telegram communities quickly and easily. Whether you're promoting an event, sharing important updates, or broadcasting messages to your members, our announcement feature ensures your messages reach their intended audience effectively.

7. 📊 **Analytics**: Gain valuable insights into the performance and engagement of your Telegram communities with our built-in analytics tools. Track metrics such as member growth, message engagement, and user activity to inform your community management strategies and drive growth.

8. 🚀 **Quick Install and Setup Using All Free Providers (Vercel for Hosting and Neon.tech for Database)**: We offer a hassle-free installation and setup process using free providers like Vercel for hosting and Neon.tech for database storage. With just a few simple steps, you can have your Telegram management platform up and running in no time, without any upfront costs.


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
