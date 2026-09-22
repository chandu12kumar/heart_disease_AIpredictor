"""
Input validation and mapping utility for CardioGuard AI.
Guarantees clean, sanitized inputs and converts clinical user selections
into the exact 15 one-hot encoded model columns expected by the trained KNN model.
"""

# Feature metadata and descriptions for UI / schema documentation
CLINICAL_SCHEMA = [
    {
        "id": "age",
        "label": "Age",
        "type": "number",
        "min": 18,
        "max": 120,
        "unit": "years",
        "description": "Age of the patient in completed years",
        "section": "personal"
    },
    {
        "id": "sex",
        "label": "Sex assigned at birth",
        "type": "select",
        "options": [
            {"value": "M", "label": "Male"},
            {"value": "F", "label": "Female"}
        ],
        "description": "Biological sex of the patient",
        "section": "personal"
    },
    {
        "id": "chestPainType",
        "label": "Chest Pain Type",
        "type": "select",
        "options": [
            {"value": "ASY", "label": "Asymptomatic (No chest discomfort)"},
            {"value": "ATA", "label": "Atypical Angina (Non-classic symptoms)"},
            {"value": "NAP", "label": "Non-Anginal Pain (Discomfort unrelated to blood flow)"},
            {"value": "TA", "label": "Typical Angina (Classic exertion-related pressure)"}
        ],
        "description": "Classification of chest discomfort experience",
        "section": "medical"
    },
    {
        "id": "restingBP",
        "label": "Resting Blood Pressure",
        "type": "number",
        "min": 60,
        "max": 250,
        "unit": "mm Hg",
        "description": "Resting systolic blood pressure upon clinical assessment",
        "section": "measurements"
    },
    {
        "id": "cholesterol",
        "label": "Serum Cholesterol",
        "type": "number",
        "min": 50,
        "max": 700,
        "unit": "mg/dL",
        "description": "Total serum cholesterol measurement",
        "section": "measurements"
    },
    {
        "id": "fastingBS",
        "label": "Fasting Blood Sugar > 120 mg/dL",
        "type": "select",
        "options": [
            {"value": "0", "label": "No (<= 120 mg/dL - Normal)"},
            {"value": "1", "label": "Yes (> 120 mg/dL - Elevated)"}
        ],
        "description": "Blood glucose level after an overnight fast",
        "section": "measurements"
    },
    {
        "id": "restingECG",
        "label": "Resting Electrocardiogram (ECG)",
        "type": "select",
        "options": [
            {"value": "Normal", "label": "Normal Resting ECG"},
            {"value": "ST", "label": "ST-T Wave Abnormality (T inversion / ST elevation)"},
            {"value": "LVH", "label": "Left Ventricular Hypertrophy (Estes criteria)"}
        ],
        "description": "Resting electrocardiographic findings",
        "section": "medical"
    },
    {
        "id": "maxHR",
        "label": "Maximum Heart Rate Achieved",
        "type": "number",
        "min": 50,
        "max": 240,
        "unit": "bpm",
        "description": "Highest pulse rate achieved during peak exertion or stress test",
        "section": "measurements"
    },
    {
        "id": "exerciseAngina",
        "label": "Exercise-Induced Angina",
        "type": "select",
        "options": [
            {"value": "N", "label": "No"},
            {"value": "Y", "label": "Yes"}
        ],
        "description": "Did cardiac chest pain occur during exercise/stress?",
        "section": "medical"
    },
    {
        "id": "oldpeak",
        "label": "ST Depression (Oldpeak)",
        "type": "number",
        "step": 0.1,
        "min": -2.5,
        "max": 6.5,
        "unit": "mm",
        "description": "ST depression induced by exercise relative to rest on ECG",
        "section": "medical"
    },
    {
        "id": "stSlope",
        "label": "Slope of Peak Exercise ST Segment",
        "type": "select",
        "options": [
            {"value": "Up", "label": "Upsloping (Physiological during heavy exertion)"},
            {"value": "Flat", "label": "Flat (Borderline or ischemic indicator)"},
            {"value": "Down", "label": "Downsloping (Marked ischemic response)"}
        ],
        "description": "Slope orientation of the ST segment during peak exercise",
        "section": "medical"
    }
]


def validate_and_map_features(payload: dict, required_columns: list) -> tuple[dict, list[str]]:
    """
    Validates payload and returns (mapped_15_features_dict, errors).
    Accepts either clinical field structure or direct 15-column format.
    """
    errors = []

    # Check if payload directly contains the 15 required model columns
    if all(col in payload for col in required_columns):
        mapped = {}
        for col in required_columns:
            try:
                val = float(payload[col])
                mapped[col] = val
            except (ValueError, TypeError):
                errors.append(f"Value for '{col}' must be a valid number.")
        return mapped, errors

    # Otherwise validate and map from high-level clinical fields
    mapped = {col: 0.0 for col in required_columns}

    # 1. Age
    age = payload.get("age")
    if age is None or age == "":
        errors.append("Please enter your age.")
    else:
        try:
            age_val = float(age)
            if age_val < 18 or age_val > 120:
                errors.append("Please enter a valid age between 18 and 120 years.")
            else:
                mapped["Age"] = age_val
        except (ValueError, TypeError):
            errors.append("Age must be a valid number.")

    # 2. RestingBP
    rbp = payload.get("restingBP")
    if rbp is None or rbp == "":
        errors.append("Please enter resting blood pressure.")
    else:
        try:
            rbp_val = float(rbp)
            if rbp_val < 50 or rbp_val > 260:
                errors.append("Please enter a realistic resting blood pressure between 50 and 260 mm Hg.")
            else:
                mapped["RestingBP"] = rbp_val
        except (ValueError, TypeError):
            errors.append("Resting blood pressure must be a valid number.")

    # 3. Cholesterol
    chol = payload.get("cholesterol")
    if chol is None or chol == "":
        errors.append("Please enter serum cholesterol.")
    else:
        try:
            chol_val = float(chol)
            if chol_val < 50 or chol_val > 700:
                errors.append("Please enter a realistic cholesterol value between 50 and 700 mg/dL.")
            else:
                mapped["Cholesterol"] = chol_val
        except (ValueError, TypeError):
            errors.append("Cholesterol must be a valid number.")

    # 4. FastingBS
    fbs = payload.get("fastingBS")
    if fbs is None or fbs == "":
        errors.append("Please select whether fasting blood sugar is greater than 120 mg/dL.")
    else:
        try:
            fbs_val = int(fbs)
            if fbs_val not in (0, 1):
                errors.append("Fasting blood sugar selection must be 0 (No) or 1 (Yes).")
            else:
                mapped["FastingBS"] = float(fbs_val)
        except (ValueError, TypeError):
            errors.append("Invalid value for fasting blood sugar.")

    # 5. MaxHR
    max_hr = payload.get("maxHR")
    if max_hr is None or max_hr == "":
        errors.append("Please enter maximum heart rate.")
    else:
        try:
            mhr_val = float(max_hr)
            if mhr_val < 40 or mhr_val > 250:
                errors.append("Please enter a realistic maximum heart rate between 40 and 250 bpm.")
            else:
                mapped["MaxHR"] = mhr_val
        except (ValueError, TypeError):
            errors.append("Maximum heart rate must be a valid number.")

    # 6. Oldpeak
    oldpeak = payload.get("oldpeak")
    if oldpeak is None or oldpeak == "":
        errors.append("Please enter ST depression (Oldpeak) value.")
    else:
        try:
            op_val = float(oldpeak)
            if op_val < -3.0 or op_val > 7.0:
                errors.append("ST depression (Oldpeak) should typically be between -3.0 and 7.0 mm.")
            else:
                mapped["Oldpeak"] = op_val
        except (ValueError, TypeError):
            errors.append("ST depression must be a valid number.")

    # 7. Sex -> Sex_M
    sex = str(payload.get("sex", "")).upper()
    if sex not in ("M", "F", "MALE", "FEMALE", "1", "0"):
        errors.append("Please specify sex (Male or Female).")
    else:
        mapped["Sex_M"] = 1.0 if sex in ("M", "MALE", "1") else 0.0

    # 8. ChestPainType -> ChestPainType_ATA, ChestPainType_NAP, ChestPainType_TA (ASY is reference)
    cpt = str(payload.get("chestPainType", "")).upper()
    if cpt not in ("ASY", "ATA", "NAP", "TA"):
        errors.append("Please select a valid chest pain type.")
    else:
        mapped["ChestPainType_ATA"] = 1.0 if cpt == "ATA" else 0.0
        mapped["ChestPainType_NAP"] = 1.0 if cpt == "NAP" else 0.0
        mapped["ChestPainType_TA"] = 1.0 if cpt == "TA" else 0.0

    # 9. RestingECG -> RestingECG_Normal, RestingECG_ST (LVH is reference)
    recg = str(payload.get("restingECG", "")).upper()
    if recg not in ("NORMAL", "ST", "LVH"):
        errors.append("Please select a valid resting ECG result.")
    else:
        mapped["RestingECG_Normal"] = 1.0 if recg == "NORMAL" else 0.0
        mapped["RestingECG_ST"] = 1.0 if recg == "ST" else 0.0

    # 10. ExerciseAngina -> ExerciseAngina_Y
    ea = str(payload.get("exerciseAngina", "")).upper()
    if ea not in ("Y", "N", "YES", "NO", "1", "0"):
        errors.append("Please specify whether exercise-induced angina occurred.")
    else:
        mapped["ExerciseAngina_Y"] = 1.0 if ea in ("Y", "YES", "1") else 0.0

    # 11. ST_Slope -> ST_Slope_Flat, ST_Slope_Up (Down is reference)
    st_slope = str(payload.get("stSlope", "")).upper()
    if st_slope not in ("UP", "FLAT", "DOWN"):
        errors.append("Please select a valid ST slope.")
    else:
        mapped["ST_Slope_Flat"] = 1.0 if st_slope == "FLAT" else 0.0
        mapped["ST_Slope_Up"] = 1.0 if st_slope == "UP" else 0.0

    return mapped, errors
