# Orchestration System - Quick Reference Guide

## 🚀 Quick Start

### For End Users

1. **Visit the website** - [dmunfoundation.org](https://dmunfoundation.org)
2. **Wait for role selector** (appears after 2 seconds for new visitors)
3. **Choose your role**:
   - 🎯 Delegate (MUN participant)
   - 👨‍👩‍👧‍👦 Parent/Guardian
   - 📚 Educator/Teacher
   - 🤝 Volunteer
   - 💝 Donor/Sponsor
   - 🎓 Alumni
   - 📰 Media/Press
4. **Enjoy personalized content!**
5. **Change anytime** using the floating button (bottom-right corner)

### For Administrators (Lead Only)

1. Login at `/executives/login`
2. Access Orchestration Admin (future location: `/executives/admin`)
3. Toggle system on/off
4. Enable/disable roles
5. Manage banners and content

---

## 📋 Role Comparison Table

| Feature          | Delegate    | Parent     | Educator   | Volunteer  | Donor      | Alumni     | Media      | Default |
| ---------------- | ----------- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- | ------- |
| **Custom Hero**  | ✅          | ✅         | ✅         | ✅         | ✅         | ✅         | ✅         | ❌      |
| **Banners**      | 2           | 1          | 1          | 1          | 1          | 1          | 1          | 0       |
| **Word Changes** | ✅          | ✅         | ✅         | ✅         | ✅         | ✅         | ✅         | ❌      |
| **Highlights**   | 3 sections  | 3 sections | 3 sections | 3 sections | 3 sections | 3 sections | 3 sections | All     |
| **Stat Focus**   | Conferences | Skills     | Impact     | Hours      | Funds      | Network    | Reach      | General |

---

## 🎯 Role-Specific Quick Info

### Delegate 🎯

- **Sees**: Conference promotions, skill workshops
- **CTA**: "Register Now" instead of "Join"
- **Emphasis**: Upcoming events, competitions
- **Best for**: Students wanting to participate

### Parent 👨‍👩‍👧‍👦

- **Sees**: Child development benefits, safety info
- **CTA**: "Enroll Your Child"
- **Emphasis**: Skills, safety, success stories
- **Best for**: Parents researching MUN for kids

### Educator 📚

- **Sees**: Curriculum resources, teaching materials
- **CTA**: "Get Educator Toolkit"
- **Emphasis**: Research, educational impact
- **Best for**: Teachers integrating MUN in classroom

### Volunteer 🤝

- **Sees**: Volunteer opportunities, impact stories
- **CTA**: "Start Volunteering"
- **Emphasis**: How to help, community impact
- **Best for**: People wanting to contribute time

### Donor 💝

- **Sees**: Impact reports, transparency info
- **CTA**: "Become a Partner"
- **Emphasis**: Fund allocation, ROI, recognition
- **Best for**: Potential financial supporters

### Alumni 🎓

- **Sees**: Reunion events, mentorship opportunities
- **CTA**: "Reconnect"
- **Emphasis**: Alumni network, giving back
- **Best for**: Former DMUN participants

### Media 📰

- **Sees**: Press releases, media kit access
- **CTA**: "Access Media Center"
- **Emphasis**: News, contact info, press materials
- **Best for**: Journalists covering DMUN

---

## 🔧 Common Tasks

### Change Your Role

1. Click floating button (👤 icon) in bottom-right
2. Select new role
3. Content updates instantly

### Dismiss a Banner

1. Click ❌ button on banner
2. Banner won't show again (saved in browser)
3. Resets when you change roles

### Reset to Default View

1. Open role selector
2. Click "Skip for now"
3. OR clear browser data

### See All Banners Again

1. Change to different role
2. Dismissed banners for new role will show
3. Previous dismissals stay for original role

---

## 💡 Tips & Tricks

### For Users

- 🔄 **Try different roles** to see various perspectives
- 🔕 **Dismiss banners** you're not interested in
- 📱 **Works on mobile** - fully responsive
- 💾 **Saves preference** - no need to reselect every visit
- 🌐 **Private** - role saved locally, not tracked

### For Admins

- 🎯 **Test each role** in incognito mode
- 📊 **Monitor which banners** get most engagement
- ⚖️ **Balance** banner count vs. user experience
- 🔄 **Update regularly** with new events/opportunities
- 🚫 **Can disable** specific roles if needed

---

## 🛠️ Troubleshooting

### Role selector doesn't appear

- **Solution**: Wait 2+ seconds on homepage
- **OR**: Click floating button manually
- **Check**: You're not on executive portal pages

### Role doesn't persist after refresh

- **Check**: Browser allows localStorage
- **Try**: Different browser
- **Clear**: Browser cache and try again

### Content not changing after role selection

- **Try**: Hard refresh (Ctrl+F5 / Cmd+Shift+R)
- **Check**: Orchestration is enabled (admin can toggle)
- **Verify**: You selected a non-default role

### Banners won't dismiss

- **Check**: Click the X button, not the banner
- **Try**: Different browser if issue persists
- **Note**: Some banners may be non-dismissible (admin setting)

### Admin panel not accessible

- **Verify**: Logged in as Lead
- **Check**: Using correct URL path
- **Permission**: Only Lead role has access

---

## 📊 Statistics (As of Nov 2025)

- **Total Roles**: 7 (+ default)
- **Total Banners**: 9 across all roles
- **Avg Customizations**: 15 per role
- **Storage Used**: <10KB localStorage
- **Load Impact**: +5KB initial load
- **Browser Support**: 100% modern browsers

---

## 🔐 Data & Privacy

### What's Stored Locally

- Selected role ID (e.g., "delegate")
- Dismissed banner IDs
- First visit flag

### What's NOT Stored

- Personal information
- Browsing behavior
- Analytics data (unless explicitly added)

### How to Clear

1. Browser Settings → Clear Browsing Data
2. Select "Cookies and site data"
3. OR use incognito mode for testing

---

## 🎨 Customization Examples

### Example 1: Delegate View

```
Hero: "Welcome Back, Delegate!"
Banner: "🎯 Early Bird: DMUN 2025 - 20% off!"
Button text: "Register Now" (instead of "Join")
Highlighted: Events section (pulsing border)
```

### Example 2: Parent View

```
Hero: "Empower Your Child's Future"
Banner: "👨‍👩‍👧‍👦 Help your child develop leadership skills"
Text: "your child" (instead of "student")
Highlighted: Skills & safety sections
```

### Example 3: Educator View

```
Hero: "Transform Your Classroom"
Banner: "📚 Free Educator Toolkit Available"
Button: "Get Resources" (instead of "Join")
Highlighted: Research & publications
```

---

## 📞 Support

### For Technical Issues

- Review [Full Documentation](./ORCHESTRATION_SYSTEM.md)
- Check browser console for errors
- Test in incognito mode
- Contact: dev@dmunfoundation.org

### For Content Updates

- Admins: Use orchestration admin panel
- Request changes: leadership@dmunfoundation.org

### For Questions

- End users: help@dmunfoundation.org
- Developers: See technical docs

---

## 🔮 Coming Soon

- ✨ Analytics dashboard
- 📈 A/B testing capabilities
- 🎯 Multi-role support
- 🌍 Geographic targeting
- 🤖 AI-powered role suggestions
- 📱 Mobile app integration

---

## 🎓 Learning Resources

### For End Users

- Video tutorial: Coming soon
- Interactive demo: Available on homepage

### For Developers

- Full documentation: [ORCHESTRATION_SYSTEM.md](./ORCHESTRATION_SYSTEM.md)
- Code examples: In source files
- API reference: In context provider

### For Admins

- Admin guide: See full documentation
- Best practices: Section 7 of main docs
- Training video: Coming soon

---

**Last Updated**: November 8, 2025  
**Version**: 1.0  
**Status**: ✅ Active and Production Ready
