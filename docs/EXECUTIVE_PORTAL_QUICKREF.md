# DMUN Foundation Executive Portal - Quick Reference

## 🔗 Routes

| Route                   | Access       | Description                   |
| ----------------------- | ------------ | ----------------------------- |
| `/executives/login`     | Public       | Login page for executives     |
| `/executives/dashboard` | All Users    | Main dashboard with messages  |
| `/executives/admin`     | Lead Only    | User management and messaging |
| `/executives/messaging` | Co-Lead Only | Send messages to team         |

## 👥 Default Users

| Name         | Email                 | Role    | Access Level   |
| ------------ | --------------------- | ------- | -------------- |
| Jaewon Choi  | jaewon.choi@dmun.org  | Lead    | Full Admin     |
| Harshan M V  | harshan.mv@dmun.org   | Co-Lead | Messaging      |
| Ishaan Bajaj | ishaan.bajaj@dmun.org | General | View & Respond |

## 🎯 Role Permissions

### Lead (Founder & Executive Director)

- ✅ View all messages
- ✅ Send messages
- ✅ Add users
- ✅ Remove users
- ✅ Assign/revoke Co-Lead
- ✅ View responses

### Co-Lead (Deputy Executive Director)

- ✅ View all messages
- ✅ Send messages
- ✅ View responses
- ❌ User management

### General User

- ✅ View messages
- ✅ Respond to messages
- ❌ Send messages
- ❌ User management

## 📝 Common Tasks

### Adding a New User (Lead Only)

1. Login as Lead
2. Navigate to Admin Panel
3. Click "Manage Users" tab
4. Fill in user details
5. Select role (General or Co-Lead)
6. Click "Add User"

### Reassigning Co-Lead (Lead Only)

1. Go to Admin Panel → Manage Users
2. Find user to promote
3. Click "Make Co-Lead"
4. Confirm action
5. Previous Co-Lead automatically demoted

### Sending a Message (Lead & Co-Lead)

1. Navigate to messaging interface
2. Enter title and content
3. Select type: Announcement/Alert/Task
4. Check "Require response" if needed
5. Click "Send Message"

### Responding to Messages (All Users)

1. View message on dashboard
2. If response required, click:
   - ✓ Yes
   - ✗ No
   - ? Maybe
   - 💬 Discussion Needed

## 🗄️ Database Tables

### executives

```sql
- id: UUID
- name: Text
- email: Text (unique, @dmun.org)
- title: Text
- role: 'lead' | 'colead' | 'general'
```

### messages

```sql
- id: UUID
- title: Text
- content: Text
- type: 'announcement' | 'alert' | 'task'
- sender_id: UUID (FK → executives)
- requires_response: Boolean
```

### message_responses

```sql
- id: UUID
- message_id: UUID (FK → messages)
- user_id: UUID (FK → executives)
- response: 'yes' | 'no' | 'maybe' | 'discussion'
```

## 🚀 Setup Checklist

- [ ] Create Supabase project
- [ ] Copy API credentials
- [ ] Run database schema SQL
- [ ] Configure environment variables
- [ ] Update initial user emails
- [ ] Configure email redirect URLs
- [ ] Test login flow
- [ ] Test each role's permissions

## 🔧 Environment Variables

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 📧 Email Requirements

- Must end with `@dmun.org`
- Case-insensitive
- Must exist in database before login
- Magic link expires in 1 hour

## 🐛 Quick Troubleshooting

| Issue                 | Solution                             |
| --------------------- | ------------------------------------ |
| "User not found"      | Add user to database via Admin Panel |
| Magic link expired    | Request new login link               |
| Permission denied     | Check user role in database          |
| Can't see Admin Panel | Only Lead can access                 |
| Messages not loading  | Check Supabase connection            |

## 📱 UI Components

### Message Types

- **Announcement** (Blue): General information
- **Alert** (Red): Urgent notifications
- **Task** (Gray): Work assignments

### Response Options

- **✓ Yes**: Affirmative
- **✗ No**: Negative
- **? Maybe**: Uncertain
- **💬 Discussion**: Needs conversation

## 🔐 Security Notes

- Passwordless authentication (magic links)
- Domain-restricted (@dmun.org only)
- Row-level security in database
- Role-based UI access control
- Session auto-refresh
- Secure token management

## 📞 Support

For detailed setup instructions, see: `EXECUTIVE_PORTAL_SETUP.md`

---

**DMUN Foundation** | Executive Portal v1.0
