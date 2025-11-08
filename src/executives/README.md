# DMUN Foundation Executive Portal

This directory contains the complete executive authentication and management system for DMUN Foundation.

## 📂 Directory Structure

```
executives/
├── components/
│   └── ProtectedRoute.jsx          # Authentication wrapper for protected routes
├── context/
│   └── ExecutiveAuthContext.jsx    # Authentication state & user management
└── pages/
    ├── ExecutiveLogin.jsx          # Login page with @dmun.org validation
    ├── ExecutiveDashboard.jsx      # Main dashboard for all users
    ├── AdminPanel.jsx              # Lead-only admin interface
    └── CoLeadMessaging.jsx         # Co-Lead messaging interface
```

## 🎯 Features

### Authentication

- Passwordless magic link authentication
- Email domain restriction (@dmun.org only)
- Persistent sessions with auto-refresh
- Secure token management

### Role-Based Access Control (RBAC)

- **Lead**: Full administrative control
- **Co-Lead**: Messaging privileges
- **General User**: View and respond to messages

### User Management (Lead Only)

- Add new users via UI
- Assign/reassign Co-Lead position
- Remove users from system
- View all team members

### Messaging System

- Send announcements, alerts, and tasks
- Require responses from team members
- Track responses (Yes/No/Maybe/Discussion)
- View response analytics

## 🔧 Components

### ExecutiveAuthContext

Provides authentication state and methods throughout the application:

- `user` - Current authenticated user object
- `session` - Supabase session
- `loading` - Loading state
- `signIn(email)` - Initiate magic link login
- `signOut()` - End user session
- `hasPermission(permission)` - Check user permissions
- `isLead()`, `isCoLead()`, `isGeneral()` - Role checkers

### ProtectedRoute

Wrapper component for route protection:

```jsx
<ProtectedRoute requiredPermission="add_user">
  <AdminPanel />
</ProtectedRoute>
```

## 🚀 Usage in App

```jsx
import { ExecutiveAuthProvider } from "./executives/context/ExecutiveAuthContext";
import ProtectedRoute from "./executives/components/ProtectedRoute";
import ExecutiveLogin from "./executives/pages/ExecutiveLogin";
import ExecutiveDashboard from "./executives/pages/ExecutiveDashboard";
import AdminPanel from "./executives/pages/AdminPanel";

// Wrap app with provider
<ExecutiveAuthProvider>
  <Routes>
    <Route path="/executives/login" element={<ExecutiveLogin />} />
    <Route
      path="/executives/dashboard"
      element={
        <ProtectedRoute>
          <ExecutiveDashboard />
        </ProtectedRoute>
      }
    />
    <Route
      path="/executives/admin"
      element={
        <ProtectedRoute requiredPermission="add_user">
          <AdminPanel />
        </ProtectedRoute>
      }
    />
  </Routes>
</ExecutiveAuthProvider>;
```

## 🔐 Permissions

Defined in `/data/rbac.json`:

- `view_messages` - View all messages
- `send_messages` - Send messages to team
- `add_user` - Add new users
- `remove_user` - Remove users
- `edit_user` - Edit user details
- `assign_colead` - Assign Co-Lead position
- `revoke_colead` - Revoke Co-Lead privileges
- `view_responses` - View message responses
- `respond_to_messages` - Submit responses

## 📊 Data Flow

```
User → ExecutiveLogin
  ↓
Enter @dmun.org email
  ↓
Supabase sends magic link
  ↓
User clicks link
  ↓
ExecutiveAuthContext validates
  ↓
Load user data from database
  ↓
Redirect to ExecutiveDashboard
  ↓
Role-based UI rendering
```

## 🗄️ Database Integration

All pages use the `executivesDb` helper from `/src/lib/supabase.js`:

```javascript
import { executivesDb } from "@/lib/supabase";

// Get all users
const users = await executivesDb.getUsers();

// Create message
await executivesDb.createMessage({
  title: "Team Meeting",
  content: "Tomorrow at 3 PM",
  type: "announcement",
  sender_id: user.id,
  requires_response: false,
});

// Submit response
await executivesDb.submitResponse({
  message_id: messageId,
  user_id: userId,
  response: "yes",
});
```

## 🎨 Styling

Uses styled-components with consistent design system:

- Primary: `#002147` (Dark Blue)
- Secondary: `#44b8f3` (Abbott Blue)
- Success: `#166534` (Green)
- Error: `#991b1b` (Red)
- Warning: `#92400e` (Amber)

## 📱 Responsive Design

All components are mobile-responsive with breakpoints:

- Desktop: Full featured interface
- Tablet: Adapted layouts
- Mobile: Optimized for touch

## 🔒 Security Features

1. **Email Domain Validation**: Only @dmun.org emails
2. **Database RLS**: Row-level security policies
3. **Route Protection**: Permission-based access
4. **Token Encryption**: Secure session management
5. **CSRF Protection**: Built into Supabase
6. **Rate Limiting**: Prevents brute force attacks

## 📝 Example Workflows

### Adding a User

1. Lead logs in → Admin Panel
2. Fills user form with @dmun.org email
3. Assigns role (General/Co-Lead)
4. User receives invitation email
5. User can now login

### Sending a Message

1. Lead/Co-Lead navigates to messaging
2. Composes title and content
3. Selects type and response requirement
4. Sends to all team members
5. Recipients see in dashboard

### Responding to Message

1. User views message in dashboard
2. Clicks response button (if required)
3. Selection saved to database
4. Lead/Co-Lead can view all responses

## 🐛 Testing

Test each role's access:

- Lead: Can access everything
- Co-Lead: Cannot access Admin Panel
- General: Can only view and respond

## 📚 Related Files

- `/src/lib/supabase.js` - Database helpers
- `/data/rbac.json` - Role definitions
- `/database/schema.sql` - Database schema
- `/EXECUTIVE_PORTAL_SETUP.md` - Setup guide
- `/EXECUTIVE_PORTAL_QUICKREF.md` - Quick reference

---

**For setup instructions, see:** `EXECUTIVE_PORTAL_SETUP.md` in project root
