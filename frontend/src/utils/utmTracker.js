// UTM Parameter Tracking Utility

// List of UTM parameters to track
const UTM_PARAMS = [
  'utm_source',
  'utm_campaign',
  'utm_id',
  'utm_medium',
  'utm_adset',
  'utm_adcreative',
  'utm_adgroup'
];

// Storage key for UTM data
const UTM_STORAGE_KEY = 'funnel_iq_utm_data';

/**
 * Extract UTM parameters from URL and store them
 */
export const captureUTMParams = () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmData = {};
    
    UTM_PARAMS.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        utmData[param] = value;
      }
    });
    
    // Only store if we have UTM data
    if (Object.keys(utmData).length > 0) {
      // Add timestamp
      utmData.captured_at = new Date().toISOString();
      
      // Store in sessionStorage (persists until tab is closed)
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      
      // Also store in localStorage for longer persistence
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utmData));
      
      console.log('UTM params captured:', utmData);
    }
    
    return utmData;
  } catch (error) {
    console.error('Error capturing UTM params:', error);
    return {};
  }
};

/**
 * Get stored UTM parameters
 */
export const getUTMParams = () => {
  try {
    // Try sessionStorage first, then localStorage
    const sessionData = sessionStorage.getItem(UTM_STORAGE_KEY);
    const localData = localStorage.getItem(UTM_STORAGE_KEY);
    
    const data = sessionData || localData;
    
    if (data) {
      const parsed = JSON.parse(data);
      // Remove the captured_at field before returning
      const { captured_at, ...utmData } = parsed;
      return utmData;
    }
    
    return {};
  } catch (error) {
    console.error('Error getting UTM params:', error);
    return {};
  }
};

/**
 * Get UTM params formatted for API calls
 * Also captures current URL params if not already stored
 */
export const getUTMParamsForAPI = () => {
  // First, try to capture from current URL (in case we're on the landing page with UTM params)
  captureUTMParams();
  
  // Then get the stored data
  const utmData = getUTMParams();
  
  return {
    utm_source: utmData.utm_source || '',
    utm_campaign: utmData.utm_campaign || '',
    utm_id: utmData.utm_id || '',
    utm_medium: utmData.utm_medium || '',
    utm_adset: utmData.utm_adset || '',
    utm_adcreative: utmData.utm_adcreative || '',
    utm_adgroup: utmData.utm_adgroup || ''
  };
};

/**
 * Clear stored UTM data
 */
export const clearUTMParams = () => {
  try {
    sessionStorage.removeItem(UTM_STORAGE_KEY);
    localStorage.removeItem(UTM_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing UTM params:', error);
  }
};

/**
 * Initialize UTM tracking on page load
 */
export const initUTMTracking = () => {
  // Capture UTM params on page load
  captureUTMParams();
};

export default {
  captureUTMParams,
  getUTMParams,
  getUTMParamsForAPI,
  clearUTMParams,
  initUTMTracking
};
