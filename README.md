# Portfolio Website

This is a modern, dark-themed portfolio website built with **React** and **Vite**. It showcases personal information, achievements, testimonials, and provides quick access to contact and social links. The UI is responsive and leverages **Tailwind CSS** and **Material-UI** for styling.

---

## Project Structure

```
portfolio-accenture
├── src
│   ├── components
│   │   ├── Navbar.jsx           # Top navigation bar with name and social icons
│   │   ├── HeroSection.jsx      # Hero banner with headline and background image
│   │   ├── AboutMe.jsx          # Profile section with image and bio
│   │   ├── Timeline.jsx         # Timeline of achievements
│   │   ├── TimelineItem.jsx     # Individual timeline entry with image and description
│   │   ├── TestimonialSection.jsx # Animated testimonial display
│   │   ├── Testimonial.jsx      # Testimonial card with image and text
│   │   ├── ChatWidget.jsx       # AI chatbot widget
│   │   └── GradientAccent.js    # Gradient accent definitions
│   ├── pages
│   │   ├── ContactMePage.js     # Contact Me Page (Deprecated)
│   │   ├── HomePage.js          # Holds the home page and all information when app is first opened
│   │   └── ResumePage.js        # Holds my Resume information
│   ├── assets                   # Images and static assets
│   ├── styles
│   │   ├── tailwind.css         # Tailwind CSS styles
│   │   ├── gradient.css         # Custom gradient styles
│   │   └── mui-theme.js         # MUI Themes
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point
│   ├── index.css                # Global styles
├── package.json                 # npm configuration
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS config
├── postcss.config.js            # PostCSS config
├── index.html                   # Main HTML file
└── README.md                    # Project documentation
```

---

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd portfolio-accenture
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:5173
   ```

---

## Features

- **Responsive Navbar:** Name and social icons (Email, LinkedIn, GitHub) on the left, navigation links on the right.
- **Hero Section:** Large headline and background image, fills the screen on mobile.
- **About Me:** Profile image and bio, image centered on medium screens.
- **Timeline:** Achievements with images that stretch to match text width, even for small source images.
- **Testimonials:** Animated, responsive testimonial cards with image and text, font size scales smoothly.
- **AI Chat Widget:** Chatbot for interactive Q&A about Jeffrey.
- **Modern Styling:** Uses Tailwind CSS and Material-UI for a clean, dark UI.

---

## Customization

- Update images in `/src/assets`.
- Edit content in `/src/components/AboutMe.jsx`, `/src/components/Timeline.jsx`, and `/src/components/TestimonialSection.jsx`.
- Adjust colors and gradients in `/src/styles/gradient.css` and Tailwind config.

---

## Contact & Social

- Email, LinkedIn, and GitHub links are always visible in the Navbar for quick access.

---

For further details, explore the component files in `/src/components`.
