const API_BASE_URL = import.meta.env.VITE_API_URL || '';

/**
 * Checks backend health and model readiness
 */
export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/health`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Health check returned status: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('API health check error:', error);
    return { status: 'error', model_loaded: false, message: error.message };
  }
}

/**
 * Fetches required model features and clinical form schema
 */
export async function fetchFeatures() {
  try {
    const res = await fetch(`${API_BASE_URL}/api/features`, {
      headers: { 'Accept': 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`Failed to load features: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.error('API fetchFeatures error:', error);
    throw error;
  }
}

/**
 * Submits clinical assessment for risk prediction
 * @param {Object} clinicalData 
 */
export async function predictRisk(clinicalData) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(clinicalData),
    });

    const data = await res.json();

    if (!res.ok) {
      const errorMsg = data.details ? data.details.join(' ') : (data.error || 'Prediction request failed.');
      const err = new Error(errorMsg);
      err.details = data.details || [];
      throw err;
    }

    return data.data;
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the prediction service. Please ensure the backend server is running.');
    }
    throw error;
  }
}
