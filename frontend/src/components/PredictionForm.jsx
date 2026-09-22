import React, { useState } from 'react';
import {
  Heart,
  Activity,
  HelpCircle,
  User,
  Gauge,
  FileText,
  AlertCircle,
  Check,
  Sparkles
} from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import { useLanguage } from '../context/LanguageContext';

const PRESET_HEALTHY = {
  age: 35,
  sex: 'F',
  chestPainType: 'ATA',
  restingBP: 115,
  cholesterol: 175,
  fastingBS: '0',
  restingECG: 'Normal',
  maxHR: 172,
  exerciseAngina: 'N',
  oldpeak: 0.0,
  stSlope: 'Up'
};

const PRESET_ELEVATED = {
  age: 62,
  sex: 'M',
  chestPainType: 'ASY',
  restingBP: 160,
  cholesterol: 310,
  fastingBS: '1',
  restingECG: 'ST',
  maxHR: 105,
  exerciseAngina: 'Y',
  oldpeak: 2.5,
  stSlope: 'Flat'
};

export default function PredictionForm({ onSubmit, isLoading, apiError }) {
  const { t } = useLanguage();
  const f = (key) => t(`form.${key}`);

  const [formData, setFormData] = useState({
    age: '',
    sex: 'M',
    chestPainType: 'ASY',
    restingBP: '',
    cholesterol: '',
    fastingBS: '0',
    restingECG: 'Normal',
    maxHR: '',
    exerciseAngina: 'N',
    oldpeak: '0.0',
    stSlope: 'Up'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const applyPreset = (preset) => {
    setFormData({ ...preset });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};

    const ageNum = Number(formData.age);
    if (!formData.age || isNaN(ageNum)) {
      newErrors.age = f('errors.ageReq');
    } else if (ageNum < 18 || ageNum > 120) {
      newErrors.age = f('errors.ageRange');
    }

    const bpNum = Number(formData.restingBP);
    if (!formData.restingBP || isNaN(bpNum)) {
      newErrors.restingBP = f('errors.bpReq');
    } else if (bpNum < 50 || bpNum > 260) {
      newErrors.restingBP = f('errors.bpRange');
    }

    const cholNum = Number(formData.cholesterol);
    if (!formData.cholesterol || isNaN(cholNum)) {
      newErrors.cholesterol = f('errors.cholReq');
    } else if (cholNum < 50 || cholNum > 700) {
      newErrors.cholesterol = f('errors.cholRange');
    }

    const hrNum = Number(formData.maxHR);
    if (!formData.maxHR || isNaN(hrNum)) {
      newErrors.maxHR = f('errors.hrReq');
    } else if (hrNum < 40 || hrNum > 250) {
      newErrors.maxHR = f('errors.hrRange');
    }

    const opNum = Number(formData.oldpeak);
    if (formData.oldpeak === '' || isNaN(opNum)) {
      newErrors.oldpeak = f('errors.oldpeakReq');
    } else if (opNum < -3.0 || opNum > 7.0) {
      newErrors.oldpeak = f('errors.oldpeakRange');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 font-medium';
  const inputNormal = 'border-slate-200 dark:border-slate-700 focus:ring-rose-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100';
  const inputError = 'border-red-400 focus:ring-red-500 bg-red-50/30 dark:bg-red-950/20';
  const labelBase = 'block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5';
  const helperBase = 'text-[11px] text-slate-400 dark:text-slate-500 mt-1 block';

  return (
    <div className="space-y-6">
      {/* Header and Quick Presets */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            {f('title')}
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            {f('subtitle')}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs text-slate-400 hidden lg:inline">{f('presetsLabel')}</span>
          <button
            type="button"
            onClick={() => applyPreset(PRESET_HEALTHY)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-all hover:shadow-sm"
          >
            {f('presetHealthy')}
          </button>
          <button
            type="button"
            onClick={() => applyPreset(PRESET_ELEVATED)}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-rose-50 hover:bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300 border border-rose-200 dark:border-rose-800 transition-all hover:shadow-sm"
          >
            {f('presetElevated')}
          </button>
        </div>
      </div>

      {apiError && (
        <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900 text-sm text-red-800 dark:text-red-200 flex items-start gap-3 animate-fade-up">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">Unable to evaluate risk</p>
            <p className="text-xs mt-0.5">{apiError}</p>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="rounded-3xl glass-card p-12 shadow-sm">
          <LoadingSpinner message={f('loadingMsg')} />
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Section 1: Personal Information */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-800/70">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-950/60 dark:to-rose-900/40 text-rose-600 flex items-center justify-center shadow-xs">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {f('sec1Title')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{f('sec1Sub')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Age */}
              <div>
                <label htmlFor="age" className={labelBase}>
                  {f('ageLabel')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  min="18"
                  max="120"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder={f('agePlaceholder')}
                  className={`${inputBase} ${errors.age ? inputError : inputNormal}`}
                  aria-invalid={!!errors.age}
                />
                {errors.age && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 animate-fade-up">{errors.age}</p>
                )}
                <span className={helperBase}>{f('ageHelper')}</span>
              </div>

              {/* Sex */}
              <div>
                <label htmlFor="sex" className={labelBase}>
                  {f('sexLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="sex"
                  name="sex"
                  value={formData.sex}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="M">{f('male')}</option>
                  <option value="F">{f('female')}</option>
                </select>
                <span className={helperBase}>{f('sexHelper')}</span>
              </div>
            </div>
          </div>

          {/* Section 2: Health Measurements */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-800/70">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-950/60 dark:to-blue-900/40 text-blue-600 flex items-center justify-center shadow-xs">
                <Gauge className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {f('sec2Title')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{f('sec2Sub')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Resting BP */}
              <div>
                <label htmlFor="restingBP" className={labelBase}>
                  {f('restingBPLabel')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="restingBP"
                  name="restingBP"
                  type="number"
                  min="50"
                  max="260"
                  value={formData.restingBP}
                  onChange={handleChange}
                  placeholder="e.g. 130"
                  className={`${inputBase} ${errors.restingBP ? inputError : inputNormal}`}
                  aria-invalid={!!errors.restingBP}
                />
                {errors.restingBP && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 animate-fade-up">{errors.restingBP}</p>
                )}
                <span className={helperBase}>{f('restingBPHelper')}</span>
              </div>

              {/* Cholesterol */}
              <div>
                <label htmlFor="cholesterol" className={labelBase}>
                  {f('cholesterolLabel')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="cholesterol"
                  name="cholesterol"
                  type="number"
                  min="50"
                  max="700"
                  value={formData.cholesterol}
                  onChange={handleChange}
                  placeholder="e.g. 210"
                  className={`${inputBase} ${errors.cholesterol ? inputError : inputNormal}`}
                  aria-invalid={!!errors.cholesterol}
                />
                {errors.cholesterol && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 animate-fade-up">{errors.cholesterol}</p>
                )}
                <span className={helperBase}>{f('cholesterolHelper')}</span>
              </div>

              {/* Fasting Blood Sugar */}
              <div>
                <label htmlFor="fastingBS" className={labelBase}>
                  {f('fastingBSLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="fastingBS"
                  name="fastingBS"
                  value={formData.fastingBS}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="0">{f('fastingBSNo')}</option>
                  <option value="1">{f('fastingBSYes')}</option>
                </select>
                <span className={helperBase}>{f('fastingBSHelper')}</span>
              </div>

              {/* Maximum Heart Rate */}
              <div>
                <label htmlFor="maxHR" className={labelBase}>
                  {f('maxHRLabel')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="maxHR"
                  name="maxHR"
                  type="number"
                  min="40"
                  max="250"
                  value={formData.maxHR}
                  onChange={handleChange}
                  placeholder="e.g. 155"
                  className={`${inputBase} ${errors.maxHR ? inputError : inputNormal}`}
                  aria-invalid={!!errors.maxHR}
                />
                {errors.maxHR && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 animate-fade-up">{errors.maxHR}</p>
                )}
                <span className={helperBase}>{f('maxHRHelper')}</span>
              </div>
            </div>
          </div>

          {/* Section 3: Medical & ECG Information */}
          <div className="rounded-3xl glass-card p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200/70 dark:border-slate-800/70">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-950/60 dark:to-purple-900/40 text-purple-600 flex items-center justify-center shadow-xs">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {f('sec3Title')}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">{f('sec3Sub')}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Chest Pain Type */}
              <div className="sm:col-span-2">
                <label htmlFor="chestPainType" className={labelBase}>
                  {f('chestPainLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="chestPainType"
                  name="chestPainType"
                  value={formData.chestPainType}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="ASY">{f('cpASY')}</option>
                  <option value="ATA">{f('cpATA')}</option>
                  <option value="NAP">{f('cpNAP')}</option>
                  <option value="TA">{f('cpTA')}</option>
                </select>
              </div>

              {/* Resting ECG */}
              <div>
                <label htmlFor="restingECG" className={labelBase}>
                  {f('restingECGLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="restingECG"
                  name="restingECG"
                  value={formData.restingECG}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="Normal">{f('ecgNormal')}</option>
                  <option value="ST">{f('ecgST')}</option>
                  <option value="LVH">{f('ecgLVH')}</option>
                </select>
              </div>

              {/* Exercise-Induced Angina */}
              <div>
                <label htmlFor="exerciseAngina" className={labelBase}>
                  {f('exAnginaLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="exerciseAngina"
                  name="exerciseAngina"
                  value={formData.exerciseAngina}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="N">{f('exAnginaNo')}</option>
                  <option value="Y">{f('exAnginaYes')}</option>
                </select>
              </div>

              {/* Oldpeak */}
              <div>
                <label htmlFor="oldpeak" className={labelBase}>
                  {f('oldpeakLabel')} <span className="text-rose-600">*</span>
                </label>
                <input
                  id="oldpeak"
                  name="oldpeak"
                  type="number"
                  step="0.1"
                  min="-3.0"
                  max="7.0"
                  value={formData.oldpeak}
                  onChange={handleChange}
                  placeholder="e.g. 1.2"
                  className={`${inputBase} ${errors.oldpeak ? inputError : inputNormal}`}
                  aria-invalid={!!errors.oldpeak}
                />
                {errors.oldpeak && (
                  <p className="text-xs text-red-600 dark:text-red-400 mt-1 animate-fade-up">{errors.oldpeak}</p>
                )}
                <span className={helperBase}>{f('oldpeakHelper')}</span>
              </div>

              {/* ST Slope */}
              <div>
                <label htmlFor="stSlope" className={labelBase}>
                  {f('stSlopeLabel')} <span className="text-rose-600">*</span>
                </label>
                <select
                  id="stSlope"
                  name="stSlope"
                  value={formData.stSlope}
                  onChange={handleChange}
                  className={`${inputBase} ${inputNormal}`}
                >
                  <option value="Up">{f('stSlopeUp')}</option>
                  <option value="Flat">{f('stSlopeFlat')}</option>
                  <option value="Down">{f('stSlopeDown')}</option>
                </select>
                <span className={helperBase}>Gradient of ST segment at peak exercise stress</span>
              </div>
            </div>
          </div>

          {/* Privacy Notice & Submit */}
          <div className="pt-2 space-y-4">
            <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              {f('privacyNotice')}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-extrabold text-base shadow-xl shadow-rose-600/25 hover:shadow-2xl hover:from-rose-500 hover:to-red-500 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-rose-500/30 flex items-center justify-center gap-3 cursor-pointer"
            >
              <Heart className="w-5 h-5 fill-white animate-heartbeat" />
              <span>{f('submitBtn')}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
