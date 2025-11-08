// For testing on physical device, use your computer's local IP
// For iOS simulator: use localhost
// For Android emulator: use 10.0.2.2
const API_URL = __DEV__ 
  ? 'http://192.168.68.55:5000'  // Replace with your local IP
  : 'https://your-production-api.com';

export default API_URL;