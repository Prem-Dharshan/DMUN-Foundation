# DMUN Foundation - Executive Portal Setup Guide

## 📋 Overview

This executive portal provides secure authentication and role-based access control for DMUN Foundation executive team members. The system supports three user roles:

- **Lead** (Founder & Executive Director): Full administrative privileges
- **Co-Lead** (Deputy Executive Director): Message sending privileges
- **General User**: View messages and respond to polls

## 🚀 Quick Start

### 1. Supabase Setup

#### Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" and sign up/login
3. Click "New Project"
4. Fill in the project details:
   - **Name**: DMUN Foundation
   - **Database Password**: (save this securely)
   - **Region**: Choose closest to your location
5. Wait for the project to be created (~2 minutes)

#### Get Your API Credentials

1. In your Supabase project dashboard, click on the **Settings** icon (⚙️) in the left sidebar
2. Navigate to **API** section
3. Copy the following values:
   - **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

#### Run Database Schema

1. In Supabase dashboard, click on **SQL Editor** in the left sidebar
2. Click "New query"
3. Copy the entire contents of `database/schema.sql`
4. Paste it into the SQL editor
5. Click "Run" or press `Ctrl+Enter`
6. You should see "Success. No rows returned"

#### Configure Email Authentication

1. Go to **Authentication** → **Providers** in the Supabase dashboard
2. Ensure **Email** is enabled
3. Scroll down to **Email Templates**
4. Customize the "Magic Link" template if desired
5. Under **Email Auth** settings:
   - Enable "Confirm email"
   - Set "Redirect URLs" to include: `http://localhost:5173/executives/dashboard`

### 2. Local Development Setup

#### Install Dependencies

```bash
npm install
```

#### Configure Environment Variables

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

#### Start Development Server

```bash
npm run dev
```

The application should now be running at `http://localhost:5173`

### 3. Initial User Setup

The database schema automatically creates three initial users:

1. **Jaewon Choi** (jaewon.choi@dmun.org) - Lead
2. **Harshan M V** (harshan.mv@dmun.org) - Co-Lead
3. **Ishaan Bajaj** (ishaan.bajaj@dmun.org) - General User

⚠️ **Important**: Update these email addresses in the SQL schema before running it, or manually update them in the Supabase table editor.

### 4. First Login

1. Navigate to `/executives/login`
2. Enter an email address from your executives table (must end with `@dmun.org`)
3. Check your email for the magic link
4. Click the link to login

## 🔐 Authentication Flow

The system uses **passwordless authentication** via email magic links:

1. User enters their `@dmun.org` email address
2. System validates the email domain and checks if user exists in database
3. Magic link is sent to the user's email
4. User clicks the link and is automatically logged in
5. Session persists across browser refreshes

## 👥 User Roles & Permissions

### Lead (Administrative Head)

**Permissions:**

- View all messages and alerts
- Send messages to all team members
- Add new users via UI
- Remove users (except themselves)
- Assign/reassign Co-Lead position
- Revoke Co-Lead privileges
- View all message responses

**Access:**

- Dashboard: `/executives/dashboard`
- Admin Panel: `/executives/admin`

### Co-Lead

**Permissions:**

- View all messages and alerts
- Send messages to all team members
- View all message responses

**Access:**

- Dashboard: `/executives/dashboard`
- Messaging Panel: `/executives/messaging`

### General User

**Permissions:**

- View all messages and alerts
- Respond to messages with: Yes, No, Maybe, Discussion Needed

**Access:**

- Dashboard: `/executives/dashboard`

## 📁 Project Structure

```
src/
├── executives/
│   ├── components/
│   │   └── ProtectedRoute.jsx       # Route authentication wrapper
│   ├── context/
│   │   └── ExecutiveAuthContext.jsx # Authentication state management
│   ├── pages/
│   │   ├── ExecutiveLogin.jsx       # Login page with email validation
│   │   ├── ExecutiveDashboard.jsx   # Main dashboard for all users
│   │   ├── AdminPanel.jsx           # Lead-only admin interface
│   │   └── CoLeadMessaging.jsx      # Co-Lead messaging interface
│   └── ...
├── lib/
│   └── supabase.js                  # Supabase client & DB helpers
└── ...

data/
├── rbac.json                        # Role definitions & permissions
└── users.json                       # Local user cache (optional)

database/
└── schema.sql                       # Database schema & setup
```

## 🔧 Key Features

### 1. User Management (Lead Only)

**Add New User:**

1. Go to Admin Panel → "Manage Users" tab
2. Fill in user details (name, email, title, role)
3. Email must end with `@dmun.org`
4. Click "Add User"

**Reassign Co-Lead:**

1. In the user table, find the user you want to promote
2. Click "Make Co-Lead" button
3. Confirm the action
4. Previous Co-Lead is automatically demoted to General User

**Remove User:**

1. Click "Remove" button next to the user
2. Confirm deletion
3. User will no longer be able to login

### 2. Messaging System

**Send Message (Lead & Co-Lead):**

1. Navigate to messaging interface
2. Enter message title and content
3. Select message type: Announcement, Alert, or Task
4. Optionally enable "Require response"
5. Click "Send Message"

**Message Types:**

- **Announcement**: General information
- **Alert**: Important/urgent notifications
- **Task**: Work assignments

### 3. Response System

When a message requires a response, users can select:

- ✓ **Yes**: Affirmative response
- ✗ **No**: Negative response
- ? **Maybe**: Uncertain/conditional response
- 💬 **Discussion Needed**: Requires further conversation

Responses are tracked per user and can be viewed by Lead/Co-Lead.

## 🗄️ Database Schema

### Tables

**executives**

- id (UUID, Primary Key)
- name (Text)
- email (Text, Unique)
- title (Text)
- role (Text: 'lead', 'colead', 'general')
- created_at (Timestamp)
- updated_at (Timestamp)

**messages**

- id (UUID, Primary Key)
- title (Text)
- content (Text)
- type (Text: 'announcement', 'alert', 'task')
- sender_id (UUID, Foreign Key → executives)
- requires_response (Boolean)
- created_at (Timestamp)

**message_responses**

- id (UUID, Primary Key)
- message_id (UUID, Foreign Key → messages)
- user_id (UUID, Foreign Key → executives)
- response (Text: 'yes', 'no', 'maybe', 'discussion')
- created_at (Timestamp)
- updated_at (Timestamp)
- Unique constraint: (message_id, user_id)

## 🔒 Security Features

1. **Email Domain Restriction**: Only `@dmun.org` emails allowed
2. **Row Level Security**: Database enforces permissions at row level
3. **Role-Based Access Control**: UI routes protected by role checks
4. **Magic Link Authentication**: No passwords to compromise
5. **Session Management**: Automatic token refresh and expiration

## 🚢 Production Deployment

### Environment Variables

Set these in your production environment:

```env
VITE_SUPABASE_URL=your_production_supabase_url
VITE_SUPABASE_ANON_KEY=your_production_anon_key
```

### Supabase Production Setup

1. Update email redirect URLs in Supabase:

   - Go to Authentication → URL Configuration
   - Add your production domain: `https://yourdomain.com/executives/dashboard`

2. Configure email templates with your branding

3. Set up custom SMTP (optional) for branded emails:
   - Go to Settings → Auth → SMTP Settings
   - Configure your email service provider

### Build & Deploy

```bash
# Build the application
npm run build

# Deploy to your hosting platform
# (Vercel, Netlify, etc.)
```

## 📧 Email Configuration

The system sends magic links via email. To customize:

1. Go to Supabase → Authentication → Email Templates
2. Edit the "Magic Link" template
3. Variables available:
   - `{{ .ConfirmationURL }}` - The magic link
   - `{{ .SiteURL }}` - Your site URL
   - `{{ .Token }}` - The authentication token

## 🐛 Troubleshooting

### "User not found" error

- Ensure user exists in the `executives` table
- Check email address matches exactly (case-sensitive)
- Verify email domain is `@dmun.org`

### Magic link not working

- Check spam folder
- Verify redirect URL is configured in Supabase
- Ensure link hasn't expired (default: 1 hour)

### Permission denied errors

- Check user role in database
- Verify RLS policies are enabled
- Check browser console for specific error messages

### Database connection issues

- Verify `.env` file has correct credentials
- Check Supabase project is not paused (free tier)
- Ensure API key is the "anon" public key, not the "service_role" key

## 📞 Support

For issues or questions:

1. Check the troubleshooting section above
2. Review Supabase logs in the dashboard
3. Check browser console for error messages
4. Contact your development team

## 🔄 Updating the System

### Adding New Permissions

1. Edit `data/rbac.json` to add new permission
2. Update `ExecutiveAuthContext.jsx` if needed
3. Add permission checks in relevant components

### Modifying Database Schema

1. Make changes in Supabase SQL Editor
2. Update `database/schema.sql` for documentation
3. Test changes in development environment
4. Apply to production carefully

## 📝 Notes

- Always backup your Supabase database before making schema changes
- Test role permissions thoroughly in development
- Keep your Supabase credentials secure and never commit to Git
- Monitor your Supabase usage to avoid exceeding free tier limits
- Regularly review and audit user access

---

**Built for DMUN Foundation** | Last Updated: 2025
