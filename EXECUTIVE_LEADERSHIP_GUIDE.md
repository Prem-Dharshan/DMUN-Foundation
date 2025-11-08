# Executive Leadership Page - Instructions

## Overview

The Executive Leadership page (`/executive-leadership`) showcases the DMUN Foundation's leadership team with professional, stunning cards featuring photos, descriptions, and social links.

## Features

- **Professional Design**: Modern card-based layout with hover animations
- **Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Dynamic Content**: Staff data stored in JSON format for easy updates
- **Gradient Hero**: Eye-catching gradient hero section with pattern overlay
- **Social Links**: LinkedIn and email links for each executive
- **Smooth Animations**: Fade-in animations with staggered delays

## File Structure

```
src/
├── pages/
│   └── ExecutiveLeadership.jsx   # Main page component
data/
└── executive-staff.json           # Staff data (JSON format)
```

## How to Add New Staff Members

### Method 1: Edit the JSON File (Recommended for Future)

1. Open `data/executive-staff.json`
2. Add a new entry to the `executiveTeam` or `additionalStaff` array:

```json
{
  "id": 4,
  "name": "Full Name",
  "role": "Position Title",
  "description": "Brief description of their responsibilities and contributions to the Foundation.",
  "image": "/path-to-image.jpg",
  "linkedin": "https://www.linkedin.com/in/username/",
  "email": "email@dmunfoundation.org"
}
```

### Method 2: Edit the Page Component Directly

1. Open `src/pages/ExecutiveLeadership.jsx`
2. Find the `executiveStaff` array (around line 180)
3. Add a new staff member object:

```javascript
{
  id: 4,
  name: "Full Name",
  role: "Position Title",
  description: "Brief description...",
  image: "/image-name.jpg",
  linkedin: "https://www.linkedin.com/in/username/",
  email: "email@dmunfoundation.org"
}
```

## Adding Staff Photos

### Step 1: Prepare the Image

- **Recommended size**: 400x320 pixels (or any 5:4 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Keep under 500KB for optimal loading
- **Quality**: High resolution, professional headshot

### Step 2: Add to Public Folder

1. Place the image in the `public/` folder at the root of your project
2. Name it descriptively (e.g., `john-doe-photo.jpg`)
3. Reference it in the data as `/john-doe-photo.jpg`

Example structure:

```
public/
├── jaewon-picture.jpg
├── atharv-singh-professional.jpeg
├── lily-picture.png
└── new-staff-member.jpg  ← Add here
```

## Styling Customization

### Colors

The page uses the standard DMUN Foundation color palette:

- **DARK_BLUE**: `#002147` - Primary dark blue
- **ABBOT_BLUE**: `#44b8f3` - Accent blue
- **LIGHT_BLUE**: `#97e1e6` - Light accent
- **PAGE_BACKGROUND_COLOR**: `#E7F1FA` - Page background

### Card Hover Effects

Cards feature:

- Subtle lift on hover (`translateY(-8px)`)
- Enhanced shadow
- Top border gradient animation
- Image zoom effect (5% scale)

### Responsive Breakpoints

- **Desktop**: Full 3-column grid
- **Tablet**: 2-column grid (auto-fit at 350px min)
- **Mobile**: Single column (below 768px)

## Navigation

The Executive Leadership page is accessible from:

1. **Header Navigation**: "Leadership" link
2. **Menu Drawer**: Under "Get Involved" section
3. **Direct URL**: `/executive-leadership`

## Common Tasks

### Update Executive Information

Edit the specific entry in `executiveStaff` array with new information.

### Change Card Layout

Modify the `CardsGrid` component:

```javascript
grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
// Change minmax() values for different card sizes
```

### Adjust Animation Timing

Modify the `$delay` prop in the map function:

```javascript
$delay={`${index * 0.1}s`}  // Change 0.1 to adjust stagger
```

### Remove Social Links

To hide LinkedIn or Email links, simply remove them from the data or set to empty string.

## Accessibility

- All images have alt text
- Proper semantic HTML structure
- Keyboard navigation support
- Color contrast meets WCAG standards

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Images Not Showing

1. Verify image is in `public/` folder
2. Check image path starts with `/`
3. Check console for 404 errors
4. Ensure image filename matches exactly (case-sensitive)

### Layout Issues

1. Clear browser cache
2. Check for CSS conflicts
3. Verify styled-components is installed
4. Check browser console for errors

### Animation Not Working

Animations use CSS keyframes and should work in all modern browsers. If not working:

1. Check browser supports CSS animations
2. Verify styled-components version is up to date
3. Check for JavaScript errors in console

## Future Enhancements

Potential improvements:

- Load staff data from JSON file instead of hardcoded
- Add search/filter functionality
- Add pagination for large teams
- Add team member detail pages
- Integrate with CMS for dynamic updates
- Add staff testimonials section
- Add downloadable team bios

---

**Last Updated**: November 2025
**Maintainer**: DMUN Foundation Web Team
