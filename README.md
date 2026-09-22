# CardioGuard — Heart Health Risk Assessment & Recovery Platform

[![Python](https://img.shields.io/badge/Python-3.10%2B-blue.svg?logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.1-black.svg?logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![React](https://img.shields.io/badge/React-19-61DAFB.svg?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-1.6-F7931E.svg?logo=scikit-learn&logoColor=white)](https://scikit-learn.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **A modern, privacy-first cardiovascular risk screening platform.**  
> Built with **React 19**, **Tailwind CSS**, **Flask**, and a calibrated **Scikit-Learn K-Nearest Neighbors (KNN)** pipeline trained on validated clinical cardiovascular records.

---

## 📖 Project Overview & Description

**CardioGuard** is an open-source, patient-centric cardiovascular risk screening and cardiac rehabilitation web application. It combines machine learning inference with practical, evidence-based lifestyle guidance to help individuals understand their heart health and take proactive steps to protect it.

### 🎯 Why This Project Exists (The Problem)
Cardiovascular diseases (CVDs) remain the leading cause of mortality globally. While routine checkups generate vital indicators—such as resting blood pressure, fasting blood sugar, serum cholesterol, exercise-induced angina, and electrocardiogram (ECG) ST-segment changes—patients frequently struggle to interpret what these combined markers mean for their personal risk.

Moreover, traditional medical apps are often cluttered with ads, require invasive account signups, or output cold, robotic technical scores without answering the most important question: **"What practical steps should I take next to protect my heart?"**

### 💡 The Solution
CardioGuard bridges the gap between clinical data and patient action:
1. **Instant 2-Minute Risk Evaluation:** Evaluates 11 routine clinical indicators through a calibrated K-Nearest Neighbors machine learning model trained on 918 validated patient records from five renowned cardiology institutions.
2. **Dedicated Recovery & Care Guide:** Provides an actionable, physician-aligned 4-stage roadmap covering medication compliance, cardio-protective nutrition (sodium limits, heart-healthy fats), safe graduated walking protocols, and stress reduction.
3. **Natural, Human Communication:** Designed to be warm, understandable, and empathetic—completely free of robotic AI jargon and frightening terminology.
4. **Doctor-Ready Summary:** Generates a structured, one-click printable report that patients can bring directly to their cardiologist or primary care physician for informed dialogue.
5. **Zero-Tracking Privacy:** No sign-up, no login, no cookies, and zero database retention. Health inputs are processed ephemerally in-memory and are never stored or monetized.
6. **Bilingual & Modern UX:** Full dual-language localization (English and Hindi), adaptive Dark/Light modes, and a 3D holographic standing heart with interactive 360° Z-direction spin animation.

---

## ⚠️ Important Medical Safety Notice

> [!WARNING]
> **Educational & Informational Tool — Not a Clinical Medical Diagnosis**  
> This application is intended strictly for educational awareness and preliminary risk screening. It **does not replace a physician's diagnostic evaluation** and cannot predict with certainty whether an individual will experience an acute cardiac event.
> 
> If you or someone near you experiences emergency symptoms (severe chest pressure, pain radiating to the left arm/neck/jaw, sudden shortness of breath, dizziness, or fainting), **call emergency medical services (112 / 911) or visit the nearest emergency hospital immediately.**

---

## 📁 Project Structure

```
HeartDisease-project/
│
├── frontend/                                # Modern React 19 Single Page Application
│   ├── public/                              # Static public assets & icons
│   ├── src/
│   │   ├── assets/                          # Images & media assets
│   │   │   └── heart-glow.png               # 3D holographic anatomical heart visual
│   │   ├── components/                      # Modular reusable UI components
│   │   │   ├── AnimatedBackground.jsx       # Floating ambient gradient backdrops
│   │   │   ├── ECGLine.jsx                  # Animated SVG electrocardiogram wave
│   │   │   ├── EmergencyAlert.jsx           # High-priority clinical safety notice
│   │   │   ├── Footer.jsx                   # Site navigation footer & disclaimers
│   │   │   ├── LoadingSpinner.jsx           # Pulsing cardiac activity spinner
│   │   │   ├── Navbar.jsx                   # Header with theme & language toggle
│   │   │   ├── PageTransition.jsx           # Smooth page entry wrapper
│   │   │   ├── PredictionForm.jsx           # 11-attribute validated clinical input form
│   │   │   ├── RiskCard.jsx                 # Result card with probability gauge & advice
│   │   │   └── ThemeToggle.jsx              # Dark / Light mode switch
│   │   ├── context/
│   │   │   ├── LanguageContext.jsx          # Dual-language state provider (EN / HI)
│   │   │   └── ThemeContext.jsx             # Dark / Light theme state provider
│   │   ├── locales/
│   │   │   └── translations.js              # Complete English & Hindi medical copy
│   │   ├── pages/                           # Application views & routes
│   │   │   ├── About.jsx                    # Architecture, features & clinical methodology
│   │   │   ├── Home.jsx                     # Hero section with 360° spinning 3D heart
│   │   │   ├── Predict.jsx                  # Interactive risk assessment form & results
│   │   │   ├── RecoveryTips.jsx             # Comprehensive 4-step heart recovery guide
│   │   │   └── Result.jsx                   # Standalone sharable & printable result view
│   │   ├── services/
│   │   │   └── api.js                       # Centralized Axios/fetch client for backend API
│   │   ├── App.jsx                          # Main routing, layout & provider tree
│   │   ├── index.css                        # Tailwind v4 directives & 3D motion keyframes
│   │   └── main.jsx                         # Application entrypoint
│   ├── index.html                           # HTML template
│   ├── package.json                         # Frontend dependencies & scripts
│   └── vite.config.js                       # Vite build & development configuration
│
├── backend/                                 # Python Flask REST API & ML Pipeline
│   ├── model/                               # Serialized Machine Learning Artifacts
│   │   ├── columns.pkl                      # 15 standardized feature columns list
│   │   ├── KNN_heart.pkl                    # Pre-trained KNeighborsClassifier (K=5)
│   │   └── scaler.pkl                       # Fitted StandardScaler normalization model
│   ├── services/
│   │   └── prediction_service.py            # Singleton model loader & inference engine
│   ├── utils/
│   │   └── validation.py                    # Input schema, boundaries & one-hot encoder
│   ├── app.py                               # Flask application, CORS & API routes
│   ├── requirements.txt                     # Python packages (Flask, scikit-learn, etc.)
│   ├── test_model.py                        # Diagnostic test suite for model & scaler
│   └── .env                                 # Environment configuration (Port, Debug)
│
├── app.py                                   # Root runner proxy
└── README.md                                # Repository documentation
```

---

## ⚙️ How It Works (System Architecture & Pipeline)

The system is split into an interactive client-side web application and a lightweight, high-performance machine learning inference service.

```mermaid
flowchart TD
    subgraph Frontend ["Frontend (React 19 + Tailwind CSS)"]
        A[User Enters 11 Health Metrics] --> B[Client Validation: Ranges & Format]
        B --> C[Post JSON to /api/predict]
        J[Render Result Dashboard] <-- I[Receive Classification & Probability]
    end

    subgraph Backend ["Backend API (Flask & Python)"]
        C --> D[utils/validation.py: Sanitization & Boundaries]
        D --> E[Feature Mapping & One-Hot Encoding: 11 to 15 Dimensions]
        E --> F[StandardScaler: Feature Normalization]
        F --> G[K-Nearest Neighbors Classifier: K=5]
        G --> H[Risk Stratification: Class 0/1 & Confidence Score]
        H --> I
    end
```

### Step-by-Step Data Flow

1. **User Input Collection (`PredictionForm.jsx`)**  
   The user inputs 11 routine physical and biochemical measurements (e.g., Age, Blood Pressure, Cholesterol, Fasting Blood Sugar, Resting ECG, Maximum Heart Rate, Exercise Angina, Oldpeak, ST Slope). Quick test sample presets (*Healthy* and *Elevated Risk*) allow instant demonstration.

2. **Validation & Sanitation (`utils/validation.py`)**  
   The backend inspects incoming requests against strict physiological boundaries (e.g., Age 18–120, Resting BP 50–260 mm Hg, Serum Cholesterol 50–700 mg/dL). Non-numeric or out-of-range values are rejected with informative error messages.

3. **Feature Encoding (11 Inputs → 15 Model Signals)**  
   Categorical variables are one-hot encoded into the exact representation expected by the trained model:
   - Biological Sex: `Sex_M`
   - Chest Pain Type: `ChestPainType_ATA`, `ChestPainType_NAP`, `ChestPainType_TA` (`ASY` as base)
   - Resting ECG: `RestingECG_Normal`, `RestingECG_ST` (`LVH` as base)
   - Exercise Angina: `ExerciseAngina_Y`
   - ST Segment Slope: `ST_Slope_Flat`, `ST_Slope_Up` (`Down` as base)

4. **Standardization (`StandardScaler`)**  
   Continuous variables have significantly different units (e.g., Cholesterol in hundreds vs. Oldpeak in decimals). The fitted `StandardScaler` normalizes each feature to zero mean ($\mu = 0$) and unit variance ($\sigma = 1$):
   $$z = \frac{x - \mu}{\sigma}$$

5. **K-Nearest Neighbors Classification (`KNeighborsClassifier`)**  
   Using the standardized 15-dimensional vector, the KNN model identifies the $K = 5$ closest historical patient records in multidimensional Euclidean space ($p = 2$ Minkowski distance):
   $$d(\mathbf{p}, \mathbf{q}) = \sqrt{\sum_{i=1}^{n} (p_i - q_i)^2}$$
   - **Prediction Class:** Majority vote among the 5 nearest neighbors (`0 = Lower Predicted Risk`, `1 = Elevated Risk Indicated`).
   - **Probability Score:** Proportion of neighbor votes (e.g., $4/5 \rightarrow 80\%$ risk probability).

6. **Actionable Patient Guidance (`RiskCard.jsx` & `RecoveryTips.jsx`)**  
   The result view displays:
   - Clear classification badge and risk score meter.
   - Plain-language summary designed to be shared with a cardiologist.
   - Dedicated recovery recommendations (medication compliance, low-sodium nutrition, safe walking routines, stress management).
   - One-click PDF/print export.

---

## 📊 Dataset Details

The predictive model is trained on the consolidated **UCI Heart Disease Dataset** (widely referenced as the **Kaggle Heart Failure Prediction Dataset**), combining records from five renowned cardiology centers:

| Source Database | Location | Records |
|---|---|---|
| **Cleveland Clinic Foundation** | Cleveland, Ohio, USA | 303 |
| **Hungarian Institute of Cardiology** | Budapest, Hungary | 294 |
| **University Hospital Zurich** | Zurich, Switzerland | 123 |
| **VA Medical Center** | Long Beach, California, USA | 200 |
| **Statlog Database** | European Machine Learning Archive | 270 |
| **Total Curated Instances** | Consolidated & Cleaned | **918 records** |

### Clinical Attribute Specification

| # | Feature Name | Data Type | Measurement Unit / Values | Clinical Description |
|---|---|---|---|---|
| **1** | `Age` | Integer | $18 - 120$ years | Patient age in completed years. |
| **2** | `Sex` | Binary | `M` (Male), `F` (Female) | Biological sex assigned at birth. |
| **3** | `ChestPainType` | Categorical | `TA`, `ATA`, `NAP`, `ASY` | **TA:** Typical Angina (exertion-triggered substernal pressure)<br>**ATA:** Atypical Angina (non-classic discomfort)<br>**NAP:** Non-Anginal Pain (musculoskeletal / unrelated)<br>**ASY:** Asymptomatic (no chest pain reported). |
| **4** | `RestingBP` | Integer | mm Hg (systolic) | Resting arterial systolic blood pressure upon clinical intake. |
| **5** | `Cholesterol` | Integer | mg/dL | Fasting total serum cholesterol level. |
| **6** | `FastingBS` | Binary | `1` ($>120\text{ mg/dL}$), `0` ($\le 120$) | Elevated fasting blood sugar indicator (diabetic threshold). |
| **7** | `RestingECG` | Categorical | `Normal`, `ST`, `LVH` | **Normal:** Normal resting trace.<br>**ST:** ST-T wave abnormalities (T-wave inversion, ST elevation/depression $>0.05\text{ mV}$).<br>**LVH:** Left Ventricular Hypertrophy by Estes' voltage criteria. |
| **8** | `MaxHR` | Integer | $60 - 220$ bpm | Highest heart rate achieved during peak exertion or stress test. |
| **9** | `ExerciseAngina`| Binary | `Y` (Yes), `N` (No) | Did the patient experience ischemic chest tightening during exercise? |
| **10**| `Oldpeak` | Float | $-2.5\text{ to }6.5$ mm | ST segment depression induced by exertion relative to rest. |
| **11**| `ST_Slope` | Categorical | `Up`, `Flat`, `Down` | Slope orientation of the ST segment during peak exercise:<br>**Up:** Upsloping (normal response).<br>**Flat:** Flat (borderline ischemia).<br>**Down:** Downsloping (significant indicator of coronary insufficiency). |

### Target Variable

- **`HeartDisease`**: Binary classification output:
  - `0`: Normal / Lower Predicted Risk (no significant coronary artery stenosis).
  - `1`: Elevated Risk (coronary artery diameter narrowing $> 50\%$ in at least one major vessel).

### Preprocessing & Model Artifacts

1. **Zero-Cholesterol Handling:** Missing or unrecorded cholesterol entries were imputed using median grouping stratified by sex and age brackets.
2. **One-Hot Encoding:** Categorical attributes converted to 15 explicit binary indicators (`columns.pkl`).
3. **Feature Scaling:** Pre-fitted `StandardScaler` (`scaler.pkl`) guarantees incoming data has zero mean and unit variance.
4. **Model Serialization:** Trained `KNeighborsClassifier` serialized using `joblib`/`pickle` (`KNN_heart.pkl`).

---

## 🚀 Quickstart & Installation

### Prerequisites
- **Python:** 3.10 or higher
- **Node.js:** 18 or higher (with `npm`)

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# (Recommended) Create and activate a Python virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# Linux/macOS:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run model self-diagnostic test
python test_model.py

# Start Flask API server
python app.py
```
> The backend server starts at `http://127.0.0.1:5000`.

### 2. Frontend Setup

```bash
# Open a new terminal and navigate to the frontend directory
cd frontend

# Install Node dependencies
npm install

# Start Vite development server
npm run dev
```
> The application will be live at `http://localhost:5173`.

---

## 📡 API Reference

### Health Check
```http
GET /api/health
```
**Response:**
```json
{
  "features_count": 15,
  "model_loaded": true,
  "service": "CardioGuard AI Prediction API",
  "status": "ok"
}
```

### Clinical Schema
```http
GET /api/features
```
Returns the full clinical input schema, minimum/maximum thresholds, units, and dropdown options.

### Heart Disease Prediction
```http
POST /api/predict
Content-Type: application/json
```
**Request Body:**
```json
{
  "age": 58,
  "sex": "M",
  "chestPainType": "ASY",
  "restingBP": 140,
  "cholesterol": 280,
  "fastingBS": "1",
  "restingECG": "ST",
  "maxHR": 122,
  "exerciseAngina": "Y",
  "oldpeak": 2.2,
  "stSlope": "Flat"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "prediction": 1,
    "risk_level": "elevated",
    "risk_headline": "Elevated Risk Indicated",
    "summary": "Based on your submitted numbers, there are indicators of elevated cardiovascular risk.",
    "probability": 1.0,
    "probability_percentage": 100.0,
    "disclaimer": "This result is an informational screening tool, not a medical diagnosis."
  }
}
```

---

## 🧪 Model Diagnostics

You can verify the model, scaler, and 15-feature alignment at any time without running the web server:

```bash
python backend/test_model.py
```

**Diagnostic Output:**
```
============================================================
 CardioGuard AI - Model Compatibility Diagnostic Test
============================================================
[PredictionService] Successfully loaded model, scaler, and 15 feature columns.
Model loaded: True
Scaler loaded: True
Columns loaded: True
Number of features: 15
Feature dimension compatibility: 100% MATCH (15 == 15 == 15)

[Test Sample 1 - Low Risk Input]
  Prediction class: 0
  Risk level: lower
  Probability: 0.0 (0.0%)

[Test Sample 2 - Elevated Risk Input]
  Prediction class: 1
  Risk level: elevated
  Probability: 1.0 (100.0%)
============================================================
 ALL DIAGNOSTIC CHECKS PASSED SUCCESSFULLY!
============================================================
```

---

## 🔒 Privacy & Data Ethics

- **Zero Tracking:** No account, name, email, or phone number is ever requested.
- **In-Memory Processing:** Submitted clinical indicators are processed ephemerally in RAM and are never stored in a database or log file.
- **No Third-Party Analytics:** No third-party behavioral trackers or cookies are embedded.

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
