# CardioGuard Frontend — Client-Side Application

Modern, accessible, and responsive user interface for the **CardioGuard Heart Health Risk Assessment & Recovery Platform**.

Built with **React 19**, **Vite**, and **Tailwind CSS v4**.

---

## 📖 About the Project

**CardioGuard** provides an intuitive, empathetic, and confidential web experience for individuals seeking to understand their cardiovascular risk:
- **Fast 2-Minute Screening:** Guided 11-question clinical vitals form with input validation and instant sample presets.
- **Visual Risk Meter & Report:** Live probability score gauge, doctor-ready discussion summary, and one-click printable report export.
- **Dedicated Heart Disease Recovery Guide:** A 4-stage lifestyle and medical guide on medication adherence, heart-healthy eating, safe cardio walking, and stress relief.
- **3D Holographic Visuals:** Interactive standing anatomical heart on the home hero with a 360° Z-direction spin animation and controls.
- **Accessible & Multilingual:** Full bilingual support in English and Hindi, with seamless dark and light mode themes.
- **Privacy-First:** Operates completely without accounts, tracking cookies, or backend data retention.

---

## 📁 Frontend Structure

```
frontend/
├── public/                     # Static assets (favicons, icons)
├── src/
│   ├── assets/                 # Graphics & images
│   │   └── heart-glow.png      # 3D holographic standing heart
│   ├── components/             # Reusable UI components
│   │   ├── AnimatedBackground  # Ambient animated color orbs
│   │   ├── ECGLine             # Animated SVG pulse line
│   │   ├── EmergencyAlert      # Critical symptom alert banner
│   │   ├── Footer              # Global footer & legal disclaimer
│   │   ├── LoadingSpinner      # Accessible pulsing cardiac loader
│   │   ├── Navbar              # Brand header & navigation controls
│   │   ├── PageTransition      # Smooth view transition wrapper
│   │   ├── PredictionForm      # 11-feature validated clinical form
│   │   ├── RiskCard            # Visual risk meter & action items
│   │   └── ThemeToggle         # Light / Dark mode toggle
│   ├── context/
│   │   ├── LanguageContext     # English & Hindi language state
│   │   └── ThemeContext        # Theme state provider
│   ├── locales/
│   │   └── translations.js     # Human-centered bilingual copy
│   ├── pages/
│   │   ├── About.jsx           # Methodology & architecture
│   │   ├── Home.jsx            # Hero section with 360° spinning heart
│   │   ├── Predict.jsx         # Risk assessment flow
│   │   ├── RecoveryTips.jsx    # 4-stage cardiac recovery guide
│   │   └── Result.jsx          # Printable result report
│   ├── services/
│   │   └── api.js              # REST API client
│   ├── App.jsx                 # Routing & global providers
│   ├── index.css               # Tailwind directives & 3D keyframes
│   └── main.jsx                # Application root
├── package.json
└── vite.config.js
```

---

## ⚙️ How It Works (Frontend Flow)

1. **State & i18n:** [`LanguageContext`](file:///c:/Users/asus/OneDrive/Documents%20-%20Copy/development/HeartDisease%20project/frontend/src/context/LanguageContext.jsx) manages dynamic English/Hindi toggling across all forms, guides, and medical descriptions.
2. **Interactive Clinical Form:** [`PredictionForm.jsx`](file:///c:/Users/asus/OneDrive/Documents%20-%20Copy/development/HeartDisease%20project/frontend/src/components/PredictionForm.jsx) validates user inputs against physiological bounds and provides one-click sample presets.
3. **API Integration:** Dispatches requests to `POST http://localhost:5000/api/predict` via [`api.js`](file:///c:/Users/asus/OneDrive/Documents%20-%20Copy/development/HeartDisease%20project/frontend/src/services/api.js).
4. **Visual Risk Presentation:** Formats prediction probabilities and risk levels using an intuitive gauge meter and provides tailored lifestyle guidance.
5. **Hologram & Motion Design:** Features a 3D standing heart visual on the Home hero with a 360° Z-direction spin animation and pause/mode controls.

---

## 🛠️ Development & Build

```bash
# Install packages
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production bundle
npm run preview
```
