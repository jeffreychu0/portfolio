# React Portfolio Website

This project is a portfolio website built with React and Vite, featuring a modern dark-themed UI. The website includes various components to showcase personal information, achievements, and a contact form.

## Project Structure

```
portfolio-website
├── src
│   ├── components          # Contains reusable React components
│   │   ├── Navbar.jsx      # Navigation bar with text field and buttons
│   │   ├── AboutMe.jsx     # Component displaying profile information
│   │   ├── Timeline.jsx     # Component showcasing achievements in a timeline
│   │   ├── ContactMe.jsx    # Component for user contact form
│   │   └── GradientAccent.js # Defines the light-blue to light-red gradient
│   ├── pages               # Contains page components
│   │   ├── AboutMePage.jsx # Page rendering the AboutMe component
│   │   ├── TimelinePage.jsx # Page rendering the Timeline component
│   │   └── ContactMePage.jsx# Page rendering the ContactMe component
│   ├── assets              # Contains static assets
│   │   └── profile.jpg     # Profile picture for the AboutMe component
│   ├── styles              # Contains styling files
│   │   ├── mui-theme.js    # Material-UI theme configuration
│   │   ├── tailwind.css     # Tailwind CSS styles
│   │   └── gradient.css     # CSS rules for gradient accent
│   ├── App.jsx             # Main application component
│   ├── App.css             # Custom styles for the application
│   ├── index.css           # Global styles
│   ├── main.jsx            # Entry point of the application
├── package.json            # npm configuration file
├── vite.config.js          # Vite configuration file
├── postcss.config.js       # PostCSS configuration for processing CSS
├── tailwind.config.js      # Tailwind CSS configuration file
├── eslint.config.js        # ESLint configuration file
├── index.html              # Main HTML file for the application
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the development server:**
   ```
   npm run dev
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

- The `Navbar` component provides navigation between different sections of the website.
- The `AboutMe` component displays personal information, including a profile picture and description.
- The `Timeline` component showcases achievements in a visually appealing timeline format.
- The `ContactMe` component allows users to send messages through a contact form.

## Additional Information

For more details on how to use the components and customize the application, refer to the respective component files and documentation.