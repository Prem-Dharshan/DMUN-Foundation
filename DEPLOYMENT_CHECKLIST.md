# 🚀 DMUN Executive Portal - Deployment Checklist

## Pre-Deployment Setup

### 1. Supabase Project Setup

- [ ] Create account at https://supabase.com
- [ ] Create new project
- [ ] Name: "DMUN Foundation"
- [ ] Choose region (closest to users)
- [ ] Save database password securely
- [ ] Wait for project to initialize (~2 minutes)

### 2. Get API Credentials

- [ ] Navigate to Settings (⚙️) → API
- [ ] Copy "Project URL"
- [ ] Copy "anon public" key
- [ ] Save both in secure location
- [ ] **Never use service_role key in frontend**

### 3. Database Schema

- [ ] Open SQL Editor in Supabase
- [ ] Click "New query"
- [ ] Copy all contents from `database/schema.sql`
- [ ] Paste into editor
- [ ] Click "Run" (or Ctrl+Enter)
- [ ] Verify "Success. No rows returned"
- [ ] Check Tables section - should see 3 tables

### 4. Verify Database Tables

- [ ] Navigate to Table Editor
- [ ] Confirm `executives` table exists
- [ ] Confirm `messages` table exists
- [ ] Confirm `message_responses` table exists
- [ ] Check initial 3 users are present
- [ ] Verify RLS is enabled (shield icon)

### 5. Update Initial Users

- [ ] In Table Editor, open `executives` table
- [ ] Update email addresses to real @dmun.org addresses:
  - [ ] Jaewon Choi's email
  - [ ] Harshan M V's email
  - [ ] Ishaan Bajaj's email
- [ ] Verify roles are correct (lead, colead, general)

### 6. Email Authentication Setup

- [ ] Go to Authentication → Providers
- [ ] Ensure "Email" is enabled
- [ ] Under "Email Auth" settings:
  - [ ] Enable "Confirm email" (optional)
  - [ ] Enable "Secure email change"
- [ ] Add redirect URLs:
  - [ ] `http://localhost:5173/executives/dashboard`
  - [ ] `https://yourdomain.com/executives/dashboard`

### 7. Email Templates (Optional)

- [ ] Navigate to Authentication → Email Templates
- [ ] Customize "Magic Link" template:
  - [ ] Add DMUN branding
  - [ ] Customize message text
  - [ ] Preview template
- [ ] Save changes

## Local Development Setup

### 8. Install Dependencies

```bash
cd d:\Github\DMUN-Foundation
npm install
```

- [ ] Run command
- [ ] Verify no errors
- [ ] Check `node_modules` folder created

### 9. Environment Variables

- [ ] Copy `.env.example` to `.env`
- [ ] Open `.env` file
- [ ] Add Supabase URL: `VITE_SUPABASE_URL=your_url`
- [ ] Add anon key: `VITE_SUPABASE_ANON_KEY=your_key`
- [ ] Save file
- [ ] Verify `.env` is in `.gitignore`

### 10. Start Development Server

```bash
npm run dev
```

- [ ] Run command
- [ ] Note the local URL (usually http://localhost:5173)
- [ ] Open browser to that URL
- [ ] Verify site loads

## Testing

### 11. Test Login Flow

- [ ] Navigate to `/executives/login`
- [ ] Enter a non-@dmun.org email
- [ ] Verify error message shown
- [ ] Enter a @dmun.org email that doesn't exist
- [ ] Verify "User not found" error
- [ ] Enter valid user email (from database)
- [ ] Verify "Check your email" message
- [ ] Check spam folder if needed
- [ ] Click magic link in email
- [ ] Verify redirect to dashboard
- [ ] Verify user name and role shown

### 12. Test Lead Permissions

- [ ] Login as Lead user
- [ ] Verify dashboard shows "Admin Panel" button
- [ ] Click "Admin Panel"
- [ ] Verify access granted

#### Test Add User

- [ ] Navigate to "Manage Users" tab
- [ ] Fill in test user form:
  - Name: Test User
  - Email: test@dmun.org
  - Title: Test Associate
  - Role: General
- [ ] Click "Add User"
- [ ] Verify success message
- [ ] Check user appears in table

#### Test Co-Lead Reassignment

- [ ] Find a general user in table
- [ ] Click "Make Co-Lead"
- [ ] Confirm action
- [ ] Verify role changes to CO-LEAD badge
- [ ] Verify previous Co-Lead becomes GENERAL
- [ ] Refresh page to confirm persistence

#### Test Remove User

- [ ] Find test user in table
- [ ] Click "Remove" button
- [ ] Confirm deletion
- [ ] Verify user removed from table
- [ ] Try to login with that email
- [ ] Verify "User not found" error

#### Test Send Message

- [ ] Navigate to "Send Message" tab
- [ ] Enter message details:
  - Title: Test Announcement
  - Type: Announcement
  - Content: This is a test message
  - Check "Require response"
- [ ] Click "Send Message"
- [ ] Verify success message
- [ ] Navigate to Dashboard
- [ ] Verify message appears

### 13. Test Co-Lead Permissions

- [ ] Logout as Lead
- [ ] Login as Co-Lead user
- [ ] Verify dashboard shows "Send Message" button
- [ ] Click "Send Message"
- [ ] Verify access granted

#### Test Co-Lead Messaging

- [ ] Enter message details
- [ ] Send message
- [ ] Verify success
- [ ] Check dashboard for message

#### Test Co-Lead Restrictions

- [ ] Try to access `/executives/admin` manually
- [ ] Verify "Access Denied" message
- [ ] Verify no "Admin Panel" button in header

### 14. Test General User Permissions

- [ ] Logout as Co-Lead
- [ ] Login as General user
- [ ] Verify dashboard loads
- [ ] Verify NO "Admin Panel" or "Send Message" buttons

#### Test Message Viewing

- [ ] Verify previously sent messages appear
- [ ] Verify messages show correct sender
- [ ] Verify timestamps are correct

#### Test Response Submission

- [ ] Find message with "Require response"
- [ ] Verify response buttons shown
- [ ] Click "Yes" button
- [ ] Verify button highlighted
- [ ] Refresh page
- [ ] Verify selection persists
- [ ] Click "Maybe" button
- [ ] Verify selection changes
- [ ] Verify only one response saved

#### Test General User Restrictions

- [ ] Try to access `/executives/admin`
- [ ] Verify "Access Denied"
- [ ] Try to access `/executives/messaging`
- [ ] Verify "Access Denied"

### 15. Test Session Management

- [ ] Login as any user
- [ ] Refresh page multiple times
- [ ] Verify session persists
- [ ] Close browser
- [ ] Reopen browser
- [ ] Navigate to dashboard
- [ ] Verify still logged in (or redirected to login)

### 16. Test Logout

- [ ] Click "Logout" button
- [ ] Verify redirect to login page
- [ ] Try to access dashboard
- [ ] Verify redirect to login
- [ ] Verify no cached data shown

## Security Testing

### 17. Email Domain Validation

- [ ] Try login with @gmail.com
- [ ] Verify error message
- [ ] Try login with @yahoo.com
- [ ] Verify error message
- [ ] Try login with no domain
- [ ] Verify error message

### 18. Permission Boundaries

- [ ] As General user, try URL: `/executives/admin`
- [ ] Verify blocked
- [ ] As Co-Lead, try URL: `/executives/admin`
- [ ] Verify blocked
- [ ] As unauthenticated, try any protected route
- [ ] Verify redirect to login

### 19. Database Security

- [ ] Login to Supabase
- [ ] Check RLS policies are enabled
- [ ] Verify policies match schema.sql
- [ ] Test inserting data via API
- [ ] Verify permissions enforced

## Production Deployment

### 20. Build for Production

```bash
npm run build
```

- [ ] Run command
- [ ] Verify no errors
- [ ] Check `dist` folder created
- [ ] Verify files generated

### 21. Environment Variables (Production)

- [ ] In hosting platform (Vercel/Netlify/etc):
- [ ] Add `VITE_SUPABASE_URL`
- [ ] Add `VITE_SUPABASE_ANON_KEY`
- [ ] Verify no quotes around values
- [ ] Save configuration

### 22. Update Supabase Redirect URLs

- [ ] Go to Supabase → Authentication → URL Configuration
- [ ] Add production URL: `https://yourdomain.com/executives/dashboard`
- [ ] Add production site URL
- [ ] Save changes

### 23. Deploy Application

- [ ] Deploy to hosting platform
- [ ] Wait for deployment to complete
- [ ] Note production URL
- [ ] Verify site loads

### 24. Production Testing

- [ ] Visit production site
- [ ] Test login flow
- [ ] Verify magic links work
- [ ] Test each user role
- [ ] Verify all features work
- [ ] Test on mobile device
- [ ] Test on different browsers

## Post-Deployment

### 25. User Onboarding

- [ ] Send email to initial users with:
  - [ ] Login URL
  - [ ] Brief instructions
  - [ ] Their role and permissions
  - [ ] Support contact
- [ ] Have users test login
- [ ] Collect feedback

### 26. Documentation

- [ ] Share setup guide with team
- [ ] Document admin procedures
- [ ] Create user guide (optional)
- [ ] Document support process

### 27. Monitoring

- [ ] Check Supabase dashboard for usage
- [ ] Monitor for errors in console
- [ ] Set up error tracking (optional)
- [ ] Monitor email deliverability

### 28. Backup & Security

- [ ] Schedule regular database backups
- [ ] Document recovery procedures
- [ ] Review user access quarterly
- [ ] Update dependencies regularly

## Troubleshooting Checklist

If login doesn't work:

- [ ] Check email domain is @dmun.org
- [ ] Verify user exists in database
- [ ] Check spam folder for magic link
- [ ] Verify link hasn't expired (1 hour)
- [ ] Check redirect URL is configured
- [ ] Verify environment variables set

If permissions don't work:

- [ ] Check user role in database
- [ ] Verify RLS policies enabled
- [ ] Check browser console for errors
- [ ] Clear browser cache
- [ ] Try incognito/private mode

If database connection fails:

- [ ] Verify environment variables
- [ ] Check Supabase project not paused
- [ ] Verify using anon key (not service_role)
- [ ] Check network connection
- [ ] Review Supabase status page

## Success Criteria

Your deployment is successful when:

- [✓] All 3 user roles can login
- [✓] Lead can add/remove users
- [✓] Lead can assign/revoke Co-Lead
- [✓] Lead and Co-Lead can send messages
- [✓] All users can view messages
- [✓] General users can respond to messages
- [✓] Permissions are enforced
- [✓] Magic links work reliably
- [✓] UI is responsive on all devices
- [✓] No console errors
- [✓] Data persists correctly
- [✓] Sessions work properly
- [✓] Logout works correctly

## Resources

- [ ] Supabase Dashboard: https://supabase.com/dashboard
- [ ] Setup Guide: `EXECUTIVE_PORTAL_SETUP.md`
- [ ] Quick Reference: `EXECUTIVE_PORTAL_QUICKREF.md`
- [ ] Architecture: `ARCHITECTURE.md`
- [ ] UI Guide: `UI_UX_GUIDE.md`

## Support Contacts

- Technical Issues: [Your Dev Team]
- Supabase Support: https://supabase.com/support
- React Router: https://reactrouter.com/

---

**Completed: \_**\_ / \_\_** / 20\_\_\_\_**

**Deployed by: ******\_\_\_\_********

**Production URL: **********\_\_\_\_************

---

✨ **Congratulations on deploying the DMUN Executive Portal!** ✨
