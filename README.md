# GemUI

A powerful **AI-powered React component generator** built with **React**, **Vite**, and **Google Gemini AI**—featuring intelligent code generation, real-time preview, and a sleek responsive design.

---

## 🎯 Project Structure

```
GemUI/
├── src/
│   ├── App.jsx           # Main React component with UI and state management
│   ├── App.css           # Styling with CSS variables for light/dark themes
│   ├── index.css         # Global styles and base configurations
│   ├── main.jsx          # React app entry point
│   └── helper/
│       └── index.js      # AI integration and code generation logic
├── public/
│   └── vite.svg          # Vite logo
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── README.md             # You are here!
```

---

## ✨ Features

- **🤖 AI-Powered Generation**: Uses Google Gemini AI to generate React components from natural language descriptions
- **⚡ Real-time Preview**: Instantly see your generated components in action
- **🌓 Dark/Light Mode**: Toggle between beautiful dark and light themes
- **📱 Responsive Design**: Works seamlessly across all device sizes
- **🎨 Modern UI**: Clean, intuitive interface with smooth animations
- **🔧 Code Purification**: Automatically cleans and optimizes generated code
- **📢 Toast Notifications**: User-friendly feedback for all actions
- **⚡ Fast & Lightweight**: Built with Vite for lightning-fast development

---

## 🚀 Tech Stack

- **Frontend**: React 19.1.1 with Hooks
- **Build Tool**: Vite 7.1.7
- **AI Integration**: Google Generative AI (Gemini 2.0 Flash)
- **Styling**: Pure CSS with CSS Variables
- **Icons**: FontAwesome & React Icons
- **Notifications**: React Toastify
- **Linting**: ESLint with React plugins

---

## 📸 Preview

<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/95e65e14-7152-47b7-addd-ece4be80b5ce" />

The app features a clean, modern interface with:
- A large preview area for generated components
- An input textarea for describing your desired component
- A generate button with gem icon
- Theme toggle button (sun/moon icons)
- Responsive design that works on all screen sizes

---

## 🛠️ How to Play / Run Locally

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Google Gemini API key

### Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/GemUI.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd GemUI
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🎮 How to Use

1. **Describe Your Component**: In the textarea, describe the React component you want to create (e.g., "A button with hover effects and gradient background")

2. **Generate**: Click the "Generate" button with the gem icon

3. **Preview**: Watch as your component is generated and displayed in real-time

4. **Toggle Theme**: Use the sun/moon button to switch between light and dark modes

5. **Try Again**: Generate new components by describing different UI elements

---

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

---

## 🌟 Example Queries

Try these example descriptions to see GemUI in action:

- "A card component with image, title, and description"
- "A navigation bar with logo and menu items"
- "A form with input fields and submit button"
- "A loading spinner with animation"
- "A modal dialog with close button"
- "A progress bar with percentage display"

---

## 🔮 Future Enhancements

- **📋 Component Library**: Save and manage generated components
- **🎨 Style Customization**: Advanced styling options and themes
- **📱 Mobile Optimization**: Enhanced touch interactions
- **🔄 Code Export**: Download generated components as files
- **📚 Component Templates**: Pre-built component templates
- **🤝 Collaboration**: Share components with team members
- **🔍 Search & Filter**: Find components by category or tags
- **📊 Analytics**: Track usage and popular components

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! To contribute:

1. **Fork** the project
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Your Name**

- GitHub: [@your-username](https://github.com/SanathRai33)
- Email: [your-email@example.com](mailto:sanathrai03@gmail.com)
- Live Demo: [Click here](https://your-demo-link.com)

---

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for powerful AI capabilities
- [React](https://reactjs.org/) for the amazing framework
- [Vite](https://vitejs.dev/) for the blazing-fast build tool
- [FontAwesome](https://fontawesome.com/) for beautiful icons
- [React Toastify](https://fkhadra.github.io/react-toastify/) for notifications

---

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/SanathRai33/GemUI/issues) page
2. Create a new issue if your problem isn't already addressed
3. Contact the author directly

---

**Happy Coding! 🚀✨**
