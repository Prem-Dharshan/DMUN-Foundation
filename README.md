# DMUN Foundation Website

A modern, responsive website for the DMUN Foundation built with React, featuring smooth animations, interactive components, and a comprehensive content management system for advocacy, programs, research, and community engagement.

## 🚀 Tech Stack

- **Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Routing:** React Router DOM 7.6.2
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

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the production-ready application
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
DMUN-Foundation/
├── public/               # Static assets
├── src/
│   ├── assets/          # Images, fonts, and other assets
│   ├── components/      # Reusable React components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── MenuDrawer.jsx
│   │   └── ...
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Advocacy.jsx
│   │   ├── Programs.jsx
│   │   ├── Research.jsx
│   │   ├── Newsroom.jsx
│   │   └── ...
│   ├── lib/            # Utility functions
│   ├── styles/         # Style configurations
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── components.json     # shadcn/ui configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── package.json        # Project dependencies
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

## 🚢 Deployment

The project includes a `vercel.json` configuration file for easy deployment on Vercel:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary to DMUN Foundation.

## 📞 Contact

For more information about DMUN Foundation, please visit the website or contact through the official channels listed on the site.

---

Built with ❤️ for DMUN Foundation
