# DMUN Foundation Website

A modern, responsive website for the DMUN Foundation built with React, featuring smooth animations, interactive components, and a comprehensive content management system for advocacy, programs, research, and community engagement.

## 🚀 Tech Stack

- **Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Routing:** React Router DOM 7.6.2
- **Authentication:** Supabase Auth (Magic Links)
- **Database:** Supabase PostgreSQL
- **Styling:**
  - Tailwind CSS 3.4.18
  - Styled Components 6.1.18
- **Animations:**
  - Framer Motion 12.18.1
  - GSAP 3.13.0
- **UI Components:**
  - Radix UI (Navigation Menu, Dialog)
  - shadcn/ui components
  - Lucide React Icons
  - Heroicons

## 📋 Features

### Public Website

- **Multi-page Navigation:** Home, About, Advocacy, Programs, Research, Publications, Newsroom, and more
- **Interactive Components:** Tilted cards, split text animations, menu drawer
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Content Pages:**
  - Advocacy initiatives
  - Programs and services
  - Research publications
  - Newsroom with article pages
  - Membership and volunteer opportunities
  - Donor relations and donation pages
- **Smooth Animations:** Page transitions and interactive elements using Framer Motion
- **Accessible UI:** Built with Radix UI primitives for accessibility

### 🔐 Executive Portal (New!)

- **Secure Authentication:** Passwordless magic link login with @dmun.org email restriction
- **Role-Based Access Control (RBAC):**
  - **Lead (Founder):** Full administrative control
  - **Co-Lead (Deputy Director):** Messaging and communication privileges
  - **General Users:** View and respond to messages
- **User Management:** Add/remove users, assign roles, reassign Co-Lead position
- **Messaging System:** Send announcements, alerts, and task assignments to team
- **Response Tracking:** Yes/No/Maybe/Discussion Needed response options with analytics
- **Real-time Dashboard:** View all messages, send responses, role-specific actions
- **Supabase Backend:** PostgreSQL database with row-level security

**Executive Portal Routes:**

- `/executives/login` - Secure login page
- `/executives/dashboard` - Main dashboard for all users
- `/executives/admin` - Admin panel (Lead only)
- `/executives/messaging` - Messaging interface (Co-Lead only)

**See [EXECUTIVE_PORTAL_SETUP.md](EXECUTIVE_PORTAL_SETUP.md) for complete setup instructions.**

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Prem-Dharshan/DMUN-Foundation.git
   cd DMUN-Foundation
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables (for Executive Portal):**

   ```bash
   cp .env.example .env
   # Edit .env and add your Supabase credentials
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Executive Portal Setup

For the Executive Portal feature, additional setup is required:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Run the database schema** from `database/schema.sql` in the Supabase SQL Editor
3. **Configure environment variables** in `.env` with your Supabase credentials
4. **Update initial user emails** in the database to match your team

**See [EXECUTIVE_PORTAL_SETUP.md](EXECUTIVE_PORTAL_SETUP.md) for detailed instructions.**

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
DMUN-Foundation/
├── public/               # Static assets
├── database/            # Database schemas and migrations
│   └── schema.sql       # Supabase database schema
├── data/                # Configuration and data files
│   ├── rbac.json       # Role-based access control config
│   └── users.json      # User data cache
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Reusable React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuDrawer.jsx
│   │   └── ...
│   ├── executives/      # Executive Portal (NEW!)
│   │   ├── components/ # Portal-specific components
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/    # Authentication context
│   │   │   └── ExecutiveAuthContext.jsx
│   │   ├── pages/      # Portal pages
│   │   │   ├── ExecutiveLogin.jsx
│   │   │   ├── ExecutiveDashboard.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   └── CoLeadMessaging.jsx
│   │   └── README.md   # Portal documentation
│   ├── pages/          # Public page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Advocacy.jsx
│   │   ├── Programs.jsx
│   │   ├── Research.jsx
│   │   ├── Newsroom.jsx
│   │   └── ...
│   ├── lib/            # Utility functions
│   │   ├── utils.js
│   │   └── supabase.js # Supabase client config
│   ├── styles/         # Style configurations
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── .env.example         # Environment variables template
├── components.json     # shadcn/ui configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
├── package.json        # Project dependencies
├── EXECUTIVE_PORTAL_SETUP.md      # Portal setup guide
├── EXECUTIVE_PORTAL_QUICKREF.md   # Quick reference
├── ARCHITECTURE.md                # System architecture
├── UI_UX_GUIDE.md                # Design system guide
├── DEPLOYMENT_CHECKLIST.md        # Deployment checklist
└── IMPLEMENTATION_SUMMARY.md      # Feature summary
```

## 🎨 Styling

The project uses a combination of:

- **Tailwind CSS** for utility-first styling
- **Styled Components** for component-level styles
- **Custom CSS** for specialized animations and effects

### Color Scheme

- Primary Blue: `#44b8f3`
- Dark Blue: `#002147`
- Light Blue: `#97e1e6`
- Background: `#e6f0fa`

## 🧩 Key Components

- **Header:** Main navigation with responsive menu
- **MenuDrawer:** Mobile-friendly slide-out navigation
- **TiltedCard:** Interactive card component with tilt effect
- **SplitText:** Animated text splitting component
- **BorderedContentWrapper:** Consistent content layout wrapper

## 🌐 Routing

The application uses React Router for client-side routing with the following main routes:

### Public Routes

- `/` - Home page
- `/about` - About the foundation
- `/advocacy` - Advocacy initiatives
- `/programs` - Foundation programs
- `/research` - Research projects
- `/publications` - Published works
- `/newsroom` - News and articles
- `/newsroom/:id` - Individual article pages
- `/membership` - Membership information
- `/donate` - Donation page
- `/volunteer` - Volunteer opportunities
- `/partner` - Partnership opportunities

### Executive Portal Routes (Protected)

- `/executives/login` - Secure login with @dmun.org validation
- `/executives/dashboard` - Main dashboard (all authenticated users)
- `/executives/admin` - Admin panel (Lead only)
- `/executives/messaging` - Messaging interface (Co-Lead only)

## 🚢 Deployment

### Public Website

The project includes a `vercel.json` configuration file for easy deployment on Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

### Executive Portal

Additional steps required for Executive Portal deployment:

1. Set up Supabase project and database
2. Configure production environment variables
3. Update Supabase redirect URLs for production
4. Deploy application
5. Test authentication flow

**See [DEPLOYMENT_CHECKLIST.md](DEPLOYMENT_CHECKLIST.md) for complete deployment guide.**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary to DMUN Foundation.

## 📞 Contact

For more information about DMUN Foundation, please visit the website or contact through the official channels listed on the site.

---

Built with ❤️ for DMUN Foundation
